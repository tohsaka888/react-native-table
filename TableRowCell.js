import React, {
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import {
  SafeAreaView,
  Pressable,
  Text,
  View,
  StyleSheet,
  Animated,
  PanResponder,
  useAnimated,
  TouchableOpacity,
} from 'react-native';
import { TableContext, useTable } from './TableContext';
import { ColumnSeperater } from './ColumnSeperater';

export function TableRowCell({
  resizeable = false,
  field,
  index,
  data,
  rowId,
}: {
  rowId: string,
  data: any,
  resizeable?: boolean,
  field: any,
  index: number,
}) {
  const {
    focusCell,
    borderColor,
    highlightBorderColor,
    rowHeight,
    focusedField,
    focusedRow,
    keyExtractor,
  } = useTable();

  const onPress = useCallback(() => {
    focusCell({ fieldId: field.fieldId, rowId });
  }, [focusCell, field.fieldId, rowId]);

  const isFocused = useMemo(() => {
    return focusedRow === rowId && focusedField === field.fieldId;
  }, [focusedRow, focusedField, rowId, field.fieldId]);

  return (
    <>
      <Animated.View
        style={[
          {
            zIndex: 5,
            position: 'absolute',
            top: 0,
            borderColor,
            borderBottomWidth: 1,
            padding: 4,
            height: rowHeight,
            overflow: 'hidden',
            textAligh: 'center',
          },
          { left: field.leftValue, width: field.widthValue },
        ]}>
        {isFocused && (
          <View
            style={[
              {
                zIndex: 0,
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderWidth: 2,
                top: 0,
                left: 0,
                borderColor: highlightBorderColor,
              },
            ]}>
            <View
              style={[
                {
                  width: '100%',
                  height: '100%',
                  borderWidth: 3,
                  top: 0,
                  left: 0,
                  borderColor: '#fff',
                },
              ]}></View>
          </View>
        )}
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
          <Text
            style={{
              whiteSpace: 'wrap',
              wordBreak: 'break-all',
            }}>
            {data.value}
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <ColumnSeperater field={field}></ColumnSeperater>
    </>
  );
}
