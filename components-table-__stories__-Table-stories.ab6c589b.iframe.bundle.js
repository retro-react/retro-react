"use strict";(self.webpackChunkretro_react=self.webpackChunkretro_react||[]).push([[7114],{"./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createStyled});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_memoize_esm=__webpack_require__("./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"),reactPropsRegex=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,isPropValid=(0,emotion_memoize_esm.Z)((function(prop){return reactPropsRegex.test(prop)||111===prop.charCodeAt(0)&&110===prop.charCodeAt(1)&&prop.charCodeAt(2)<91})),emotion_element_c39617d8_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_use_insertion_effect_with_fallbacks_browser_esm=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function testOmitPropsOnComponent(key){return"theme"!==key},getDefaultShouldForwardProp=function getDefaultShouldForwardProp(tag){return"string"==typeof tag&&tag.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function composeShouldForwardProps(tag,options,isReal){var shouldForwardProp;if(options){var optionsShouldForwardProp=options.shouldForwardProp;shouldForwardProp=tag.__emotion_forwardProp&&optionsShouldForwardProp?function(propName){return tag.__emotion_forwardProp(propName)&&optionsShouldForwardProp(propName)}:optionsShouldForwardProp}return"function"!=typeof shouldForwardProp&&isReal&&(shouldForwardProp=tag.__emotion_forwardProp),shouldForwardProp},Insertion=function Insertion(_ref){var cache=_ref.cache,serialized=_ref.serialized,isStringTag=_ref.isStringTag;return(0,emotion_utils_browser_esm.hC)(cache,serialized,isStringTag),(0,emotion_use_insertion_effect_with_fallbacks_browser_esm.L)((function(){return(0,emotion_utils_browser_esm.My)(cache,serialized,isStringTag)})),null},createStyled=function createStyled(tag,options){var identifierName,targetClassName,isReal=tag.__emotion_real===tag,baseTag=isReal&&tag.__emotion_base||tag;void 0!==options&&(identifierName=options.label,targetClassName=options.target);var shouldForwardProp=composeShouldForwardProps(tag,options,isReal),defaultShouldForwardProp=shouldForwardProp||getDefaultShouldForwardProp(baseTag),shouldUseAs=!defaultShouldForwardProp("as");return function(){var args=arguments,styles=isReal&&void 0!==tag.__emotion_styles?tag.__emotion_styles.slice(0):[];if(void 0!==identifierName&&styles.push("label:"+identifierName+";"),null==args[0]||void 0===args[0].raw)styles.push.apply(styles,args);else{0,styles.push(args[0][0]);for(var len=args.length,i=1;i<len;i++)styles.push(args[i],args[0][i])}var Styled=(0,emotion_element_c39617d8_browser_esm.w)((function(props,cache,ref){var FinalTag=shouldUseAs&&props.as||baseTag,className="",classInterpolations=[],mergedProps=props;if(null==props.theme){for(var key in mergedProps={},props)mergedProps[key]=props[key];mergedProps.theme=react.useContext(emotion_element_c39617d8_browser_esm.T)}"string"==typeof props.className?className=(0,emotion_utils_browser_esm.fp)(cache.registered,classInterpolations,props.className):null!=props.className&&(className=props.className+" ");var serialized=(0,emotion_serialize_browser_esm.O)(styles.concat(classInterpolations),cache.registered,mergedProps);className+=cache.key+"-"+serialized.name,void 0!==targetClassName&&(className+=" "+targetClassName);var finalShouldForwardProp=shouldUseAs&&void 0===shouldForwardProp?getDefaultShouldForwardProp(FinalTag):defaultShouldForwardProp,newProps={};for(var _key in props)shouldUseAs&&"as"===_key||finalShouldForwardProp(_key)&&(newProps[_key]=props[_key]);return newProps.className=className,newProps.ref=ref,react.createElement(react.Fragment,null,react.createElement(Insertion,{cache,serialized,isStringTag:"string"==typeof FinalTag}),react.createElement(FinalTag,newProps))}));return Styled.displayName=void 0!==identifierName?identifierName:"Styled("+("string"==typeof baseTag?baseTag:baseTag.displayName||baseTag.name||"Component")+")",Styled.defaultProps=tag.defaultProps,Styled.__emotion_real=Styled,Styled.__emotion_base=baseTag,Styled.__emotion_styles=styles,Styled.__emotion_forwardProp=shouldForwardProp,Object.defineProperty(Styled,"toString",{value:function value(){return"."+targetClassName}}),Styled.withComponent=function(nextTag,nextOptions){return createStyled(nextTag,(0,esm_extends.Z)({},options,nextOptions,{shouldForwardProp:composeShouldForwardProps(Styled,nextOptions,!0)})).apply(void 0,styles)},Styled}}},"./src/components/table/__stories__/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Pagination:()=>Pagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),arrow_icon=__webpack_require__("./src/assets/svg/arrow_icon.svg"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const TableWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ekcb7qd9"})("background-color:",colors.Cj,";",(_ref=>{let{$maxHeight}=_ref;return $maxHeight&&`\n\t\t\tmax-height: ${$maxHeight};\n\t\t\toverflow: auto;\n\n\t\t\t& .retro-table-header {\n\t\t\t\tposition: sticky;\n\t\t\t\ttop: 0;\n\t\t\t}\n\t`}),";"),TableContainer=(0,emotion_styled_base_browser_esm.Z)("table",{target:"ekcb7qd8"})("font-family:'Trebuchet MS',Helvetica,sans-serif;width:100%;",(_ref2=>{let{$bordered,$maxHeight,$color}=_ref2;return $bordered&&`\n\t\t& td, & th {\n\t\t\tborder: 1px solid ${(0,polished_esm.$n)(.1,(0,getColorScheme.Z)($color))};\n\n\t\t\t${$maxHeight&&"border-top: 0 solid black;"}\n\t\t}\n\t`})," ",(_ref3=>{let{$maxHeight}=_ref3;return $maxHeight?"\n\t\t\tborder-collapse: collapse;\n\t\t":"\n\t\tborder-collapse: separate;\n\t\tborder-spacing: 0;\n\t"}),";"),TableHeader=(0,emotion_styled_base_browser_esm.Z)("thead",{target:"ekcb7qd7"})({name:"1khn195",styles:"box-sizing:border-box"}),TableHeaderCell=(0,emotion_styled_base_browser_esm.Z)("th",{target:"ekcb7qd6"})("box-sizing:border-box;background-color:",(_ref4=>{let{$color}=_ref4;return(0,getColorScheme.Z)($color)}),";padding:8px;width:",(props=>props.width||"auto"),";text-align:",(props=>props.align||"left"),";z-index:2;",(_ref5=>{let{$sortable,sortDirection}=_ref5;return $sortable&&`\n\t\tcursor: pointer;\n\n\t\t&:after {\n\t\t\tcontent: ${"ascending"===sortDirection?"'▲'":"descending"===sortDirection?"'▼'":"''"};\n\t\t\tmargin-left: 5px;\n\t\t}\n\t`})," color:",(_ref6=>{let{$color}=_ref6;return"warn"===$color||"greyscale"===$color?colors.E5:colors.Cj}),";"),TableCell=(0,emotion_styled_base_browser_esm.Z)("td",{target:"ekcb7qd5"})("border:1px solid transparent;padding:8px;width:",(props=>props.width||"auto"),";text-align:",(props=>props.align||"left"),";"),Tr=(0,emotion_styled_base_browser_esm.Z)("tr",{target:"ekcb7qd4"})((_ref7=>{let{$striped,$color}=_ref7;return $striped&&`\n\t\t&:nth-of-type(even) {\n\t\t\tbackground-color: ${"greyscale"===$color?colors.w:"warn"===$color?(0,polished_esm.$n)(.2,(0,getColorScheme.Z)($color)):(0,polished_esm.$n)(.4,(0,getColorScheme.Z)($color))};\n\t\t}\n\t`})," ",(_ref8=>{let{$isRowClickEnabled,$color}=_ref8;return $isRowClickEnabled&&`\n\t\t&:hover {\n\t\t\tbackground-color: ${"greyscale"===$color?(0,polished_esm.$n)(.2,colors.Hr):"warn"===$color?(0,polished_esm.$n)(.1,(0,getColorScheme.Z)($color)):(0,polished_esm.$n)(.2,(0,getColorScheme.Z)($color))};\n\t\t}\n\t`}),";"),PaginationContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ekcb7qd3"})("font-family:'Trebuchet MS',Helvetica,sans-serif;background-color:",colors.Cj,";display:flex;justify-content:end;align-items:center;padding:10px 0;",(_ref9=>{let{$bordered}=_ref9;return $bordered&&"\n\t\tborder: 1px solid #ddd;\n\t\tborder-top: none;\n\t"}),";"),PaginationButton=(0,emotion_styled_base_browser_esm.Z)("button",{target:"ekcb7qd2"})({color:colors.Cj,border:"none",cursor:"pointer",margin:"0 5px",borderRadius:"5px","&:disabled":{cursor:"not-allowed"}},""),PaginationIcon=(0,emotion_styled_base_browser_esm.Z)("img",{target:"ekcb7qd1"})("width:20px;height:20px;margin-bottom:-3px;&.retro-arrow-left{transform:rotate(180deg);}",(_ref10=>{let{$disabled}=_ref10;return $disabled&&"\n\t\topacity: 0.4;\n\t"}),";"),PaginationInfo=(0,emotion_styled_base_browser_esm.Z)("span",{target:"ekcb7qd0"})({name:"1l8aalw",styles:"margin:0 10px;font-size:14px"});try{TableWrapper.displayName="TableWrapper",TableWrapper.__docgenInfo={description:"",displayName:"TableWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$maxHeight:{defaultValue:null,description:"",name:"$maxHeight",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#TableWrapper"]={docgenInfo:TableWrapper.__docgenInfo,name:"TableWrapper",path:"src/components/table/Table.styled.tsx#TableWrapper"})}catch(__react_docgen_typescript_loader_error){}try{TableContainer.displayName="TableContainer",TableContainer.__docgenInfo={description:"",displayName:"TableContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$bordered:{defaultValue:null,description:"",name:"$bordered",required:!1,type:{name:"boolean"}},$maxHeight:{defaultValue:null,description:"",name:"$maxHeight",required:!1,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#TableContainer"]={docgenInfo:TableContainer.__docgenInfo,name:"TableContainer",path:"src/components/table/Table.styled.tsx#TableContainer"})}catch(__react_docgen_typescript_loader_error){}try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"src/components/table/Table.styled.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}try{TableHeaderCell.displayName="TableHeaderCell",TableHeaderCell.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"char"'}]}},sortDirection:{defaultValue:null,description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"ascending"'},{value:'"descending"'}]}},$sortable:{defaultValue:null,description:"",name:"$sortable",required:!1,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#TableHeaderCell"]={docgenInfo:TableHeaderCell.__docgenInfo,name:"TableHeaderCell",path:"src/components/table/Table.styled.tsx#TableHeaderCell"})}catch(__react_docgen_typescript_loader_error){}try{TableCell.displayName="TableCell",TableCell.__docgenInfo={description:"",displayName:"TableCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"char"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#TableCell"]={docgenInfo:TableCell.__docgenInfo,name:"TableCell",path:"src/components/table/Table.styled.tsx#TableCell"})}catch(__react_docgen_typescript_loader_error){}try{Tr.displayName="Tr",Tr.__docgenInfo={description:"",displayName:"Tr",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$striped:{defaultValue:null,description:"",name:"$striped",required:!1,type:{name:"boolean"}},$isRowClickEnabled:{defaultValue:null,description:"",name:"$isRowClickEnabled",required:!1,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#Tr"]={docgenInfo:Tr.__docgenInfo,name:"Tr",path:"src/components/table/Table.styled.tsx#Tr"})}catch(__react_docgen_typescript_loader_error){}try{PaginationContainer.displayName="PaginationContainer",PaginationContainer.__docgenInfo={description:"",displayName:"PaginationContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$bordered:{defaultValue:null,description:"",name:"$bordered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#PaginationContainer"]={docgenInfo:PaginationContainer.__docgenInfo,name:"PaginationContainer",path:"src/components/table/Table.styled.tsx#PaginationContainer"})}catch(__react_docgen_typescript_loader_error){}try{PaginationButton.displayName="PaginationButton",PaginationButton.__docgenInfo={description:"",displayName:"PaginationButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#PaginationButton"]={docgenInfo:PaginationButton.__docgenInfo,name:"PaginationButton",path:"src/components/table/Table.styled.tsx#PaginationButton"})}catch(__react_docgen_typescript_loader_error){}try{PaginationIcon.displayName="PaginationIcon",PaginationIcon.__docgenInfo={description:"",displayName:"PaginationIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$disabled:{defaultValue:null,description:"",name:"$disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#PaginationIcon"]={docgenInfo:PaginationIcon.__docgenInfo,name:"PaginationIcon",path:"src/components/table/Table.styled.tsx#PaginationIcon"})}catch(__react_docgen_typescript_loader_error){}try{PaginationInfo.displayName="PaginationInfo",PaginationInfo.__docgenInfo={description:"",displayName:"PaginationInfo",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.styled.tsx#PaginationInfo"]={docgenInfo:PaginationInfo.__docgenInfo,name:"PaginationInfo",path:"src/components/table/Table.styled.tsx#PaginationInfo"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Table=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,columnWidths,columnAlign="left",color="greyscale",sortable=!1,headers=[],data=[],striped=!1,bordered=!0,paginationOptions={pageSize:10,initialPage:1},maxHeight,pagination=!1,onRowClick,sx,...rest}=_ref;const isRowClickEnabled=!!onRowClick,[sortedData,setSortedData]=(0,react.useState)(data),[sortConfig,setSortConfig]=(0,react.useState)(null),[currentPage,setCurrentPage]=(0,react.useState)(paginationOptions&&paginationOptions.initialPage||1),totalPages=pagination?Math.ceil(data.length/(paginationOptions?paginationOptions.pageSize:data.length)):1;(0,react.useEffect)((()=>{let sorted=[...data];null!==sortConfig&&sorted.sort(((a,b)=>a[sortConfig.key]<b[sortConfig.key]?"ascending"===sortConfig.direction?-1:1:a[sortConfig.key]>b[sortConfig.key]?"ascending"===sortConfig.direction?1:-1:0)),setSortedData(sorted)}),[sortConfig,data]);const handleSort=(0,react.useCallback)((index=>{if(!sortable)return;let direction="ascending";sortConfig&&sortConfig.key===index&&"ascending"===sortConfig.direction&&(direction="descending"),setSortConfig({key:index,direction})}),[sortable,sortConfig]);null!==sortConfig&&sortedData.sort(((a,b)=>a[sortConfig.key]<b[sortConfig.key]?"ascending"===sortConfig.direction?-1:1:a[sortConfig.key]>b[sortConfig.key]?"ascending"===sortConfig.direction?1:-1:0));const paginatedData=(0,react.useMemo)((()=>pagination&&paginationOptions?sortedData.slice((currentPage-1)*paginationOptions.pageSize,currentPage*paginationOptions.pageSize):sortedData),[pagination,paginationOptions,currentPage,sortedData]);return(0,theme_ui_jsx_runtime_esm.BX)(theme_ui_jsx_runtime_esm.HY,{children:[(0,theme_ui_jsx_runtime_esm.tZ)(TableWrapper,{$maxHeight:maxHeight,className:"table-wrapper",children:(0,theme_ui_jsx_runtime_esm.BX)(TableContainer,{$color:color,$bordered:bordered,$maxHeight:maxHeight,className:(0,classNames.A)("table-root",className,commonClassNames.Z),ref,id,sx,...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(TableHeader,{className:"retro-table-header",children:(0,theme_ui_jsx_runtime_esm.tZ)(Tr,{$color:color,children:headers.map(((header,index)=>(0,theme_ui_jsx_runtime_esm.tZ)(TableHeaderCell,{className:"retro-table-header-cell",$color:color,$sortable:sortable,onClick:()=>handleSort(index),sortDirection:index===sortConfig?.key?sortConfig?.direction:void 0,width:columnWidths&&Array.isArray(columnWidths)?columnWidths[index]:void 0,align:Array.isArray(columnAlign)?columnAlign[index]:columnAlign,children:header},`retro-header-${index}`)))})}),(0,theme_ui_jsx_runtime_esm.tZ)("tbody",{children:paginatedData.map(((row,i)=>(0,theme_ui_jsx_runtime_esm.tZ)(Tr,{className:"retro-table-row",$color:color,$striped:striped,$isRowClickEnabled:isRowClickEnabled,onClick:()=>onRowClick?.(row),sx:{cursor:isRowClickEnabled?"pointer":"inherit"},children:row.map(((cell,cellIndex)=>(0,theme_ui_jsx_runtime_esm.tZ)(TableCell,{className:"retro-table-cell",width:columnWidths&&Array.isArray(columnWidths)?columnWidths[cellIndex]:void 0,align:Array.isArray(columnAlign)?columnAlign[cellIndex]:columnAlign,children:cell},`retro-cell-${i}-${cellIndex}`)))},`retro-row-${i}`)))})]})}),pagination&&(0,theme_ui_jsx_runtime_esm.BX)(PaginationContainer,{$bordered:bordered,className:(0,classNames.A)("table-pagination",commonClassNames.Z),children:[(0,theme_ui_jsx_runtime_esm.tZ)(PaginationButton,{disabled:1===currentPage,onClick:()=>setCurrentPage(currentPage-1),className:"retro-pagination-button",children:(0,theme_ui_jsx_runtime_esm.tZ)(PaginationIcon,{$disabled:1===currentPage,className:"retro-pagination-arrow retro-arrow-left",alt:"Previous page",src:arrow_icon})}),(0,theme_ui_jsx_runtime_esm.BX)(PaginationInfo,{children:["Page ",currentPage," of ",totalPages]}),(0,theme_ui_jsx_runtime_esm.tZ)(PaginationButton,{disabled:currentPage===totalPages,onClick:()=>setCurrentPage(currentPage+1),className:"retro-pagination-button",children:(0,theme_ui_jsx_runtime_esm.tZ)(PaginationIcon,{$disabled:currentPage===totalPages,className:"retro-pagination-arrow retro-arrow-right",alt:"Next page",src:arrow_icon})})]})]})}));Table.displayName="Table";try{Table.displayName="Table",Table.__docgenInfo={description:"A table component that can be used to display data in a tabular format. It supports pagination, zebra-striping, and row click events.\n\nServer-side pagination is currently not supported. If you need to use server-side pagination, you should use a different table component.",displayName:"Table",props:{headers:{defaultValue:{value:"[]"},description:"An array of strings that will be used as the table headers.",name:"headers",required:!1,type:{name:"string[]"}},data:{defaultValue:{value:"[]"},description:"A two-dimensional array representing the content of the table. Each inner array represents a row, and each item within this array represents a\ncell within that row.",name:"data",required:!1,type:{name:"TableCell[][]"}},color:{defaultValue:{value:"greyscale"},description:"The color of the table. Accepts library colors. If this is not provided, the `greyscale` color will be used.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},striped:{defaultValue:{value:"false"},description:"A boolean that, if true, applies zebra-striping to the rows of the table.",name:"striped",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"A boolean that, if true, adds borders around the cells of the table.",name:"bordered",required:!1,type:{name:"boolean"}},onRowClick:{defaultValue:{value:"undefined"},description:"A function that is called when a user clicks on a row. It can be used to provide more interactivity, such as navigating to a different page or\nopening a modal with more information about the clicked row.",name:"onRowClick",required:!1,type:{name:"((row: TableCell[]) => void)"}},columnWidths:{defaultValue:{value:"undefined"},description:"An array that specifies the width of each column. For instance, ['20%', '30%', '50%'] would give the first column a width of 20%, the second\ncolumn a width of 30%, and the third column a width of 50%.",name:"columnWidths",required:!1,type:{name:"string[]"}},columnAlign:{defaultValue:{value:"left"},description:"An array that specifies the alignment of each column. For instance, ['left', 'right', 'center'] would align the first column to the left, the\nsecond column to the right, and the third column to the center.",name:"columnAlign",required:!1,type:{name:'"left" | "center" | "right" | "justify" | ("left" | "center" | "right" | "justify")[]'}},paginationOptions:{defaultValue:{value:"{ pageSize: 10, initialPage: 1 }"},description:"An object that specifies the pagination options for the table. If this is not provided, the default pagination options will be used.\n\nYou need to pass in an object with the following properties: `pageSize` and `initialPage`.",name:"paginationOptions",required:!1,type:{name:"PaginationOptions"}},pagination:{defaultValue:{value:"false"},description:"A boolean that, if true, will render the table with pagination. This will render a pagination component below the table that allows the user to\n navigate between pages.",name:"pagination",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:"undefined"},description:"The maximum height of the table. If the table exceeds this height, it will become scrollable. This is useful if you want to render a table with a\nlarge number of rows. This is not virtualized.",name:"maxHeight",required:!1,type:{name:"string"}},sortable:{defaultValue:{value:"false"},description:"Enable sorting on the table. This will render a sort icon on the table header. Clicking on the header will sort the table by that column.",name:"sortable",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/table/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const Table_stories={title:"Data Display/Table",component:Table,argTypes:{columnAlign:{control:{type:"select"},options:["left","center","right","justify"]}}},Basic={args:{color:"greyscale",headers:["Name","Age","City"],data:[["John","30","New York"],["Jane","25","London"],["Jack","20","Paris"],["Jimmy","25","Tokyo"]],columnWidths:["20%","30%","50%"],striped:!1,bordered:!0,pagination:!1,sortable:!0,onRowClick:void 0}},Pagination={args:{headers:["Name","Age","City"],data:[["Jane","25","London"],["Jack","20","Paris"],["Jimmy","25","Kathmandu"],["Helen","32","Belgrade"],["James","28","Tokyo"],["Steve","32","San Francisco"],["Samantha","45","Los Angeles"],["Simon","27","Berlin"],["Sara","34","Sydney"],["Stan","38","Chicago"],["Selena","23","Austin"],["Shawn","40","Toronto"],["Stella","29","New Delhi"],["Sam","35","Mumbai"],["Sophie","31","Shanghai"],["Sylvester","33","Seoul"],["Sandy","39","Dallas"],["Susan","26","Boston"],["Scott","36","Hong Kong"]],columnWidths:["20%","30%","50%"],striped:!1,bordered:!0,onRowClick:void 0,pagination:!0,sortable:!0}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'greyscale',\n    headers: ['Name', 'Age', 'City'],\n    data: [['John', '30', 'New York'], ['Jane', '25', 'London'], ['Jack', '20', 'Paris'], ['Jimmy', '25', 'Tokyo']],\n    columnWidths: ['20%', '30%', '50%'],\n    striped: false,\n    bordered: true,\n    pagination: false,\n    sortable: true,\n    onRowClick: undefined\n  }\n}",...Basic.parameters?.docs?.source}}},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:"{\n  args: {\n    headers: ['Name', 'Age', 'City'],\n    data: [['Jane', '25', 'London'], ['Jack', '20', 'Paris'], ['Jimmy', '25', 'Kathmandu'], ['Helen', '32', 'Belgrade'], ['James', '28', 'Tokyo'], ['Steve', '32', 'San Francisco'], ['Samantha', '45', 'Los Angeles'], ['Simon', '27', 'Berlin'], ['Sara', '34', 'Sydney'], ['Stan', '38', 'Chicago'], ['Selena', '23', 'Austin'], ['Shawn', '40', 'Toronto'], ['Stella', '29', 'New Delhi'], ['Sam', '35', 'Mumbai'], ['Sophie', '31', 'Shanghai'], ['Sylvester', '33', 'Seoul'], ['Sandy', '39', 'Dallas'], ['Susan', '26', 'Boston'], ['Scott', '36', 'Hong Kong']],\n    columnWidths: ['20%', '30%', '50%'],\n    striped: false,\n    bordered: true,\n    onRowClick: undefined,\n    pagination: true,\n    sortable: true\n  }\n}",...Pagination.parameters?.docs?.source},description:{story:"To enable pagination, set the `pagination` prop to `true`. You can also set the `paginationOptions` prop to configure the pagination. Here the `pageSize` is set to `10` and the `initialPage` is set to `1` as default.",...Pagination.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Pagination"];try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"To enable pagination, set the `pagination` prop to `true`. You can also set the `paginationOptions` prop to configure the pagination. Here the `pageSize` is set to `10` and the `initialPage` is set to `1` as default.",displayName:"Pagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/table/__stories__/Table.stories.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/table/__stories__/Table.stories.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,X2:()=>HIGHLIGHT,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.X2;default:return color}}},"./src/assets/svg/arrow_icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/arrow_icon.d1807b8c.svg"}}]);