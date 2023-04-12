import { useState } from 'react';
import CusContainer, { CusPageTitle } from '@/components/CusContainer';
import { Switch } from 'antd';
import classNames from 'classnames';
// import { Button } from 'antd';

const ExpPage1 = () => {
  const [pageScroll, setPageScroll] = useState(false);
  const [contentScroll, setContentScroll] = useState(false);
  const [isGHost, setIsGHost] = useState(false);

  const cls = classNames(
    pageScroll ? 'pageScroll' : '',
    contentScroll ? 'contentBoxScroll' : '',
    isGHost ? 'ghost' : 'sideMenuBg',
  );
  return (
    <CusContainer className={cls} title={<CusPageTitle />}>
      <div style={{ height: '1000px' }}>
        <div>幽灵模式（没有背景）</div>
        <div>
          <span style={{ marginRight: 10 }}>是否采用透明背景模式</span>
          <Switch checked={isGHost} onChange={() => setIsGHost(!isGHost)} />
        </div>

        <div>
          <span style={{ marginRight: 10 }}>容器不限制高度，整个页面内滚动，可用于 ghost</span>
          <Switch checked={pageScroll} onChange={() => setPageScroll(!pageScroll)} />
        </div>
        <div>
          <span style={{ marginRight: 10 }}>
            默认 容器限制高度，滚动时，在 content 内滚动，header 等固定
          </span>
        </div>
        <div>
          <span style={{ marginRight: 10 }}>
            容器限制高度，滚动时，在 content 内滚动，header 等会一起滚动
          </span>
          <Switch checked={contentScroll} onChange={() => setContentScroll(!contentScroll)} />
        </div>
      </div>
    </CusContainer>
  );
};

export default ExpPage1;
