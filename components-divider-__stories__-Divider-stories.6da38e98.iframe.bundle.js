"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[5544],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes,iv:()=>css,tZ:()=>jsx,xB:()=>Global});var _emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-c39617d8.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_emotion_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js"),_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),jsx=(__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),function jsx(type,props){var args=arguments;if(null==props||!_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props,"css"))return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0,args);var argsLength=args.length,createElementArgArray=new Array(argsLength);createElementArgArray[0]=_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E,createElementArgArray[1]=(0,_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type,props);for(var i=2;i<argsLength;i++)createElementArgArray[i]=args[i];return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null,createElementArgArray)}),Global=(0,_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.w)((function(props,cache){var styles=props.styles,serialized=(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)([styles],void 0,react__WEBPACK_IMPORTED_MODULE_0__.useContext(_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.T));if(!_emotion_element_c39617d8_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.i){for(var _ref,serializedNames=serialized.name,serializedStyles=serialized.styles,next=serialized.next;void 0!==next;)serializedNames+=" "+next.name,serializedStyles+=next.styles,next=next.next;var shouldCache=!0===cache.compat,rules=cache.insert("",{name:serializedNames,styles:serializedStyles},cache.sheet,shouldCache);return shouldCache?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement("style",((_ref={})["data-emotion"]=cache.key+"-global "+serializedNames,_ref.dangerouslySetInnerHTML={__html:rules},_ref.nonce=cache.sheet.nonce,_ref))}var sheetRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__.j)((function(){var key=cache.key+"-global",sheet=new cache.sheet.constructor({key,nonce:cache.sheet.nonce,container:cache.sheet.container,speedy:cache.sheet.isSpeedy}),rehydrating=!1,node=document.querySelector('style[data-emotion="'+key+" "+serialized.name+'"]');return cache.sheet.tags.length&&(sheet.before=cache.sheet.tags[0]),null!==node&&(rehydrating=!0,node.setAttribute("data-emotion",key),sheet.hydrate([node])),sheetRef.current=[sheet,rehydrating],function(){sheet.flush()}}),[cache]),(0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__.j)((function(){var sheetRefCurrent=sheetRef.current,sheet=sheetRefCurrent[0];if(sheetRefCurrent[1])sheetRefCurrent[1]=!1;else{if(void 0!==serialized.next&&(0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.My)(cache,serialized.next,!0),sheet.tags.length){var element=sheet.tags[sheet.tags.length-1].nextElementSibling;sheet.before=element,sheet.flush()}cache.insert("",serialized,sheet,!1)}}),[cache,serialized.name]),null}));function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./src/components/divider/__stories__/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});var theme_ui_components_esm=__webpack_require__("./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),getColorGradients=__webpack_require__("./src/utils/getColorGradients.ts"),theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Divider=(0,react.forwardRef)(((_ref,ref)=>{let{sx,orientation="horizontal",color="primary",flexItem=!1,...rest}=_ref;const colorOptions=(0,getColorGradients.M)(color),isGradient=colorOptions.length>1;return(0,theme_ui_jsx_runtime_esm.tZ)("div",{...rest,ref,sx:{width:"vertical"===orientation?"2px":"100%",height:"horizontal"===orientation?"2px":"100%",background:isGradient?void 0:colorOptions[0],backgroundImage:isGradient?`linear-gradient(${"horizontal"===orientation?"to right":"to bottom"}, ${colorOptions.join(", ")})`:void 0,alignSelf:flexItem?"stretch":void 0,...sx}})}));Divider.displayName="Divider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"A divider with a gradient color. The gradient is defined by the `color` prop.",displayName:"Divider",props:{orientation:{defaultValue:{value:"horizontal"},description:"The orientation of the divider.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},color:{defaultValue:{value:"primary"},description:"The color of the divider.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"rainbow"'},{value:'"neon"'},{value:'"pastel"'},{value:'"grayscale"'},{value:'"retro"'}]}},flexItem:{defaultValue:{value:"false"},description:"Whether the divider should be a flex item. If `true`, the divider will fit to the width of its container and will not be full width.",name:"flexItem",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Divider_stories={title:"Components/Divider",component:Divider},Basic={args:{color:"rainbow",orientation:"horizontal",flexItem:!1},render:args=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"Yesterday was a good day."}),(0,jsx_runtime.jsx)(Divider,{...args}),(0,jsx_runtime.jsx)("p",{children:"Today is a good day."}),(0,jsx_runtime.jsx)(Divider,{...args}),(0,jsx_runtime.jsx)("p",{children:"Tomorrow will be a good day."}),(0,jsx_runtime.jsx)(Divider,{...args}),(0,jsx_runtime.jsx)("p",{children:"Another day will be a good day."})]})},Vertical={name:"Vertical Divider",args:{color:"rainbow",orientation:"vertical",flexItem:!0},render:args=>(0,jsx_runtime.jsxs)(theme_ui_components_esm.kC,{sx:{width:"100%",height:"200px",alignItems:"center",justifyContent:"center"},children:[(0,jsx_runtime.jsx)("div",{style:{padding:"20px"},children:"Content on the left"}),(0,jsx_runtime.jsx)(Divider,{...args}),(0,jsx_runtime.jsx)("div",{style:{padding:"20px"},children:"Content on the right"})]})};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'rainbow',\n    orientation: 'horizontal',\n    flexItem: false\n  },\n  render: args => <div>\n            <p>Yesterday was a good day.</p>\n            <Divider {...args} />\n            <p>Today is a good day.</p>\n            <Divider {...args} />\n            <p>Tomorrow will be a good day.</p>\n            <Divider {...args} />\n            <p>Another day will be a good day.</p>\n        </div>\n}",...Basic.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  name: 'Vertical Divider',\n  args: {\n    color: 'rainbow',\n    orientation: 'vertical',\n    flexItem: true\n  },\n  render: args => <Flex sx={{\n    width: '100%',\n    height: '200px',\n    alignItems: 'center',\n    justifyContent: 'center'\n  }}>\n            <div style={{\n      padding: '20px'\n    }}>Content on the left</div>\n            <Divider {...args} />\n            <div style={{\n      padding: '20px'\n    }}>Content on the right</div>\n        </Flex>\n}",...Vertical.parameters?.docs?.source},description:{story:"Used with Flexbox to create a vertical divider.",...Vertical.parameters?.docs?.description}}};const __namedExportsOrder=["Basic","Vertical"];try{Vertical.displayName="Vertical",Vertical.__docgenInfo={description:"Used with Flexbox to create a vertical divider.",displayName:"Vertical",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/divider/__stories__/Divider.stories.tsx#Vertical"]={docgenInfo:Vertical.__docgenInfo,name:"Vertical",path:"src/components/divider/__stories__/Divider.stories.tsx#Vertical"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BW:()=>RAINBOW_GRADIENT,Cj:()=>WHITE,E5:()=>BLACK,GW:()=>SHADE_6,Hr:()=>SHADE_5,IW:()=>SHADE_3,Kr:()=>NEON_GRADIENT,Lo:()=>RETRO_GRADIENT,MR:()=>SUCCESS,VF:()=>PASTEL_GRADIENT,Vb:()=>SECONDARY,X2:()=>HIGHLIGHT,_8:()=>PRIMARY,as:()=>SHADE_1,co:()=>GRAYSCALE_GRADIENT,pn:()=>ERROR,u_:()=>WARN,w:()=>SHADE_2,zF:()=>SHADE_4});const BLACK="#000000",WHITE="#ffffff",PRIMARY="#567D89",SECONDARY="#815E85",SUCCESS="#698160",ERROR="#A16B56",WARN="#E0A370",HIGHLIGHT="#ffeb3b",SHADE_1="#F5F5F5",SHADE_2="#E0E0E0",SHADE_3="#BDBDBD",SHADE_4="#9E9E9E",SHADE_5="#757575",SHADE_6="#616161",RAINBOW_GRADIENT=["red","orange","yellow","green","blue","indigo","violet"],NEON_GRADIENT=["#ff00ff","#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"],RETRO_GRADIENT=["#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#0000ff","#9900ff"]},"./src/utils/getColorGradients.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>getColorGradientOptions});var _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/colors.ts");const getColorGradientOptions=color=>{switch(color){case"rainbow":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.BW;case"neon":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Kr;case"pastel":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.VF;case"grayscale":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.co;case"retro":return _src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Lo;case"primary":default:return[_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__._8];case"secondary":return[_src_constants_colors__WEBPACK_IMPORTED_MODULE_0__.Vb]}}}}]);