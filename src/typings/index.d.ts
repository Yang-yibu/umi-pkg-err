declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design Dedicated environment variable, please do not use it in your project.
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

/**
 * - dev 开发
 * - test 自己测试环境和京东联调环境
 * - prod 用户生产和用户测试环境
 */
declare const REACT_APP_ENV: 'dev' | 'test' | 'prod' | false;
/**
 * 站点标识
 * - localhost 本地环境
 * - jdcloud.com 京东联调环境
 * - ggj.gov.cn 客户生产环境
 */
declare const SITE_DOMAIN: 'jdcloud.com' | 'ggj.gov.cn' | false;
/**
 * 登录租户 ID，具体查看 MD
 * - 160 联调测试环境
 * - 155 客户生产环境
 * - 2   客户测试环境
 */
declare const LOGIN_TENANT_ID: '' | '160' | '155' | '2';

/* ----------------------- 公共类型实用程序 ----------------------- */
/**
 * 指定字段转为必选，其余字段转为可选
 */
type PartialRequired<T, K extends keyof T> = { [P in K]-?: T[P] } & {
  [P in Exclude<keyof T, K>]?: T[P];
};
/* --------------------- 公共类型实用程序 end ---------------------- */
