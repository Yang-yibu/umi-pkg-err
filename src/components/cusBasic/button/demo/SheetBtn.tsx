import { message } from 'antd';
import { SheetBtn, SheetBtnGroup } from '../sheetBtn';

const ExpSheetBtn = function () {
  return (
    <SheetBtnGroup>
      <SheetBtn
        btnType="整表清除"
        onClick={() => {
          message.success('整表清除');
        }}
      />
      <SheetBtn btnType="保存" disabled />

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
  );
};

export default ExpSheetBtn;
