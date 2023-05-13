"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[2277],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/components/checkbox/__stories__/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Primary:()=>Primary,Secondary:()=>Secondary,Success:()=>Success,Warn:()=>Warn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),Text=__webpack_require__("./src/components/text/Text.tsx"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const Checkbox=(0,emotion_styled_base_browser_esm.Z)("input",{target:"enopmfl0"})("-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;display:inline-flex;align-items:center;justify-content:center;position:relative;height:1.5rem;width:1.5rem;border-radius:0.25rem;cursor:pointer;background-image:linear-gradient(\n\t\t\tto bottom,\n\t\t\t",(props=>(0,alterColor.a)((0,getColorScheme.Z)(props.$color,props.theme),-20)),",\n\t\t\t",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),"\n\t\t),url(",(0,getPatternScheme.q)("noise"),");box-shadow:inset 1px 1px 2px ",colors.E5," inset -1px -1px 2px ",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";&::before{content:'';position:absolute;top:0.25rem;left:0.25rem;width:1rem;height:1rem;border-radius:50%;background-color:",(props=>(0,alterColor.a)((0,getColorScheme.Z)(props.$color,props.theme),75)),";box-shadow:inset 1px 1px 12px ",colors.E5," inset -1px -1px 10px ",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";opacity:0;transition:opacity 0.2s ease-in-out;}&:checked::before{opacity:1;}&:hover:not([disabled]){opacity:0.8;box-shadow:inset 0 8px 6px -6px ",colors.E5,";filter:saturate(70%);}&:active:not([disabled]){filter:contrast(60%);}&:disabled{cursor:not-allowed;opacity:0.6;}");try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/Checkbox.styled.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/Checkbox.styled.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Checkbox_Checkbox=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,onClick,color="primary",sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Checkbox,{ref,id,sx,$color:color,type:"checkbox",className:(0,classNames.A)("checkbox-root",className,commonClassNames.Z),onClick,...rest})}));Checkbox_Checkbox.displayName="Checkbox";try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"Checkboxes are used to select one or more options from a list of options.",displayName:"Checkbox",props:{color:{defaultValue:{value:"primary"},description:"The color of the Checkbox.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox_stories={title:"Components/Checkbox",component:Checkbox_Checkbox},Template=args=>{const[checked,setChecked]=react.useState(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[checked?(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",color:(0,getColorScheme.Z)(args.color||"primary"),children:"Checked"}):(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",color:(0,getColorScheme.Z)(args.color||"primary"),children:"Unchecked"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{...args,checked,onChange:()=>setChecked(!checked)}),"  ",(0,jsx_runtime.jsx)(Checkbox_Checkbox,{...args,disabled:!0})]})},Primary=Template.bind({});Primary.args={color:"primary",onClick:(0,dist.aD)("clicked")};const Secondary=Template.bind({});Secondary.args={color:"secondary",onClick:(0,dist.aD)("clicked")};const Success=Template.bind({});Success.args={color:"success",onClick:(0,dist.aD)("clicked")};const Error=Template.bind({});Error.args={color:"error",onClick:(0,dist.aD)("clicked")};const Warn=Template.bind({});Warn.args={color:"warn",onClick:(0,dist.aD)("clicked")},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => {\n  const [checked, setChecked] = React.useState(false);\n  return <>\n            {checked ? <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Checked\n                </Text> : <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Unchecked\n                </Text>}\n            <br />\n            <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />\n            &nbsp;&nbsp;\n            <Checkbox {...args} disabled />\n        </>;\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => {\n  const [checked, setChecked] = React.useState(false);\n  return <>\n            {checked ? <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Checked\n                </Text> : <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Unchecked\n                </Text>}\n            <br />\n            <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />\n            &nbsp;&nbsp;\n            <Checkbox {...args} disabled />\n        </>;\n}",...Secondary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => {\n  const [checked, setChecked] = React.useState(false);\n  return <>\n            {checked ? <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Checked\n                </Text> : <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Unchecked\n                </Text>}\n            <br />\n            <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />\n            &nbsp;&nbsp;\n            <Checkbox {...args} disabled />\n        </>;\n}",...Success.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => {\n  const [checked, setChecked] = React.useState(false);\n  return <>\n            {checked ? <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Checked\n                </Text> : <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Unchecked\n                </Text>}\n            <br />\n            <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />\n            &nbsp;&nbsp;\n            <Checkbox {...args} disabled />\n        </>;\n}",...Error.parameters?.docs?.source}}},Warn.parameters={...Warn.parameters,docs:{...Warn.parameters?.docs,source:{originalSource:"args => {\n  const [checked, setChecked] = React.useState(false);\n  return <>\n            {checked ? <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Checked\n                </Text> : <Text variant=\"paragraph\" color={getColorScheme(args.color || 'primary')}>\n                    Unchecked\n                </Text>}\n            <br />\n            <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />\n            &nbsp;&nbsp;\n            <Checkbox {...args} disabled />\n        </>;\n}",...Warn.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Success","Error","Warn"]},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>alterColorEnhanced,d:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_},alterColor=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=(r+amount)%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},alterColorEnhanced=function(color){let amount=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16),g=parseInt(hex.substring(3,5),16),b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=Math.min(Math.max(r+amount,0),255),g=Math.min(Math.max(g+amount,0),255),b=Math.min(Math.max(b+amount,0),255);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;default:return pattern}}}}]);