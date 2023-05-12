"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[5393],{"./src/components/typewritertext/__stories__/TypewriterText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TypewriterText_stories});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),Text=__webpack_require__("./src/components/text/Text.tsx"),theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const TypewriterText=(0,react.forwardRef)(((_ref,ref)=>{let{id,className,text,typingSpeed=100,repeat,color="#000000",sx,...rest}=_ref;const[displayText,setDisplayText]=(0,react.useState)(""),isMounted=(0,react.useRef)(!1),repeatRef=(0,react.useRef)(repeat),[restart,setRestart]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{repeatRef.current!==repeat&&(repeatRef.current=repeat,repeat&&setRestart(!0))}),[repeat]),(0,react.useEffect)((()=>{restart&&(setRestart(!1),setDisplayText(""))}),[restart]),(0,react.useEffect)((()=>{if(!isMounted.current||restart){isMounted.current=!0;let currentIndex=0;const typeText=()=>{isMounted.current&&(setDisplayText(text.slice(0,currentIndex)),currentIndex++,currentIndex>text.length?repeatRef.current&&setTimeout((()=>{currentIndex=0,setDisplayText(""),setTimeout(typeText,typingSpeed)}),3e3):setTimeout(typeText,typingSpeed))};typeText()}}),[text,typingSpeed,restart]),(0,theme_ui_jsx_runtime_esm.tZ)(Text.x,{id,color,className:(0,classNames.A)("typewriter-text-root",className),...rest,sx:{minHeight:"1.2em",...sx},children:displayText})}));TypewriterText.displayName="TypewriterText";try{TypewriterText.displayName="TypewriterText",TypewriterText.__docgenInfo={description:"TypewriterText is used to display text as if it is being typed. It can be used to create a typewriter effect.\nThe props should not be changed after the component is mounted. It can cause unexpected behavior.",displayName:"TypewriterText",props:{text:{defaultValue:null,description:"The text to be displayed as typewriter text.",name:"text",required:!0,type:{name:"string"}},typingSpeed:{defaultValue:{value:"100"},description:"The typing speed in milliseconds. Determines how quickly the text is typed.",name:"typingSpeed",required:!1,type:{name:"number"}},repeat:{defaultValue:{value:"false"},description:"Repeatedly type the text.",name:"repeat",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#000000"},description:"The color of the text.",name:"color",required:!1,type:{name:"Color"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}},variant:{defaultValue:{value:"'body1'"},description:"The variant of the Text.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"body1"'},{value:'"body2"'},{value:'"paragraph"'}]}},bevel:{defaultValue:{value:"false"},description:"Add bevel effect to Text.",name:"bevel",required:!1,type:{name:"boolean"}},blink:{defaultValue:{value:"false"},description:"Add blink effect to Text.",name:"blink",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typewritertext/TypewriterText.tsx#TypewriterText"]={docgenInfo:TypewriterText.__docgenInfo,name:"TypewriterText",path:"src/components/typewritertext/TypewriterText.tsx#TypewriterText"})}catch(__react_docgen_typescript_loader_error){}const TypewriterText_stories={title:"Components/TypewriterText",component:TypewriterText,argTypes:{typingSpeed:{control:!1},color:{control:"color"}}},Basic={args:{text:"Life is like a box of chocolates. You never know what you are going to get.",typingSpeed:100,variant:"body1",repeat:!1,bevel:!1,color:"#000000"}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Life is like a box of chocolates. You never know what you are going to get.',\n    typingSpeed: 100,\n    variant: 'body1',\n    repeat: false,\n    bevel: false,\n    color: '#000000'\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]}}]);