"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[5025],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/components/starfield/__stories__/StarField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StarField_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const StarField=_ref=>{let{numStars=100,speed=1,size=2,starColor="white",style}=_ref;const canvasRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{const canvas=canvasRef.current;if(!canvas)return;const ctx=canvas.getContext("2d");if(!ctx)return;canvas.width=canvas.clientWidth,canvas.height=canvas.clientHeight;const stars=Array.from({length:numStars},(()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,velocity:(Math.random()+.5)*speed})));let animationFrameId;const animate=()=>{ctx.fillStyle="black",ctx.fillRect(0,0,canvas.width,canvas.height),stars.forEach((star=>{ctx.fillStyle=starColor,ctx.fillRect(star.x,star.y,size,size),star.y+=star.velocity,star.y>canvas.height&&(star.y=0,star.x=Math.random()*canvas.width)})),animationFrameId=requestAnimationFrame(animate)};return animate(),()=>{cancelAnimationFrame(animationFrameId)}}),[canvasRef,numStars,speed,size,starColor]),(0,theme_ui_jsx_runtime_esm.tZ)("canvas",{ref:canvasRef,style:{width:"100%",height:"100%",...style}})};StarField.displayName="StarField",StarField.displayName="StarField";try{StarField.displayName="StarField",StarField.__docgenInfo={description:"A starfield component used similarly to the `<Background />` component. It renders a `canvas` element that animates a starfield. It is recommended to wrap this component in a `<Container />` component.\nSince this component uses a canvas element, it is recommended to use this component sparingly.",displayName:"StarField",props:{numStars:{defaultValue:{value:"100"},description:"The number of stars to render.",name:"numStars",required:!1,type:{name:"number"}},speed:{defaultValue:{value:"1"},description:"The speed of the stars.",name:"speed",required:!1,type:{name:"number"}},size:{defaultValue:{value:"2"},description:"The size of the stars.",name:"size",required:!1,type:{name:"number"}},starColor:{defaultValue:{value:"white"},description:"The color of the stars.",name:"starColor",required:!1,type:{name:"Color"}},style:{defaultValue:{value:"undefined"},description:"The style of the image. Used instead of the `sx` prop.",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/starfield/StarField.tsx#StarField"]={docgenInfo:StarField.__docgenInfo,name:"StarField",path:"src/components/starfield/StarField.tsx#StarField"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StarField_stories={title:"Experimental/StarField",component:StarField,argTypes:{starColor:{control:"color"}}},Basic={args:{starColor:"white",numStars:100,speed:1,size:2},render:args=>(0,jsx_runtime.jsxs)(Container.W,{sx:{width:"100%",height:"500px",position:"relative"},children:[(0,jsx_runtime.jsx)(StarField,{...args}),(0,jsx_runtime.jsx)(Text.x,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},color:"#ffffe0",children:"Long ago in a galaxy far, far away...."})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    starColor: 'white',\n    numStars: 100,\n    speed: 1,\n    size: 2\n  },\n  render: args => <Container sx={{\n    width: '100%',\n    height: '500px',\n    position: 'relative'\n  }}>\n            <StarField {...args} />\n            <Text sx={{\n      position: 'absolute',\n      top: '50%',\n      left: '50%',\n      transform: 'translate(-50%, -50%)',\n      textAlign: 'center'\n    }} color=\"#ffffe0\">\n                Long ago in a galaxy far, far away....\n            </Text>\n            {/* Your other components */}\n        </Container>\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw0"})("box-sizing:border-box;width:100%;font-family:'Trebuchet MS',Helvetica,sans-serif;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.cC,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.k4,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=_ref=>{let{fluid=!1,className,children,...rest}=_ref;const classes=(0,classNames.A)("container-root",fluid?"container-fluid":"",className,commonClassNames.Z);return fluid?(0,theme_ui_jsx_runtime_esm.tZ)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.tZ)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.F4`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.iv)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>`\n\t\t\t\t\tfont-size: ${fontSizeForVariant(props.$variant)};\n\t\t\t\t\tfont-weight: ${props.$variant.startsWith("h")?"700":"400"};\n\t\t\t\t\t${fontSizeForBreakpoint(props.$variant)}\n\t\t\t\t`),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest}=_ref;const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;default:return color}}}}]);
//# sourceMappingURL=components-starfield-__stories__-StarField-stories.c5f3d613.iframe.bundle.js.map