import { message, Space } from 'antd';
import CusButton, { CusBtnPop } from '..';

export default function () {
  return (
    <Space>
      <CusBtnPop
        type="primary"
        theme="danger"
        data="删除"
        sureTitle="确定删除此项"
        onClick={(ev) => {
          message.success(ev?.data);
        }}
      >
        删除字典
      </CusBtnPop>

      <CusButton
        type="primary"
        theme="danger"
        onClick={() => {
          console.log('删除字典2');
        }}
      >
        删除字典 2
      </CusButton>
    </Space>
  );
}
