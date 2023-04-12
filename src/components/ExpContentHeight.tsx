import { Switch } from 'antd';
import { useState } from 'react';

/** 示例页面用于触发滚动条 */
const ExpContentHeight = () => {
  const [high, setHigh] = useState(false);

  return (
    <>
      <div>
        <Switch checked={high} onClick={() => setHigh(!high)} />
        <span>开启高度元素</span>
      </div>
      <div style={{ height: high ? '100vh' : 'auto' }}>这里是占位容器</div>
    </>
  );
};

export default ExpContentHeight;
