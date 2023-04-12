import type { TabsProps } from 'antd';
import { Card, Tabs } from 'antd';
import AssetOverview from './components/overview';
import styles from './index.module.less';

export interface IPropAssetInfo {
  /**
   * 单位信用代码
   * - 编辑资产的时候需要
   */
  orgCode?: string;
  /**
   * 资产代码
   * - 全生命周期 用到
   */
  assetCode: string;
}

/**
 * 显示资产卡片详情
 */
const AssetInfo: React.FC<IPropAssetInfo> = (props) => {
  const { assetCode } = props;

  if (!assetCode) {
    return <>缺少查询资产必要信息</>;
  }

  const tabs: TabsProps['items'] = [
    { key: 'basico', label: '基本信息' },
    { key: 'finance', label: '财务信息' },
    { key: 'use', label: '使用信息' },
    { key: 'character', label: '特性信息' },
    { key: 'handle', label: '处置信息' },
    { key: 'life', label: '全生命周期' },
  ];
  tabs.map((item) => {
    if (!item.children) {
      item.children = <Card>{item.label}</Card>;
    }
  });

  return (
    <div className={styles.assetsInfo}>
      <Card>
        <AssetOverview data={{ assetCode }} />
      </Card>

      <Tabs defaultActiveKey="basico" items={tabs} />
    </div>
  );
};

export default AssetInfo;
