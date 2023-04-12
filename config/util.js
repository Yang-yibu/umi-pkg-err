import path from 'path';

const { REACT_APP_ENV, NODE_ENV, LOGIN_TENANT_ID, SITE_DOMAIN } = process.env;

/**
 * 获取环境变量值
 */
export function getEnvValue(appEnvDefault, file) {
  const appEnv = REACT_APP_ENV || appEnvDefault;
  const prefix = path.basename(file) || appEnvDefault || '';
  const _SITE_DOMAIN = SITE_DOMAIN || false;
  console.log(`环境变量 ${prefix} REACT_APP_ENV：`, REACT_APP_ENV);
  console.log(`环境变量 ${prefix} LOGIN_TENANT_ID：`, LOGIN_TENANT_ID);
  console.log(`环境变量 ${prefix} SITE_DOMAIN`, _SITE_DOMAIN);
  console.log(`环境变量 ${prefix} NODE_ENV：`, NODE_ENV);
  console.log(`环境变量 ${prefix} appEnv：`, appEnv);

  return { appEnv, NODE_ENV, REACT_APP_ENV, LOGIN_TENANT_ID, SITE_DOMAIN: _SITE_DOMAIN };
}

export default {};
