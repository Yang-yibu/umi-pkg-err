import { Card, Dropdown, Space } from 'antd';
import { default as Button } from './index';
import type { CusBtnProps } from './index';
import { DownOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

export { default as ExpBtnTheme } from './demo/BtnTheme';

const btnTitleProp = { style: { width: '140px' } };

const ExpBtn: React.FC<{ title: string; opt?: CusBtnProps }> = function (props) {
  return (
    <Space>
      <div {...btnTitleProp}>{props.title}</div>
      <Button type="primary" theme="primary" {...props.opt}>
        主要按钮
      </Button>
      <Button type="default" {...props.opt}>
        次要按钮
      </Button>
      <Button type="default" theme="primary" {...props.opt}>
        次要按钮
      </Button>
      <Button type="primary" theme="error" {...props.opt}>
        警告按钮
      </Button>
      <Button type="text" theme="primary" {...props.opt}>
        文本按钮
      </Button>
      <Button type="ghost" theme="primary" {...props.opt}>
        幽灵按钮
      </Button>
      <Button type="link" theme="primary" {...props.opt}>
        链接文字
      </Button>
    </Space>
  );
};
const ExpBtnOth: React.FC<{ title: string; opt?: CusBtnProps }> = function (props) {
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2st menu item',
      key: '2',
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };

  return (
    <Space>
      <div {...btnTitleProp}>{props.title}</div>
      <Button icon={<PlusOutlined />} type="primary" theme="primary" {...props.opt}>
        主要按钮
      </Button>
      <Button icon={<PlusOutlined />} type="default" {...props.opt}>
        次要按钮
      </Button>

      <Button icon={<PlusOutlined />} type="primary" theme="primary" {...props.opt} />
      <Button icon={<PlusOutlined />} type="default" {...props.opt} />

      {/* TODO: Dropdown 内部重新根据 Dropdown 的 disabled 属性覆盖了 disabled */}
      <Dropdown menu={menuProps} disabled={props.opt?.disabled}>
        <Button type="primary" theme="primary" {...props.opt}>
          <Space>
            下拉菜单按钮
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown menu={menuProps} disabled={props.opt?.disabled}>
        <Button type="default" {...props.opt}>
          <Space>
            下拉菜单按钮
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
};

export const ExpButs = function () {
  return (
    <>
      <br />
      <Card title="按钮：中 高 32px 默认尺寸">
        <Space direction="vertical">
          <ExpBtn title="正常 normal" />
          <ExpBtn title="悬浮 hover" opt={{ className: 'cus-hover' }} />
          <ExpBtn title="失效 disable" opt={{ disabled: true }} />
        </Space>
      </Card>
      <Card>
        <Space direction="vertical">
          <ExpBtnOth title="正常 normal" />
          <ExpBtnOth title="悬浮 hover" opt={{ className: 'cus-hover' }} />
          <ExpBtnOth title="失效 disable" opt={{ disabled: true }} />
        </Space>
      </Card>
    </>
  );
};
export const ExpButsSmall = function () {
  return (
    <>
      <Card title="按钮：中 高 24px">
        <Space direction="vertical">
          <ExpBtn title="正常 normal" opt={{ size: 'small' }} />
          <ExpBtn title="悬浮 hover" opt={{ size: 'small', className: 'cus-hover' }} />
          <ExpBtn title="失效 disable" opt={{ size: 'small', disabled: true }} />
        </Space>
      </Card>
      <Card>
        <Space direction="vertical">
          <ExpBtnOth title="正常 normal" opt={{ size: 'small' }} />
          <ExpBtnOth title="悬浮 hover" opt={{ size: 'small', className: 'cus-hover' }} />
          <ExpBtnOth title="失效 disable" opt={{ size: 'small', disabled: true }} />
        </Space>
      </Card>
    </>
  );
};
export const ExpButsLarge = function () {
  return (
    <>
      <Card title="按钮：大 高 40px">
        <Space direction="vertical">
          <ExpBtn title="正常 normal" opt={{ size: 'large' }} />
          <ExpBtn title="悬浮 hover" opt={{ size: 'large', className: 'cus-hover' }} />
          <ExpBtn title="失效 disable" opt={{ size: 'large', disabled: true }} />
        </Space>
      </Card>
      <Card>
        <Space direction="vertical">
          <ExpBtnOth title="正常 normal" opt={{ size: 'large' }} />
          <ExpBtnOth title="悬浮 hover" opt={{ size: 'large', className: 'cus-hover' }} />
          <ExpBtnOth title="失效 disable" opt={{ size: 'large', disabled: true }} />
        </Space>
      </Card>
    </>
  );
};

export default ExpButs;
