import type { ModalFuncProps } from 'antd';
import { Button, Modal, Space } from 'antd';

const ExpModel = function () {
  /** 几个示例示例公共信息 */
  const commonProp = {
    width: 384,
    closable: true,
    title: '通知信息标题',
    content: '宽度默认 384：一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
  };
  const modalType = function (type: Exclude<ModalFuncProps['type'], undefined>) {
    return () => {
      Modal[type]({
        closable: true,
        title: '通知信息标题',
        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点。',
        okButtonProps: { className: 'btn-theme-primary' },
      });
    };
  };

  const modalType1 = function (otherProp = {}) {
    Modal.confirm({
      ...commonProp,

      icon: false,
      className: 'hideFooter',

      ...otherProp,
    });
  };

  const modalType2 = function (otherProp = {}) {
    Modal.warn({
      ...commonProp,

      className: 'hideFooter',

      ...otherProp,
    });
  };
  const modalType3 = function (otherProp = {}) {
    Modal.warn({
      ...commonProp,

      icon: false,
      className: '',
      okButtonProps: { className: 'btn-theme-primary', size: 'small' },
      cancelButtonProps: { size: 'small' },

      ...otherProp,
    });
  };
  const modalType4 = function (otherProp = {}) {
    Modal.warn({
      ...commonProp,

      className: '',
      okButtonProps: { className: 'btn-theme-primary', size: 'small' },
      cancelButtonProps: { size: 'small' },
      okCancel: true,

      ...otherProp,
    });
  };

  /** 生成静态 Modal ，便于直观查看组件样式 */
  const staticModal = function (fn: any, id: any) {
    setTimeout(() => {
      const dom = document.getElementById(id) as any;
      dom.innerHTML = '';

      fn({
        mask: false,
        wrapClassName: 'noFixed',
        getContainer: dom,
      });
    }, 100);
  };

  return (
    <>
      <h2>弹出框样式不同类型样式通知样式</h2>
      <Space>
        <Button onClick={modalType('success')}>成功提示信息</Button>
        <Button onClick={modalType('error')}>错误提示信息</Button>
        <Button onClick={modalType('info')}>信息提示信息</Button>
        <Button onClick={modalType('warning')}>警告提示信息</Button>
      </Space>

      <h2>规范上样式示例，底部与弹出框显示一样</h2>
      <Space style={{ alignItems: 'normal' }}>
        <div>
          <Button onClick={modalType1}>只显示标题、内容、关闭 Icon</Button>
          <div id="modalType1">{staticModal(modalType1, 'modalType1')}</div>
        </div>
        <div>
          <Button onClick={modalType2}>只显示标题及 ICON、内容、关闭 Icon</Button>
          <div id="modalType2">{staticModal(modalType2, 'modalType2')}</div>
        </div>
      </Space>
      <Space style={{ alignItems: 'normal' }}>
        <div>
          <Button onClick={modalType3}>只显示标题、内容、关闭 Icon、按钮</Button>
          <div id="modalType3">{staticModal(modalType3, 'modalType3')}</div>
        </div>
        <div>
          <Button onClick={modalType4}>只显示标题及 ICON、内容、关闭 Icon、按钮</Button>
          <div id="modalType4">{staticModal(modalType4, 'modalType4')}</div>
        </div>
      </Space>
    </>
  );
};

export default ExpModel;
