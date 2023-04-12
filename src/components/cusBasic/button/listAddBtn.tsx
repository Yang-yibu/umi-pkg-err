import { PlusCircleFilled } from '@ant-design/icons';
import type { CusBtnProps } from '.';
import { CusBtn } from '.';

export const ListAddBtn: React.FC<Omit<CusBtnProps, 'type' | 'theme' | 'icon' | 'block'>> = (
  props,
) => {
  const { children, ...reset } = props;
  return (
    <CusBtn
      className="btnListAdd"
      style={{ marginBlock: 10 }}
      theme="primary"
      type="dashed"
      icon={<PlusCircleFilled />}
      block
      {...reset}
    >
      {children || '新增一行'}
    </CusBtn>
  );
};
