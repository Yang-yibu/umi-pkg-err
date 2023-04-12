import { Button, Space } from 'antd';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Modal } from 'antd';
import { render as reactRender, unmount as reactUnmount } from 'rc-util/lib/React/render';
import { useState } from 'react';

const BaseModal: React.FC<{ opt?: any; initOpen?: boolean }> = function (props) {
  const [open, setOpen] = useState(props.initOpen || false);

  const handleCancel = function () {
    setOpen(false);
  };
  return (
    <Modal open={open} onCancel={handleCancel} title="弹窗标题" {...props.opt}>
      <div style={{ height: '150px' }}>内容区域</div>
    </Modal>
  );
};

const ExpModelBox = function () {
  const baseModal = function (opt?: any) {
    let timeoutId: NodeJS.Timeout;

    const container = document.createDocumentFragment();

    function destroy() {
      reactUnmount(container);
    }

    function render() {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // 只是示例，不要使用此方式编码
        reactRender(<BaseModal initOpen={true} opt={opt} />, container);
      });
    }

    render();

    return {
      destroy,
    };
  };

  const modalType = function (selector: any, wrapClassName: string = '') {
    const opt = {};
    const dom = document.getElementById(selector);
    if (dom) {
      dom.innerHTML = '';
    }
    Object.assign(opt, {
      wrapClassName: `noFixed ${wrapClassName}`,
      getContainer: selector,
      mask: false,
    });
    return baseModal(opt);
  };

  modalType('#modalBoxType1', 'box-small');
  modalType('#modalBoxType2', 'box-medium');
  modalType('#modalBoxType3', 'box-auto');

  let modal1: any;
  const handleBtn1 = () => {
    modal1?.destroy?.();
    modal1 = baseModal({ wrapClassName: 'box-small' });
  };
  let modal2: any;
  const handleBtn2 = () => {
    modal2?.destroy?.();
    modal2 = baseModal({ wrapClassName: 'box-medium' });
  };
  let modal3: any;
  const handleBtn3 = () => {
    modal3?.destroy?.();
    modal3 = baseModal({ wrapClassName: 'box-auto' });
  };

  return (
    <>
      <p>规范上样式示例，默认显示</p>
      <p>主要是通过类样式控制，强制覆盖</p>
      <Space style={{ alignItems: 'normal' }} direction="vertical">
        <div>
          <Button onClick={handleBtn1}>普通弹窗，小尺寸 640 宽</Button>

          <div id="modalBoxType1" style={{ marginTop: '10px', minHeight: '100px' }} />
        </div>

        <div>
          <Button onClick={handleBtn2}>普通弹窗，中尺寸 860 宽</Button>

          <div id="modalBoxType2" style={{ marginTop: '10px', minHeight: '100px' }} />
        </div>

        <div>
          <Button onClick={handleBtn3}>自由尺寸，采用 width 属性值</Button>

          <div id="modalBoxType3" style={{ marginTop: '10px', minHeight: '100px' }} />
        </div>
      </Space>
    </>
  );
};

export default ExpModelBox;
