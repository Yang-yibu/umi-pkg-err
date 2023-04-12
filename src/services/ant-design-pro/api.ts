// @ts-ignore
/* eslint-disable */
import { getToken, setToken } from '@/utils/auth';
import { message } from 'antd';
// @ts-ignore
import JSEncrypt from 'jsencrypt';
import { request } from 'umi';

const pubKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7qwNKeKAXaac8Xq5pQTW8mTD18e9MBRBlEl3EF1OH61v5NkG+ub09K5RNisrTWpNxSMEKw/71CW9qz2m2D2NlsYl9+THdBHsmw24IvwKROhrQY9c8WlrSP6qQSiYm48d4oZw1+E0TmibmN17NwI2KBjn2HAzT3xZZdXyQvkQ+rQIDAQAB';
const jdPrefix = '/api/cityos';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  const uid = getToken()?.uid;

  // if (!uid) {
  //   return Promise.reject({ data: undefined, message: '没有 ID 信息！' });
  // }
  return request<{
    code: 0 | number;
    data: API.CurrentUser;
  }>(`${jdPrefix}/sso/web/v2/open/role/detail/${uid}`, {
    method: 'GET',
    ...(options || {}),
  }).then((res) => {
    if (res.code === 0) {
      const rd = res.data;
      const userVo = rd.userVo;
      rd.id = userVo.id;
      rd.name = userVo.realName;
      rd.mobile = userVo.mobild;
      rd.mail = userVo.mail;

      const roleVoMap = {};
      let curRole = rd.roleVos?.[0];
      if (!rd.roleVos) {
        message.warn('当前账户没有关联角色信息，请添加！');
        curRole = {} as any;
      } else {
        rd.roleVos.map((role) => {
          roleVoMap[role.code] = role;
        });
      }
      rd.roleVoMap = roleVoMap;
      rd.roleId = curRole?.id;
      rd.roleName = curRole?.roleName;
      rd.roleCode = curRole?.code;

      let institutionVo = rd.institutions?.[0];
      if (!institutionVo) {
        message.warn('当前账户没有机构信息，联系管理员添加！');
        institutionVo = {} as any;
      }
      rd.orgId = institutionVo?.id;
      rd.orgParentId = institutionVo?.parentId;
      rd.orgCode = institutionVo?.organizationCode;
      rd.orgName = institutionVo?.name;
    }
    return res;
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${jdPrefix}/sso/web/v2/user/logout`, {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  // 国管局资产司租户信息
  let tenantId = '160';

  if (REACT_APP_ENV === 'prod') {
    tenantId = '155';
  }

  if (LOGIN_TENANT_ID) {
    tenantId = LOGIN_TENANT_ID;
  }
  const localTenantId = window.basilIns.get('tenantId');
  if (localTenantId) {
    tenantId = localTenantId;
  }

  if (body.password) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(pubKey);
    body.password = encryptor.encrypt(body.password) as string;
  }

  // /api/cityos/sso/web/v2/user/login
  // /api/login/account
  return request<API.LoginResult>(`${jdPrefix}/sso/web/v2/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      tenantId,
      ...body,
    },
    ...(options || {}),
  }).then((res) => {
    if (res.code === 0) {
      const rd = res.data;
      setToken({ token: `${rd.bearer} ${rd.accessToken}`, uid: rd.id });
    }
    return res;
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
