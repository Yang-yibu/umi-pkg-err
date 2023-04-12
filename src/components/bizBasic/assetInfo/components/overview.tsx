import { getPrefixCls } from '@/utils';
import { Descriptions } from 'antd';

interface IProp {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  data?: {
    [key: string]: any;
  };
}

/**
 * TODO:
 * - 渲染真实数据
 * - 没有数据的标签不显示
 * - 数据值太长的显示 tooltip
 * - 资产状态显示 印章；资产状态 Tag
 */
const AssetOverview: React.FC<IProp> = (props) => {
  const prefixCls = 'assetOverview';
  const { data = {} } = props;

  return (
    <div className={prefixCls}>
      <div className={getPrefixCls('status', prefixCls)} style={{ display: 'none' }}>
        状态标签
      </div>

      <div className={`${prefixCls}-thumb`}>
        <div className="img-empty">图片</div>
      </div>
      <div className={`${prefixCls}-info`}>
        <div className={`${prefixCls}-name`}>资产名称</div>
        <div className={`${prefixCls}-desc`}>ID {data.assetCode}</div>

        <Descriptions layout="horizontal" column={2} colon={true}>
          <Descriptions.Item span={2} label="资产原值（元）">
            2020年8月16日
          </Descriptions.Item>
          <Descriptions.Item span={2} label="资产净值（元）">
            8成新
          </Descriptions.Item>
          <Descriptions.Item label="取得方式">北京市发改委</Descriptions.Item>
          <Descriptions.Item label="资产分类">电子产品</Descriptions.Item>
          <Descriptions.Item label="折旧/摊销状态">折旧中</Descriptions.Item>
          <Descriptions.Item label="采购组织形式">集中采集</Descriptions.Item>
          <Descriptions.Item label="资产数量（台）">10</Descriptions.Item>
          <Descriptions.Item label="入账状态">已入账</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default AssetOverview;
