import { createPortal } from 'react-dom';

type IContentFooter = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

/**
 * CtnFooter，将组件渲染在 cusLeftRightDiv-right 中。还不能使用
 * - TODO: 子组件知道父组件合适渲染完成
 * - - 方式一：设置定时器，直到获取成功
 * - 通过 parentElement 的方式获取到目标节点
 */
const ContentFooter: React.FC<IContentFooter> = (props) => {
  const { children, ...reset } = props;
  // const footerDom = document.getElementsByClassName('pageContainer-footer');
  // if (footerDom.length) {
  //   document.getElementsByClassName(`${prefixClassName}-right`)[0].append(footerDom[0]);
  // }
  // console.log(footerDom);

  const containerDom = document.getElementsByClassName('cusLeftRightDiv-right')[0];

  const footerDom = (
    <div className="pageContainer-footer" {...reset}>
      {children}
    </div>
  );

  return containerDom ? createPortal(footerDom, containerDom) : <></>;
};

export default ContentFooter;
