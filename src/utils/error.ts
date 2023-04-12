/**
 * 待使用：如果错误信息字段是其他字段，需要优化此方法
 */
export default class TipError extends Error {
  code?: string;

  constructor(msg: { code?: string; message: string } = {} as any) {
    super(msg.message);
    this.code = msg.code;
  }
}
