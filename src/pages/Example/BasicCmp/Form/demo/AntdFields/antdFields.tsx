import { PlusOutlined } from '@ant-design/icons';
import type { FormProps } from 'antd';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

type IProps = {
  formName?: any;
  componentDisabled: boolean;
  onValuesChange?: FormProps['onValuesChange'];
};

const FormDisabledDemo: React.FC<IProps> = (props) => {
  const { componentDisabled, formName } = props;

  return (
    <>
      <Form
        name={formName}
        labelCol={{ flex: '100px' }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
      >
        <Form.Item label="Chekbox" name="Chekbox" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio" name="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input" name="Input">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="Input" name="Input">
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item label="Select" name="Select">
          <Select placeholder="请输入">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect" name="TreeSelect">
          <TreeSelect
            placeholder="请输入"
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="Cascader">
          <Cascader
            placeholder="请输入"
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker" name="DatePicker">
          <DatePicker placeholder="请输入" />
        </Form.Item>
        <Form.Item label="RangePicker" name="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber" name="InputNumber">
          <InputNumber placeholder="请输入" />
        </Form.Item>
        <Form.Item label="TextArea" name="TextArea">
          <TextArea rows={4} placeholder="请输入" />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked" name="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormDisabledDemo;
