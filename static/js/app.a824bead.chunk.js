(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{93:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return X}));var n=r(0),o=r(12),l=r(23),i=r(92),c=r(24),d=r(43),u=r(91),a=r(7),s=Object(n.createContext)({});function f(){return Object(n.useContext)(s)}var h=r(15),b=r.n(h),j=r(32),p=r.n(j),O=r(41),g=r.n(O),m=r(58),y=r(4);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){var t=e.column,r=e.children,l=e.index,i=f(),c=i.debug,d=i.columns,u=i.rowHeight,a=i.panController,s=i.reIndex,h=i.columnKeyExtractor,b=t.widthValue,j=t.leftValue,p=Object(n.useRef)(new o.default.Value(1)).current,O=Object(n.useRef)(0),g=h(t),x=Object(n.useMemo)((function(){return m.default.create({onMoveShouldSetPanResponder:function(e,t){return a.current?a.current===t.stateID:(a.current=t.stateID,!0)},onPanResponderGrant:function(e,t){p.setValue(.4);var r=JSON.parse(JSON.stringify(j));c&&console.log("[reindex] grant: ",r,e.nativeEvent.locationX),O.current=r+e.nativeEvent.locationX},onPanResponderMove:function(e,t){c&&console.log("onPanResponderMove",e);var r=O.current+t.dx,n=null;for(var o of d)if(n)o.highlightValue.setValue(0);else{var l=JSON.parse(JSON.stringify(o.rightValue));Math.abs(l-r)<50?(n=o,o.highlightValue.setValue(1)):o.highlightValue.setValue(0)}},onPanResponderRelease:function(e,t){c&&console.log("onPanResponderRelease",e),p.setValue(1),a.current=null;var r=O.current+t.dx,n=null,o=-1,i=0;for(var u of d){if(!n&&h(u)!==g){var f=JSON.parse(JSON.stringify(u.rightValue));Math.abs(f-r)<50&&(n=u,o=i)}u.highlightValue.setValue(0),i++}if(n){var b=o+1;b===l||(l<o&&b--,c&&console.log("[reindex] fromIndex "+l+" toIndex "+b),s({fromIndex:l,toIndex:b}))}else c&&console.log("[reindex] not change, release at wrong position")}})}),[c,d,a,g,h,l,j,p,s]);return Object(y.jsx)(o.default.View,v(v({},x.panHandlers),{},{style:{zIndex:-1,opacity:p,width:b,height:u},children:r}))}var C=r(55);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e){var t=e.index,r=e.column,l=e.resizeable,i=void 0!==l&&l,c=r.highlightValue,d=r.widthValue,u=f(),a=u.debug,s=u.rowHeight,h=u.panController,b=u.columns,j=u.resizerWidth,p=u.borderColor,O=u.cellMinWidth,g=u.highlightBorderColor,x=u.resizeMode,v=(u.indexCellWidth,u.columnKeyExtractor),w=u.onChangeColumnSize,I=v(r),V=Object(n.useMemo)((function(){if(!i)return{panHandlers:{}};var e=null,r=null,n=!1,l=0,u=new o.default.Value(0),s=b[t+1];return m.default.create({onPanResponderTerminate:function(e,t){a&&console.log("onPanResponderTerminate",e)},onPanResponderTerminationRequest:function(e,t){return a&&console.log("onPanResponderTerminationRequest",e),!1},onPanResponderReject:function(e){a&&console.log("onPanResponderReject",e)},onMoveShouldSetPanResponder:function(e,t){return a&&console.log("onMoveShouldSetPanResponder",e,h.current,t.stateID),h.current?h.current===t.stateID:(h.current=t.stateID,!0)},onPanResponderGrant:function(){a&&console.log("onPanResponderGrant"),n=!1,c.setValue(1);var t=JSON.parse(JSON.stringify(d));d.setOffset(t),u.setOffset(t);var o=-1;if("keep-total-width"===x&&s){var i=JSON.parse(JSON.stringify(s.widthValue));o=t+i-O,s.widthValue.setOffset(i)}u.removeAllListeners(),d.removeAllListeners(),e=u.addListener((function(e){var t=e.value;n=t<O||o>-1&&t>o})),r=d.addListener((function(e){var t=e.value;l=t}))},onPanResponderMove:function(e,t){a&&console.log("resizer onPanResponderMove",h.current),u.setValue(t.dx),n||(d.setValue(t.dx),"keep-total-width"===x&&s&&s.widthValue.setValue(-t.dx))},onPanResponderRelease:function(){a&&console.log("onPanResponderRelease"),c.setValue(0),d.flattenOffset(),u.flattenOffset(),h.current=null,s&&s.widthValue.flattenOffset(),w({width:l,columnId:I}),u.removeListener(e),d.removeListener(r),n=!1}})}),[a,I,w,i,c,b,x,O,t,h,d]);return Object(y.jsx)(o.default.View,P(P({},V.panHandlers),{},{style:[{position:"absolute",top:0,left:o.default.subtract(r.rightValue,j/2),zIndex:10,height:s,width:j}],children:Object(y.jsx)(C.default,{style:[{display:"flex",alignItems:"center",width:j,height:s}],children:function(e){var t=e.hovered;return Object(y.jsx)(o.default.View,{style:[{height:s},{backgroundColor:c.interpolate({inputRange:[0,1],outputRange:[p,g]}),width:c.interpolate({inputRange:[0,1],outputRange:[1,3]})},t&&{width:3,backgroundColor:g}]})}})}))}function R(e){var t=e.resizeable,r=void 0!==t&&t,n=e.column,l=e.index,i=f(),d=i.rowHeight,u=i.borderColor,s=i.ColumnHeaderComponent,h=Object(y.jsx)(a.default,{style:{padding:4},children:Object(y.jsx)(c.default,{children:n.title})});return s&&(h="type"in s?s:Object(y.jsx)(s,{resizeable:r,columnIndex:l,column:n,field:n})),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.default.View,{style:[{overflow:"hidden",zIndex:-1,borderColor:u,borderBottomWidth:1,height:d,top:0,alignItems:"center",width:n.widthValue}],children:Object(y.jsx)(w,{column:n,index:l,children:h})}),Object(y.jsx)(V,{resizeable:r,column:n,index:l})]})}function W(){var e=f(),t=e.borderColor,r=e.indexCellWidth,n=e.columns,l=e.rowHeight,i=e.totalWidthValue,c=e.tailCellWidth,d=e.resizeable,u=e.tableWidth,s=e.HeadColumnHeaderComponent,h=e.TailColumnHeaderComponent,b=e.columnKeyExtractor,j=null,p=null;return h&&(j="type"in h?h:Object(y.jsx)(h,{})),s&&(p="type"in s?s:Object(y.jsx)(s,{})),Object(y.jsxs)(o.default.View,{style:[{width:i,minWidth:u,borderBottomWidth:1,height:l,borderColor:t,backgroundColor:"#fff",display:"flex",flexDirection:"row",justifyContent:"flex-start"}],children:[Object(y.jsx)(a.default,{style:{height:l,width:r},children:p}),n.map((function(e,t){return Object(y.jsx)(R,{resizeable:d,column:e,index:t},b(e))})),Object(y.jsx)(o.default.View,{style:{minWidth:c,height:l},children:j})]})}function E(e){var t=e.column,r=(e.columnIndex,f()),n=r.rowHeight,l=r.resizerWidth,i=r.borderColor,c=r.highlightBorderColor,d=(r.indexCellWidth,t.highlightValue);return Object(y.jsx)(o.default.View,{style:[k.wrapper,{height:n,width:l,zIndex:d.interpolate({inputRange:[0,1],outputRange:[-10,10]}),right:-l/2}],children:Object(y.jsx)(o.default.View,{style:[{height:n,backgroundColor:d.interpolate({inputRange:[0,1],outputRange:[i,c]}),width:d.interpolate({inputRange:[0,1],outputRange:[1,3]})}]})})}var k=r(13).default.create({wrapper:{position:"absolute",top:0,display:"flex",alignItems:"center"}});function S(e){var t=e.visible,r=e.color;return Object(y.jsx)(a.default,{style:[{display:t?"flex":"none",zIndex:0,position:"absolute",width:"100%",height:"100%",borderWidth:2,top:0,left:0,borderColor:r}],children:Object(y.jsx)(a.default,{style:[{width:"100%",height:"100%",borderWidth:3,top:0,left:0,borderColor:"#fff"}]})})}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){var t=e.column,r=e.row,l=e.columnId,i=e.columnIndex,c=e.rowIndex,u=e.data,a=e.rowId,s=e.hovered,h=e.pressed,b=f(),j=b.focusCell,p=b.borderColor,O=b.highlightBorderColor,m=b.rowHeight,x=b.renderCell,v=b.columnKeyExtractor,w=b.cellsMap,C=Object(n.useState)(!1),I=g()(C,2),P=I[0],V=I[1],R=Object(n.useRef)(D(D({},u),{},{columnId:l,rowId:a,blur:function(){V(!1)},focus:function(){V(!0)}})),W=Object(n.useCallback)((function(){j({rowId:a,columnId:l})}),[a,l,j]);return Object(n.useEffect)((function(){w.current.set(a+"_"+l,R.current)}),[W,w,u,a,l]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(o.default.View,{style:[{zIndex:5,position:"relative",borderColor:p,borderBottomWidth:1,height:m,alignItems:"center",width:t.widthValue,overflow:"visible"}],children:[Object(y.jsx)(S,{visible:P,color:O}),Object(y.jsx)(d.default,{style:{width:"100%",height:"100%",overflow:"hidden"},onPress:W,children:x({focused:P,focus:W,hovered:s,pressed:h,column:t,columnId:v(t),columnIndex:i,row:r,rowId:a,rowIndex:c,item:u})}),Object(y.jsx)(E,{column:t,columnIndex:i})]})})}function z(e){var t=e.item,r=e.index,l=void 0===r?0:r,i=f(),d=i.columns,u=i.columnKeyExtractor,s=i.cellsExtractor,h=i.rowHoverdBackgroundColor,b=i.rowHeight,j=i.borderColor,p=i.indexCellWidth,O=i.totalWidthValue,g=i.keyExtractor,m=i.TailCellComponent,x=i.IndexCellComponent,v=i.tableWidth,w=Object(n.useMemo)((function(){return g(t)}),[g,t]),I=null,P=Object(y.jsx)(a.default,{children:Object(y.jsx)(c.default,{children:l+1})});return m&&(I="type"in m?m:Object(y.jsx)(m,{index:l})),x&&(P="type"in x?x:Object(y.jsx)(x,{index:l})),Object(y.jsx)(o.default.View,{style:{height:b,width:O,minWidth:v},children:Object(y.jsx)(C.default,{style:function(e){var t=e.hovered;return[{display:"flex",flexDirection:"row",justifyContent:"flex-start",height:b,width:"100%",borderBottomWidth:1,borderColor:j},t&&{backgroundColor:h}]},children:function(e){var r=e.pressed,n=e.hovered;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(a.default,{style:{left:0,top:0,padding:4,height:b,width:p},children:P}),d.map((function(e,o){var i=u(e),c=s(t).find((function(e){return u(e)===i}));return Object(y.jsx)(M,{column:e,columnId:i,rowId:w,row:t,rowIndex:l,columnIndex:o,hovered:n,pressed:r,data:c},i)})),I]})}})})}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=r(90),B=r.n(F);function A(){var e=f(),t=e.borderColor,r=e.indexCellWidth,n=e.rowHeight,l=e.totalWidthValue,i=e.tableWidth,c=e.FooterIndexCellComponent,d=e.FooterCellComponent,u=null,s=null;return c&&(u="type"in c?c:Object(y.jsx)(c,{})),d&&(s="type"in d?d:Object(y.jsx)(d,{})),Object(y.jsxs)(o.default.View,{style:[{width:l,minWidth:i,borderBottomWidth:1,height:n,borderColor:t,backgroundColor:"#fff",display:"flex",flexDirection:"row",justifyContent:"flex-start"}],children:[Object(y.jsx)(a.default,{style:{height:n,width:r},children:u}),Object(y.jsx)(o.default.View,{style:{minWidth:o.default.subtract(l,r),height:n},children:s})]})}var N=["onLayout","userSelect","borderColor","style","rowHeight","TableHead","keyExtractor","data","renderItem","ListEmptyComponent"];function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){var t=e.onLayout,r=e.userSelect,l=e.borderColor,i=e.style,c=e.rowHeight,d=e.TableHead,u=e.keyExtractor,a=e.data,s=e.renderItem,f=e.ListEmptyComponent,h=B()(e,N),j=Object(n.useCallback)((function(e,t){return{length:c,offset:c*t,index:t}}),[c]);return Object(y.jsx)(o.default.FlatList,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({onLayout:t,initialNumToRender:10,style:[{userSelect:r,overflow:"auto",borderRadius:2,borderColor:l,borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1,borderBottomWidth:1},i],getItemLayout:j,maxToRenderPerBatch:1,disableVirtualization:!1,stickyHeaderIndices:[0],ListHeaderComponent:d,ListFooterComponent:A,ListEmptyComponent:f,keyExtractor:u,data:a,renderItem:s},h))}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var q=Object(n.forwardRef)((function(e,t){var r,i,d=e.debug,u=void 0!==d&&d,f=e.preventScrollWhenArrowMove,h=void 0===f||f,j=e.cellsExtractor,O=void 0===j?function(e){return e.cells}:j,m=e.columnKeyExtractor,x=void 0===m?function(e){return e.columnId}:m,v=e.keyExtractor,w=void 0===v?function(e){return e.id}:v,C=(e.useRecyclerListView,e.columns),I=e.resizeMode,P=void 0===I?"increase-total-width":I,V=e.style,R=e.data,E=e.resizeable,k=void 0===E||E,S=e.cellWidth,H=void 0===S?150:S,D=e.resizerWidth,M=void 0===D?24:D,L=e.borderColor,F=void 0===L?"#d8dee4":L,B=e.highlightBorderColor,A=void 0===B?"blue":B,N=e.indexCellWidth,J=void 0===N?40:N,q=e.tailCellWidth,U=void 0===q?100:q,X=e.rowHeight,_=void 0===X?36:X,Q=e.cellMinWidth,Y=void 0===Q?40:Q,Z=e.rowHoverdBackgroundColor,$=void 0===Z?"#f6f8fa":Z,ee=e.ColumnHeaderComponent,te=e.IndexCellComponent,re=e.TailCellComponent,ne=e.HeadColumnHeaderComponent,oe=e.TailColumnHeaderComponent,le=e.FooterIndexCellComponent,ie=e.FooterCellComponent,ce=e.renderCell,de=e.onChangeColumnSize,ue=e.onChangeColumns,ae=e.onValueChange,se=e.onEndReached,fe=e.onEndReachedThreshold,he=e.onLayout,be=Object(n.useRef)(new o.default.Value(0)).current,je=Object(n.useState)(0),pe=g()(je,2),Oe=pe[0],ge=pe[1],me=Object(n.useState)(C),ye=g()(me,2),xe=ye[0],ve=ye[1],we=Object(n.useRef)(new Map),Ce=Object(n.useRef)({}),Ie=Object(n.useMemo)((function(){var e=function(e){var t=e.columns,r=e.columnsWidth,n=void 0===r?{}:r,l=e.indexCellWidth,i=e.cellWidth,c=e.keyExtractor,d=void 0===c?function(e){return e.id}:c,u=[],a=0;for(var s of t){var f,h=T({},s);h.leftValue=0===a?new o.default.Value(l):u[a-1].rightValue,h.highlightValue=new o.default.Value(0);var b=d(s);h.widthValue=n[b]?n[b]:new o.default.Value(null!=(f=s.initialWidth)?f:i),h.rightValue=o.default.add(h.leftValue,h.widthValue),u.push(h),a++}return u}({columnsWidth:Ce.current,columns:xe,indexCellWidth:J,cellWidth:H,resizerWidth:M,tailCellWidth:U}),t={};for(var r of e)t[x(r)]=r.widthValue;return Ce.current=t,e}),[xe,J,x,H,M,U]),Pe=Object(n.useRef)({}).current,Ve=Object(n.useState)("none"),Re=g()(Ve,1)[0],We=Object(n.useRef)(),Ee=Object(n.useCallback)((function(e){We.current&&We.current.blur();var t=e.rowId,r=e.columnId,n=we.current.get(t+"_"+r);n&&(We.current=n,We.current.focus())}),[]),ke=Object(n.useCallback)((function(e){var t=e.fromIndex,r=e.toIndex,n=xe.slice(),o=n[t];return n.splice(t,1),n.splice(r,0,o),ue(n)}),[xe,ue]),Se=Object(n.useCallback)((function(e){return ce?ce(e):Object(y.jsx)(a.default,{style:{padding:4},children:Object(y.jsx)(c.default,{style:{},children:e.item.value})})}),[ce]),He=Object(n.useCallback)((function(e){var t=e.nativeEvent.layout.width;ge(t),he&&he(e)}),[he]),De=Object(n.useMemo)((function(){var e=new o.default.Value(J+U);for(var t of Ie)e=o.default.add(e,t.widthValue);return e}),[Ie,J,U]),Me=Object(n.useCallback)((function(e){de&&de(e)}),[de]),ze=Object(n.useMemo)((function(){return{debug:u,preventScrollWhenArrowMove:h,keyExtractor:w,cellsExtractor:O,columnKeyExtractor:x,tailCellWidth:U,panController:Pe,resizerWidth:M,resizeable:k,columns:Ie,cellWidth:H,borderColor:F,highlightBorderColor:A,rowHoverdBackgroundColor:$,rowHeight:_,focusCell:Ee,indexCellWidth:J,reIndex:ke,totalWidthValue:De,cellMinWidth:Y,renderCell:Se,ColumnHeaderComponent:ee,TailColumnHeaderComponent:oe,HeadColumnHeaderComponent:ne,FooterIndexCellComponent:le,FooterCellComponent:ie,TailCellComponent:re,IndexCellComponent:te,tailCellLeftValue:be,resizeMode:P,tableWidth:Oe,cellsMap:we,onChangeColumnSize:Me}}),[u,Me,h,O,x,U,ke,Pe,_,H,F,M,Ie,k,w,A,$,Ee,J,oe,re,be,Y,Se,te,ee,ne,le,ie,De,Oe,P]);return Object(n.useImperativeHandle)(t,(function(){return{getFocusedCell:function(){return We},focusCell:Ee,getColumns:function(){return xe},addColumn:function(e){ve((function(t){return[].concat(p()(t),[e])}))}}}),[Ee,xe]),r=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],i=Object(n.useCallback)((function(e){if(We.current){var t=We.current,r=t.rowId,n=t.columnId,o=R.findIndex((function(e){return w(e,0)===r})),l=xe.findIndex((function(e){return x(e,0)===n}));if("ArrowUp"===e.key){if(o>0){var i=w(R[o-1],0);h&&e.preventDefault(),Ee({columnId:n,rowId:i})}}else if("ArrowDown"===e.key){if(o<R.length-1){var c=w(R[o+1],0);h&&e.preventDefault(),Ee({columnId:n,rowId:c})}}else if("ArrowLeft"===e.key){if(l>0){var d=x(xe[l-1],0);h&&e.preventDefault(),Ee({columnId:d,rowId:r})}}else if("ArrowRight"===e.key&&l<xe.length-1){var u=x(xe[l+1],0);h&&e.preventDefault(),Ee({columnId:u,rowId:r})}}}),[R,Ee,h,xe,x,w]),Object(n.useEffect)((function(){if("web"===l.default.OS)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){var t=!1;("string"===typeof r&&e.key===r||r.includes(e.key))&&(t=!0),t&&i(e)}}),[r,i]),Object(n.useEffect)((function(){ae&&ae(ze)}),[ze,ae]),Object(y.jsx)(s.Provider,{value:ze,children:Object(n.createElement)(K,{onEndReached:se,borderColor:F,userSelect:Re,onLayout:He,style:V,data:R,rowHeight:_,TableHead:W,keyExtractor:w,onEndReachedThreshold:fe,renderItem:function(e){return Object(y.jsx)(z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){b()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})})}));q.displayName="Table";var U=[{fieldId:"f1",title:"Fileds1",initialWidth:400},{fieldId:"f2",title:"Fileds2",initialWidth:200},{fieldId:"f3",title:"Fileds3",initialWidth:200},{fieldId:"f4",title:"Fileds4"}];function X(){var e=Object(u.default)(),t=e.height,r=e.width,s=Object(n.useRef)(),f=Object(n.useRef)(new o.default.Value(100)),h=Object(n.useRef)(new o.default.Value(200)),b=Object(n.useRef)(new o.default.Value(200)),j=Object(n.useMemo)((function(){return o.default.add(o.default.add(f.current,h.current),b.current)}),[]),p=Object(n.useCallback)((function(){var e=s.current.getColumns().length;s.current.addColumn({fieldId:"f"+(e+1),title:"Fileds"+(e+1)})}),[]),O=Object(n.useCallback)((function(){console.log("onEndReached")}),[]);return Object(n.useEffect)((function(){"web"===l.default.OS&&(document.body.style.overflow="hidden",document.body.style.margin="0px"),setTimeout((function(){o.default.timing(f.current,{toValue:r-420,duration:300,useNativeDriver:!1}).start()}),2e3)}),[]),Object(y.jsxs)(i.default,{children:[Object(y.jsx)(a.default,{style:{width:"100%"},children:Object(y.jsx)(o.default.View,{style:{backgroundColor:"#af1",height:10,width:j}})}),Object(y.jsx)(q,{onChangeColumnSize:console.log,columnKeyExtractor:function(e){return e.fieldId},cellsExtractor:function(e){return e.fields},cellWidth:400,ref:s,highlightBorderColor:"blue",style:{margin:10,width:r-40,height:t-40},columns:U,data:Array.from({length:1e3},(function(e,t){return{id:"id"+t,fields:[{fieldId:"f1",value:""+Math.random().toString().slice(2)},{fieldId:"f2",value:""+Math.random().toString().slice(2)},{fieldId:"f3",value:""+Math.random().toString().slice(2)},{fieldId:"f4",value:""+Math.random().toString().slice(2)}]}})),IndexCellComponent:function(e){var t=e.index;return Object(y.jsx)(a.default,{children:Object(y.jsxs)(c.default,{numberOfLines:1,style:{},children:[">",t+1]})})},TailCellComponent:function(){return Object(y.jsx)(a.default,{children:Object(y.jsx)(c.default,{children:"[]"})})},HeadColumnHeaderComponent:function(){return Object(y.jsx)(a.default,{children:Object(y.jsx)(d.default,{onPress:p,children:Object(y.jsx)(c.default,{children:"o"})})})},TailColumnHeaderComponent:function(){return Object(y.jsx)(a.default,{children:Object(y.jsx)(d.default,{onPress:p,children:Object(y.jsx)(c.default,{children:"Add column"})})})},ColumnHeaderComponent:function(e){var t=e.column;return Object(y.jsx)(a.default,{style:{padding:4},children:Object(y.jsx)(c.default,{style:{color:"green"},children:t.title})})},FooterIndexCellComponent:function(){return Object(y.jsx)(a.default,{children:Object(y.jsx)(c.default,{children:"+"})})},FooterCellComponent:function(){return Object(y.jsx)(a.default,{children:Object(y.jsx)(c.default,{children:"..."})})},renderCell:function(e){var t=e.item;return Object(y.jsxs)(a.default,{style:{padding:4},children:[Object(y.jsx)(c.default,{style:{color:"blue"},children:t?t.value:""}),Object(y.jsx)(d.default,{onPress:function(e){e.preventDefault()},style:{position:"absolute",right:4,top:4,borderRadius:6,borderColor:"#eee",borderWidth:1,backgroundColor:"#fff",paddingHorizontal:8,paddingVertical:4},children:Object(y.jsx)(c.default,{children:"\u2193"})})]})},onEndReached:O,onChangeColumns:function(e){console.log(e)}})]})}},95:function(e,t,r){e.exports=r(123)}},[[95,1,2]]]);
//# sourceMappingURL=app.a824bead.chunk.js.map