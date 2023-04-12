// @ts-ignore
/* eslint-disable */

/**
 * 增删改查业务数据 公共属性
 * - idField 主键字段
 */
type BusinessCommonItem<ResItem, idField extends keyof ResItem> = ResItem extends infer I
  ? I extends object
    ? { [key in keyof ResItem]: ResItem[key] } & {
        /** 业务主键，主键不是 id 的转成 id */
        id: ResItem[idField];
        /** 自定义业务数据名称 */
        title: string;
        /** 创建时间 */
        createTime?: string;
      }
    : I
  : never;

type ResCode = string;

declare namespace Req {
  /** 分页查询参数 */
  type PageParams<T> = {
    current?: number;
    pageSize?: number;
  } & T;
}

declare namespace Res {
  /** 响应数据 获取列表 */
  type DataList<T> = {
    code: ResCode;
    data?: T[];
    message: string;
  };
  /** 响应数据 获取列表 */
  type DataListPage<T> = {
    code: ResCode;
    data: {
      records: T[];
      /** 总条数 */
      total: number;
      /** 当前页数 */
      size: number;
      current: number;
      /** 总页数 */
      pages: number;
    };
    message: string;
  };
  type ProTableData<T> = {
    /** * 为 true 时，才会解析 data 数据 */
    success?: boolean;
    data: T[] | undefined;
    /** * 不传会使用 data 的长度，如果是分页一定要传 */
    total?: number;
  };
  /** 响应数据 获取详情 */
  type DataOne<T> = {
    code: ResCode;
    data?: T;
    message: string;
  };
  /** 新增、更新 */
  type InsertUpdate<T> = {
    code: ResCode;
    data?: T;
    message: string;
  };
  /** 响应数据 单个删除 */
  type Del<T> = {
    code: ResCode;
    /** 删除是否成功 */
    data: boolean;
    message: string;
  };
}
