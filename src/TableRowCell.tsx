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
  hovered,
  pressed,
}: {
  pressed: boolean;
  rowId: string;
  data?: any;
  resizeable?: boolean;
  column: any;
  row: any;
  columnIndex: number;
  rowIndex: number;
  hovered: boolean;
}) {
  const {
    focusCell,
    borderColor,
    highlightBorderColor,
    rowHeight,
    renderCell,
    columnKeyExtractor,
  } = useTable();

  const [focused, setIsFocused] = useState(false);

  const cellRef = useRef({
    blur() {
      setIsFocused(false);
    },
    focus() {
      setIsFocused(true);
    },
  });

  const focus = useCallback(() => {
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
        <TableRowCellHighlight visible={focused} color={highlightBorderColor} />
        <TouchableOpacity
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          onPress={focus}
        >
          {renderCell({
            focused,
            focus,
            hovered,
            pressed,
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
