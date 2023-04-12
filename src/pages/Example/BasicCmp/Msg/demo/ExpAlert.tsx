import type { AlertProps } from 'antd';
import { Alert, Button, message, Space } from 'antd';

const ExpAlert = function () {
  const txtMap = {
    success: '恭喜！你所提交的信息已经审核通过。',
    error: '系统错误，请稍后重试。',
    info: '你好！欢迎使用京东城市操作系统 2.0专业版。',
    warning: '系统进行升级，请及时保存你的资料！',
    loading: '数据加载中请稍后',
  };

  const AlertActionDom = function (type: Exclude<AlertProps['type'], undefined>) {
    const handle = function () {
      message[type]('点击了查看详情按钮！');
    };
    return (
      <Button size="small" type="text" onClick={handle}>
        查看详情
      </Button>
    );
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: '45%', marginRight: '5%' }}>
        <div>普通可关闭</div>
        <Space direction="vertical" style={{ display: 'flex' }}>
          <Alert message={txtMap.success} type="success" showIcon closable />
          <Alert message={txtMap.error} type="error" showIcon closable />
          <Alert message={txtMap.info} type="info" showIcon closable />
          <Alert message={txtMap.warning} type="warning" showIcon closable />
        </Space>
        <div>可自定义操作</div>
        <Space direction="vertical" style={{ display: 'flex' }}>
          <Alert
            message={txtMap.success}
            type="success"
            showIcon
            action={AlertActionDom('success')}
          />
          <Alert message={txtMap.error} type="error" showIcon action={AlertActionDom('error')} />
          <Alert message={txtMap.info} type="info" showIcon action={AlertActionDom('info')} />
          <Alert
            message={txtMap.warning}
            type="warning"
            showIcon
            action={AlertActionDom('warning')}
          />
        </Space>
      </Space>

      <Space direction="vertical" style={{ width: '45%' }}>
        <br />
        <Alert
          message="已成功！"
          description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
          type="success"
          showIcon
          closable
        />
        <Alert
          message="出错了！"
          description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
          type="error"
          showIcon
          closable
        />
        <Alert
          message="帮助信息"
          description="你好，由于你的良好信用，我们决定赠送你三个月产品会员。"
          type="info"
          showIcon
          closable
        />
        <Alert
          message="请注意！"
          description="你的账户会员使用权限将在3天后到期，请及时跟进申请状况。如有问题，请联系审核人员。"
          type="warning"
          showIcon
          closable
        />
      </Space>
    </div>
  );
};
export default ExpAlert;
