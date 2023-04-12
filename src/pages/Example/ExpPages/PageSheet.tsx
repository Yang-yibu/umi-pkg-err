import CusContainer, { CusPageTitle } from '@/components/CusContainer';
import { SheetBtn, SheetBtnGroup } from '@/components/cusBasic/button/sheetBtn';
import { DatePicker, message } from 'antd';

const PageSheet = () => {
  return (
    <div className="pageContainer isBoxBannerHeader">
      <div className="bannerHeader">假设操作按钮在这里</div>
      <CusContainer
        isPageCtn={false}
        className="leftIsTreeBox"
        leftTitle="单位树列表"
        leftChild={'这里是单位树'}
        title={<CusPageTitle title={'请先选择单位'} />}
        bodyStyle={{ padding: 0 }}
        bodyClass="contentBoxVertical"
        extra={
          <SheetBtnGroup place="outside">
            <SheetBtn
              btnType="整表清除"
              onClick={() => {
                message.success('整表清除');
              }}
            />
            <SheetBtn btnType="divider" />
            <SheetBtn btnType="打印" />
            <SheetBtn btnType="导出" />
          </SheetBtnGroup>
        }
      >
        <SheetBtnGroup leftExtra={<DatePicker picker="year" />} extra={<>金额：30元</>}>
          <SheetBtn
            btnType="整表清除"
            onClick={() => {
              message.success('整表清除');
            }}
          />
          <SheetBtn btnType="保存" />

          <SheetBtn btnType="divider" />
          <SheetBtn btnType="运算" />
          <SheetBtn btnType="全算" />

          <SheetBtn btnType="divider" />
          <SheetBtn btnType="审核" />
          <SheetBtn btnType="全审" />
          <SheetBtn btnType="汇总" />

          <SheetBtn btnType="divider" />
          <SheetBtn btnType="上报" />
          <SheetBtn btnType="退回" />

          <SheetBtn btnType="divider" />
          <SheetBtn btnType="导出" />
          <SheetBtn btnType="打印" />
        </SheetBtnGroup>

        <div className="content">
          <div style={{ height: 100 }}>
            <div>默认只需要 CusContainer 就可以</div>
            <div>
              如果需要的话，再加 CusContainer 外边 div ，设置 isPageCtn 为 false; 单独调整
              bannerHeader 高度和外边 isBoxBannerHeader 的 padding
            </div>
          </div>
        </div>
      </CusContainer>
    </div>
  );
};

export default PageSheet;
