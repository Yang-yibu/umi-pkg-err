import React, { useState, useEffect } from 'react';
import type { InputProps } from 'antd';
import { Input } from 'antd';
import './index.less';
import classNames from 'classnames';
// import { SearchOutlined } from '@ant-design/icons';
import type { SearchProps } from 'antd/es/input';
import SvgIcon from '@/components/SvgIcon';

export type IptPropCommon = {
  internalCls?: string;
  internalStyle?: React.CSSProperties;
  /** 表单前 ICON */
  prefixIcon?: React.ReactNode;
  /** 顶部显示 label */
  label?: React.ReactNode;
};

// type IPropIpt = React.ComponentProps<typeof Input>;
type IPropIpt = InputProps & IptPropCommon;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICusPropsInput extends Omit<IPropIpt, ''> {
  /** placeholder 在输入框上边 */
  // labelPlacement?: 'top';
}

// React.ForwardRefExoticComponent<ICusPropsInput & React.RefAttributes<InputRef>>;
const InternalInput: React.FC<ICusPropsInput> = (props) => {
  const prefixClassName = 'cusIpt';

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
  const _placeholder = placeholder;
  //  ?? (typeof label === 'string' ? label : '');
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

  const handleChange: IPropIpt['onChange'] = (e) => {
    setValueIn(e.currentTarget.value);
    onChange?.(e);
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

      <Input
        className={internalCls}
        style={internalStyle}
        value={valueIn}
        placeholder={_placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...reset}
      />
    </div>
  );
};

// type sp = React.ComponentProps<typeof Search>
// type sp1 = typeof Search
interface ICusPropsSearchLabel extends SearchProps {
  label?: string;
}
export const CusSearchLabel: React.FC<ICusPropsSearchLabel> = (props) => {
  const prefixClassName = 'cusIpt-SearchLabel';

  const { label, ...reset } = props;

  const cls = classNames(prefixClassName);
  return (
    <Input
      className={cls}
      autoComplete="off"
      addonBefore={
        <span className={classNames(`labelBox`)}>
          <SvgIcon className="labelBox-icon" name="search" />
          {/* <SearchOutlined className="labelBox-icon" /> */}
          {label && <span className="labelBox-label">{label}</span>}
        </span>
      }
      {...reset}
    />
  );
};

const CusInput = InternalInput;

export default CusInput;

export const InputAntd = Input;
