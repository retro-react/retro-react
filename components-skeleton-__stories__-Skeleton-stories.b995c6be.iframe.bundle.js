"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[9510],{"./src/components/skeleton/__stories__/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const blink=emotion_react_browser_esm.F4`
  0% { opacity: 1; }
  30% { opacity: 0.4; }
  70% { opacity: 1; }
  100% { opacity: 1; }
`,StyledSkeleton=(0,emotion_styled_base_browser_esm.Z)("div",{target:"ei7ej3t0"})("height:",(props=>props.$height),";width:100%;background-color:",(props=>props.$color),";",(props=>"blink"===props.$effect&&(0,emotion_react_browser_esm.iv)("border-radius:","circle"===props.$shape?"50%":props.$rounded?"5px":"0px",";animation:",blink," 2.5s infinite ease-in-out;","")),";margin-bottom:10px;",(props=>"circle"===props.$shape&&(0,emotion_react_browser_esm.iv)("width:",props.$height,";","")),";",(props=>"shimmer"===props.$effect&&(0,emotion_react_browser_esm.iv)("background-image:linear-gradient(\n\t\t\t\tto right,\n\t\t\t\t",props.$color," 0%,\n\t\t\t\t",(0,polished_esm.$n)(.1,props.$color)," 20%,\n\t\t\t\t",(0,polished_esm.$n)(.1,props.$color)," 40%,\n\t\t\t\t",props.$color," 100%\n\t\t\t);background-repeat:no-repeat;background-size:",props.$gradientWidth,"px ","string"==typeof props.$height?props.$height:`${props.$height}px`,";border-radius:","circle"===props.$shape?"50%":props.$rounded?"5px":"0px",";animation:",emotion_react_browser_esm.F4`
					0% { background-position: ${-props.$gradientWidth}px 0; }
					70% { background-position: ${props.$gradientWidth}px 0; }
					100% { background-position: ${props.$gradientWidth}px 0; }
				`," 3s infinite linear;","")),";");try{StyledSkeleton.displayName="StyledSkeleton",StyledSkeleton.__docgenInfo={description:"",displayName:"StyledSkeleton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$shape:{defaultValue:null,description:"",name:"$shape",required:!0,type:{name:"string"}},$rounded:{defaultValue:null,description:"",name:"$rounded",required:!0,type:{name:"boolean"}},$effect:{defaultValue:null,description:"",name:"$effect",required:!0,type:{name:"string"}},$height:{defaultValue:null,description:"",name:"$height",required:!0,type:{name:"string | number"}},$gradientWidth:{defaultValue:null,description:"",name:"$gradientWidth",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.styled.tsx#StyledSkeleton"]={docgenInfo:StyledSkeleton.__docgenInfo,name:"StyledSkeleton",path:"src/components/skeleton/Skeleton.styled.tsx#StyledSkeleton"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Skeleton=(0,react.forwardRef)((_ref=>{let{height="20px",color="greyscale",shape="rectangle",effect="blink",rounded=!1,sx,className,...rest}=_ref;const skeletonRef=(0,react.useRef)(null),gradientColor=(0,getColorScheme.Z)(color),[gradientWidth,setGradientWidth]=(0,react.useState)(0);return(0,react.useEffect)((()=>{skeletonRef.current&&setGradientWidth(skeletonRef.current.offsetWidth)}),[]),(0,theme_ui_jsx_runtime_esm.tZ)(StyledSkeleton,{ref:skeletonRef,className:(0,classNames.A)("skeleton-root",className),$color:gradientColor,$shape:shape,$rounded:rounded,$height:height,$effect:effect,$gradientWidth:gradientWidth,...rest})}));Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"A simple skeleton loading component. Useful for when you need to show a loading state for a component.",displayName:"Skeleton",props:{height:{defaultValue:{value:"20px"},description:"The height of the skeleton.",name:"height",required:!1,type:{name:"string | number"}},color:{defaultValue:{value:"greyscale"},description:"The color of the skeleton.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},shape:{defaultValue:{value:"rectangle"},description:"The shape of the skeleton. For a circle, the height will also be used for the width.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},rounded:{defaultValue:{value:"false"},description:"Whether or not the skeleton should have rounded corners.",name:"rounded",required:!1,type:{name:"boolean"}},effect:{defaultValue:{value:"blink"},description:"The effect to use for the skeleton.",name:"effect",required:!1,type:{name:"enum",value:[{value:'"blink"'},{value:'"shimmer"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Skeleton_stories={title:"Components/Skeleton",component:Skeleton},Basic={args:{height:"20px",color:"greyscale",shape:"rectangle",effect:"blink",rounded:!1},render:props=>(0,jsx_runtime.jsxs)(Container.W,{fluid:!0,children:[(0,jsx_runtime.jsx)(Skeleton,{...props}),(0,jsx_runtime.jsx)(Skeleton,{...props}),(0,jsx_runtime.jsx)(Skeleton,{...props})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    height: '20px',\n    color: 'greyscale',\n    shape: 'rectangle',\n    effect: 'blink',\n    rounded: false\n  },\n  render: props => <Container fluid>\n            <Skeleton {...props} />\n            <Skeleton {...props} />\n            <Skeleton {...props} />\n        </Container>\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw0"})("box-sizing:border-box;width:100%;font-family:'Trebuchet MS',Helvetica,sans-serif;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.cC,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.k4,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=_ref=>{let{fluid=!1,className,children,...rest}=_ref;const classes=(0,classNames.A)("container-root",fluid?"container-fluid":"",className,commonClassNames.Z);return fluid?(0,theme_ui_jsx_runtime_esm.tZ)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.tZ)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;default:return color}}}}]);
//# sourceMappingURL=components-skeleton-__stories__-Skeleton-stories.b995c6be.iframe.bundle.js.map