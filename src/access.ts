import type { IRoute } from 'umi';
import { SetPro } from '@conf/defaultSettings';
/*importAccess*/

/**
 * 数据字典的路由类型 - 默认（即 undefined）有权限
 * ```json
 * {
      access: 'basic.system.dict',
      key: '/system/dict',
      locale: 'menu.系统管理.数据字典',
      name: '数据字典',
      path: '/system/dict',
      pro_layout_parentKeys: ['/system'],
      unaccessible: false,
  }
 * ```
 */
interface IAccessRoute extends IRoute {
  access: string;
}

/**
 * 注意：权限标识符号
 * - 与路由中的 access 对应
 * - 子路由菜单全部没有权限时，父菜单默认隐藏
 * - 菜单权限
 * - - 规则 `${子系统标识}.${页面模块}.${页面子模块}`
 * - 值为函数类型：
 * - - 在菜单中使用，会自定判断是否是函数 runtimeUtil.traverseModifyRoutes
 * - - 页面中使用需要自己处理
 */
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export type IAccessReturn = {
  /** 国管局管理员 */
  isRole_admin?: () => boolean;
  [key: string]: undefined | boolean | ((route: IAccessRoute) => boolean);
};
export type IAccessParams = {
  0: { currentUser?: API.CurrentUser } | undefined;
};

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: IAccessParams[0]): IAccessReturn {
  const { currentUser } = initialState ?? {};

  if (SetPro.openAccess === false) {
    return {};
  }

  return {
    isRole_admin: function () {
      if (!currentUser) return false;

      let flag = false;
      currentUser?.roleVos?.map((item) => {
        if (item.code.indexOf('admin') > -1) {
          flag = true;
        }
      });

      return flag;
    },
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
