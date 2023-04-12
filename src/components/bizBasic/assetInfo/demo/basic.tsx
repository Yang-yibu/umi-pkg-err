import { useState } from 'react';
import { CusBtn } from '@/components/cusBasic/button';
import { Space } from 'antd';
import AssetInfoDrawer from '../drawer';

const BasicAssetInfoDrawer = () => {
  const assets = [
    {
      id: '1e2e52e8dff946afbf0393c3423b178c',
      assetName: '文物文化资产-模板',
      assetCode: 'ZC_5KahJbwE646731',
    },
    {
      id: '9dcb4a99610e43fcb24308689da4f7cd',
      assetCode: 'ZC_5KahJbxv250511',
      assetName: '在建工程-模板',
    },
  ];
  const [curRow, setCurRow] = useState<(typeof assets)[0]>();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = function (ev: any) {
    setCurRow(ev.data);
    setOpen(true);
  };

  return (
    <>
      <Space>
        {assets.map((item) => {
          return (
            <CusBtn key={item.id} data={item} onClick={handleClick}>
              {item.assetName}
            </CusBtn>
          );
        })}
      </Space>
      <AssetInfoDrawer
        assetCode={curRow?.assetCode || ''}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
export default BasicAssetInfoDrawer;
