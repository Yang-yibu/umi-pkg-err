import { Col, Row, Switch, Tree } from 'antd';
import type { DataNode } from 'antd/lib/tree';
import { useState } from 'react';
import CusTree from '..';

// 自定义 NodeData 类型
interface CusTreeNodeData extends Omit<DataNode, 'children'> {
  orgCode?: string;
  children?: CusTreeNodeData[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type CusTreeProp = React.ComponentProps<typeof CusTree<CusTreeNodeData>>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TreeProp = React.ComponentProps<typeof Tree<CusTreeNodeData>>;

const mockData: CusTreeNodeData[] = [
  {
    title: 'Node1',
    key: '0-0',
    orgCode: '组织 1',
    children: [
      {
        title: 'Child Node1',
        key: '0-0-0',
        orgCode: '组织 2',
      },
    ],
  },
  {
    title: 'Node2',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        key: '0-1-2',
      },
    ],
  },
];

const TreeBasic = function () {
  const [checkable, setCheckable] = useState<boolean>(false);

  const onSelect: TreeProp['onSelect'] = function (selectedKeys, info) {
    console.group('onSelect --- ');
    console.log(selectedKeys);
    console.log(info);
    console.groupEnd();
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Switch checked={checkable} onClick={() => setCheckable(!checkable)} />
        <span>&emsp;显示选择框</span>
      </div>
      <Row style={{ width: '100%' }}>
        <Col span={12}>
          <h2>自定义 Tree</h2>
          <CusTree<CusTreeNodeData> checkable={checkable} treeData={mockData} onSelect={onSelect} />
        </Col>
        <Col span={12}>
          <h2>Antd Tree</h2>
          <Tree<CusTreeNodeData> checkable={checkable} treeData={mockData} onSelect={onSelect} />
        </Col>
      </Row>
    </div>
  );
};

export default TreeBasic;
