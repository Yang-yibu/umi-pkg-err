import DrawerAntBasic from '@/components/cusBasic/drawer/demo/DrawerAntBasic';
import DrawerProBasic from '@/components/cusBasic/drawer/demo/DrawerProBasic';
import { Col, Row } from 'antd';

const LineDisplay = function () {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <DrawerAntBasic viewDrawer />
      </Col>
      <Col span={12}>
        <DrawerProBasic viewDrawer />
      </Col>
    </Row>
  );
};

export default LineDisplay;
