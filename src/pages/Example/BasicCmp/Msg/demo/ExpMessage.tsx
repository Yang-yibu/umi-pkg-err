import { Button, message, Space } from 'antd';

const ExpMessage = function () {
  const txtMap = {
    success: '恭喜！你所提交的信息已经审核通过。',
    error: '系统错误，请稍后重试。',
    info: '你好！欢迎使用京东城市操作系统 2.0专业版。',
    warning: '系统进行升级，请及时保存你的资料！',
    loading: '数据加载中请稍后',
  };
  const msgMap = {
    success: () => message.success(txtMap.success),
    error: () => message.error(txtMap.error),
    info: () => message.info(txtMap.info),
    warning: () => message.warning(txtMap.warning),
    loading: () => message.loading(txtMap.loading),
  };

  return (
    <Space>
      <Button onClick={msgMap.success}>成功</Button>
      <Button onClick={msgMap.error}>错误</Button>
      <Button onClick={msgMap.info}>提示</Button>
      <Button onClick={msgMap.warning}>警告</Button>
      <Button onClick={msgMap.loading}>数据加载</Button>
    </Space>
  );
};
export default ExpMessage;
