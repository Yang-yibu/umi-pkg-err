// https://umijs.org/config/
import { defineConfig } from 'umi';
import { getEnvValue } from './util';

const { appEnv } = getEnvValue('dev', __filename);

export default defineConfig({
  define: {
    REACT_APP_ENV: appEnv,
  },
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
