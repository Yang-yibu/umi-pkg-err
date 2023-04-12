import CloseOutlined from '@ant-design/icons/CloseOutlined';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';

export interface IPropDrawer extends Omit<DrawerProps, 'closable'> {
  /**
   * 是否显示 close
   * - 默认在右边
   */
  closable?: 'left' | 'right' | boolean;
}

export function useDrawerProp(props: IPropDrawer) {
  const {
    extra,
    closable = true,
    closeIcon = <CloseOutlined className="internalCloseIcon" />,
    children,
    onClose,
    ...reset
  } = props;

  const prefixCls = 'ant-drawer';

  let _closable = false;

  let extraDom = extra;
  if (closable === 'left') {
    _closable = true;
  } else {
    _closable = false;
  }
  if (closable === true || closable === 'right') {
    extraDom = (
      <>
        {extra}
        <button type="button" onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
          {closeIcon}
        </button>
      </>
    );
  }

  return {
    internal: {
      extra: extraDom,
      closable: _closable,
      closeIcon: closeIcon,
      onClose: onClose,
    },
    children,
    reset,
  };
}

const InternalDrawer: React.FC<IPropDrawer> = (props) => {
  const { internal, children, reset } = useDrawerProp(props);

  return (
    <Drawer {...reset} {...internal}>
      {children}
    </Drawer>
  );
};

const CusDrawer = InternalDrawer;
export default CusDrawer;
