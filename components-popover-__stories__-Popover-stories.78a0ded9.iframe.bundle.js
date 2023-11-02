"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[9296],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./src/components/popover/__stories__/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Popover_stories});var Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),Button=__webpack_require__("./src/components/button/Button.tsx"),Portal=__webpack_require__("./src/components/portal/Portal.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const PopoverContent=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1m5qdax0"})("box-sizing:border-box;position:absolute;z-index:",1e3,";width:","200px",";background-color:",colors.Cj,";border:1px solid ",colors.E5,";box-shadow:0px 0px 8px ",(0,rgba.m)(colors.E5,.25),";transform:translate(-50%, 10px);opacity:0;transition:opacity 0.2s linear;&[data-visible='true']{opacity:1;}top:",(_ref=>{let{$top}=_ref;return $top}),"px;left:",(_ref2=>{let{$left}=_ref2;return $left}),"px;");try{PopoverContent.displayName="PopoverContent",PopoverContent.__docgenInfo={description:"",displayName:"PopoverContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$top:{defaultValue:null,description:"",name:"$top",required:!1,type:{name:"number"}},$left:{defaultValue:null,description:"",name:"$left",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/popover/Popover.styled.tsx#PopoverContent"]={docgenInfo:PopoverContent.__docgenInfo,name:"PopoverContent",path:"src/components/popover/Popover.styled.tsx#PopoverContent"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const PopoverButton=(0,react.forwardRef)(((_ref,ref)=>{let{sx,children,className,id,isOpen,...rest}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Button.z,{ref,id,sx,className:(0,classNames.A)("popover-button-root",isOpen?"retro-active":"",className),...rest,children})}));PopoverButton.displayName="PopoverButton";const Popover_PopoverContent=(0,react.forwardRef)(((_ref2,ref)=>{let{id,className,children,position,sx,...rest}=_ref2;return(0,theme_ui_jsx_runtime_esm.tZ)(PopoverContent,{ref,id,sx,$top:position?.top,$left:position?.left,className:(0,classNames.A)("popover-content-root",className),...rest,children})}));Popover_PopoverContent.displayName="PopoverContent";const Popover=(0,react.forwardRef)(((_ref3,ref)=>{let{children,position="bottom",closeOnClickOutside=!0,sx,...rest}=_ref3;const[isOpen,setIsOpen]=(0,react.useState)(!1),[popoverPosition,setPopoverPosition]=(0,react.useState)({top:0,left:0}),buttonRef=(0,react.useRef)(null),popoverRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{if(!isOpen)return;const rect=buttonRef.current?.getBoundingClientRect()||{top:0,left:0,width:0,height:0,right:0,bottom:0},popoverRect=popoverRef.current?.getBoundingClientRect()||{width:0,height:0};let pos={top:0,left:0};switch(position){case"top":pos={top:rect.top-popoverRect.height-rect.height/2,left:rect.left+rect.width/2};break;case"bottom":pos={top:rect.bottom,left:rect.left+rect.width/2};break;case"right":pos={top:rect.top+rect.height/2-popoverRect.height/2,left:rect.right+rect.width};break;case"left":pos={top:rect.top+rect.height/2-popoverRect.height/2,left:rect.left-rect.width}}setPopoverPosition(pos)}),[isOpen,position]),(0,react.useEffect)((()=>{const handleClickOutside=event=>{popoverRef.current&&!popoverRef.current.contains(event.target)&&buttonRef.current&&!buttonRef.current.contains(event.target)&&setIsOpen(!1)};return closeOnClickOutside&&document.addEventListener("mousedown",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside)}}),[isOpen,closeOnClickOutside,popoverRef,buttonRef]);const onButtonClick=()=>{setIsOpen(!isOpen)},childrenWithProps=react.Children.map(children,(child=>child?child.type===PopoverButton?(0,react.cloneElement)(child,{onClick:onButtonClick,ref:buttonRef,isOpen}):child.type===Popover_PopoverContent?(0,theme_ui_jsx_runtime_esm.tZ)(Portal.h,{children:(0,theme_ui_jsx_runtime_esm.tZ)(Popover_PopoverContent,{ref:popoverRef,position:isOpen?popoverPosition:void 0,"data-visible":isOpen,style:{position:"fixed",visibility:isOpen?"visible":"hidden",transition:"visibility 0s linear 0.2s",left:isOpen?void 0:"-9999px"},children:child.props.children})}):child:null));return(0,theme_ui_jsx_runtime_esm.tZ)("div",{...rest,ref,sx:{position:"relative",...sx},children:childrenWithProps})}));Popover.displayName="Popover";try{PopoverButton.displayName="PopoverButton",PopoverButton.__docgenInfo={description:"A button that opens a popover.",displayName:"PopoverButton",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'primary'"},description:"The color of the Button.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'},{value:'"greyscale-dark"'}]}},variant:{defaultValue:{value:"'solid'"},description:"The visual style of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"text"'},{value:'"outline"'}]}},size:{defaultValue:{value:"'medium'"},description:"The size of the Button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disableClickEffect:{defaultValue:{value:"false"},description:"If true disables the click transform effect.",name:"disableClickEffect",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}},isButtonGroup:{defaultValue:null,description:"@internal Modify styles for ButtonGroup component.",name:"isButtonGroup",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/popover/Popover.tsx#PopoverButton"]={docgenInfo:PopoverButton.__docgenInfo,name:"PopoverButton",path:"src/components/popover/Popover.tsx#PopoverButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Popover_stories={title:"Components/Popover",component:Popover,parameters:{docs:{description:{component:"The Popover component is a versatile UI element that can be used to display additional information or provide contextual actions. The Popover consists of two main parts: the trigger (PopoverButton) and the content (PopoverContent). The trigger is the UI element that users interact with to make the Popover appear, typically a button. The content is the information or actions you want to present within the Popover. You can customize the Popover position relative to the trigger and define whether it should close when clicking outside of it."}}},argTypes:{position:{options:["top","right","bottom","left"],control:{type:"radio"},description:"Position of the popover relative to the trigger.",table:{defaultValue:{summary:"bottom"}}},closeOnClickOutside:{description:"Whether or not the popover should close when clicking outside of it."}}},Basic={args:{closeOnClickOutside:!0,position:"bottom",children:[(0,jsx_runtime.jsx)(PopoverButton,{children:"Open Popover"},"button"),(0,jsx_runtime.jsx)(Popover_PopoverContent,{children:(0,jsx_runtime.jsx)(Text.x,{variant:"paragraph",sx:{textAlign:"center",backgroundColor:"lightgrey"},children:"This is the content of the popover. You can click outside of the popover to close it."})},"content")],sx:{display:"flex",justifyContent:"center"}},render:function renderStory(args){return(0,jsx_runtime.jsx)(Popover,{...args,children:args.children})}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    closeOnClickOutside: true,\n    position: 'bottom',\n    children: [<PopoverButton key=\"button\">Open Popover</PopoverButton>, <PopoverContent key=\"content\">\n                <Text variant=\"paragraph\" sx={{\n        textAlign: 'center',\n        backgroundColor: 'lightgrey'\n      }}>\n                    This is the content of the popover. You can click outside of the\n                    popover to close it.\n                </Text>\n            </PopoverContent>],\n    sx: {\n      display: 'flex',\n      justifyContent: 'center'\n    }\n  },\n  render: function renderStory(args) {\n    return <Popover {...args}>{args.children}</Popover>;\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const Portal=_ref=>{let{children,position}=_ref;const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),elRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(document.createElement("div"));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=elRef.current;return setMounted(!0),document.body.appendChild(element),position&&(element.style.position="fixed",void 0!==position.top&&(element.style.top=`${position.top}px`),void 0!==position.bottom&&(element.style.bottom=`${position.bottom}px`),void 0!==position.left&&(element.style.left=`${position.left}px`),void 0!==position.right&&(element.style.right=`${position.right}px`)),()=>{document.body.removeChild(element)}}),[position]),mounted?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children,elRef.current):null};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"Position"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem",small:"0.625rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"],small:["0.625rem","0.7rem","0.8rem","0.9rem","1rem","1.125rem","1.25rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.F4`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.iv)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>(0,emotion_react_browser_esm.iv)("font-size:",fontSizeForVariant(props.$variant),";font-weight:",props.$variant.startsWith("h")?"700":"400",";",fontSizeForBreakpoint(props.$variant),";",""))," color:",(props=>(0,getColorScheme.Z)(props.$color,props.theme)),";",(props=>"rainbow"===props.$color?(0,emotion_react_browser_esm.iv)("background:linear-gradient(to right, ",colors.BW.join(","),");-webkit-background-clip:text;-webkit-text-fill-color:transparent;",""):""),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest}=_ref;const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p",small:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.tZ)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.A)("text-root",className,commonClassNames.Z),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-popover-__stories__-Popover-stories.78a0ded9.iframe.bundle.js.map