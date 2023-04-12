import type { TreeProps } from 'antd';
import type RcTree from 'rc-tree';
import { Tree } from 'antd';
import type { DataNode } from 'antd/lib/tree';
import classNames from 'classnames';
import type { BasicDataNode } from 'rc-tree';
import * as React from 'react';

interface ICusPropsTree<T extends BasicDataNode = DataNode> extends Omit<TreeProps<T>, ''> {
  debug?: boolean;
}

const PureTree = React.forwardRef<RcTree, ICusPropsTree>((props, ref) => {
  const prefixClassName = 'cusTree';

  const { ...reset } = props;

  const cls = classNames(`${prefixClassName}-wrapper`);
  return (
    <div className={cls}>
      <Tree ref={ref} {...reset} />
    </div>
  );
});

const CusTree = PureTree as unknown as typeof Tree;

export default CusTree;
