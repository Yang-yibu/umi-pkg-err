import { Collapse } from 'antd';
import styles from './index.less';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ExpAlert from './demo/ExpAlert';
import ExpMessage from './demo/ExpMessage';
import ExpModel from './demo/ExpModel';
import ExpModelBox from './demo/ExpModelBox';
import LineDisplay from '@/components/cusBasic/drawer/demo/LineDisplay';

const Panel = Collapse.Panel;

const ExpMsg = function () {
  return (
    <Collapse
      className={styles.ExpMessage}
      defaultActiveKey={['']}
      accordion
      expandIconPosition="end"
      destroyInactivePanel
    >
      <Panel header="Less 变量" key="less">
        <h4>在 Less 文件中，使用全局色值变量</h4>
        <div className={styles['bg-mix']}>块背景 使用 mixin</div>
        <div className={styles['bg-fade']}>fade 变量函数</div>
        <div className={styles['bg-rgba']}>rgba 变量函数</div>

        <h4>在 TSX 文件中，使用全局色值变量，利用 CSS 变量能力，可能有兼容性问题</h4>
        <div style={{ color: 'var(--ant-error-color)' }}>JSX 中直接使用全局色值变量</div>
      </Panel>
      <Panel header="Message: 全局提示" key="message">
        <ExpMessage />
      </Panel>
      <Panel header="Alert: 静态提示信息" key="alert">
        <ExpAlert />
      </Panel>
      <Panel header="Model: 通知框提示" key="modelTip">
        <ExpModel />
      </Panel>
      <Panel header="Model: 对话框提示" key="modal">
        <ExpModelBox />
      </Panel>
      <Panel header="DrawerBasic" key="DrawerBasic">
        <LineDisplay />
      </Panel>
    </Collapse>
  );
};
export default ExpMsg;
