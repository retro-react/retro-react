"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[5663],{"./src/components/input/__stories__/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Multiline:()=>Multiline,Outlined:()=>Outlined,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const sizeStyles={small:"1rem",medium:"1.2rem"},Input=(0,emotion_styled_base_browser_esm.Z)("input",{target:"e1m1lcmi0"})("padding:0.5rem 1rem;border-radius:0.5rem;font-family:'Trebuchet MS',Helvetica,sans-serif;",(_ref=>{let{$color,$variant,theme}=_ref;return((variant,color)=>{const filledStyles=(0,emotion_react_browser_esm.iv)("background-color:",color,";background-image:linear-gradient(",(0,rgba.m)(color,.8),", ",(0,rgba.m)(color,.8),"),url(",(0,getPatternScheme.q)("stripes"),");box-shadow:inset 1px 1px 2px ",colors.E5,",inset -1px -1px 2px ",(0,rgba.m)(colors.Cj,.45),";filter:contrast(130%) brightness(100%);color:",colors.Cj,";font-weight:normal;text-shadow:1px 1px 2px ",colors.E5,";&::placeholder{color:",(0,rgba.m)(colors.Cj,.65),";text-shadow:1px 1px 2px ",colors.E5,";user-select:none;}","");switch(variant){case"outlined":return(0,emotion_react_browser_esm.iv)("background:",colors.Cj,";box-shadow:inset 1px 1px 1px ",color," inset -1px -1px 1px ",color,",2px 2px 2px ",color,",-2px -2px 2px ",color,";border-color:",color,";color:",colors.E5,";&::placeholder{color:",color,";text-shadow:1px 1px 1px ",colors.Cj,";user-select:none;}","");case"filled":return color===colors.zF?(0,emotion_react_browser_esm.iv)("background:linear-gradient(",(0,rgba.m)(colors.E5,.8),", ",(0,rgba.m)(colors.E5,.8),"),url(",(0,getPatternScheme.q)("stripes"),");box-shadow:inset 1px 1px 2px ",colors.zF,",inset -1px -1px 2px ",colors.GW,";filter:contrast(130%) brightness(100%);color:",colors.w,";font-weight:normal;text-shadow:0 0 2px ",colors.E5,";&::placeholder{color:",(0,rgba.m)(colors.Cj,.45),";text-shadow:1px 1px 2px ",colors.E5,";}",""):filledStyles;default:return filledStyles}})($variant,"greyscale"===$color?colors.zF:(0,getColorScheme.Z)($color,theme))})," ",(_ref2=>{let{$color,$variant}=_ref2;return"filled"===$variant&&"warn"===$color&&`\n\t\tcolor: ${colors.E5};\n\t\ttext-shadow: 0 0 2px ${(0,rgba.m)(colors.E5,.4)};\n\n\t\t&::placeholder {\n\t\t\tcolor: ${(0,rgba.m)(colors.E5,.7)};\n\t\t\ttext-shadow: 1px 1px 1px ${(0,rgba.m)(colors.zF,.4)};\n\t\t\t\n\t\t}\n\t\t`})," ",(_ref3=>{let{$size}=_ref3;return`\n\t\tfont-size: ${sizeStyles[$size]||$size};\n\t`})," ",(_ref4=>{let{$rounded}=_ref4;return $rounded&&"\n\t\tborder-radius: 1rem;\n\t"})," ",(_ref5=>{let{$multiline,theme,$variant,$color}=_ref5;return $multiline&&(0,emotion_react_browser_esm.iv)("resize:none;overflow:auto;&::-webkit-scrollbar{width:0.5rem;}&::-webkit-scrollbar-track{background:",(0,alterColor.a)("greyscale"===$color?colors.zF:(0,getColorScheme.Z)($color,theme),50),";}&::-webkit-scrollbar-thumb{background:",(0,alterColor.a)("greyscale"===$color?colors.zF:(0,getColorScheme.Z)($color,theme),-50),";border-radius:0.5rem;}&::-webkit-scrollbar-thumb:hover{background:",colors.w,";}","")})," &:disabled{cursor:not-allowed;opacity:0.6;}&:focus{outline:none;box-shadow:0 0 0.05rem 0.05rem ",(props=>(0,rgba.m)("greyscale"===props.$color?colors.Cj:(0,getColorScheme.Z)(props.$color,props.theme),.6)),";}");try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"string"}},$rounded:{defaultValue:null,description:"",name:"$rounded",required:!0,type:{name:"boolean"}},$multiline:{defaultValue:null,description:"",name:"$multiline",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.styled.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/input/Input.styled.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Input_Input=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,variant="filled",color="primary",size="small",rounded=!0,multiline=!1,sx,...rest}=_ref;const Component=multiline?"textarea":"input";return(0,theme_ui_jsx_runtime_esm.tZ)(Input,{as:Component,ref,id,$variant:variant,$rounded:rounded,$multiline:multiline,$color:color,$size:size,className:(0,classNames.A)("input-root",className,commonClassNames.Z),sx,...rest})}));Input_Input.displayName="Input";try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"Inputs are used to collect user provided information.",displayName:"Input",props:{variant:{defaultValue:{value:"filled"},description:"The variant of the Input.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},rounded:{defaultValue:{value:"true"},description:"Rounded corners for the Input.",name:"rounded",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"small"},description:"The size of the Input.",name:"size",required:!1,type:{name:"string"}},multiline:{defaultValue:{value:"false"},description:"Add a multiline Input for longer text. Replaces the `input` element with a `textarea` element.\nWith `multiline` enabled, you can also pass `rows` and `cols` props to the Input.",name:"multiline",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input_stories={title:"Forms/Input",component:Input_Input,argTypes:{size:{options:["small","medium"],control:{type:"radio"}}}},Template=args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Input_Input,{...args}),"  ",(0,jsx_runtime.jsx)(Input_Input,{...args,disabled:!0})]}),Default=Template.bind({});Default.args={placeholder:"Placeholder",onChange:(0,dist.aD)("onChange"),variant:"filled",color:"primary",size:"medium",rounded:!1,multiline:!1,sx:{width:"250px"}};const Multiline=Template.bind({});Multiline.args={placeholder:"Placeholder",onChange:(0,dist.aD)("onChange"),variant:"filled",color:"primary",size:"medium",rounded:!1,multiline:!0,rows:5,sx:{width:"250px"}};const Outlined=Template.bind({});Outlined.args={placeholder:"Placeholder",onChange:(0,dist.aD)("onChange"),variant:"outlined",color:"primary",size:"medium",rounded:!1,multiline:!1,sx:{width:"250px"}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  return <>\n            <Input {...args} />\n            &nbsp;&nbsp;\n            <Input {...args} disabled />\n        </>;\n}",...Default.parameters?.docs?.source}}},Multiline.parameters={...Multiline.parameters,docs:{...Multiline.parameters?.docs,source:{originalSource:"args => {\n  return <>\n            <Input {...args} />\n            &nbsp;&nbsp;\n            <Input {...args} disabled />\n        </>;\n}",...Multiline.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"args => {\n  return <>\n            <Input {...args} />\n            &nbsp;&nbsp;\n            <Input {...args} disabled />\n        </>;\n}",...Outlined.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Multiline","Outlined"]},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,X2:()=>HIGHLIGHT,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>alterColorEnhanced,d:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_},alterColor=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=(r+amount)%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},alterColorEnhanced=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16),g=parseInt(hex.substring(3,5),16),b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=Math.min(Math.max(r+amount,0),255),g=Math.min(Math.max(g+amount,0),255),b=Math.min(Math.max(b+amount,0),255);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.X2;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",stars_pattern_namespaceObject=__webpack_require__.p+"static/media/stars_pattern.69f38225.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;case"stars":return stars_pattern_namespaceObject;default:return pattern}}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>rgba});const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}}}]);