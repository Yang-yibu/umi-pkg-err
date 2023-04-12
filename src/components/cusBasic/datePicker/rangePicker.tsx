import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import './index.less';
import classNames from 'classnames';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { IptPropCommon } from '../input';

const { RangePicker } = DatePicker;

// type IPropIpt = React.ComponentProps<typeof RangePicker>;
type IPropIpt = RangePickerProps & IptPropCommon;

// type a = RangePickerProps['placeholder'];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICusPropsDatePicker extends Omit<IPropIpt, ''> {
  /** placeholder 在输入框上边 */
  // labelPlacement?: 'top';
}

const CusRangePicker: React.FC<ICusPropsDatePicker> = (props) => {
  const prefixClassName = 'cusDate';

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
    ...reset
  } = props;

  const phText = label ? label : '';
  const _placeholder: [string, string] | undefined = placeholder;
  // ?? [
  //   typeof label === 'string' ? label : '',
  //   '',
  // ];
  const [valueIn, setValueIn] = useState<typeof value>(value || defaultValue);
  // 此组件是否有值
  const valueIsNotEmpty = !valueIn;

  // 展示 label 在顶部
  const [showIptTop, setShowTptTop] = useState<boolean>(false);
  useEffect(() => {
    if (!valueIsNotEmpty) {
      setShowTptTop(true);
    }
  }, [valueIsNotEmpty]);
  // console.log('普通:', valueIn, valueIsNotEmpty);
  const handleFocus: IPropIpt['onFocus'] = (e) => {
    setShowTptTop(true);
    onFocus?.(e);
  };
  const handleBlur: IPropIpt['onBlur'] = (e) => {
    // console.log('blur:', valueIn, valueIsNotEmpty);

    if (valueIsNotEmpty) {
      setShowTptTop(false);
    }
    onBlur?.(e);
  };

  const handleChange: IPropIpt['onChange'] = (_values, _formatString) => {
    setValueIn(_values);
    onChange?.(_values, _formatString);
  };

  const cls = classNames(
    className,
    `${prefixClassName}-wrapper`,
    valueIsNotEmpty && 'valueIsNotEmpty',
    showIptTop && 'labelShowIptTop',
  );
  return (
    <div className={cls} style={style}>
      {prefixIcon && <span className="prefix-icon">{prefixIcon}</span>}
      {phText && <div className={classNames('phText')}>{phText}</div>}

      <RangePicker
        className={internalCls}
        style={internalStyle}
        value={valueIn}
        placeholder={_placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        suffixIcon={props.suffixIcon}
        {...reset}
      />
    </div>
  );
};

export default CusRangePicker;
