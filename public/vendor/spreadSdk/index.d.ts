// version: 15.2.5
import * as GC from './spread-sheets/gc.spread.sheets';
export default GC;

// version: 15.2.5
export * from './spread-sheets-react/gc.spread.sheets.react';
/* ----------------------- 京东自定义 ----------------------- */
// 京东是基于 version: 15.1.2

export type initSpreadOptions = {
    /** 模板 id */
    templateId: string,
    /** 授权 Token */
    authorization: string,
    /** spread js 实例 */
    spread: GC.Spread.Sheets.Workbook,
    /** sheetData 表格数据 */
    sheetData?: any,
    /** 报表接口前缀 */
    baseURL: string,

    /** 模板绑定信息 */
    getBindInfo: (bindInfo: any) => void,
    /** 获取模板 Sheet 信息，SpreadInstance.toJson 数据 */
    getSheetInfo: (sheetInfo: any) => void,
    /** 获取模板源数据信息 */
    getSourceData: (sourceData: any) => void,
}
// export type initSpreadByOptions = (o: initSpreadOptions) => void
export function initSpreadByOptions(o: initSpreadOptions): void

type ISheetCellInfo<T> = {
  [sheetName: string]: {
    [rowName: string]: {
      [colName: string]: T
    }
  }
}

export declare namespace JdSheet {
  /** SDK 发布版本信息 */
  type version = "0.0.1"

  /**
   * 单元格绑定信息
   * - 数据库信息
   * - 是否禁用等
   */
  export type IBindInfo = ISheetCellInfo<{
    [key: string]: any
  }>

  /**
   * Sheet 的信息，SpreadInstance.toJson() 返回结果
   */
  export interface ISheetData {
    [key: string]: any
  }

  /**
   * 模板绑定元数据信息
   */
  export type ISourceData = ISheetCellInfo<{
    /** 数据库表名 */
    tableName: string;
    /** 数据库字段名 */
    fieldName: string;
    /** 数据库字段类型 */
    dataType: string;
  }>
}
