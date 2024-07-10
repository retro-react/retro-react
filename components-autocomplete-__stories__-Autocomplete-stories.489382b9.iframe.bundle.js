"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[4237],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./src/components/autocomplete/__stories__/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Autocomplete_stories});__webpack_require__("./node_modules/@storybook/react/dist/index.mjs");var Text=__webpack_require__("./src/components/text/Text.tsx"),react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),close_icon=__webpack_require__("./src/assets/svg/close_icon.svg"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),alterColor=__webpack_require__("./src/utils/alterColor.ts"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),getPatternScheme=__webpack_require__("./src/utils/getPatternScheme.ts"),rgba=__webpack_require__("./src/utils/rgba.ts"),colors=__webpack_require__("./src/constants/colors.ts");const sizeStyles={small:"1rem",medium:"1.2rem"},AutocompleteWrapper=(0,emotion_styled_base_browser_esm.A)("div",{target:"ea8ij1m4"})({name:"bjn8wh",styles:"position:relative"}),AutocompleteInput=(0,emotion_styled_base_browser_esm.A)("input",{target:"ea8ij1m3"})("padding:0.5rem 1rem;box-sizing:border-box;border-radius:0.5rem;font-family:'Trebuchet MS',Helvetica,sans-serif;",(({$color="primary",$variant="filled",theme})=>(($variant,$color)=>{const filledStyles=(0,emotion_react_browser_esm.AH)("background-color:",$color,";background-image:linear-gradient(\n\t\t\t\t",(0,rgba.B)($color,.8),",\n\t\t\t\t",(0,rgba.B)($color,.8),"\n\t\t\t),url(",(0,getPatternScheme._)("stripes"),");box-shadow:inset 1px 1px 2px ",colors.Uv,",inset -1px -1px 2px ",(0,rgba.B)(colors.UE,.45),";filter:contrast(130%) brightness(100%);color:",colors.UE,";font-weight:normal;text-shadow:1px 1px 2px ",colors.Uv,";&::placeholder{color:",(0,rgba.B)(colors.UE,.65),";text-shadow:1px 1px 2px ",colors.Uv,";user-select:none;}","");switch($variant){case"outlined":return(0,emotion_react_browser_esm.AH)("background:",colors.UE,";box-shadow:inset 1px 1px 1px ",$color," inset -1px -1px 1px ",$color,",2px 2px 2px ",$color,",-2px -2px 2px ",$color,";border-color:",$color,";color:",colors.Uv,";&::placeholder{color:",$color,";text-shadow:1px 1px 1px ",colors.UE,";user-select:none;}","");case"filled":return $color===colors.rR?(0,emotion_react_browser_esm.AH)("background:linear-gradient(",(0,rgba.B)(colors.Uv,.8),", ",(0,rgba.B)(colors.Uv,.8),"),url(",(0,getPatternScheme._)("stripes"),");box-shadow:inset 1px 1px 2px ",colors.rR,",inset -1px -1px 2px ",colors.t9,";filter:contrast(130%) brightness(100%);color:",colors.dB,";font-weight:normal;text-shadow:0 0 2px ",colors.Uv,";&::placeholder{color:",(0,rgba.B)(colors.UE,.45),";text-shadow:1px 1px 2px ",colors.Uv,";}",""):filledStyles;default:return filledStyles}})($variant,"greyscale"===$color?colors.rR:(0,getColorScheme.A)($color,theme)))," ",(({color,$variant})=>"filled"===$variant&&"warn"===color&&`\n    color: ${colors.Uv};\n    text-shadow: 0 0 2px ${(0,rgba.B)(colors.Uv,.4)};\n\n    &::placeholder {\n      color: ${(0,rgba.B)(colors.Uv,.7)};\n      text-shadow: 1px 1px 1px ${(0,rgba.B)(colors.rR,.4)};\n    }\n  `)," font-size:",(({$size})=>sizeStyles[$size]||$size),";width:100%;",(({$rounded})=>$rounded&&"\n    border-radius: 1rem;\n  ")," &:disabled{cursor:not-allowed;opacity:0.6;}&:focus{outline:none;box-shadow:0 0 0.05rem 0.05rem ",(props=>(0,rgba.B)("greyscale"===props.$color?colors.UE:(0,getColorScheme.A)(props.$color||"primary",props.theme),.6)),";}"),SuggestionsList=(0,emotion_styled_base_browser_esm.A)("ul",{target:"ea8ij1m2"})("padding:0;margin:5px 0 0 0;border:1px solid ",colors.rR,";border-radius:0.5rem;background-color:",(({$color,theme})=>"greyscale"===$color?colors.rR:(0,getColorScheme.A)($color,theme)),";box-shadow:0 4px 6px ",(0,rgba.B)(colors.Uv,.1),";list-style-type:none;max-height:150px;overflow-y:auto;color:",colors.UE,";position:absolute;top:100%;left:0;box-sizing:border-box;width:100%;z-index:1000;li{padding:0.5rem 1rem;transition:background-color 0.2s;&:hover{background-color:",(({$color,theme})=>"greyscale"===$color?colors.dB:(0,alterColor.G)((0,getColorScheme.A)($color,theme),50)),";}}.active-suggestion{background-color:",(({$color,theme})=>"greyscale"===$color?colors.dB:(0,alterColor.G)((0,getColorScheme.A)($color,theme),70)),";color:",(({$color})=>colors.Uv),";}"),SuggestionItem=(0,emotion_styled_base_browser_esm.A)("li",{target:"ea8ij1m1"})("cursor:pointer;&:hover{color:",(({$color})=>colors.Uv),";}"),ClearButton=(0,emotion_styled_base_browser_esm.A)("button",{target:"ea8ij1m0"})("position:absolute;top:0.5rem;right:0.5rem;width:1.5rem;height:1.5rem;border:none;border-radius:50%;cursor:pointer;mask:url(",(({$icon})=>$icon),");background-color:",(({$color,theme})=>(0,alterColor.G)((0,getColorScheme.A)($color,theme),-80)),";&:hover{background-color:",(({$color,theme})=>(0,alterColor.G)((0,getColorScheme.A)($color,theme),-60)),";}");try{AutocompleteWrapper.displayName="AutocompleteWrapper",AutocompleteWrapper.__docgenInfo={description:"",displayName:"AutocompleteWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.styled.tsx#AutocompleteWrapper"]={docgenInfo:AutocompleteWrapper.__docgenInfo,name:"AutocompleteWrapper",path:"src/components/autocomplete/Autocomplete.styled.tsx#AutocompleteWrapper"})}catch(__react_docgen_typescript_loader_error){}try{AutocompleteInput.displayName="AutocompleteInput",AutocompleteInput.__docgenInfo={description:"",displayName:"AutocompleteInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},$rounded:{defaultValue:null,description:"",name:"$rounded",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.styled.tsx#AutocompleteInput"]={docgenInfo:AutocompleteInput.__docgenInfo,name:"AutocompleteInput",path:"src/components/autocomplete/Autocomplete.styled.tsx#AutocompleteInput"})}catch(__react_docgen_typescript_loader_error){}try{SuggestionsList.displayName="SuggestionsList",SuggestionsList.__docgenInfo={description:"",displayName:"SuggestionsList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.styled.tsx#SuggestionsList"]={docgenInfo:SuggestionsList.__docgenInfo,name:"SuggestionsList",path:"src/components/autocomplete/Autocomplete.styled.tsx#SuggestionsList"})}catch(__react_docgen_typescript_loader_error){}try{SuggestionItem.displayName="SuggestionItem",SuggestionItem.__docgenInfo={description:"",displayName:"SuggestionItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.styled.tsx#SuggestionItem"]={docgenInfo:SuggestionItem.__docgenInfo,name:"SuggestionItem",path:"src/components/autocomplete/Autocomplete.styled.tsx#SuggestionItem"})}catch(__react_docgen_typescript_loader_error){}try{ClearButton.displayName="ClearButton",ClearButton.__docgenInfo={description:"",displayName:"ClearButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$icon:{defaultValue:null,description:"",name:"$icon",required:!0,type:{name:"string"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.styled.tsx#ClearButton"]={docgenInfo:ClearButton.__docgenInfo,name:"ClearButton",path:"src/components/autocomplete/Autocomplete.styled.tsx#ClearButton"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Autocomplete=(0,react.forwardRef)((({suggestions=[],onSuggestionSelect,variant="filled",size="medium",rounded=!1,color="primary",noResultsMessage="No suggestions",clearable=!0,className,sx,...rest},ref)=>{const suggestionsListRef=(0,react.useRef)(null),[inputValue,setInputValue]=(0,react.useState)(""),[filteredSuggestions,setFilteredSuggestions]=(0,react.useState)([]),[wasSuggestionSelected,setWasSuggestionSelected]=(0,react.useState)(!1),[isInteractingWithList,setIsInteractingWithList]=(0,react.useState)(!1),[activeSuggestionIndex,setActiveSuggestionIndex]=(0,react.useState)(0),[showSuggestions,setShowSuggestions]=(0,react.useState)(!1);(0,react.useEffect)((()=>{if(suggestionsListRef.current){const targetItem=Array.from(suggestionsListRef.current.childNodes)[activeSuggestionIndex];if(targetItem){const listItemTop=targetItem.offsetTop,listItemBottom=listItemTop+targetItem.clientHeight,listVisibleTop=suggestionsListRef.current.scrollTop;listItemBottom>listVisibleTop+suggestionsListRef.current.clientHeight?suggestionsListRef.current.scrollTop=listItemBottom-suggestionsListRef.current.clientHeight:listItemTop<listVisibleTop&&(suggestionsListRef.current.scrollTop=listItemTop)}}}),[activeSuggestionIndex]),(0,react.useEffect)((()=>{if(inputValue&&!wasSuggestionSelected){const filtered=suggestions.filter((suggestion=>suggestion.toLowerCase().includes(inputValue.toLowerCase())));setFilteredSuggestions(filtered),setShowSuggestions(!0),1===filtered.length?setActiveSuggestionIndex(0):setActiveSuggestionIndex(-1)}else setShowSuggestions(!1)}),[inputValue,suggestions,wasSuggestionSelected]);return(0,theme_ui_jsx_runtime_esm.FD)(AutocompleteWrapper,{className:(0,classNames.x)("autocomplete-root",className,commonClassNames.A),sx,children:[(0,theme_ui_jsx_runtime_esm.Y)(AutocompleteInput,{value:inputValue,$variant:variant,$size:size,$rounded:rounded,$color:color,onBlur:()=>{wasSuggestionSelected||isInteractingWithList||setInputValue("")},onChange:e=>{setInputValue(e.target.value),setWasSuggestionSelected(!1)},onKeyDown:e=>{if("ArrowDown"===e.key)activeSuggestionIndex<filteredSuggestions.length-1&&setActiveSuggestionIndex(activeSuggestionIndex+1);else if("ArrowUp"===e.key)activeSuggestionIndex>0&&setActiveSuggestionIndex(activeSuggestionIndex-1);else if("Enter"===e.key){const selectedSuggestion=filteredSuggestions[activeSuggestionIndex];setInputValue((prev=>(prev!==selectedSuggestion&&onSuggestionSelect&&onSuggestionSelect(selectedSuggestion),setShowSuggestions(!1),setWasSuggestionSelected(!0),selectedSuggestion)))}else"Escape"===e.key&&setShowSuggestions(!1)},ref,className:"autocomplete-input",...rest}),showSuggestions&&(0,theme_ui_jsx_runtime_esm.Y)(SuggestionsList,{ref:suggestionsListRef,$color:color,onMouseDown:()=>{setIsInteractingWithList(!0)},onMouseUp:()=>{setIsInteractingWithList(!1)},className:"autocomplete-suggestions",children:filteredSuggestions.length>0?filteredSuggestions.map(((suggestion,index)=>(0,theme_ui_jsx_runtime_esm.Y)(SuggestionItem,{$color:color,onClick:()=>(suggestion=>{setInputValue(suggestion),setShowSuggestions(!1),onSuggestionSelect&&onSuggestionSelect(suggestion),setWasSuggestionSelected(!0)})(suggestion),className:index===activeSuggestionIndex?"active-suggestion":void 0,children:suggestion},suggestion))):(0,theme_ui_jsx_runtime_esm.Y)("li",{style:{padding:"0.5rem 1rem",color:"inherit",cursor:"default"},children:noResultsMessage})}),clearable&&inputValue&&!rest.disabled&&(0,theme_ui_jsx_runtime_esm.Y)(ClearButton,{$icon:close_icon,$color:color,className:"autocomplete-clear-button",onClick:()=>setInputValue(""),"aria-label":"Clear input"})]})}));Autocomplete.displayName="Autocomplete";try{Autocomplete.displayName="Autocomplete",Autocomplete.__docgenInfo={description:"",displayName:"Autocomplete",props:{suggestions:{defaultValue:{value:"[]"},description:"An array of strings that will be used as suggestions.",name:"suggestions",required:!1,type:{name:"string[]"}},onSuggestionSelect:{defaultValue:{value:"undefined"},description:"Callback function that will be called when a suggestion is selected.",name:"onSuggestionSelect",required:!1,type:{name:"((selected: string) => void)"}},variant:{defaultValue:{value:"filled"},description:"Specifies the visual variant of the Autocomplete input.\n\n'outlined' - Input will have an outline.\n'filled' - Input will have a solid background color.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},color:{defaultValue:{value:"primary"},description:"Determines the color scheme of the Autocomplete input.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'}]}},size:{defaultValue:{value:"medium"},description:"Specifies the size of the Autocomplete input.",name:"size",required:!1,type:{name:"string"}},rounded:{defaultValue:{value:"false"},description:"Determines if the Autocomplete input should have rounded edges.",name:"rounded",required:!1,type:{name:"boolean"}},noResultsMessage:{defaultValue:{value:"No suggestions"},description:"Message to display when there are no suggestions.",name:"noResultsMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:{value:"true"},description:"Determines if the Autocomplete input should be clearable.",name:"clearable",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"Allows for custom styles using ThemeUI's sx prop.",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/autocomplete/Autocomplete.tsx#Autocomplete"]={docgenInfo:Autocomplete.__docgenInfo,name:"Autocomplete",path:"src/components/autocomplete/Autocomplete.tsx#Autocomplete"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Autocomplete_stories={title:"Forms/Autocomplete",component:Autocomplete,argTypes:{size:{options:["small","medium"],control:{type:"radio"}}}},Template=args=>{const suggestions=["Bell-bottom jeans","Vinyl records","Polaroid cameras","Disco balls","Roller skates","Jukeboxes","Cassette tapes","Tube televisions","Rotary phones","Typewriters"];return(0,jsx_runtime.jsxs)("div",{style:{minHeight:"500px"},children:[(0,jsx_runtime.jsxs)(Text.E,{children:["Options: ",suggestions.join(", ")]}),(0,jsx_runtime.jsxs)("div",{style:{width:"300px",marginTop:"1rem"},children:[(0,jsx_runtime.jsx)(Autocomplete,{suggestions,onSuggestionSelect:selected=>console.log("Selected:",selected),...args}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Autocomplete,{suggestions,onSuggestionSelect:selected=>console.log("Selected:",selected),disabled:!0,placeholder:"Disabled",...args})]})]})};Template.displayName="Template";const Default=Template.bind({});Default.args={variant:"filled",color:"primary",size:"medium",rounded:!0,clearable:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const suggestions = ['Bell-bottom jeans', 'Vinyl records', 'Polaroid cameras', 'Disco balls', 'Roller skates', 'Jukeboxes', 'Cassette tapes', 'Tube televisions', 'Rotary phones', 'Typewriters'];\n  return <div style={{\n    minHeight: '500px'\n  }}>\n            <Text>Options: {suggestions.join(', ')}</Text>\n            <div style={{\n      width: '300px',\n      marginTop: '1rem'\n    }}>\n                <Autocomplete suggestions={suggestions} onSuggestionSelect={selected => console.log('Selected:', selected)} {...args} />\n                <br />\n                <Autocomplete suggestions={suggestions} onSuggestionSelect={selected => console.log('Selected:', selected)} disabled placeholder=\"Disabled\" {...args} />\n            </div>\n        </div>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_1__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.o,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.X},"./src/components/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text_Text});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),getColorScheme=__webpack_require__("./src/utils/getColorScheme.ts"),colors=__webpack_require__("./src/constants/colors.ts");const fontSizeForVariant=variant=>({h1:"2rem",h2:"1.5rem",h3:"1.25rem",h4:"1rem",h5:"0.875rem",h6:"0.75rem",body1:"1rem",body2:"0.875rem",paragraph:"0.75rem",small:"0.625rem"}[variant]||"1rem"),fontSizeForBreakpoint=variant=>{const sizes={h1:["2.5rem","3rem","4rem","5rem","6rem","7rem","8rem"],h2:["1.75rem","2rem","2.5rem","3rem","3.5rem","4rem","4.5rem"],h3:["1.375rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem"],h4:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],h5:["0.875rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],h6:["0.625rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem"],body1:["1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem"],body2:["1rem","1.125rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem"],paragraph:["0.825rem","0.9rem","1rem","1.125rem","1.25rem","1.375rem","1.5rem"],small:["0.625rem","0.7rem","0.8rem","0.9rem","1rem","1.125rem","1.25rem"]};let fontSizeForBreakpoints="";return["480px","767px","1024px","1280px","1536px","1792px","2048px"].forEach(((breakpoint,index)=>{fontSizeForBreakpoints+=`\n      @media (min-width: ${breakpoint}) {\n        font-size: ${sizes[variant][index]||"1rem"};\n      }\n    `})),fontSizeForBreakpoints};try{fontSizeForVariant.displayName="fontSizeForVariant",fontSizeForVariant.__docgenInfo={description:"",displayName:"fontSizeForVariant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForVariant"]={docgenInfo:fontSizeForVariant.__docgenInfo,name:"fontSizeForVariant",path:"src/components/text/responsiveVariants.tsx#fontSizeForVariant"})}catch(__react_docgen_typescript_loader_error){}try{fontSizeForBreakpoint.displayName="fontSizeForBreakpoint",fontSizeForBreakpoint.__docgenInfo={description:"",displayName:"fontSizeForBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"]={docgenInfo:fontSizeForBreakpoint.__docgenInfo,name:"fontSizeForBreakpoint",path:"src/components/text/responsiveVariants.tsx#fontSizeForBreakpoint"})}catch(__react_docgen_typescript_loader_error){}const blinkEffect=emotion_react_browser_esm.i7`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`,Text=(0,emotion_styled_base_browser_esm.A)("div",{target:"e6mwcid0"})("font-family:'Trebuchet MS',Helvetica,sans-serif;font-size:1rem;font-weight:400;text-align:",(props=>props.$align),";margin:0;padding:0;",(props=>props.$blink?(0,emotion_react_browser_esm.AH)("animation:",blinkEffect," 1s linear infinite;",""):"")," ",(props=>props.$bevel?"\n\t\t\t\ttext-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(0, 0, 0, 0.2);\n\t\t\t":"")," ",(props=>(0,emotion_react_browser_esm.AH)("font-size:",fontSizeForVariant(props.$variant),";font-weight:",props.$variant.startsWith("h")?"700":"400",";",fontSizeForBreakpoint(props.$variant),";",""))," color:",(props=>(0,getColorScheme.A)(props.$color,props.theme)),";",(props=>"rainbow"===props.$color?(0,emotion_react_browser_esm.AH)("background:linear-gradient(to right, ",colors.EE.join(","),");-webkit-background-clip:text;-webkit-text-fill-color:transparent;",""):""),";");try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$align:{defaultValue:null,description:"",name:"$align",required:!0,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},$blink:{defaultValue:null,description:"",name:"$blink",required:!0,type:{name:"boolean"}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string"}},$bevel:{defaultValue:null,description:"",name:"$bevel",required:!0,type:{name:"boolean"}},$variant:{defaultValue:null,description:"",name:"$variant",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.styled.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/text/Text.styled.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Text_Text=(0,react.forwardRef)((({id,className,children,color="#000000",variant="paragraph",align="left",bevel=!1,blink=!1,sx,...rest},ref)=>{const ElementType={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",paragraph:"p",small:"p"}[variant];return(0,theme_ui_jsx_runtime_esm.Y)(Text,{as:ElementType,$align:align,$bevel:bevel,$blink:blink,$color:color,$variant:variant,ref,id,sx,className:(0,classNames.x)("text-root",className,commonClassNames.A),...rest,children})}));Text_Text.displayName="Text";try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"Text with different variants. Used instead of HTML tags. Has bevel and blink effects.\nResponsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.\n\nYou can target the `Text` component with the global class `.text-root` in order to change the font family.",displayName:"Text",props:{variant:{defaultValue:{value:"paragraph"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},color:{defaultValue:{value:"#000000"},description:"The color of the Text. Supports css color property and theme colors from library.\nColors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.",name:"color",required:!1,type:{name:"TextColor"}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"left"},description:"The alignment of the Text.",name:"align",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"-webkit-match-parent"'},{value:'"end"'},{value:'"match-parent"'},{value:'"start"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/text/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EE:()=>RAINBOW_GRADIENT,UE:()=>WHITE,Uv:()=>BLACK,X5:()=>GRAYSCALE_GRADIENT,YA:()=>NEON_GRADIENT,ZW:()=>WARN,dB:()=>SHADE_2,ff:()=>ERROR,jY:()=>HIGHLIGHT,jd:()=>PRIMARY,kd:()=>SHADE_3,lS:()=>SECONDARY,mB:()=>SHADE_1,mv:()=>SHADE_5,qO:()=>SUCCESS,rB:()=>PASTEL_GRADIENT,rR:()=>SHADE_4,t9:()=>SHADE_6,uA:()=>RETRO_GRADIENT});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/constants/commonClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__="retro-ui"},"./src/utils/alterColor.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>alterColorEnhanced,e:()=>alterColor});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const themeColors={primary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.jd,secondary:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.lS,success:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.qO,error:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ff,warn:_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ZW},alterColor=(color,amount=0)=>{const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16);const g=parseInt(hex.substring(3,5),16);let b=parseInt(hex.substring(5,7),16);r=(r+(amount=Math.max(Math.min(amount,255),-255)))%256,r=(r+50)%256,b=(b-50+256)%256;return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)},alterColorEnhanced=(color,amount=0)=>{const hex=themeColors[color]||color;let r=parseInt(hex.substring(1,3),16),g=parseInt(hex.substring(3,5),16),b=parseInt(hex.substring(5,7),16);amount=Math.max(Math.min(amount,255),-255),r=Math.min(Math.max(r+amount,0),255),g=Math.min(Math.max(g+amount,0),255),b=Math.min(Math.max(b+amount,0),255);return"#"+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)}},"./src/utils/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>classNames});const classNames=(...names)=>names.filter((name=>!!name)).join(" ")},"./src/utils/getColorScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,i:()=>colorOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const colorOptions=["primary","secondary","success","error","warn"];const __WEBPACK_DEFAULT_EXPORT__=function getColorScheme(color,theme){if(theme&&theme.colors&&theme.colors[color])return theme.colors[color];switch(color){case"error":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ff;case"success":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.qO;case"warn":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.ZW;case"secondary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.lS;case"primary":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.jd;case"greyscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.kd;case"greyscale-dark":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.t9;case"highlight":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.jY;default:return color}}},"./src/utils/getPatternScheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>getPatternScheme});const checkboard_pattern_namespaceObject=__webpack_require__.p+"static/media/checkboard_pattern.ca9d5f00.svg",diagonal_line_pattern_namespaceObject=__webpack_require__.p+"static/media/diagonal_line_pattern.731cdedc.svg",noise_pattern_namespaceObject=__webpack_require__.p+"static/media/noise_pattern.33b94308.svg",stars_pattern_namespaceObject=__webpack_require__.p+"static/media/stars_pattern.69f38225.svg",transparent_pattern_namespaceObject=__webpack_require__.p+"static/media/transparent_pattern.5137e2d7.svg";function getPatternScheme(pattern){switch(pattern){case"solid":return transparent_pattern_namespaceObject;case"noise":return noise_pattern_namespaceObject;case"stripes":return diagonal_line_pattern_namespaceObject;case"dots":return checkboard_pattern_namespaceObject;case"stars":return stars_pattern_namespaceObject;default:return pattern}}},"./src/utils/rgba.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>rgba});const rgba=(hexCode,opacity=1)=>{let hex=hexCode;hexCode.indexOf("#")>-1&&(hex=hexCode.replace("#",""),3===hex.length&&(hex=`${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`)),hex.indexOf("rgba")>-1&&(hex=hex.replace("rgba(","").replace(")","").split(",").map((item=>parseInt(item,10).toString(16))).join(""));return opacity>1&&opacity<=100&&(opacity/=100),`rgba(${parseInt(hex.substring(0,2),16)}, ${parseInt(hex.substring(2,4),16)}, ${parseInt(hex.substring(4,6),16)}, ${opacity})`}},"./src/assets/svg/close_icon.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/close_icon.9061d63e.svg"}}]);
//# sourceMappingURL=components-autocomplete-__stories__-Autocomplete-stories.489382b9.iframe.bundle.js.map