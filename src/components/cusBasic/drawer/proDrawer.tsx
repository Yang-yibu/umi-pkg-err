import type { DrawerFormProps } from '@ant-design/pro-components';
import { DrawerForm } from '@ant-design/pro-components';
import type { IPropDrawer } from '.';
import { useDrawerProp } from '.';

interface IPropProDrawer<T = Record<string, any>> extends Omit<DrawerFormProps<T>, 'drawerProps'> {
  /** @name 抽屉的标题 */
  title?: IPropDrawer['title'];
  /** @name 抽屉的宽度 */
  width?: IPropDrawer['width'];
  /**
   * 不支持 'visible'，请使用全局的 visible
   *
   * @name 抽屉的配置
   */
  drawerProps?: Omit<IPropDrawer, 'visible' | 'children'>;
}

const InternalDrawer: React.FC<IPropProDrawer> = (props) => {
  const { drawerProps = {}, children, ...proProp } = props;
  const { internal, reset } = useDrawerProp(drawerProps);

  return (
    <DrawerForm {...proProp} drawerProps={{ ...reset, ...internal }}>
      {children}
    </DrawerForm>
  );
};

const CusDrawerForm = InternalDrawer;
export default CusDrawerForm;
