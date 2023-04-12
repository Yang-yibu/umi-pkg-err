import CusContainer, { CusPageTitle } from '@/components/CusContainer';
import Button from '@/components/cusBasic/button';
import { useState } from 'react';
import { Switch } from 'antd';

const ExpPage1 = () => {
  const [hasHeaderBorder] = useState<boolean>(true);
  const [isInner, setIsInner] = useState<boolean>(true);

  return (
    <>
      {isInner && (
        <CusContainer
          headerBordered={hasHeaderBorder}
          title={<CusPageTitle titleStyleInherit title="使用容器 footer 属性" />}
          extra={
            <>
              <Button>数据维护</Button>
              <Button>属性扩展</Button>
            </>
          }
          footer={
            <>
              <Button theme="primary" type="primary">
                确认
              </Button>
              <Button>取消</Button>
            </>
          }
          bodyClass="contentBox"
        >
          <div className="leftExtra" style={{ width: '200px' }}>
            左侧内容
          </div>
          <div className="content">
            <div style={{ height: 1000 }}>
              <div>主内容区</div>
              <div>
                <span style={{ marginRight: 10 }}>使用 Container footer 属性</span>
                <Switch checked={isInner} onChange={() => setIsInner(!isInner)} />
              </div>
            </div>
          </div>

          <div className="rightExtra" style={{ width: '200px' }}>
            右侧内容
          </div>
        </CusContainer>
      )}

      {!isInner && (
        <CusContainer
          headerBordered={hasHeaderBorder}
          title={<CusPageTitle titleStyleInherit title="通过样式控制" />}
          extra={
            <>
              <Button>数据维护</Button>
              <Button>属性扩展</Button>
            </>
          }
          bodyStyle={{ padding: 0 }}
        >
          <div className="contentBox">
            <div className="leftExtra" style={{ width: '200px' }}>
              左侧内容
            </div>
            <div className="content">
              <div style={{ height: 1000 }}>
                <div>主内容区</div>
                <div>
                  <span style={{ marginRight: 10 }}>使用 Container footer 属性</span>
                  <Switch checked={isInner} onChange={() => setIsInner(!isInner)} />
                </div>
              </div>
            </div>

            <div className="rightExtra" style={{ width: '200px' }}>
              右侧内容
            </div>
          </div>
          <div className="pageContainer-footer">
            <Button theme="primary" type="primary">
              确认
            </Button>
            <Button>取消</Button>
          </div>
        </CusContainer>
      )}
    </>
  );
};

export default ExpPage1;
