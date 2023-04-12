import { Space } from 'antd';
import { default as Button } from '../index';
import type { CusBtnProps } from '../index';

const btnTitleProp = { style: { width: '140px' } };

export const BtnTheme: React.FC<{
  title: string;
  theme?: CusBtnProps['theme'];
  disabled?: boolean;
}> = function (props) {
  const p = { disabled: props.disabled } as any;
  if (props.theme) {
    p.theme = props.theme;
  }
  return (
    <Space>
      <div {...btnTitleProp}>{props.title}</div>
      <Button type="primary" {...p}>
        Primary
      </Button>
      <Button type="default" {...p}>
        Default
      </Button>
      <Button type="dashed" {...p}>
        Dashed
      </Button>
      <Button type="text" {...p}>
        Text
      </Button>
      <Button type="ghost" {...p}>
        Ghost
      </Button>

      <Button type="link" {...p}>
        Link
      </Button>
    </Space>
  );
};
/** 不同主题按钮 */
const ExpBtnTheme = function () {
  return (
    <Space direction="vertical">
      <BtnTheme key={11} title="默认主题 primary" />
      <BtnTheme key={1} title="默认主题 primary_s" theme="primary_s" />
      <BtnTheme key={2} title="危险主题 danger" theme="danger" />
      <BtnTheme key={3} title="自定义默认 primary" theme="primary" />
      <BtnTheme key={4} title="危险主题 error" theme="error" />
      <BtnTheme key={5} title="警告主题 warning" theme="warning" />
      <BtnTheme key={6} title="普通主题 info" theme="info" />
    </Space>
  );
};

export default ExpBtnTheme;
