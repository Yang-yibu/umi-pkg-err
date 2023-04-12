import { CusBtn } from '@/components/cusBasic/button';
import CusDrawer from '@/components/cusBasic/drawer';
import ExpContentHeight from '@/components/ExpContentHeight';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import { useState } from 'react';

export type IPropDrawer = {
  /**
   * 是否直接查看 Drawer 样式
   * - 默认 false
   */
  viewDrawer?: boolean;
};

export function useDrawerProp(props: IPropDrawer) {
  const initOpen = props.viewDrawer ?? false;
  const drawerProps: DrawerProps = {
    width: 800,
  };
  if (initOpen) {
    // false 时，当前容器
    drawerProps.getContainer = false;
    drawerProps.width = '80%';
    drawerProps.extra = <CusBtn>右侧按钮</CusBtn>;
  }

  return { initOpen, drawerProps };
}

const DrawerAntBasic: React.FC<IPropDrawer> = function (props) {
  const viewConfig = useDrawerProp(props);

  const [open, setOpen] = useState(viewConfig.initOpen);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="drawerContainer-mock">
      <CusBtn onClick={() => setOpen(true)}>基础弹出层</CusBtn>

      <Drawer>占位</Drawer>

      <CusDrawer
        title="基础弹出层"
        onClose={onClose}
        open={open}
        footer={<CusBtn>确定</CusBtn>}
        {...viewConfig.drawerProps}
      >
        <ExpContentHeight />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </CusDrawer>
    </div>
  );
};

export default DrawerAntBasic;
