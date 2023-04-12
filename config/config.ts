// https://umijs.org/config/
import { defineConfig } from 'umi';
import { resolve } from 'path';
import fs from 'fs';
// @ts-ignore
import less2obj from 'less-vars-to-js';
import defaultSettings, { getSysBase, SetPro } from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import { getEnvValue } from './util';

const themeVars = less2obj(
  fs.readFileSync(resolve(__dirname, '../src/styles/variables.less'), 'utf-8'),
  { resolveVariables: true, stripPrefix: true },
);
// console.log(themeVars);

const { REACT_APP_ENV, appEnv, SITE_DOMAIN } = getEnvValue(false, __filename);

export default defineConfig({
  ...(SetPro.base
    ? {
        base: `/${SetPro.base}/`,
        publicPath: `/${SetPro.base}/`,
      }
    : {}),
  define: {
    REACT_APP_ENV: appEnv,
    LOGIN_TENANT_ID: '',
    SITE_DOMAIN: SITE_DOMAIN,
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // devServer: { proxy: {} },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    ...defaultSettings,
  },
  dynamicImport: {
    // loading: '@ant-design/pro-layout/es/PageLoading',
    loading: '@/components/PageLoading',
  },
  // 注入脚本
  scripts: [],
  // targets: {
  //   ie: 11,
  // },
  alias: {
    '@conf': resolve(__dirname),
    '@basic': resolve(__dirname, '../src/client-basic'),
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  icons: {
    alias: '@SvgIconsAuto',
    entry: './src/assets/svgIcon',
  },
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // 会添加到 less-loader 的 modifyVars 参数中
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    // 'root-entry-name': 'variable',
    ...themeVars,
  },
  lessLoader: {
    globalVars: themeVars,
  },
  // TODO: 应该适用于 Antd5 或 pro 的 Token
  themeConfig: {},
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  // openAPI: [
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     // 或者使用在线的版本
  //     // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
  //     schemaPath: join(__dirname, 'oneapi.json'),
  //     mock: false,
  //   },
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //     projectName: 'swagger',
  //   },
  // ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
