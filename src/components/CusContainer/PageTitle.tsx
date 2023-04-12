import { ProBreadcrumb, RouteContext } from '@ant-design/pro-components';
import classNames from 'classnames';
import { useContext } from 'react';
import SvgIcon from '../SvgIcon';

type ICusPageTitle = {
  /**
   * 是否使用面包屑
   */
  breadcrumb?: boolean;
  /**
   * 面包屑的配置项
   * - 如果为真值，breadcrumb 可以不传
   */
  breadcrumbProps?: React.ComponentProps<typeof ProBreadcrumb>;
  title?: string;
  /** 关键样式，继承父样式 */
  titleStyleInherit?: boolean;
  hideIcon?: boolean;
  debug?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

const CusPageTitle: React.FC<ICusPageTitle> = (props) => {
  const prefixClassName = 'cusPageTitle';
  const { breadcrumb, breadcrumbProps, className, debug } = props;

  const _breadcrumb = breadcrumb ?? breadcrumbProps;

  const val = useContext(RouteContext);

  if (debug) {
    console.log('CusPageTitleContext: ', val);
    console.log('CusPageTitleprops: ', props);
  }

  const title = props.title ?? val.title;

  const cls = classNames(
    `${prefixClassName}`,
    className,
    props.titleStyleInherit && 'titleNoStyle',
    _breadcrumb && 'hasBreadcrumb',
  );
  const clsIcon = classNames(`${prefixClassName}-icon`);
  const clsTitle = classNames(`${prefixClassName}-title`);
  return (
    <span className={cls}>
      {!props.hideIcon && <SvgIcon className={clsIcon} name="cardManage" />}

      {_breadcrumb ? (
        <ProBreadcrumb {...breadcrumbProps} />
      ) : (
        <span className={clsTitle}>{title}</span>
      )}
    </span>
  );
};

export default CusPageTitle;
