import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * 项目设置
 * - TODO: 名字相关的内容待优化
 */
export const SetPro = {
  title: '基础平台',
  // shortTitle: ['国管局 · 基础平台'],
  // 用于系统 Header 区域的标题、登录页面的标题
  shortTitle: ['中央行政事业单位', '国有资产管理服务平台'],
  // shortTitle: ['中央行政事业单位', '国有资产管理基础平台'],
  /**
   * 系统标识
   * - 基础路由 base
   */
  base: 'ggj_basic',
  // base: '',
  /**
   * 个别系统不需要某些模块需要排除
   * - spread 报表模块
   * - map 天地图模块 ！注：（本地引入模块（可能会引起bug）； 文件带有密钥 注意及时更换；）
   */
  excludeModule: {
    spread: false,
    map: false,
  },
  /**
   * 是否开启权限
   * - `false` 时，关闭权限校验
   */
  openAccess: false,
  /** 加入 基础平台系统内容 */
  openSysBasic: true,
};

/**
 * 拼接当前系统静态资源基础路径
 * - 拼接 publicPath；TODO: 实现后期根据 publicPath 优化
 * @example
 * ```
 * // ggj_basic 是部署子路径
 * // 资源目录 /public/icons/icon-128x128.png
 * //   => /ggj_basic/icons/icon-128x128.png
 * getSysBase('icons/icon-128x128.png')
 * // 或者
 * getSysBase('/icons/icon-128x128.png')
 * // 或者 方便编辑器路径提示
 * getSysBase('/public/icons/icon-128x128.png')
 * ```
 */
export function getSysBase(url = '') {
  // 去除开头的 public
  url = url.replace(/^\/?public/, '');
  return `/${SetPro.base}/${url}`.replace(/\/{2,}/g, '/');
}

/** Antd Layout 设置 */
const Settings: LayoutSettings & {
  _shortTitle: string[];
  _title: string;
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // antd 组件主色也有用到
  colorPrimary: '#2d69ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: SetPro.title,
  _title: SetPro.title,
  _shortTitle: SetPro.shortTitle,
  pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: `/${SetPro.base}/logo.svg`,
  iconfontUrl: '',
};

export default Settings;
