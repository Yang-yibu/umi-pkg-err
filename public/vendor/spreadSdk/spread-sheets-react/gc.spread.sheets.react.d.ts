import * as React from 'react';
// @ts-ignore
// import GC = require("@grapecity/spread-sheets");
import GC = require("../spread-sheets");

export interface IEventTypeObj {
    type: string;
}
export interface SpreadSheetsProp {
    name?: string;
    allowUserZoom?: boolean;
    allowUserResize?: boolean;
    allowUserDragMerge?: boolean;
    allowUndo?: boolean;
    allowSheetReorder?: boolean;
    allowContextMenu?: boolean;
    allowUserDeselect?: boolean;
    allowCopyPasteExcelStyle?: boolean;
    allowExtendPasteRange?: boolean;
    tabStripVisible?: boolean;
    tabEditable?: boolean;
    tabStripRatio?: number;
    tabNavigationVisible?: boolean;
    newTabVisible?: boolean;
    allowUserEditFormula?: boolean;
    autoFitType?: GC.Spread.Sheets.AutoFitType;
    allowUserDragFill?: boolean;
    allowUserDragDrop?: boolean;
    highlightInvalidData?: boolean;
    referenceStyle?: GC.Spread.Sheets.ReferenceStyle;
    backColor?: string;
    grayAreaBackColor?: string;
    backgroundImage?: string;
    backgroundImageLayout?: GC.Spread.Sheets.ImageLayout;
    cutCopyIndicatorVisible?: boolean;
    cutCopyIndicatorBorderColor?: string;
    copyPasteHeaderOptions?: GC.Spread.Sheets.CopyPasteHeaderOptions;
    defaultDragFillType?: GC.Spread.Sheets.Fill.AutoFillType;
    enableFormulaTextbox?: boolean;
    hideSelection?: boolean;
    resizeZeroIndicator?: GC.Spread.Sheets.ResizeZeroIndicator;
    showDragFillSmartTag?: boolean;
    scrollbarShowMax?: boolean;
    scrollbarMaxAlign?: boolean;
    scrollIgnoreHidden?: boolean;
    showVerticalScrollbar?: boolean;
    showHorizontalScrollbar?: boolean;
    showScrollTip?: GC.Spread.Sheets.ShowScrollTip;
    showResizeTip?: GC.Spread.Sheets.ShowResizeTip;
    showDragDropTip?: boolean;
    showDragFillTip?: boolean;
    useTouchLayout?: boolean;
    hostStyle?: React.CSSProperties | object;
    hostClass?: string;

