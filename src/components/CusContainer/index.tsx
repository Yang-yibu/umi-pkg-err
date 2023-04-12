import type { TabsProps } from 'antd';
import { CusCtnDiv as _CusCtnDiv } from './CardDiv';
export { CusCtnPro as CusCtnPro } from './CardPro';
export { default as CusPageTitle } from './PageTitle';
export { default as CusCardContent } from './CardContent';

/** 接收的属性只在这里列出 */
export type ICusCtnProps = {
  /**
   * 是否是页面容器
   * - 同时存在左右容器，上边有通栏 Header
   */
  isPageCtn?: boolean;

  /** 是否显示左侧内容 */
  hasLeft?: boolean;
  leftTitle?: React.ReactNode;
  leftChild?: React.ReactNode;

  /** 是否显示右侧区域 Header 区域 */
  hasHeader?: boolean;
  headerBordered?: boolean;
  bodyStyle?: React.CSSProperties;
  bodyClass?: string;
  footer?: React.ReactNode;
  tabs?: TabsProps;
  extra?: React.ReactNode;
  title?: React.ReactNode;
  botExtra?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

export const CusCtnDiv = _CusCtnDiv;

export const CusContainer = _CusCtnDiv;
export default CusContainer;
// export default CusCtnPro;
