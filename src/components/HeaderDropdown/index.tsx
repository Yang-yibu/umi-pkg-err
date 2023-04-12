import { Dropdown } from 'antd';
import type { DropDownProps } from 'antd/es/dropdown';
import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

export type HeaderDropdownProps = {
  overlayClassName?: string;
  /**
   * @deprecated 采用 menuProp 配置
   */
  overlay?: React.ReactNode | (() => React.ReactNode) | any;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  overlayClassName: cls,
  menu,
  ...restProps
}) => {
  return (
    <Dropdown overlayClassName={classNames(styles.container, cls)} menu={menu} {...restProps} />
  );
};

export default HeaderDropdown;
