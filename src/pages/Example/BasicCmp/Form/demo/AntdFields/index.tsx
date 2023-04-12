import { Col, Form, Row } from 'antd';
import type { FormProviderProps } from 'antd/lib/form/context';
import FormDisabledDemo from './antdFields';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Input, Radio } from 'antd';
import type { RequiredMark } from 'antd/es/form/Form';
import { useState } from 'react';

export default () => {
  const handleFormChange: FormProviderProps['onFormChange'] = (name, info) => {
    // const changeFields = info.changedFields;
    const forms = info.forms;
    if (name === 'formBasic') {
      const { formDis, formBasic } = forms;

      const values = formBasic.getFieldsValue();
      formDis.setFieldsValue(values);
    }
  };

  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <Form.Provider onFormChange={handleFormChange}>
      <Form
        style={{ width: '80%', marginInline: 'auto' }}
        labelCol={{ flex: '180px' }}
        layout="horizontal"
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Required Mark" name="requiredMarkValue">
          <Radio.Group>
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value>Required</Radio.Button>
            <Radio.Button value={false}>Hidden</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A" required tooltip="This is a required field">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          label="Field B"
          tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Row>
        <Col>
          <FormDisabledDemo formName={'formDis'} componentDisabled={true} />
        </Col>
        <Col>
          <FormDisabledDemo formName={'formBasic'} componentDisabled={false} />
        </Col>
      </Row>
    </Form.Provider>
  );
};
