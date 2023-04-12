import { message } from 'antd';

/**
 * 处理接口提示信息
 * - TODO：接口内部抛出错误后，catch 捕获不到，还需详细测试
 * @param fn 接口
 * @param conf 提示配置信息
 * @returns
 */
export function reqFeedback1(
  fn: any,
  conf: {
    tipStr?: string;
    loading?: string;
    sucTip?: string;
    errTip?: string;
  } = { tipStr: '处理' },
) {
  const hide = message.loading(conf.loading || `正在${conf.tipStr}...`);

  try {
    fn();

    hide();
    message.success(conf.sucTip || `${conf.tipStr}成功，稍后刷新！`);
    return true;
  } catch (error) {
    hide();
    message.error(conf.errTip || `${conf.tipStr}失败，请重试！`);
    return false;
  }
}

/**
 * 处理接口提示信息
 * @param p0 接口请求
 * - `[接口方法, ...接口参数]`
 * @param conf 提示配置
 * @returns
 */
export default async function reqFeedback<T extends (...args: any) => any>(
  [fn, ...reset]: [T, ...Parameters<T>],
  conf: {
    /** 提示前缀 */
    tipStr?: string;
    loading?: string;
    sucTip?: string;
    errTip?: string;
  } = { tipStr: '处理' },
) {
  const hide = message.loading(conf.loading || `正在${conf.tipStr}...`);

  try {
    await fn(...reset);

    hide();
    message.success(conf.sucTip || `${conf.tipStr}成功，稍后刷新！`);
    return true;
  } catch (error: any) {
    console.log('reqFeed: ', error);
    hide();

    // 公共错误处理方法未显示错误提示
    if (!error.pubErrTip) {
      message.error(error.message || conf.errTip || `${conf.tipStr}失败，请重试！`);
    }
    return false;
  }
}
