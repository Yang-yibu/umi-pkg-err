import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { BookOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading, SettingDrawer } from '@ant-design/pro-components';
import { ErrorBoundary } from './components/ErrorBoundary';

import 'moment/locale/zh-cn';
// import zhTW from 'antd/lib/locale/zh_TW';
import defaultSettings from '@conf/defaultSettings';
import { message } from 'antd';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { errorConfig } from './services/requestErrorConfig';

// import './styles/reset-antd.less';
import './styles/common.less';

import 'basil.js';
window.basilIns = new window.Basil();

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

// 设置 domain
if (SITE_DOMAIN) {
  document.domain = SITE_DOMAIN;
}

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/** 默认屏幕版本 */
const ScreenMapDefault = 'MQ1440';
/** 不同屏幕尺寸对应配置 */
const ScreenMap = {
  MQ1920: { screen: 1920, sideMenu: 284, componentSize: 'large' },
  MQ1440: { screen: 1440, sideMenu: 216, componentSize: 'middle' },
} as const;
function getScreenConf() {
  const htmlDom = document.getElementsByTagName('html')[0];
  const screenWidth: (typeof ScreenMap)[keyof typeof ScreenMap] =
    ScreenMap[htmlDom.className || ScreenMapDefault];

  return screenWidth;
}

let initLoad = true;

/**
 * 只有程序最开始的时候执行一次
 * - TODO: 如果采用京东集成方式、共用菜单，可能会造成从菜单进入一个页面就执行一次
 * - 系统内调用 `useModel('@@initialState').refresh()` 时也会触发
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  collapsed?: boolean;
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  /**
   * type=initLoad 程序初始加载
   */
  const fetchUserInfo = async (type?: 'initLoad') => {
    const isInit = type === 'initLoad';
    // try {
    //   const msg = await queryCurrentUser({ skipErrorHandler: isInit });
    //   return msg.data;
    // } catch (error) {
    //   // 已知类型的错误，这里就不做 message 提示了
    //   // const dataSta = (error as any)?.data?.status;
    //   if (!isInit) {
    //     message.warn('获取用户信息接口错误，具体看控制台！');
    //   }

    //   console.log('用户信息错误：', error);

    //   if (!window.basilIns.get('canSkipLogin')) {
    //     console.log('用户信息错误，重定向到登录页！');
    //     history.push(loginPath);
    //   }
    // }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = {} as any;
    initLoad = false;
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  const setCollapsed = function (collapsed: boolean) {
    setInitialState((s) => ({ ...s, collapsed: collapsed }));
  };
  const collapsed = initialState?.collapsed || false;

  const screenWidth = getScreenConf();

  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    token: {
      header: {
        // heightLayoutHeader: 80,
      },
      // sider: {
      //   colorMenuBackground: 'linear-gradient(180deg, #DAE7FC 0%, #FFFFFF 63.62%)',
      // },
    },
    siderWidth: screenWidth?.sideMenu,
    ErrorBoundary: ErrorBoundary,
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;

      if (parent !== self) {
        // 在 iframe 内部
        parent.childIfrPageChange?.(location);
      }

      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        if (!window.basilIns.get('canSkipLogin')) {
          console.log('路由变化，没有登录信息，重定向到登录页！');
          history.push(loginPath);
        }
      }
    },

    collapsed: collapsed,
    onCollapse: setCollapsed,
    collapsedButtonRender: false,
    menuFooterRender: () => {
      return [
        <div className="sideMenuCollapse" key="collaps" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>,
      ];
    },

    links: isDev
      ? [
          <Link to="/~docs" key="docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request = {
  ...errorConfig,
};
