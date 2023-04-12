import type { Location } from 'umi';

import 'umi-request';

/** 接口请求错误公共字段 */
interface ReqErrCommon {
  /**
   * 业务错误信息类型
   * - code 服务器业务编码返回非正常编码
   * - status HTTP 状态非 200
   * - data 数据异常，需要错误提示
   */
  bizErrType?: 'code' | 'status' | 'data';
}

declare module '@@/plugin-request/request' {
  export interface RequestConfig {
    /** 测试类型扩展 */
    aaa?: string;
  }
  /** TODO: 这个扩展方式不生效，内部没有到处 */
  interface ErrorInfoStructure {
    bizErrType?: 'code' | 'status' | 'data';
  }
}

declare module 'umi-request' {
  export interface RequestOptionsInit {
    /**
     * 是否跳过默认错误处理，直接返回原始 Error
     */
    skipErrorHandler?: boolean;
    /**
     * 使用公共信息提示，默认使用全局错误提示
     * - 错误信息格式查看 requestErrorConfig 文件内方式
     * - 其他类型查看 ReqErrCommon.bizErrType
     * - - 使用 dataLocal 可以由业务方的 catch 处理由于数据不正确导致的错误
     * @see {ReqErrCommon.bizErrType}
     */
    usePubMsg?: boolean | `${NonNullable<ReqErrCommon['bizErrType']>}Local`;

    /**
     * 强制覆盖全局设置的 success 参数
     * - success=false 会走全局 errorHandler
     * - 如：业务类型错误，可以强制走接口 resolve
     */
    forceSuccess?: boolean;

    /**
     * 自定义提示信息 - 暂时不需要
     * @deprecated
     */
    cusTipConf?: {
      /**
       * 忽略服务器 message
       * - 默认忽略
       */
      useCus?: boolean;
      errTip?: string;
      sucTip?: string;
      prefix?: string;
    };

    /** 默认携带 token */
    tokenCarry?: boolean;
  }
}

declare module 'umi' {
  /**
   * 自定义 Location 类型
   * - Umi 中的 Location 不能注入 query 参数的类型
   * - useLocation 方法返回的值有 query，但是类型识别的不正确
   */
  export interface LocationCus<S = unknown, Q = unknown> extends Omit<Location, 'query' | 'state'> {
    state?: S;
    query?: Q;
  }
}

declare global {
  interface Window {
    /** 当前系统作为 iframe 内部系统，路由变化通知父域 */
    childIfrPageChange?: (location?: Location) => void;

    /**
     * The missing Javascript smart persistence layer. Unified localstorage, cookie and session storage JavaScript API.
     * @see {@link https://gitee.com/mirrors/basil-js}
     */
    Basil: any;
    /**
     * Basil 示例
     * - see: src/app.tsx
     */
    basilIns: any;
    /**
     * 地图类型
     */
    T?: any;
    BMapGL?: any;
  }
}
