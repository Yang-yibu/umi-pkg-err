import CusContainer, { CusPageTitle } from '@/components/CusContainer';
import Button from '@/components/cusBasic/button';
// import { Button } from 'antd';
import { useState } from 'react';
import { Switch } from 'antd';

const ExpPage1 = () => {
  const orgs = [
    { label: '国管局机关服务中心', value: '12100000400011067P' },
    { label: '住宅中心', value: '12100000717800814U' },
    { label: '资金管理中心', value: '2100000717800101R' },
  ];

  const [title, setTitle] = useState<string | undefined>();
  const handleClick: React.ComponentProps<typeof Button>['onClick'] = function (ev) {
    setTitle(`${ev.data.value} ${ev.data.label}`);
  };

  const [hasHeaderBorder, setHasHeaderBorder] = useState<boolean>(true);
  const [hasLeft, setHasLeft] = useState<boolean>(true);
  const [hasScroll, setHasScroll] = useState<boolean>(true);
  const [useBreadcrumb, setUseBreadcrumb] = useState<boolean>(false);
  return (
    <CusContainer
      // hasLeft={hasLeft}
      leftTitle="单位树列表"
      leftChild={
        <div style={{ height: hasScroll ? '1000px' : '' }}>
          {orgs.map((item) => {
            return (
              <Button
                key={item.value}
                debounceTime={0}
                type="text"
                onClick={handleClick}
                data={item}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      }
      // title={title}
      headerBordered={hasHeaderBorder}
      title={<CusPageTitle titleStyleInherit breadcrumb={useBreadcrumb} title={title} />}
      extra={
        <>
          <Button>数据维护</Button>
          <Button>属性扩展</Button>
        </>
      }
      bodyStyle={{ padding: 0 }}
    >
      <div className="contentBox">
        <div className="content">
          <div style={{ height: hasScroll ? '1000px' : '' }}>
            <div> 右侧内容，详见“业务组件文档”，</div>
            <p>
              <span style={{ marginRight: 10 }}>Title 是否使用面包屑</span>
              <Switch checked={useBreadcrumb} onChange={() => setUseBreadcrumb(!useBreadcrumb)} />
            </p>
            <p>
              <span style={{ marginRight: 10 }}>是否显示 HeaderBorder</span>
              <Switch
                checked={hasHeaderBorder}
                onChange={() => setHasHeaderBorder(!hasHeaderBorder)}
              />
            </p>
            <p>
              <span style={{ marginRight: 10 }}>是否显示左侧区域</span>
              <Switch checked={hasLeft} onChange={() => setHasLeft(!hasLeft)} />
            </p>
            <p>
              <span style={{ marginRight: 10 }}>内容高度出滚动条</span>
              <Switch checked={hasScroll} onChange={() => setHasScroll(!hasScroll)} />
            </p>
            <div>底部按鈕添加 pageContainer-footer 类，需要放在滚动区域</div>
            <div>pageContainer-footer</div>
          </div>
          <div>最底部内容</div>
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
  );
};

export default ExpPage1;
