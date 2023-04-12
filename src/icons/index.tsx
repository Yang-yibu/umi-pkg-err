import { ReactComponent as CardManage } from './svg/cardManage.svg';
import { ReactComponent as Menu8 } from './svg/menu8.svg';

import { ReactComponent as Search } from './svg/search/search.svg';
import { ReactComponent as TypeGg } from './svg/search/typeGg.svg';
import { ReactComponent as TypeRw } from './svg/search/typeRw.svg';
import { ReactComponent as TypeCz } from './svg/search/typeCz.svg';
import { ReactComponent as TypeDj } from './svg/search/typeDj.svg';
import { ReactComponent as TypeYw } from './svg/search/typeYw.svg';
import { ReactComponent as TypeZd } from './svg/search/typeZd.svg';
import { ReactComponent as TypeSj } from './svg/search/typeSj.svg';
import { ReactComponent as TypeZc } from './svg/search/typeZc.svg';
import { ReactComponent as Unit } from './svg/search/unit.svg';
import { ReactComponent as Status } from './svg/search/status.svg';
import { ReactComponent as Time } from './svg/search/time.svg';
import { ReactComponent as Xz } from './svg/search/xz.svg';
import { ReactComponent as User } from './svg/search/user.svg';
import { ReactComponent as UserZh } from './svg/search/userZh.svg';
import { ReactComponent as UserJs } from './svg/search/userJs.svg';
import { ReactComponent as OtherQd } from './svg/search/otherQd.svg';
import { ReactComponent as OtherXj } from './svg/search/otherXj.svg';
import { ReactComponent as OtherCz } from './svg/search/otherCz.svg';
import { ReactComponent as OtherFx } from './svg/search/otherFx.svg';
import { ReactComponent as OtherKm } from './svg/search/otherKm.svg';
import { ReactComponent as OtherZcyt } from './svg/search/otherZcyt.svg';
import { ReactComponent as OtherZcyz } from './svg/search/otherZcyz.svg';
import { ReactComponent as OtherXt } from './svg/search/otherXt.svg';
import { ReactComponent as OtherYh } from './svg/search/otherYh.svg';
import { ReactComponent as OtherDw } from './svg/search/otherDw.svg';
import { ReactComponent as OtherWl } from './svg/search/otherWl.svg';
import { ReactComponent as OtherGg } from './svg/search/otherGg.svg';
import { ReactComponent as OtherCk } from './svg/search/otherCk.svg';
import { ReactComponent as OtherZcsl } from './svg/search/otherZcsl.svg';

import { ReactComponent as SheetClear } from './svg/sheet/clear.svg';
import { ReactComponent as SheetSave } from './svg/sheet/save.svg';
import { ReactComponent as SheetOperation } from './svg/sheet/operation.svg';
import { ReactComponent as SheetTotality } from './svg/sheet/totality.svg';
import { ReactComponent as SheetExamine } from './svg/sheet/examine.svg';
import { ReactComponent as SheetFullreview } from './svg/sheet/fullreview.svg';
import { ReactComponent as SheetCollect } from './svg/sheet/collect.svg';
import { ReactComponent as SheetReport } from './svg/sheet/report.svg';
import { ReactComponent as SheetBack } from './svg/sheet/back.svg';
import { ReactComponent as SheetExport } from './svg/sheet/export.svg';
import { ReactComponent as SheetPrint } from './svg/sheet/print.svg';

const IconMap = {
  cardManage: () => <CardManage />,
  menu8: () => <Menu8 />,

  // --- SheetIcon ------------------
  sheetClear: () => <SheetClear />,
  sheetSave: () => <SheetSave />,
  sheetOperation: () => <SheetOperation />,
  sheetTotality: () => <SheetTotality />,
  sheetExamine: () => <SheetExamine />,
  sheetFullreview: () => <SheetFullreview />,
  sheetCollect: () => <SheetCollect />,
  sheetReport: () => <SheetReport />,
  sheetBack: () => <SheetBack />,
  sheetExport: () => <SheetExport />,
  sheetPrint: () => <SheetPrint />,
  // --- SheetIcon End ------------------

  // --- 搜索 Icon ------------------
  search: () => <Search />,
  typeRw: () => <TypeRw />,
  typeYw: () => <TypeYw />,
  typeGg: () => <TypeGg />,
  typeCz: () => <TypeCz />,
  typeDj: () => <TypeDj />,
  typeZd: () => <TypeZd />,
  typeSj: () => <TypeSj />,
  typeZc: () => <TypeZc />,
  // --- 搜索 Icon ------------------

  unit: () => <Unit />,
  status: () => <Status />,
  time: () => <Time />,
  xz: () => <Xz />,

  user: () => <User />,
  userJs: () => <UserJs />,
  userZh: () => <UserZh />,

  otherQd: () => <OtherQd />,
  otherCz: () => <OtherCz />,
  otherFx: () => <OtherFx />,
  otherXj: () => <OtherXj />,
  otherKm: () => <OtherKm />,
  otherZcyt: () => <OtherZcyt />,
  otherZcyz: () => <OtherZcyz />,
  otherXt: () => <OtherXt />,
  otherYh: () => <OtherYh />,
  otherDw: () => <OtherDw />,
  otherWl: () => <OtherWl />,
  otherGg: () => <OtherGg />,
  otherCk: () => <OtherCk />,
  otherZcsl: () => <OtherZcsl />,
} as const;

export default IconMap;
