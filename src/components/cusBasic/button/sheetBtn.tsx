import SvgIcon from '@/components/SvgIcon';
import { Divider } from 'antd';
import { CusBtn } from './index';
import type { CusBtnProps } from './index';
import React from 'react';
import classNames from 'classnames';

const BtnMap = [
  { label: '整表清除', key: 'sheetClear' },
  { label: '保存', key: 'sheetSave' },
  { label: 'divider', key: 'divider' },
  { label: '运算', key: 'sheetOperation' },
  { label: '全算', key: 'sheetTotality' },
  { label: '审核', key: 'sheetExamine' },
  { label: '全审', key: 'sheetFullreview' },
  { label: '汇总', key: 'sheetCollect' },
  { label: '上报', key: 'sheetReport' },
  { label: '退回', key: 'sheetBack' },
  { label: '导出', key: 'sheetExport' },
  { label: '打印', key: 'sheetPrint' },
] as const;

interface SheetBtnProp extends Omit<CusBtnProps, 'type' | 'theme' | 'children'> {
  /**
   * 默认与 Sheet 在一起
   * - 默认 `sheet` 与 sheet 在一起
   * - `outside`
   */
  place?: 'outside' | 'sheet';
  /** 按钮类型 */
  btnType: (typeof BtnMap)[number]['label'];
  key?: React.Key;
}

export const SheetBtn: React.FC<SheetBtnProp> = (props) => {
  const { place = 'sheet', btnType, key, ...reset } = props;
  const curConf = BtnMap.filter((i) => i.label === btnType)[0];

  if (btnType === 'divider') {
    return <Divider key={key || curConf.key} type="vertical" />;
  }

  const p = {};
  if (place === 'sheet') {
    Object.assign(p, { type: 'link' });
  } else {
    Object.assign(p, { type: 'default' });
  }

  return (
    <CusBtn
      className="sheetBtn"
      type="link"
      key={key || curConf.key}
      icon={<SvgIcon name={curConf.key as any} />}
      {...p}
      {...reset}
    >
      {curConf.label}
    </CusBtn>
  );
};

type SheetBtnGroupProp = {
  place?: SheetBtnProp['place'];
  leftExtra?: React.ReactNode;
  extra?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

export const SheetBtnGroup: React.FC<SheetBtnGroupProp> = (props) => {
  const { place, className, style, children, leftExtra, extra } = props;

  const isOutside = place === 'outside';

  const cls = classNames(className, 'sheetBtns', isOutside && 'isOutside');

  let _children = children;
  if (isOutside) {
    _children = React.Children.map(children, (child) => {
      if (React.isValidElement<SheetBtnProp>(child)) {
        return React.cloneElement(child, { place: 'outside' }, null);
      }
      return child;
    });
  }

  return (
    <div className={cls} style={style}>
      {leftExtra ? <div className="sheetBtns-leftExtra">{leftExtra}</div> : null}
      {_children}
      {extra ? <div className="sheetBtns-extra">{extra}</div> : null}
    </div>
  );
};
