/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * 代理请求本地接口
 * - 修改 target 属性；添加 pathRewrite 属性，去掉网关前缀
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {},
};
