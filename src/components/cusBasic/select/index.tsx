import React, { useState, useEffect } from 'react';
import type { SelectProps } from 'antd';
import { Select } from 'antd';
import './index.less';
import classNames from 'classnames';
import { CloseCircleFilled } from '@ant-design/icons';
import type { IptPropCommon } from '../input';

// type IPropIpt = React.ComponentProps<typeof Select>;
type IPropIpt = SelectProps & IptPropCommon;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICusPropsSelect extends Omit<IPropIpt, ''> {
  /** placeholder 在输入框上边 */
  // labelPlacement?: 'top';

  /** 多选时，显示全局数量，待实现 */
  showTagNum?: boolean;
}

const CusSelect: React.FC<ICusPropsSelect> = (props) => {
  const prefixClassName = 'cusSelect';

  const {
    internalCls,
    internalStyle,
    className,
    style,

    defaultValue,
    value,
    onFocus,
    onBlur,
    onChange,
    placeholder,
    label,
    prefixIcon,
    showTagNum,
    clearIcon,
    maxTagPlaceholder,
    ...reset
  } = props;

  const phText = label ? label : '';
  const _placeholder = placeholder;
  //  ?? (typeof label === 'string' ? label : '');
  const [valueIn, setValueIn] = useState<typeof value>(value || defaultValue);
  // 此组件是否有值
  const valueIsNotEmpty = !valueIn || (Array.isArray(valueIn) && !valueIn.length);

  // 展示 label 在顶部
  const [showIptTop, setShowTptTop] = useState<boolean>(false);
  useEffect(() => {
    if (!valueIsNotEmpty) {
      setShowTptTop(true);
    }
  }, [valueIsNotEmpty]);
  // console.log('普通:', valueIn, valueIsNotEmpty);

  let showTagNumBoxCls = false;
  let _closeIcon: ICusPropsSelect['clearIcon'] = clearIcon ?? <CloseCircleFilled />;
  let _maxTagPlaceholder = maxTagPlaceholder;
  if (showTagNum && Array.isArray(valueIn) && valueIn.length) {
    showTagNumBoxCls = true;
    _closeIcon = (
      <span className="tagNumBox">
        <span className="tagNumBox-txt">已选 {valueIn.length}</span>
        <span className="tagNumBox-icon">{_closeIcon}</span>
      </span>
    );

    _maxTagPlaceholder = '...';
  }

  const handleFocus: IPropIpt['onFocus'] = (e) => {
    setShowTptTop(true);
    onFocus?.(e);
  };
  const handleBlur: IPropIpt['onBlur'] = (e) => {
    console.log('blur:', valueIn, valueIsNotEmpty);

    if (valueIsNotEmpty) {
      setShowTptTop(false);
    }
    onBlur?.(e);
  };

  const handleChange: IPropIpt['onChange'] = (_value, _option) => {
    setValueIn(_value);
    onChange?.(_value, _option);
  };

  const cls = classNames(
    className,
    `${prefixClassName}-wrapper`,
    valueIsNotEmpty && 'valueIsNotEmpty',
    showIptTop && 'labelShowIptTop',

    showTagNumBoxCls && 'showTagNum',
  );

  return (
    <div className={cls} style={style}>
      {prefixIcon && <span className="prefix-icon">{prefixIcon}</span>}
      {phText && <div className={classNames('phText')}>{phText}</div>}

      <Select
        className={internalCls}
        style={internalStyle}
        value={valueIn}
        placeholder={_placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        clearIcon={_closeIcon}
        maxTagPlaceholder={_maxTagPlaceholder}
        {...reset}
      />
    </div>
  );
};

export default CusSelect;
