import { RightOutlined } from '@ant-design/icons';
import { ProCard, ProCardProps } from '@ant-design/pro-components';
import { Row, RowProps, Space } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

type ICusCardContent = {
  /**
   * 在 Grid 布局下
   * - ProForm gird
   */
  grid?: boolean;
  /**
   * 在 ProForm 的 Grid 模式下
   * @default
   * { gutter: 8 }
   */
  rowProps?: RowProps;
} & Omit<ProCardProps, 'collapsed'>;

/** 内容卡片 */
const CusCardContent: React.FC<ICusCardContent> = (props) => {
  const { grid, rowProps, className, extra, collapsible, defaultCollapsed, children, ...reset } =
    props;

  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const _collapsible = collapsible ?? false;

  const _rowProps = rowProps ?? { gutter: 8 };

  return (
    <ProCard
      {...reset}
      className={classNames('CusCardContent', className)}
      extra={
        <Space size={8}>
          {extra}
          {_collapsible && (
            <div
              className="collapsedBox"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              <RightOutlined rotate={!collapsed ? 90 : undefined} />
              <span className="collapseBox-text">{collapsed ? '折叠' : '展开'}</span>
            </div>
          )}
        </Space>
      }
      headerBordered
      collapsed={collapsed}
    >
      {grid ? <Row {..._rowProps}>{children}</Row> : children}
    </ProCard>
  );
};

export default CusCardContent;
