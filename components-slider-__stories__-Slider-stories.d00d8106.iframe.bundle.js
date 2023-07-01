"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[7731],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/components/slider/__stories__/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),Text=__webpack_require__("./src/components/text/Text.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const commonTrackStyles=`\n  width: 100%;\n  height: 0.5rem;\n  cursor: pointer;\n  background-image: url(${(0,getPatternScheme.q)("noise")});\n  background-color: ${colors.Cj};\n  border-radius: 0.5rem;\n`,SliderWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e3q29i1"})({name:"zxsb69",styles:"position:relative;width:100%;height:100%"}),Slider=(0,emotion_styled_base_browser_esm.Z)("input",{target:"e3q29i0"})("-webkit-appearance:none;appearance:none;",commonTrackStyles," margin:1rem 0;outline:none;font-size:1.5rem;&::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.5rem;height:1.5rem;border-radius:50%;background-color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";cursor:pointer;transform:translateY(-25%);transition:transform 0.2s,background-color 0.2s;cursor:",(props=>props.disabled?"not-allowed":"pointer"),";&::before{content:'';position:absolute;width:2.5rem;height:2.5rem;border-radius:50%;background-color:transparent;top:50%;left:50%;transform:translate(-50%, -50%);}}&::-moz-range-thumb{width:1.5rem;height:1.5rem;border-radius:50%;background-color:",colors._8,";cursor:pointer;transition:transform 0.2s,background-color 0.2s;}&::-ms-thumb{width:1.5rem;height:1.5rem;border-radius:50%;background-color:",colors._8,";cursor:pointer;margin-top:0;transition:transform 0.2s,background-color 0.2s;}&::-webkit-slider-runnable-track{",commonTrackStyles,";}&::-moz-range-track{",commonTrackStyles,";}&::-ms-track{",commonTrackStyles,";}");try{SliderWrapper.displayName="SliderWrapper",SliderWrapper.__docgenInfo={description:"",displayName:"SliderWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/slider/Slider.styled.tsx#SliderWrapper"]={docgenInfo:SliderWrapper.__docgenInfo,name:"SliderWrapper",path:"src/components/slider/Slider.styled.tsx#SliderWrapper"})}catch(__react_docgen_typescript_loader_error){}try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},$value:{defaultValue:null,description:"",name:"$value",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/slider/Slider.styled.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/components/slider/Slider.styled.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Slider_Slider=(0,react.forwardRef)(((_ref,ref)=>{let{id,sx,className,value=0,min=0,max=100,step=1,color="primary",onChange,disabled=!1,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(SliderWrapper,{className:(0,classNames.A)("slider-root",className,commonClassNames.Z),children:(0,theme_ui_jsx_runtime_esm.tZ)(Slider,{$color:color,$value:value,ref,id,sx,className:"slider-input",type:"range",min,max,step,value,onChange:event=>{onChange&&onChange(parseFloat(event.target.value))},disabled,...rest})})}));Slider_Slider.displayName="Slider";try{Slider_Slider.displayName="Slider",Slider_Slider.__docgenInfo={description:"Sliders allow users to make selections from a range of values.",displayName:"Slider",props:{value:{defaultValue:{value:"0"},description:"The value of the Slider.",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"The minimum allowed value of the Slider.",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"The maximum allowed value of the Slider.",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"The granularity the Slider can step through values.",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:{value:"undefined"},description:"Callback fired when the value changes.\n@param value The new value of the Slider.",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the Slider will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"The color of the Slider.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/slider/Slider.tsx#Slider"]={docgenInfo:Slider_Slider.__docgenInfo,name:"Slider",path:"src/components/slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Slider_stories={title:"Forms/Slider",component:Slider_Slider},Template=args=>{const[value,setValue]=react.useState(args.value),[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return(0,jsx_runtime.jsxs)("div",{style:{width:"500px"},children:[(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:value}),(0,jsx_runtime.jsx)(Slider_Slider,{...args,onChange:value=>{setValue(value),updateArgs({value})},value})]})};Template.displayName="Template";const Basic=Template.bind({});Basic.args={value:50,min:0,max:100,step:1,color:"primary",disabled:!1},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = React.useState(args.value);\n  const [, updateArgs] = useArgs();\n  const handleChange = (value: number) => {\n    setValue(value);\n    updateArgs({\n      value\n    });\n  };\n  return <div style={{\n    width: '500px'\n  }}>\n            <Text variant=\"paragraph\">{value}</Text>\n            <Slider {...args} onChange={handleChange} value={value} />\n        </div>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.F4`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.iv)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>(0,emotion_react_browser_esm.iv)("font-size:",fontSizeForVariant(props.$variant),";font-weight:",props.$variant.startsWith("h")?"700":"400",";",fontSizeForBreakpoint(props.$variant),";",""))," color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";",(props=>"rainbow"===props.$color?(0,emotion_react_browser_esm.iv)("background:linear-gradient(to right, ",colors.BW.join(","),");-webkit-background-clip:text;-webkit-text-fill-color:transparent;",""):""),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest}=_ref;const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,X2:()=>HIGHLIGHT,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.X2;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",stars_pattern_namespaceObject=__webpack_require__.p+"static/media/stars_pattern.69f38225.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;case"stars":return stars_pattern_namespaceObject;default:return pattern}}}}]);
//# sourceMappingURL=components-slider-__stories__-Slider-stories.d00d8106.iframe.bundle.js.map