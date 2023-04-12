import { CusRenderEmpty } from '@/components/cusBasic/empty';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
import defaultRenderEmpty from 'antd/lib/config-provider/defaultRenderEmpty';

import React, { useState } from 'react';

const style = { width: 200 };

const EmptyProvider: React.FC = () => {
  const [customize, setCustomize] = useState(true);

  const v = React.useContext(ConfigProvider.ConfigContext);
  console.log(v);

  return (
    <div>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={(val) => {
          setCustomize(val);
        }}
      />

      <Divider />

      {/* <ConfigProvider renderEmpty={customize ? CusRenderEmpty : undefined}> */}
      <ConfigProvider renderEmpty={customize ? CusRenderEmpty : defaultRenderEmpty}>
        <div className="config-provider">
          <div>
            默认空状态是中文的。使用 defaultRenderEmpty 代替默认 undefined 时，设置不成中文。
          </div>
          <div>
            查看真实默认空状态，需要注释全局 provider 的 renderEmpty，此页面默认值设置为 undefined
          </div>
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{ marginTop: 8 }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />
          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default EmptyProvider;
