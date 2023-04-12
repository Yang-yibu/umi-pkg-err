import type { TagProps, TagType } from 'antd';
import { Tag } from 'antd';
import classNames from 'classnames';

interface ICusTag extends TagProps {}

/** TODO: 待完善 */
const CusTag: React.ForwardRefRenderFunction<HTMLSpanElement, ICusTag> = (props) => {
  const prefixClassName = 'cusTag';
  const { ...reset } = props;

  const cls = classNames(prefixClassName);
  return <Tag className={cls} {...reset} />;
};

export default CusTag;
