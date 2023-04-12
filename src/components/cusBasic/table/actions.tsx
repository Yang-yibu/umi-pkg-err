import { Popover, Space } from 'antd';
import type { CusBtnPopProps, CusBtnProps } from '../button';
import { CusBtnPop } from '../button';
import CusButton from '../button';
import { MoreOutlined } from '@ant-design/icons';

type BtnPropCommon = {
  /** 标识，用于 key */
  field: string;
  key?: string;
  label: string;
  /** 是否收入更多中 */
  isMore?: boolean;
  theme?: CusBtnProps['theme'];
};
type IBtnPropPop = {
  sureTitle?: CusBtnPopProps['sureTitle'];
  onClick?: CusBtnPopProps['onClick'];
  props?: Omit<CusBtnPopProps, 'type'>;
} & BtnPropCommon;
type IBtnProp = {
  onClick?: CusBtnProps['onClick'];
  props?: Omit<CusBtnProps, 'type'>;
} & BtnPropCommon;

interface ITableActions {
  /** 操作项列表 */
  btns: (IBtnProp | IBtnPropPop | undefined | null | false)[];
}

const CusTableActions: React.FC<ITableActions> = function (props) {
  const { btns } = props;
  const btnDoms: any[] = [];
  /** 更多操作 */
  const btnMoreDoms: any[] = [];

  btns.map((btn) => {
    if (!btn) return;

    let btnDom;
    const isMore = btn.isMore;

    const btnCommon = {
      key: btn.key || btn.field,
      type: 'text' as any,
      theme: btn.theme,
    };

    if (isMore) {
      // btnDom.props.size = 'small';
      (btnCommon as any).block = true;
      (btnCommon as any).size = 'small';
      btnCommon.type = 'primary';
    }

    if ('sureTitle' in btn) {
      // 具有弹窗按钮
      btnDom = (
        <CusBtnPop {...btnCommon} sureTitle={btn.sureTitle} {...btn.props} onClick={btn.onClick}>
          {btn.label}
        </CusBtnPop>
      );
    } else {
      // 普通按钮
      btnDom = (
        <CusButton {...btnCommon} {...btn.props} onClick={btn.onClick}>
          {btn.label}
        </CusButton>
      );
    }

    if (isMore) {
      btnMoreDoms.push(btnDom);
    } else {
      btnDoms.push(btnDom);
    }
  });

  if (btnMoreDoms.length) {
    // TODO: Pop 样式调整
    const moreDom = (
      <Popover
        overlayClassName="popTableBtnMore"
        key="more"
        content={
          <Space direction="vertical" size={5}>
            {btnMoreDoms}
          </Space>
        }
        // trigger="click"
        title="更多操作"
      >
        <MoreOutlined className="moreBtn" />
      </Popover>
    );
    btnDoms.push(moreDom);
  }

  return <Space className="operateBtns">{btnDoms}</Space>;
};

export default CusTableActions;
