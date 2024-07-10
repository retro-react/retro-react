"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[7853],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./src/components/background/__stories__/Background.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Background_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts");const Background=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").A)("div",{target:"e1b562l90"})("background-color:",(({$color})=>$color),";background-image:",(({$backgroundImage})=>$backgroundImage&&`url(${$backgroundImage})`),";background-repeat:",(({$backgroundRepeat})=>$backgroundRepeat),";background-size:",(({$backgroundSize})=>$backgroundSize),";background-position:",(({$backgroundPosition})=>$backgroundPosition),";background-attachment:fixed;width:100%;min-height:100%;position:relative;top:0;left:0;");try{Background.displayName="Background",Background.__docgenInfo={description:"",displayName:"Background",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$backgroundImage:{defaultValue:null,description:"",name:"$backgroundImage",required:!1,type:{name:"string"}},$backgroundRepeat:{defaultValue:null,description:"",name:"$backgroundRepeat",required:!1,type:{name:"string"}},$backgroundSize:{defaultValue:null,description:"",name:"$backgroundSize",required:!1,type:{name:"string"}},$backgroundPosition:{defaultValue:null,description:"",name:"$backgroundPosition",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/background/Background.styled.tsx#Background"]={docgenInfo:Background.__docgenInfo,name:"Background",path:"src/components/background/Background.styled.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Background_Background=(0,react.forwardRef)((({id,className,children,color="#000000",backgroundImage,backgroundRepeat,backgroundSize,backgroundPosition,sx,...rest},ref)=>(0,theme_ui_jsx_runtime_esm.Y)(Background,{$color:color,$backgroundImage:backgroundImage,$backgroundRepeat:backgroundRepeat,$backgroundSize:backgroundSize,$backgroundPosition:backgroundPosition,ref,id,sx,className:(0,classNames.x)("background-root",className,commonClassNames.A),...rest,children:(0,theme_ui_jsx_runtime_esm.Y)("div",{style:{position:"relative"},children})})));Background_Background.displayName="Background";try{Background_Background.displayName="Background",Background_Background.__docgenInfo={description:"The Background component is used to display a background.\nIt can be used to display a background image or a background color.\nIt accepts `children` prop that will be displayed on top of the background.\nBackground will take the full width and height of its parent.",displayName:"Background",props:{color:{defaultValue:{value:"#000000"},description:"The background color of the Background.",name:"color",required:!1,type:{name:"Color"}},backgroundImage:{defaultValue:null,description:"The background image of the Background.",name:"backgroundImage",required:!1,type:{name:"string"}},backgroundRepeat:{defaultValue:null,description:"The background repeat property of the Background.",name:"backgroundRepeat",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"repeat"'},{value:'"initial"'},{value:'"unset"'},{value:'"no-repeat"'},{value:'"repeat-x"'},{value:'"repeat-y"'}]}},backgroundSize:{defaultValue:null,description:"The background size property of the Background.",name:"backgroundSize",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"unset"'},{value:'"contain"'},{value:'"auto"'},{value:'"cover"'}]}},backgroundPosition:{defaultValue:null,description:"The background position property of the Background.",name:"backgroundPosition",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"initial"'},{value:'"unset"'},{value:'"left top"'},{value:'"left center"'},{value:'"left bottom"'},{value:'"right top"'},{value:'"right center"'},{value:'"right bottom"'},{value:'"center top"'},{value:'"center center"'},{value:'"center bottom"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/background/Background.tsx#Background"]={docgenInfo:Background_Background.__docgenInfo,name:"Background",path:"src/components/background/Background.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Background_stories={title:"Components/Background",component:Background_Background},ContainerContent=()=>{const content=['"I want it that way" - Backstreet Boys','"I\'ll be there for you" - Friends','"Life is like a box of chocolates..." - Forrest Gump','"You\'ve got mail!" - AOL','"Show me the money!" - Jerry Maguire','"I\'m the king of the world!" - Titanic',"\"I'll make him an offer he can't refuse.\" - The Godfather",'"...Baby One More Time" - Britney Spears','"Smells Like Teen Spirit" - Nirvana','"You can\'t touch this." - MC Hammer'],textSx={color:"white",p:5};return(0,jsx_runtime.jsx)("div",{children:content.map(((text,index)=>(0,jsx_runtime.jsx)(Text.E,{sx:textSx,children:text},index)))})};ContainerContent.displayName="ContainerContent";const Basic={args:{color:"#000000",backgroundImage:"https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg",backgroundRepeat:"repeat",backgroundSize:"cover",backgroundPosition:"center center"},render:args=>(0,jsx_runtime.jsx)(Container.m,{sx:{width:"100%",height:"500px",overflow:"auto"},children:(0,jsx_runtime.jsx)(Background_Background,{...args,children:(0,jsx_runtime.jsx)(ContainerContent,{})})})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: '#000000',\n    backgroundImage: 'https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg',\n    backgroundRepeat: 'repeat',\n    backgroundSize: 'cover',\n    backgroundPosition: 'center center'\n  },\n  render: args => {\n    return <Container sx={{\n      width: '100%',\n      height: '500px',\n      overflow: 'auto'\n    }}>\n                <Background {...args}>\n                    <ContainerContent />\n                </Background>\n            </Container>;\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.A)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.A)("div",{target:"e184e1fw0"})("box-sizing:border-box;width:100%;font-family:'Trebuchet MS',Helvetica,sans-serif;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.TH,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.Nj,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=({fluid=!1,className,children,...rest})=>{const classes=(0,classNames.x)("container-root",fluid?"container-fluid":"",className,commonClassNames.A);return fluid?(0,theme_ui_jsx_runtime_esm.Y)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.Y)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem",small:"0.625rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"],small:["0.625rem","0.7rem","0.8rem","0.9rem","1rem","1.125rem","1.25rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.i7`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.A)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.AH)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>(0,emotion_react_browser_esm.AH)("font-size:",fontSizeForVariant(props.$variant),";font-weight:",props.$variant.startsWith("h")?"700":"400",";",fontSizeForBreakpoint(props.$variant),";",""))," color:",(props=>(0,getColorScheme.A)(props.$color,props.theme)),";",(props=>"rainbow"===props.$color?(0,emotion_react_browser_esm.AH)("background:linear-gradient(to right, ",colors.EE.join(","),");-webkit-background-clip:text;-webkit-text-fill-color:transparent;",""):""),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)((({id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest},ref)=>{const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p",small:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.Y)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.x)("text-root",className,commonClassNames.A),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nj:()=>SCREEN_LG,TH:()=>SCREEN_XM});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EE:()=>RAINBOW_GRADIENT,UE:()=>WHITE,Uv:()=>BLACK,X5:()=>GRAYSCALE_GRADIENT,YA:()=>NEON_GRADIENT,ZW:()=>WARN,dB:()=>SHADE_2,ff:()=>ERROR,jY:()=>HIGHLIGHT,jd:()=>PRIMARY,kd:()=>SHADE_3,lS:()=>SECONDARY,mB:()=>SHADE_1,mv:()=>SHADE_5,qO:()=>SUCCESS,rB:()=>PASTEL_GRADIENT,rR:()=>SHADE_4,t9:()=>SHADE_6,uA:()=>RETRO_GRADIENT});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...names)=>names.filter((name=>!!name)).join(" ")},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ff;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.qO;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ZW;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.lS;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.jd;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.kd;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.t9;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.jY;default:return color}}}}]);
//# sourceMappingURL=components-background-__stories__-Background-stories.b3e8bb7e.iframe.bundle.js.map