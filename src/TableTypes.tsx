import { MutableRefObject, ReactNode } from "react";
import { Animated, FlatListProps } from "react-native";

/**
 * The total width change mode when resizing
 * default value: `increase-total-width`
 *
 * `keep-total-width`: total width won't change, next column
 * will decrease
 *
 * `increase-total-width`: next column won't change, total
 * width will increase
 */
export type TableResizeMode = "keep-total-width" | "increase-total-width";

export type InternalField = {
  title: string;
  leftValue: Animated.Value;
  widthValue: Animated.Value;
};

export type SupportedFlatListProps = Omit<
  FlatListProps<any>,
  | "ItemSeparatorComponent"
  | "ListFooterComponent"
  | "ListFooterComponentStyle"
  | "ListHeaderComponent"
  | "ListHeaderComponentStyle"
  | "columnWrapperStyle"
  | "horizontal"
  | "numColumns"
  | "renderItem"
>;

export type TableContextState = {
  debug: boolean;
  panController: any;
  resizerWidth: number;
  resizeable: boolean;
  totalWidthValue: Animated.Value;
  tailCellLeftValue: Animated.Value;
  columns: any[];
  keyExtractor: any;
  // key of column
  columnKeyExtractor: any;
  // cells key of row
  cellsExtractor: any;
  cellWidth: number;
  borderColor: any;
  highlightBorderColor: any;
  rowHoverdBackgroundColor: any;
  rowHeight: number;
  focusCell: (options: any) => void;
  indexCellWidth: number;
  reIndex: (options: { fromIndex: number; toIndex: number }) => void;
  onChangeColumnSize: (props: { width: number; columnId: string }) => void;
  /**
   * 自定义列头
   */
  ColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  TailColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  HeadColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  TailCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  IndexCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  FooterCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  FooterIndexCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  /**
   * 最小单元格宽度
   */
  cellMinWidth: number;
  resizeMode: TableResizeMode;
  renderCell: (options: any) => ReactNode;
  /**
   * 表格容器宽度
   */
  tableWidth: number;
  tailCellWidth: number;
  cellsMap: MutableRefObject<Map<string, any>>;
  /**
   * 当使用方向键切换选中单元格时禁用滚动
   */
  preventScrollWhenArrowMove: boolean;
};

export type TableProps = SupportedFlatListProps & {
  debug?: boolean;
  /**
   * 行高
   */
  rowHeight?: number;
  /**
   * 单元格宽度
   */
  cellWidth?: number;
  /**
   * 最小单元格宽度
   */
  cellMinWidth?: number;
  /**
   * The widget width of column resizer
   */
  resizerWidth?: number;
  style?: any;
  // key of column
  columnKeyExtractor?: any;
  // key of cells
  cellsExtractor?: any;
  resizeable?: boolean;
  onValueChange?: any;

  resizeMode?: TableResizeMode;
  onChangeColumnSize?: (props: { width: number; columnId: string }) => void;

  /**
   * custom cell renderer
   */
  renderCell?: (options: any) => ReactNode;
  CellComponent?: React.ComponentType<any>;

  /**
   * custom column header component
   */
  ColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  TailColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  HeadColumnHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  TailCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  IndexCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  FooterCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  FooterIndexCellComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  /**
   * border color
   */
  borderColor?: string;
  /**
   * highlight cell's border color
   */
  highlightBorderColor?: string;

  columns: any[];
  onChangeColumns: (columns: any) => void;
  /**
   * 序号单元格宽度
   */
  indexCellWidth?: number;
  tailCellWidth?: number;
  /**
   * 悬浮行背景颜色
   */
  rowHoverdBackgroundColor?: string;
  useRecyclerListView?: boolean;

  /**
   * 当使用方向键切换选中单元格时禁用滚动
   */
  preventScrollWhenArrowMove?: boolean;
};

export type TableInstance = {
  addColumn: (column: any) => void;
  getColumns: () => any[];
  focusCell: (options: { rowId: string; columnId: string }) => void;
  getFocusedCell: () => MutableRefObject<
    Record<string, any> & {
      focus: () => void;
      blur: () => void;
      rowId: string;
      columnId: string;
    }
  >;
};
