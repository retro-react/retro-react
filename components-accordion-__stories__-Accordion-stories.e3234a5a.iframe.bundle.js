"use strict";(self.webpackChunkretro_react=self.webpackChunkretro_react||[]).push([[7794],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/components/accordion/__stories__/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var Container=__webpack_require__("./src/components/container/Container.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const AccordionWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1oi85dl2"})({name:"pi42mq",styles:"font-family:'Trebuchet MS',Helvetica,sans-serif;margin-bottom:1rem"}),AccordionHeader=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1oi85dl1"})("display:flex;justify-content:space-between;align-items:center;background-color:",(props=>props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color)),";text-shadow:1px 1px 2px ",(0,rgba.m)(colors.Cj,.5),";padding:0.5rem;font-size:1rem;font-weight:bold;width:100%;outline:none;cursor:pointer;border:2px dotted ",colors.Hr,";",(props=>{const gradient=`\n      linear-gradient(\n        ${(0,rgba.m)(props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color),.4)},\n        ${(0,rgba.m)(props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color),.4)}\n      ),\n\t\t\turl(${(0,getPatternScheme.q)(props.$pattern)})\n    `;return"noise"===props.$pattern?`\n          background-image: ${gradient};\n        `:`\n          background-image: ${gradient};\n\t\t\t\t\tcolor: ${colors.Cj};\n\t\t\t\t\ttext-shadow: 1px 1px 2px ${(0,rgba.m)(colors.E5,.5)};\n        `})," ",(_ref=>{let{$color}=_ref;return"greyscale-dark"===$color&&`\n\t\t\tcolor: ${colors.Cj};\n\t\t\t`})," &:hover{background-color:",colors.IW,";background-position:-50px 0;}"),AccordionContent=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1oi85dl0"})("background:linear-gradient(\n\t\t\t",(props=>(0,rgba.m)(props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color),.1)),",\n\t\t\t",(props=>(0,rgba.m)(props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color),.1)),"\n\t\t),",colors.Cj,";border:1px solid ",(props=>(0,rgba.m)(props.theme.colors&&props.theme.colors[props.$color]||(0,getColorScheme.Z)(props.$color),.4)),";overflow:hidden;max-height:",(props=>props.isOpen?props.maxHeight:"0"),";transition:max-height 0.2s ease-out;&>div{padding:0.5rem;}");try{AccordionWrapper.displayName="AccordionWrapper",AccordionWrapper.__docgenInfo={description:"",displayName:"AccordionWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionWrapper"]={docgenInfo:AccordionWrapper.__docgenInfo,name:"AccordionWrapper",path:"src/components/accordion/Accordion.styled.tsx#AccordionWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AccordionHeader.displayName="AccordionHeader",AccordionHeader.__docgenInfo={description:"",displayName:"AccordionHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$pattern:{defaultValue:null,description:"",name:"$pattern",required:!0,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'},{value:'"stars"'}]}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'},{value:'"greyscale-dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionHeader"]={docgenInfo:AccordionHeader.__docgenInfo,name:"AccordionHeader",path:"src/components/accordion/Accordion.styled.tsx#AccordionHeader"})}catch(__react_docgen_typescript_loader_error){}try{AccordionContent.displayName="AccordionContent",AccordionContent.__docgenInfo={description:"",displayName:"AccordionContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'},{value:'"greyscale-dark"'}]}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.styled.tsx#AccordionContent"]={docgenInfo:AccordionContent.__docgenInfo,name:"AccordionContent",path:"src/components/accordion/Accordion.styled.tsx#AccordionContent"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Accordion=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,title="",pattern="noise",color="primary",children,sxHeader,sx,...rest}=_ref;const[isOpen,setIsOpen]=react.useState(!1),[maxHeight,setMaxHeight]=react.useState("0px"),contentRef=react.useRef(null),updateMaxHeight=react.useCallback((()=>{contentRef.current&&setMaxHeight(`${contentRef.current.scrollHeight}px`)}),[]);react.useEffect((()=>(updateMaxHeight(),window.addEventListener("resize",updateMaxHeight),()=>{window.removeEventListener("resize",updateMaxHeight)})),[updateMaxHeight]);return(0,theme_ui_jsx_runtime_esm.BX)(AccordionWrapper,{ref,id,sx,className:(0,classNames.A)("accordion-root",className,commonClassNames.Z),...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(AccordionHeader,{onClick:()=>{setIsOpen(!isOpen)},$pattern:pattern,$color:color,sx:sxHeader,"aria-expanded":isOpen,"aria-controls":`${id}-content`,className:"accordion-header",children:title}),(0,theme_ui_jsx_runtime_esm.tZ)(AccordionContent,{ref:contentRef,isOpen,$color:color,maxHeight,role:"region","aria-labelledby":title,className:"accordion-content",children:(0,theme_ui_jsx_runtime_esm.tZ)("div",{children})})]})}));Accordion.displayName="Accordion";try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"The Accordion component is used to display content in a collapsible panel.\nIt can be used to group content or to show/hide additional information.\n\nUse `sxHeader` prop to style the header and `sx` to style the content.",displayName:"Accordion",props:{title:{defaultValue:{value:""},description:"The title of the accordion.",name:"title",required:!1,type:{name:"string"}},pattern:{defaultValue:{value:"noise"},description:"The pattern of the accordion.",name:"pattern",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'},{value:'"stars"'}]}},color:{defaultValue:{value:"primary"},description:"The color of the accordion.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'},{value:'"greyscale-dark"'}]}},children:{defaultValue:{value:"undefined"},description:"The content of the accordion.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},sxHeader:{defaultValue:{value:"undefined"},description:"The sx prop for header.",name:"sxHeader",required:!1,type:{name:"any"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/accordion/Accordion.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/accordion/Accordion.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Accordion_stories={title:"Components/Accordion",component:Accordion},Basic={args:{title:"Dial-up Internet Connection",pattern:"stripes",color:"success",children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"Remember the screeching sound of a dial-up modem connecting to the internet? In the 90s, dial-up connections were the most common way to access the World Wide Web. With slow speeds and busy phone lines, browsing the internet was a completely different experience from what we have today"})},render:args=>(0,jsx_runtime.jsxs)(Container.W,{sx:{width:"100%",maxWidth:"400px",margin:"0 auto"},children:[(0,jsx_runtime.jsx)(Accordion,{...args}),(0,jsx_runtime.jsx)(Accordion,{title:"The Golden Age of Arcade Games",children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",children:"The 80s and 90s were the golden age of arcade gaming. Classic titles like Pac-Man, Space Invaders, and Donkey Kong captured the imagination of players around the world. Neon-lit arcades were social hubs where gamers gathered to compete for high scores, show off their skills, and immerse themselves in the digital worlds of their favorite games"})})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Dial-up Internet Connection',\n    pattern: 'stripes',\n    color: 'success',\n    children: <Text variant=\"paragraph\">\n                Remember the screeching sound of a dial-up modem connecting to the\n                internet? In the 90s, dial-up connections were the most common way to\n                access the World Wide Web. With slow speeds and busy phone lines,\n                browsing the internet was a completely different experience from what we\n                have today\n            </Text>\n  },\n  render: args => {\n    return <Container sx={{\n      width: '100%',\n      maxWidth: '400px',\n      margin: '0 auto'\n    }}>\n                <Accordion {...args} />\n                <Accordion title=\"The Golden Age of Arcade Games\">\n                    <Text variant=\"paragraph\">\n                        The 80s and 90s were the golden age of arcade gaming. Classic titles\n                        like Pac-Man, Space Invaders, and Donkey Kong captured the\n                        imagination of players around the world. Neon-lit arcades were\n                        social hubs where gamers gathered to compete for high scores, show\n                        off their skills, and immerse themselves in the digital worlds of\n                        their favorite games\n                    </Text>\n                </Accordion>\n            </Container>;\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/container/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Container_Container});var classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts");const FluidContainer=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw1"})({name:"kszhrc",styles:"margin-left:auto;margin-right:auto;width:100%"}),Container=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e184e1fw0"})("box-sizing:border-box;width:100%;font-family:'Trebuchet MS',Helvetica,sans-serif;max-width:",320,"px;margin-left:auto;margin-right:auto;@media (min-width: ",breakpoints.cC,"px){max-width:",672,"px;}@media (min-width: ",breakpoints.k4,"px){max-width:",1024,"px;}");try{FluidContainer.displayName="FluidContainer",FluidContainer.__docgenInfo={description:"",displayName:"FluidContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#FluidContainer"]={docgenInfo:FluidContainer.__docgenInfo,name:"FluidContainer",path:"src/components/container/Container.styled.tsx#FluidContainer"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/container/Container.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Container_Container=_ref=>{let{fluid=!1,className,children,...rest}=_ref;const classes=(0,classNames.A)("container-root",fluid?"container-fluid":"",className,commonClassNames.Z);return fluid?(0,theme_ui_jsx_runtime_esm.tZ)(FluidContainer,{className:classes,...rest,children}):(0,theme_ui_jsx_runtime_esm.tZ)(Container,{className:classes,...rest,children})};Container_Container.displayName="Container";try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"The fundamental building block that centers your content horizontally.\nIt creates a simple `div` to wrap your content and align within a given viewport.\nSupports `sx` prop from Theme UI.",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true`, apply `width: 100%`.",name:"fluid",required:!1,type:{name:"boolean"}},sx:{defaultValue:{value:"undefined"},description:"Sx prop",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/container/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/container/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.F4`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.iv)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>(0,emotion_react_browser_esm.iv)("font-size:",fontSizeForVariant(props.$variant),";font-weight:",props.$variant.startsWith("h")?"700":"400",";",fontSizeForBreakpoint(props.$variant),";",""))," color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";",(props=>"rainbow"===props.$color?(0,emotion_react_browser_esm.iv)("background:linear-gradient(to right, ",colors.BW.join(","),");-webkit-background-clip:text;-webkit-text-fill-color:transparent;",""):""),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest}=_ref;const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,X2:()=>HIGHLIGHT,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>classNames});const classNames=function(){for(var _len=arguments.length,names=new Array(_len),_key=0;_key<_len;_key++)names[_key]=arguments[_key];return names.filter((name=>!!name)).join(" ")}},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,u:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.pn;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.MR;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.u_;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.IW;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.GW;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.X2;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",stars_pattern_namespaceObject=__webpack_require__.p+"static/media/stars_pattern.69f38225.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;case"stars":return stars_pattern_namespaceObject;default:return pattern}}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>rgba});const rgba=function(hexCode){let opacity=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}}}]);
//# sourceMappingURL=components-accordion-__stories__-Accordion-stories.e3234a5a.iframe.bundle.js.map