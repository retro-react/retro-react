"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[6796],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_3__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./src/components/modal/__stories__/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=(__webpack_require__("./node_modules/@storybook/react/dist/index.mjs"),__webpack_require__("./node_modules/react/index.js")),Button=__webpack_require__("./src/components/button/Button.tsx"),Text=__webpack_require__("./src/components/text/Text.tsx"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),Portal=__webpack_require__("./src/components/portal/Portal.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),breakpoints=__webpack_require__("./src/constants/breakpoints.ts"),colors=__webpack_require__("./src/constants/colors.ts");const Modal=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1k5l2uy2"})("background-color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)||props.$color),";box-shadow:inset 1px 1px 5px ",(0,rgba.m)(colors.E5,.3),",inset -1px -1px 2px rgba(255, 255, 255, 0.2);padding:1rem;font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1.5rem;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);max-width:90%;width:auto;box-sizing:border-box;overflow:auto;z-index:1001;padding-right:3rem;",(props=>`\n\t\t\tbackground-image: ${`\n\t\t\tlinear-gradient(\n\t\t\t\t${(0,rgba.m)((0,getColorScheme.Z)(props.$color,props.theme)||props.$color,.4)},\n\t\t\t\t${(0,rgba.m)((0,getColorScheme.Z)(props.$color,props.theme)||props.$color,.4)}\n\t\t\t),\n\t\t\turl(${(0,getPatternScheme.q)(props.$pattern)})\n\t\t`};\n\t\t\tbackground-position: center;\n\t\t`),"@media only screen and (max-width: ",breakpoints.cC,"px){top:0;left:0;width:100%;height:100%;transform:none;border-radius:0;}",(props=>props.$open?"\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n\t":"\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n\t"),";"),CloseButton=(0,emotion_styled_base_browser_esm.Z)("button",{target:"e1k5l2uy1"})("position:absolute;top:10px;right:5px;width:2rem;height:2rem;background-color:transparent;border:none;cursor:pointer;transition:transform 0.1s linear;&:hover{transform:scale(1.1);}&::before,&::after{content:'';position:absolute;top:50%;left:50%;width:1.5rem;height:0.2rem;background-color:",(props=>(0,alterColor.a)((0,getColorScheme.Z)(props.$color,props.theme)||props.$color,100)),";transform:translate(-50%, -50%) rotate(45deg);}&::after{transform:translate(-50%, -50%) rotate(-45deg);}"),ModalBackdrop=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1k5l2uy0"})("position:fixed;top:0;left:0;width:100%;height:100%;background-color:",(0,rgba.m)(colors.E5,.5),";z-index:1000;transition:opacity 0.3s ease-in-out,visibility 0.3s ease-in-out;",(props=>props.$open?"\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n\t":"\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n\t"),";");try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$open:{defaultValue:null,description:"",name:"$open",required:!0,type:{name:"boolean"}},$pattern:{defaultValue:null,description:"",name:"$pattern",required:!0,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'}]}},$backdrop:{defaultValue:null,description:"",name:"$backdrop",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.styled.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.styled.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.styled.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"src/components/modal/Modal.styled.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}try{ModalBackdrop.displayName="ModalBackdrop",ModalBackdrop.__docgenInfo={description:"",displayName:"ModalBackdrop",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$open:{defaultValue:null,description:"",name:"$open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.styled.tsx#ModalBackdrop"]={docgenInfo:ModalBackdrop.__docgenInfo,name:"ModalBackdrop",path:"src/components/modal/Modal.styled.tsx#ModalBackdrop"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Modal_Modal=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,open=!1,onClose,color="primary",pattern="noise",backdrop=!1,sx,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.BX)(Portal.h,{children:[backdrop&&(0,theme_ui_jsx_runtime_esm.tZ)(ModalBackdrop,{$open:open,onClick:e=>onClose&&onClose(e)}),(0,theme_ui_jsx_runtime_esm.BX)(Modal,{$color:color,$pattern:pattern,$backdrop:backdrop,$open:open,ref,id,sx,className:(0,classNames.A)("modal-root",className,commonClassNames.Z),...rest,children:[(0,theme_ui_jsx_runtime_esm.tZ)(CloseButton,{className:"modal-close-button",onClick:onClose,"aria-label":"Close Modal",$color:color}),children]})]})}));Modal_Modal.displayName="Modal";try{Modal_Modal.displayName="Modal",Modal_Modal.__docgenInfo={description:"Modals are used to display content in a layer above the app.\nThey are centered on the screen and can be triggered by a button.",displayName:"Modal",props:{color:{defaultValue:{value:"primary"},description:"The library colors or hex color for background of the Modal.",name:"color",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Whether the Modal is open or not.",name:"open",required:!1,type:{name:"boolean"}},backdrop:{defaultValue:{value:"false"},description:"Enable backdrop for Modal.",name:"backdrop",required:!1,type:{name:"boolean"}},pattern:{defaultValue:{value:"noise"},description:"The pattern of the Modal.",name:"pattern",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"noise"'},{value:'"stripes"'},{value:'"dots"'}]}},onClose:{defaultValue:{value:"undefined"},description:"Callback fired when the Modal is closed.\n@param event The event source of the callback.\nYou can pull out the new value by accessing `event.target.value` (string).",name:"onClose",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal_stories={title:"Components/Modal",component:Modal_Modal,argTypes:{color:{options:getColorScheme.u,control:{type:"radio"}}}},TemplateContainer=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",border:"1px solid black"},children})};TemplateContainer.displayName="TemplateContainer";const Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)(),[open,setOpen]=react.useState(args.open);react.useEffect((()=>{setOpen(args.open)}),[args.open]);const handleOpen=(e,isOpen)=>{updateArgs({open:isOpen})};return(0,jsx_runtime.jsxs)(TemplateContainer,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:e=>handleOpen(0,!0),children:"Open Modal"}),(0,jsx_runtime.jsx)(Modal_Modal,{...args,open,onClose:e=>handleOpen(0,!1)})]})};Template.displayName="Template";const Basic=Template.bind({});Basic.args={backdrop:!1,pattern:"noise",open:!1,children:(0,jsx_runtime.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,jsx_runtime.jsx)(Text.x,{bevel:!0,variant:"h6",color:"black",children:"Ahoy, matey!"}),(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",color:"black",children:"Welcome aboard our retro ship of wonders, where you'll find treasures from the golden age of the internet. Discover ancient artifacts such as pixel art, gradient backgrounds, and quirky fonts. Navigate through the vast ocean of nostalgia and experience the simpler times when animated GIFs ruled the world wide web!"})]}),color:"primary",sx:{maxHeight:"500px",maxWidth:"500px"}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [, updateArgs] = useArgs();\n  const [open, setOpen] = React.useState(args.open);\n  React.useEffect(() => {\n    setOpen(args.open);\n  }, [args.open]);\n  const handleOpen = (e: React.MouseEvent, isOpen: boolean) => {\n    updateArgs({\n      open: isOpen\n    });\n  };\n  return <TemplateContainer>\n            <Button onClick={e => handleOpen(e, true)}>Open Modal</Button>\n            <Modal {...args} open={open} onClose={e => handleOpen(e, false)} />\n        </TemplateContainer>;\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=_ref=>{let{children,position}=_ref;const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),elRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(document.createElement("div"));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=elRef.current;return setMounted(!0),document.body.appendChild(element),position&&(element.style.position="fixed",void 0!==position.top&&(element.style.top=`${position.top}px`),void 0!==position.bottom&&(element.style.bottom=`${position.bottom}px`),void 0!==position.left&&(element.style.left=`${position.left}px`),void 0!==position.right&&(element.style.right=`${position.right}px`)),()=>{document.body.removeChild(element)}}),[position]),mounted?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children,elRef.current):null};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"Position"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.F4`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.iv)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>`\n\t\t\t\t\tfont-size: ${fontSizeForVariant(props.$variant)};\n\t\t\t\t\tfont-weight: ${props.$variant.startsWith("h")?"700":"400"};\n\t\t\t\t\t${fontSizeForBreakpoint(props.$variant)}\n\t\t\t\t`),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest}=_ref;const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/breakpoints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cC:()=>SCREEN_XM,k4:()=>SCREEN_LG});const SCREEN_XM=736,SCREEN_LG=1088}}]);
//# sourceMappingURL=components-modal-__stories__-Modal-stories.024044b7.iframe.bundle.js.map