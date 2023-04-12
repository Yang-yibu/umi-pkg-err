import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { Space } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import type { ICusCtnProps } from '.';

export const CusCtnPro = function (props: ICusCtnProps) {
  const {
    className,
    style,

    hasLeft,
    leftTitle,
    leftChild,

    extra,
    headerBordered,
    bodyStyle,
    title,
    children,

    ...reset
  } = props;

  const prefixClassName = 'cusLeftRight';
  const [collapsed, setCollapsed] = useState(false);
  const classCollapsed = collapsed ? 'collapsed' : '';

  const _hasLeft = hasLeft ?? false;
  const _headerBordered = headerBordered ?? true;

  const cls = classNames(`pageContainer ${prefixClassName}`, className);
  const sty = { ...style };

  return (
    <ProCard className={cls} split="vertical" style={sty} {...reset}>
      {_hasLeft && (
        <ProCard
          ghost
          colSpan={collapsed ? '52px' : '230px'}
          className={`${prefixClassName}-left ${classCollapsed}`}
          title={leftTitle}
          extra={
            <div className="actionCollapsed" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          }
        >
          {leftChild}
        </ProCard>
      )}

      <ProCard
        ghost
        className={`${prefixClassName}-left `}
        bodyStyle={bodyStyle}
        title={title}
        headerBordered={_headerBordered}
        extra={<Space size={16}>{extra}</Space>}
      >
        {children}
      </ProCard>
    </ProCard>
  );
};
