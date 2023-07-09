"use strict";(self.webpackChunkretro_react=self.webpackChunkretro_react||[]).push([[795],{"./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kC:()=>Flex,xu:()=>Box$1});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@theme-ui/css/dist/theme-ui-css.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0;return function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var _excluded$g=["__themeKey","__css","variant","css","sx","as"],boxSystemProps=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],__isBoxStyledSystemProp=function __isBoxStyledSystemProp(prop){return boxSystemProps.includes(prop)},Box$1=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Box(props,ref){var theme=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.u)(),_ref=props,_ref$__themeKey=_ref.__themeKey,__themeKey=void 0===_ref$__themeKey?"variants":_ref$__themeKey,__css=_ref.__css,variant=_ref.variant,cssProp=_ref.css,sx=_ref.sx,_ref$as=_ref.as,Component=void 0===_ref$as?"div":_ref$as,rest=_objectWithoutPropertiesLoose(_ref,_excluded$g),__cssStyles=(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.iv)(__css)(theme),variantInTheme=(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,__themeKey+"."+variant)||(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.U2)(theme,variant),variantStyles=variantInTheme&&(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.iv)(variantInTheme)(theme),sxPropStyles=(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.iv)(sx)(theme),systemPropsStyles=(0,_theme_ui_css__WEBPACK_IMPORTED_MODULE_2__.iv)(function pickSystemProps(props){for(var _step,res={},_iterator=_createForOfIteratorHelperLoose(boxSystemProps);!(_step=_iterator()).done;){var key=_step.value;res[key]=props[key]}return res}(rest))(theme),style=[{boxSizing:"border-box",margin:0,minWidth:0},__cssStyles,variantStyles,sxPropStyles,systemPropsStyles,cssProp];return boxSystemProps.forEach((function(name){delete rest[name]})),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.tZ)(Component,_extends({ref,css:style},rest))})),Flex=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function Flex(props,ref){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box$1,_extends({ref},props,{sx:_extends({display:"flex"},props.sx)}))})),getProps=function getProps(test){return function(props){var next={};for(var key in props)test(key||"")&&(next[key]=props[key]);return next}},MRE=/^m[trblxy]?$/;getProps((function(k){return MRE.test(k)})),getProps((function(k){return!MRE.test(k)}));var _excluded$d=["size"],SVG=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function SVG(_ref,ref){var _ref$size=_ref.size,size=void 0===_ref$size?24:_ref$size,svgProps=_extends({xmlns:"http://www.w3.org/2000/svg",width:size,height:size,viewBox:"0 0 24 24",fill:"currentcolor"},_objectWithoutPropertiesLoose(_ref,_excluded$d));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box$1,_extends({ref,as:"svg"},svgProps))}));SVG.displayName="SVG";getProps(__isBoxStyledSystemProp),getProps((function(str){return!__isBoxStyledSystemProp(str)}))}}]);