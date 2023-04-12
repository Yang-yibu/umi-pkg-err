import { Empty } from 'antd';
import noData from '@/assets/noData.png';
import classNames from 'classnames';

interface IPropsCusEmpty extends React.ComponentProps<typeof Empty> {
  // 避免警告
  _a?: string;
}

const CusEmpty: React.FC<IPropsCusEmpty> = (props) => {
  const { image, description, ...reset } = props;
  const prefixClassName = 'cusEmpty';

  // eslint-disable-next-line prefer-const
  let _image = image;
  if (_image === null || _image === undefined) {
    // Empty.PRESENTED_IMAGE_SIMPLE = noData;
    // Empty.PRESENTED_IMAGE_DEFAULT = noData;
    _image = noData;
  }

  // eslint-disable-next-line prefer-const
  let _description = description ?? '暂无数据资料...';

  const cls = classNames(prefixClassName);
  return <Empty className={cls} image={_image} description={_description} {...reset} />;
};

// const CusEmpty: React.FC<IPropsCusEmpty> = (props) => {
//   return <Empty {...props} />;
// };

export default CusEmpty;

export const CusRenderEmpty = (component: string | undefined) => {
  if (component && ['Table', 'List'].indexOf(component) > -1) {
    return <CusEmpty imageStyle={{ width: '400px' }} />;
  }
  return <CusEmpty />;
};