    workbookInitialized?: (spread: GC.Spread.Sheets.Workbook) => void;
    validationError?: (type: IEventTypeObj, args: GC.Spread.Sheets.IValidationErrorEventArgs) => void;
    cellClick?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICellClickEventArgs) => void;
    cellDoubleClick?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICellDoubleClickEventArgs) => void;
    enterCell?: (type: IEventTypeObj, args: GC.Spread.Sheets.IEnterCellEventArgs) => void;
    leaveCell?: (type: IEventTypeObj, args: GC.Spread.Sheets.ILeaveCellEventArgs) => void;
    valueChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IValueChangedEventArgs) => void;
    topRowChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ITopRowChangedEventArgs) => void;
    leftColumnChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ILeftColumnChangedEventArgs) => void;
    invalidOperation?: (type: IEventTypeObj, args: GC.Spread.Sheets.IInvalidOperationEventArgs) => void;
    rangeFiltering?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeFilteringEventArgs) => void;
    rangeFiltered?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeFilteredEventArgs) => void;
    tableFiltering?: (type: IEventTypeObj, args: GC.Spread.Sheets.ITableFilteringEventArgs) => void;
    tableFiltered?: (type: IEventTypeObj, args: GC.Spread.Sheets.ITableFilteredEventArgs) => void;
    rangeSorting?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeSortingEventArgs) => void;
    rangeSorted?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeSortedEventArgs) => void;
    clipboardChanging?: (type: IEventTypeObj, args: GC.Spread.Sheets.IClipboardChangingEventArgs) => void;
    clipboardChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IClipboardChangedEventArgs) => void;
    clipboardPasting?: (type: IEventTypeObj, args: GC.Spread.Sheets.IClipboardPastingEventArgs) => void;
    clipboardPasted?: (type: IEventTypeObj, args: GC.Spread.Sheets.IClipboardPastedEventArgs) => void;
    columnWidthChanging?: (type: IEventTypeObj, args: GC.Spread.Sheets.IColumnWidthChangingEventArgs) => void;
    columnWidthChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IColumnWidthChangedEventArgs) => void;
    rowHeightChanging?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRowHeightChangingEventArgs) => void;
    rowHeightChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRowHeightChangedEventArgs) => void;
    dragDropBlock?: (type: IEventTypeObj, args: GC.Spread.Sheets.IDragDropBlockEventArgs) => void;
    dragDropBlockCompleted?: (type: IEventTypeObj, args: GC.Spread.Sheets.IDragDropBlockCompletedEventArgs) => void;
    dragFillBlock?: (type: IEventTypeObj, args: GC.Spread.Sheets.IDragFillBlockEventArgs) => void;
    dragFillBlockCompleted?: (type: IEventTypeObj, args: GC.Spread.Sheets.IDragFillBlockCompletedEventArgs) => void;
    editStarting?: (type: IEventTypeObj, args: GC.Spread.Sheets.IEditStartingEventArgs) => void;
    editChange?: (type: IEventTypeObj, args: GC.Spread.Sheets.IEditChangeEventArgs) => void;
    editEnding?: (type: IEventTypeObj, args: GC.Spread.Sheets.IEditEndingEventArgs) => void;
    editEnd?: any;
    editEnded?:	(type: IEventTypeObj, args: GC.Spread.Sheets.IEditEndedEventArgs) => void;
    rangeGroupStateChanging?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeGroupStateChangingEventArgs) => void;
    rangeGroupStateChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeGroupStateChangedEventArgs) => void;
    selectionChanging?:	(type: IEventTypeObj, args: GC.Spread.Sheets.ISelectionChangingEventArgs) => void;
    selectionChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ISelectionChangedEventArgs) => void;
    sheetTabClick?:	(type: IEventTypeObj, args: GC.Spread.Sheets.ISheetTabClickEventArgs) => void;
    sheetTabDoubleClick?: (type: IEventTypeObj, args: GC.Spread.Sheets.ISheetTabDoubleClickEventArgs ) => void;
    sheetNameChanging?:	(type: IEventTypeObj, args: GC.Spread.Sheets.ISheetNameChangingEventArgs) => void;
    sheetNameChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ISheetNameChangedEventArgs) => void;
    userZooming?: (type: IEventTypeObj, args: GC.Spread.Sheets.IUserZoomingEventArgs) => void;
    userFormulaEntered?: (type: IEventTypeObj, args: GC.Spread.Sheets.IUserFormulaEnteredEventArgs) => void;
    cellChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICellChangedEventArgs) => void;
    columnChanged?:	(type: IEventTypeObj, args: GC.Spread.Sheets.IColumnChangedEventArgs) => void;
    rowChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRowChangedEventArgs) => void;
    activeSheetChanging?: (type: IEventTypeObj, args: GC.Spread.Sheets.IActiveSheetChangingEventArgs	 ) => void;
    activeSheetChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IActiveSheetChangedEventArgs) => void;
    sparklineChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ISparklineChangedEventArgs) => void;
    rangeChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IRangeChangedEventArgs) => void;
    buttonClicked?: (type: IEventTypeObj, args: GC.Spread.Sheets.IButtonClickedEventArgs) => void;
    editorStatusChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IEditorStatusChangedEventArgs) => void;
    floatingObjectChanged?:	(type: IEventTypeObj, args: GC.Spread.Sheets.IFloatingObjectChangedEventArgs) => void;
    floatingObjectSelectionChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IFloatingObjectSelectionChangedEventArgs) => void;
    pictureChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IPictureChangedEventArgs) => void;
    floatingObjectRemoving?: (type: IEventTypeObj, args: GC.Spread.Sheets.IFloatingObjectRemovingEventArgs	 ) => void;
    floatingObjectRemoved?: (type: IEventTypeObj, args: GC.Spread.Sheets.IFloatingObjectRemovedEventArgs) => void;
    pictureSelectionChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.IPictureSelectionChangedEventArgs) => void;
    floatingObjectLoaded?: (type: IEventTypeObj, args: GC.Spread.Sheets.FloatingObjectLoadedEventArgs) => void;
    touchToolStripOpening?: (type: IEventTypeObj, args: GC.Spread.Sheets.ITouchToolStripOpeningEventArgs) => void;
    commentChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICommentChangedEventArgs) => void;
    commentRemoving?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICommentRemovingEventArgs) => void;
    commentRemoved?: (type: IEventTypeObj, args: GC.Spread.Sheets.ICommentRemovedEventArgs) => void;
    slicerChanged?: (type: IEventTypeObj, args: GC.Spread.Sheets.ISlicerChangedEventArgs) => void;
    children?: React.ReactNode;
}
export declare class SpreadSheets extends React.Component<SpreadSheetsProp, any> {
}

export interface WorksheetProp {
    frozenColumnCount?: number;
    frozenRowCount?: number;
    frozenTrailingColumnCount?: number;
    frozenTrailingRowCount?: number;
    zoom?: number;
    selectionPolicy?: GC.Spread.Sheets.SelectionPolicy;
    selectionUnit?: GC.Spread.Sheets.SelectionUnit;
    name?: string;
    currentTheme?: string;
    showRowOutline?: boolean;
    showColumnOutline?: boolean;
    autoGenerateColumns?: boolean;
    allowCellOverflow?: boolean;
    frozenlineColor?: string;
    sheetTabColor?: string;
    clipBoardOptions?: GC.Spread.Sheets.ClipboardPasteOptions;
    rowHeaderAutoText?: GC.Spread.Sheets.HeaderAutoText;
    rowHeaderVisible?: boolean;
    isProtected?: boolean;
    selectionBackColor?: string;
    selectionBorderColor?: string;
    rowHeaderAutoTextIndex?: GC.Spread.Sheets.HeaderAutoText;
    dataSource?: any;
    rowCount?: number;
    colCount?: number;
    defaultStyle?: GC.Spread.Sheets.Style;
    columnHeaderVisible?: boolean;
    columnHeaderAutoText?: GC.Spread.Sheets.HeaderAutoText;
    columnHeaderAutoTextIndex?: GC.Spread.Sheets.HeaderAutoText;
    rowOutlineInfo?: any[];
    columnOutlineInfo?: any[];
    children?: React.ReactNode;
}
export declare class Worksheet extends React.Component<WorksheetProp, any> {
}

export interface ColumnProp {
    width?: number;
    visible?: boolean;
    resizable?: boolean;
    autoFit?: boolean;
    style?: GC.Spread.Sheets.Style;
    headerStyle?: GC.Spread.Sheets.Style;
    cellType?: GC.Spread.Sheets.CellTypes.Base;
    formatter?: string;
    dataField?: string;
    headerText?: string;
    children?: React.ReactNode;
}
export declare class Column extends React.Component<ColumnProp, any> {
}
