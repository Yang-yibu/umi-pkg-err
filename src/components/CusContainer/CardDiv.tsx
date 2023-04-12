import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Space, Tabs } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import type { ICusCtnProps } from '.';

export const CusCtnDiv = function (props: ICusCtnProps) {
  const {
    className,
    style,

    isPageCtn = true,

    hasLeft,
    leftTitle,
    leftChild,

    hasHeader,
    headerBordered,
    footer,
    bodyClass,
    bodyStyle,
    tabs,
    extra,
    title,
    botExtra,
    children,

    ...reset
  } = props;

  const prefixClassName = 'cusLeftRightDiv';
  const [collapsed, setCollapsed] = useState(false);
  const classCollapsed = collapsed ? 'collapsed' : '';

  const _hasLeft = hasLeft ?? leftChild;
  const _hasHeader = hasHeader ?? true;
  const _headerBordered = headerBordered ?? true;

  if (tabs) {
    tabs.className = classNames('cusTabs', 'isContainerTabs', tabs.className);
  }

  const cls = classNames(isPageCtn && 'pageContainer', `${prefixClassName}`, className);
  const sty = { ...style };

  return (
    <div className={cls} style={sty} {...reset}>
      {_hasLeft && (
        <div className={`${prefixClassName}-left ${classCollapsed}`}>
          <div className={`${prefixClassName}-header`}>
            <div className={`${prefixClassName}-title`}>{leftTitle}</div>
            <div className="actionCollapsed" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className={`${prefixClassName}-extra`}>{null}</div>
          </div>
          <div className={`${prefixClassName}-content`}>{leftChild}</div>
        </div>
      )}

      <div
        className={classNames(
          `${prefixClassName}-right`,
          _headerBordered && 'hasHeaderBorder',
          botExtra && 'hasBotExtra',
        )}
      >
        {_hasHeader && (
          <>
            <div className={classNames(`${prefixClassName}-header`)}>
              <div className={`${prefixClassName}-title`}>{title}</div>
              <div className={`${prefixClassName}-extra`}>
                <Space size={16}>{extra}</Space>
              </div>
            </div>
            {botExtra && (
              <div className={classNames(`${prefixClassName}-botExtra`)}>{botExtra}</div>
            )}
          </>
        )}
        {tabs ? (
          <Tabs {...tabs} />
        ) : (
          <div className={classNames(`${prefixClassName}-content`, bodyClass)} style={bodyStyle}>
            {children}
          </div>
        )}

        {footer && <div className={classNames(`${prefixClassName}-footer`)}>{footer}</div>}
      </div>
    </div>
  );
};
