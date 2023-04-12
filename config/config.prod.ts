// https://umijs.org/config/
import { defineConfig } from 'umi';
import { getEnvValue } from './util';

const { appEnv, LOGIN_TENANT_ID } = getEnvValue('prod', __filename);

export default defineConfig({
  define: {
    REACT_APP_ENV: appEnv,
    LOGIN_TENANT_ID: LOGIN_TENANT_ID || '155',
  },
});
