import { Button, Popconfirm } from 'antd';
import type { ButtonProps, PopconfirmProps } from 'antd';
import _ from 'lodash';
import React from 'react';

declare const BtnThemeTypes: ['primary', 'error', 'danger', 'warning', 'info'];
type ButtonType = (typeof BtnThemeTypes)[number];

export interface CusBtnProps extends ButtonProps {
  /** 按钮事件携带参数 */
  data?: any;

  /**
   * 启用防抖，默认 300
   * - click
   * - TODO: 始终使用 debounce 时间参数值与原来不一样
   */
  debounceTime?: number | false;
  /** debounce 立即执行 */
  debounceImmediate?: boolean;
  debug?: boolean;
  // disabled?: boolean;
  /**
   * 默认 `primary_s` 自带 primary 类型
   * - `primary_s` antD 默认 primary source 类型，与 primary 区别在于背景色和默认色
   * - `danger` antD 默认 primary 危险类型，与 error 区别在于背景色
   */
  theme?: ButtonType | 'primary_s';

  // TODO: 优化事件类型，尽量从 AntD 中修改（如何扩展函数类型的参数）
  // 直接设置两个参数的方式 `(data: any, event: ...) => void` 类型会报错
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent> & { data: any }) => void;
}

/** 原组件点击事件 类型 */
type IAntBtnPropClick = NonNullable<React.ComponentProps<typeof Button>['onClick']>;

const CusButton: React.FC<CusBtnProps> = function (props) {
  const { data, theme, debug, debounceTime, debounceImmediate, ...reset } = props;
  const _debounceImmediate = debounceImmediate ?? true;

  const cusProps: CusBtnProps = {};
  if (theme) {
    let className = props.className || '';
    if (theme === 'danger') {
      cusProps.danger = true;
      // className += 'btn-theme-' + 'error';
      // cusProps.danger = false;
    } else {
      className += ' btn-theme-' + theme;
    }

    cusProps.className = className;
  }

  if (debug) {
    console.log('debugger: ', props);
  }

  let handleClick: CusBtnProps['onClick'];
  if (debounceTime === false) {
    handleClick = function (ev) {
      props.onClick?.(Object.assign({ data: data }, ev));
    };
  } else {
    const debounceTime1 = debounceTime ?? 300;
    handleClick = _.debounce<IAntBtnPropClick>(
      function (ev) {
        props.onClick?.(Object.assign({ data: data }, ev));
      },
      debounceTime1,
      _debounceImmediate ? { leading: true, trailing: false } : {},
    );
  }

  return (
    <Button {...reset} {...cusProps} onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export default CusButton;

export const CusBtn = CusButton;

export interface CusBtnPopProps extends Omit<CusBtnProps, 'onClick'> {
  /** 确认框提示信息 */
  sureTitle: React.ReactNode;
  /** 确认框，默认采用 PopConfirm */
  sureProp?: Omit<PopconfirmProps, 'title' | 'onConfirm'>;
  // onClick?: (event?: { data: any }) => void;
  onClick?: (ev?: React.MouseEvent<HTMLElement> & { data: any }) => void;
}
/** 原组件点击事件 类型 */
type IAntBtnPopPropClick = NonNullable<React.ComponentProps<typeof Popconfirm>['onConfirm']>;

/** 在 Button 上包装了确认弹框 Popconfirm */
export const CusBtnPop: React.FC<CusBtnPopProps> = function (props) {
  const { data, onClick, debounceTime, debounceImmediate, sureTitle, sureProp, ...reset } = props;

  const { ...sureReset } = sureProp || {};

  const popTitle = sureTitle;

  let handleClick: IAntBtnPopPropClick | undefined = undefined;
  if (onClick) {
    if (debounceTime === false) {
      handleClick = function (ev) {
        onClick?.(Object.assign({ data: data }, ev));
      };
    } else {
      const debounceTime1 = debounceTime ?? 300;
      handleClick = _.debounce<IAntBtnPopPropClick>(
        function (ev) {
          onClick?.(Object.assign({ data: data }, ev));
        },
        debounceTime1,
        debounceImmediate === true ? { leading: true, trailing: false } : {},
      );
    }
  }

  return (
    <Popconfirm title={popTitle} onConfirm={handleClick} {...sureReset}>
      <CusButton {...reset} debounceTime={false} />
    </Popconfirm>
  );
};
