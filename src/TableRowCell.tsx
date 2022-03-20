import React, { useCallback, useRef, useState } from "react";
import { Animated, TouchableOpacity } from "react-native";

import { ColumnSeperater } from "./ColumnSeperater";
import { useTable } from "./TableContext";
import { TableRowCellHighlight } from "./TableRowCellHighlight";

export function TableRowCell({
  column,
  row,
  columnIndex,
  rowIndex,
  data,
  rowId,
}: {
  rowId: string;
  data?: any;
  resizeable?: boolean;
  column: any;
  row: any;
  columnIndex: number;
  rowIndex: number;
}) {
  const {
    focusCell,
    borderColor,
    highlightBorderColor,
    rowHeight,
    renderCell,
    columnKeyExtractor,
  } = useTable();

  const [isFocused, setIsFocused] = useState(false);

  const cellRef = useRef({
    blur() {
      setIsFocused(false);
    },
    focus() {
      setIsFocused(true);
    },
  });

  const onPress = useCallback(() => {
    focusCell({ cellRef });
  }, [focusCell]);

  return (
    <>
      <Animated.View
        style={[
          {
            zIndex: 5,
            position: "relative",
            borderColor,
            borderBottomWidth: 1,
            height: rowHeight,
            alignItems: "center",
            width: column.widthValue,
            /**
             * Set overflow visible to keep seperator visible
             */
            overflow: "visible",
          },
        ]}
      >
        <TableRowCellHighlight
          visible={isFocused}
          color={highlightBorderColor}
        />
        <TouchableOpacity
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          onPress={onPress}
        >
          {renderCell({
            column,
            columnId: columnKeyExtractor(column),
            columnIndex,
            row,
            rowId,
            rowIndex,
            item: data,
          })}
        </TouchableOpacity>
        <ColumnSeperater column={column} columnIndex={columnIndex} />
      </Animated.View>
    </>
  );
}
