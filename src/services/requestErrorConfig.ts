import type { ReqErrCommon } from '@/typings/tri';
import { getToken } from '@/utils/auth';
import { message, notification } from 'antd';
import _ from 'lodash';
import type { request, RequestConfig } from 'umi';
import { ErrorShowType } from 'umi';

type ErrorAdaptor = NonNullable<NonNullable<RequestConfig['errorConfig']>['adaptor']>;
type Context = Parameters<ErrorAdaptor>[1];
type ErrorInfoStructure = ReturnType<ErrorAdaptor>;

export interface RequestError extends Error, ReqErrCommon {
  /** 公共错误接口处理了提示信息 */
  pubErrTip?: boolean;

  /**
   * 后端返回的原始数据 Response 中看到的
   */
  data?: any;
  /** 适配器处理后的数据 */
  info?: ErrorInfoStructure;
  request?: Context['req'];
  response?: Context['res'];
}

// 与后端约定的响应数据格式
interface ResponseStructure {
  /**
   * 请求成功，可用于判定是否是业务错误(BizError)
   * - false，直接走全局错误提示
   */
  success: boolean;
  /** 接口相应数据，可以是直接供页面消费的数据 */
  data: any;
  errorCode?: number | string;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * request 请求参数 options
 */
export type reqOptions = Parameters<typeof request>['1'];

/** 数起业务接口错误码 */
const CodeMapSq = {
  /** 成功状态码 */
  sucCode: '000000',
  '000000': '处理成功',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const errorAdaptor: ErrorAdaptor = (resData, ctx) => resData;
/**
 * 错误适配器，成功、失败都会走这里 TODO:
 * 1. 确定后端业务错误的返回格式及信息
 *    - CodeMapSq 定义错误类型
 *    - 目前删除接口 data 返回 false 表示失败
 * 2. 200 之外其他错误类型，返回格式情况
 *    - 数起接口：相关错误信息会返回一个 JSON
 *
 * 处理后：
 * 1. 数据先走 errorHandler 统一处理提示，接口处还可以 catch 错误
 * 2. 数据直接走接口成功方法
 */
const errorAdaptor: ErrorAdaptor = (resData, ctx) => {
  const errInfo: Omit<ResponseStructure, 'data'> = {
    success: true,
    errorMessage: '',
    errorCode: '',
  };
  const reqURL = ctx.req.url;

  if (ctx.req.url.indexOf('/api/cityos') > -1) {
    if (!resData) {
      errInfo.success = false;
      errInfo.errorMessage = '响应数据为空';
    }

    // === 非正常错误码
    if (resData.code !== 0) {
      errInfo.success = false;
    }

    // if (resData.status === 401) {
    //   // 长时间未访问登录失效
    //   if (reqURL.indexOf('role/detail') > -1) {
    //     // 加载页面后第一次调用登录接口：（自定规则）距离上一次调用超过半小时
    //     errInfo.showType = ErrorShowType.SILENT;
    //   }
    // }

    // 京东 API
    return {
      ...resData,
      ...errInfo,
      errorCode: resData.code,
      errorMessage: resData.message || errInfo.errorMessage,
    };
  }

  const forceSuccess = ctx.req.options.forceSuccess === true ? true : false;
  // 数起接口
  if (reqURL.indexOf('/wisdom-city-business') > -1) {
    // === 非正常错误码
    if (resData.code && resData.code !== CodeMapSq.sucCode) {
      return {
        ...resData,
        success: forceSuccess,
        bizErrType: 'code',
        errorCode: resData.code,
        errorMessage: resData.message || '接口请求错误',
      };
    }

    // === HTTP 200 以外错误信息提示，本身会先走 errorHandle
    if (resData.status) {
      return {
        bizErrType: 'code',
        showType: ErrorShowType.NOTIFICATION,
        errorCode: resData.status,
        errorMessage: [resData.error, resData.message, resData.path].filter((i) => i).join('\n'),
      };
    }

    // === 业务错误码正常，但数据不正正常
    if (reqURL.indexOf('deleteById') > -1 && resData.code === CodeMapSq.sucCode) {
      return {
        success: forceSuccess,
        /** @type {ReqErrCommon['bizErrType']} */
        bizErrType: 'data',
        ...resData,
        errorMessage: resData.message || '删除失败！',
      };
    }
  }

  return resData;
  // return {
  //   success: true,
  //   data: resData,
  //   errorMessage: '模拟错误！',
  // };
};
const errorPage: string | '/exception' = '';

/**
 * @name 错误处理
 * pro 自带的错误处理，可以在这里做自己的改动
 */
export const errorConfig: RequestConfig = {
  aaa: 'testTypeExtension',

  timeout: 10000,
  timeoutMessage: '请求超时',

  errorConfig: { errorPage: errorPage, adaptor: errorAdaptor },
  /**
   * 处理错误：
   * 1. 业务错误 BizError 依据接口数据的 success=false 回调错误处理函数
   * 2. 无网络错误 TODO: 待测试提示信息
   * 3. 服务器响应，超出 2xx 错误 TODO: 待测试提示信息
   * 4. 无响应 TODO: 待测试提示信息
   * 5. 请求发送不成功 TODO: 待测试提示信息
   * 6. 业务方自定义处理提示业务信息：errorAdaptor 和 errorHandler 处理
   */
  errorHandler: (error: RequestError) => {
    const opt = error?.request?.options;
    if (opt?.skipErrorHandler) {
      throw error;
    }

    let errorInfo: ErrorInfoStructure | undefined;
    if (error.name === 'ResponseError' && error.data && error.request) {
      const ctx: Context = {
        req: error.request,
        res: error.response,
      };
      errorInfo = errorAdaptor(error.data, ctx);
      error.message = errorInfo?.errorMessage || error.message;
      error.data = error.data;
      error.info = errorInfo;
    }

    errorInfo = error.info;
    if (errorInfo) {
      if (opt?.usePubMsg === false) {
        throw error;
      }
      // data 类型错误，本地接口 catch 中捕获错误，处理提示
      if (opt?.usePubMsg === 'dataLocal' && error.info?.bizErrType === 'data') {
        throw error;
      }

      const errorMessage = errorInfo?.errorMessage;
      const errorCode = errorInfo?.errorCode;
      // const errorPage = errorPage;

      switch (errorInfo?.showType) {
        case ErrorShowType.SILENT:
          // 不提示错误
          // do nothing
          break;
        case ErrorShowType.WARN_MESSAGE:
          message.warn(errorMessage);
          break;
        case ErrorShowType.ERROR_MESSAGE:
          message.error(errorMessage);
          break;
        case ErrorShowType.NOTIFICATION:
          notification.open({
            description: errorMessage,
            message: errorCode,
          });
          break;
        case ErrorShowType.REDIRECT:
          // @ts-ignore
          history.push({
            pathname: errorPage,
            query: { errorCode, errorMessage },
          });
          // redirect to error page
          break;
        default:
          message.error(errorMessage || '请求错误，请重试！');
          break;
      }
      error.pubErrTip = true;
    } else {
      error.pubErrTip = true;
      message.error(error.message || 'Request error, please retry.');
    }

    throw error;
  },

  // 处理顺序：请求拦截器 内部中间件 响应拦截器 内部中间件
  // 请求拦截器
  requestInterceptors: [
    (url, options) => {
      delete options?.data?.current;
      delete options?.data?.pageSize;

      if (options.tokenCarry !== false) {
        const token = getToken()?.token || '';
        if (token) {
          _.merge(options.headers, { Authorization: token });
        } else {
          console.warn('需要 token ，但为空！');
        }
      }

      // 拦截请求配置，进行个性化处理。
      // return { options, url: url?.concat('?cusToken=123') };
      return { options, url: url };
    },
  ],
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as ResponseStructure;

      if (data?.success === false) {
        message.error('请求失败！');
      }
      return response;
    },
  ],
};
