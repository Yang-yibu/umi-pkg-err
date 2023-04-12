import { Space } from 'antd';
import { BtnTheme } from './BtnTheme';

/** 不同主题按钮 */
const ExpBtnTheme = function () {
  return (
    <Space direction="vertical">
      <BtnTheme disabled key={11} title="默认主题 primary" />
      <BtnTheme disabled key={1} title="默认主题 primary_s" theme="primary_s" />
      <BtnTheme disabled key={2} title="危险主题 danger" theme="danger" />
      <BtnTheme disabled key={3} title="自定义默认 primary" theme="primary" />
      <BtnTheme disabled key={4} title="危险主题 error" theme="error" />
      <BtnTheme disabled key={5} title="警告主题 warning" theme="warning" />
      <BtnTheme disabled key={6} title="普通主题 info" theme="info" />
    </Space>
  );
};

export default ExpBtnTheme;
