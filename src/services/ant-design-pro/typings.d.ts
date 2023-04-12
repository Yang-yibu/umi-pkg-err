// @ts-ignore
/* eslint-disable */

type RoleInfo = {
  /** 角色 ID */
  id: number;
  /** 角色名称 */
  roleName: string;
  /** 角色 code */
  code: string;
};
type InstitutionInfo = {
  id: number;
  /** 父级 ID */
  parentId: number;
  name: string;
  code: string;
  /** 组织信用代码 */
  organizationCode: string;
  [key: string]: any;
};

declare namespace API {
  /** TODO: 存在多个机构信息。进入系统时，是否需要先选择以哪个机构身份进入；或者在当前整个系统中，一个用户只会有一个机构信息 */
  type CurrentUser = {
    /** 用户 ID */
    id: number;
    /** 用户名称 */
    name?: string;
    /** 手机 */
    mobile?: string;
    /** 邮箱 */
    mail?: string;
    /** 用户头像信息 */
    avatar?: string;
    /** 组织 ID */
    orgId?: number;
    orgParentId?: number;
    /** 组织机构 Code，目前取的是接口信用代码 `organizationCode` */
    orgCode?: string;
    orgName?: string;

    /** 角色信息 */
    roleId?: number;
    roleName?: string;
    roleCode?: string;

    /** 权限标识 */
    access: string;

    /** 用户信息 */
    userVo: {
      id: number;
      /**
       * 用户名
       * - 账号
       */
      username: string;
      /** 用户真实名 */
      realName: string;
      [key: string]: any;
    };
    /** 角色映射信息 */
    roleVoMap: { [key: string]: RoleInfo };
    /**
     * 角色信息
     * - ~~服务器必须关联角色~~
     * - TODO: 其他系统业务确定决定，一个账号只有一个角色信息；可能会变
     * - 想了下不加 null 不合适，容易出现错误页面导致容易蒙。
     */
    roleVos: RoleInfo[] | null;
    /**
     * 机构信息
     * - 单位信息
     */
    institutions: InstitutionInfo[] | null;
  };

  type LoginResult = {
    code: 0 | number;
    message: string;
    data: {
      /**
       * 访问 Token
       * - 有的地方授权参数需要与 bearer 拼接使用
       * - 即 `${d.bearer} ${d.accessToken}`
       */
      accessToken: string;
      /** 用户 ID */
      id: string;
      /** token 类型 */
      bearer: string;
      [key: string]: any;
    };
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
