import type { TablePaginationConfig } from 'antd';

/** 通用分页配置 */
export const PagerConfig: (props?: {
  /** 左侧节点信息 */
  leftNode?: React.ReactNode;
  /** 是否显示分页信息 */
  showPager?: boolean;
}) => false | TablePaginationConfig = function (props) {
  const { leftNode = '', showPager = true } = props || {};

  if (!leftNode && !showPager) {
    return false;
  }

  if (leftNode && !showPager) {
    return {
      className: 'hidePager',
      showTotal: () => {
        return <div className="totalLeft">{leftNode}</div>;
      },
    };
  }

  return {
    position: ['bottomRight'],
    // showTotal: (total) => `共 ${total} 条`,
    showTotal: (total: number) => {
      return (
        <>
          <div className="totalLeft">{leftNode}</div>
          <div className="total">共 {total} 条</div>
        </>
      );
    },
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
  };
};
