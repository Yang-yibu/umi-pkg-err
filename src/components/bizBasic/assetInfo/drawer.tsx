import CusDrawer from '@/components/cusBasic/drawer';
import type { IPropAssetInfo } from '.';
import AssetInfo from '.';

interface IAssetInfoDrawer extends IPropAssetInfo {
  open: boolean;
  onClose: () => void;
}

/**
 * 抽屉 显示资产卡片详情
 */
const AssetInfoDrawer = (props: IAssetInfoDrawer) => {
  return (
    <CusDrawer width={800} title="资产详情" open={props.open} onClose={props.onClose}>
      <AssetInfo assetCode={props.assetCode} />
    </CusDrawer>
  );
};

export default AssetInfoDrawer;
