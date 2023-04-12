import type { IRoute } from 'umi';

/* ----------------------- plugin-layout ----------------------- */
export interface IRouteMenuConfig {
  /** 当前菜单名 */
  name: string;
  /** antd 的 icon name 和 url */
  icon?: string;
  /** 在菜单中隐藏他的子项 */
  hideChildren?: boolean;
  /** 默认为false 在菜单中只隐藏此项，子项往上提，仍旧展示 */
  flatMenu?: boolean;
  [key: string]: any;
}

export interface IRouteLayoutConfig {
  /** 默认 false */
  hideMenu?: boolean;
  /** 默认 false */
  hideNav?: boolean;
  /** 默认 false */
  hideFooter?: boolean;
  [key: string]: any;
}

/**
 * 路由配置
 */
export interface IBestAFSRoute extends IRoute {
  /** 权限：https://yuque.antfin-inc.com/bigfish/best_afs/nxuhgb */
  access?: string;

  /** 当前页面的面包屑是否隐藏 */
  showBreadcrumb?: boolean;

  /** 默认为 false，在菜单中隐藏此项包括子项 */
  menu?: false | IRouteMenuConfig;

  /** 默认为 true ，是否显示 Layout */
  layout?: boolean | IRouteLayoutConfig;
}
/* --------------------- plugin-layout end ---------------------- */

/**
 * 路由配置 TODO: 配置项需要完善
 * - 上边的（plugin-layout）有一部分配置是旧写法，不完整
 * - 此配置基于 plugin-layout 中说明
 * - 继承 IRoute 的属性需要测试
 */
export interface IRoutePro extends IRoute {
  routes?: IRoutePro[];
  /**
   * 组件路径
   * - 相对路径基于 `src/pages`;
   * - 绝对路径 `@` 表示 src，配合编辑器路径提示插件
   */
  component?: string;
  /** 路由高阶组件 */
  wrappers?: string[];
  /**
   * 当前菜单名; 兼容此写法
   * - 缺省时，不在左侧菜单显示
   */
  name?: string;
  /**
   * 支持 antd 的 icon name 和 img url
   * - 其他处理方式待测试
   */
  icon?: string;
  // 更多功能查看
  // https://beta-pro.ant.design/docs/advanced-menu
  // ---
  /**
   * 根据菜单更换布局方式
   * - TODO: false 是依据示例中推断的值；mix 看不出效果
   * @name nav menu position: `side` or `top`
   * @name 导航菜单的位置
   * @description side 为正常模式，top菜单显示在顶部，mix 两种兼有
   */
  layout?: false | 'side' | 'top' | 'mix';
  /**
   * 重定向菜单高亮，高亮菜单路径标识
   * - 如果要高亮的菜单是二级或三级等菜单，需要写完整该菜单的父级
   */
  parentKeys?: string[];
  // 新页面打开
  target?: '_blank';
  // 不展示顶栏
  headerRender?: false;
  // 不展示页脚
  footerRender?: false;
  // 不展示菜单
  menuRender?: false;
  // 不展示菜单顶栏
  menuHeaderRender?: false;
  /**
   * 权限配置，需要与 plugin-access 插件配合使用
   * 权限名称
   */
  access?: string;
  // 隐藏子菜单
  hideChildrenInMenu?: boolean;
  // 隐藏自己和子菜单
  hideInMenu?: boolean;
  // 在面包屑中隐藏
  hideInBreadcrumb?: boolean;
  /**
   * 默认为 false 在菜单中只隐藏此项，子项往上提，仍旧展示
   */
  flatMenu?: boolean;
}
