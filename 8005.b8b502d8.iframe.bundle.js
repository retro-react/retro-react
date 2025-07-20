"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[8005],{"./src/components/skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors=__webpack_require__("./src/constants/colors.ts");const retroScanLines=emotion_react_browser_esm.i7`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 8px;
  }
`,ditherBlink=emotion_react_browser_esm.i7`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.6;
  }
`,retroProcessing=emotion_react_browser_esm.i7`
  0% {
    border-color: ${colors.tL} ${colors.R8} ${colors.R8} ${colors.tL};
  }
  50% {
    border-color: ${colors.R8} ${colors.tL} ${colors.tL} ${colors.R8};
  }
  100% {
    border-color: ${colors.tL} ${colors.R8} ${colors.R8} ${colors.tL};
  }
`,StyledSkeleton=(0,emotion_styled_base_browser_esm.A)("div",{target:"ei7ej3t0"})("height:",props=>props.$height,";width:100%;max-width:100%;box-sizing:border-box;background:",colors.a5,";border:2px solid;border-color:",colors.tL," ",colors.R8," ",colors.R8," ",colors.tL,";border-radius:0;box-shadow:none;margin-bottom:8px;position:relative;overflow:hidden;",props=>"circle"===props.$shape&&(0,emotion_react_browser_esm.AH)("width:",props.$height,";border-radius:50%;flex-shrink:0;",""),";",props=>"scanlines"===props.$effect&&(0,emotion_react_browser_esm.AH)("background-image:repeating-linear-gradient(\n\t\t\t\t0deg,\n\t\t\t\t",colors.a5," 0px,\n\t\t\t\t",colors.a5," 2px,\n\t\t\t\t",colors.kd," 2px,\n\t\t\t\t",colors.kd," 4px\n\t\t\t);background-size:100% 8px;animation:",retroScanLines," 1s infinite linear;",""),";",props=>"dither"===props.$effect&&(0,emotion_react_browser_esm.AH)("background-image:repeating-linear-gradient(\n\t\t\t\t45deg,\n\t\t\t\t",colors.a5," 0px,\n\t\t\t\t",colors.a5," 2px,\n\t\t\t\t",colors.kd," 2px,\n\t\t\t\t",colors.kd," 4px\n\t\t\t);animation:",ditherBlink," 1.2s infinite ease-in-out;",""),";",props=>"processing"===props.$effect&&(0,emotion_react_browser_esm.AH)("background:",colors.a5,";animation:",retroProcessing," 0.8s infinite ease-in-out;&::after{content:'';position:absolute;top:2px;left:2px;right:2px;bottom:2px;background-image:repeating-linear-gradient(\n\t\t\t\t\t90deg,\n\t\t\t\t\t",colors.rR," 0px,\n\t\t\t\t\t",colors.rR," 2px,\n\t\t\t\t\ttransparent 2px,\n\t\t\t\t\ttransparent 6px\n\t\t\t\t);animation:",retroScanLines," 0.5s infinite linear;}",""),";");try{StyledSkeleton.displayName="StyledSkeleton",StyledSkeleton.__docgenInfo={description:"",displayName:"StyledSkeleton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},$shape:{defaultValue:null,description:"",name:"$shape",required:!0,type:{name:"string"}},$height:{defaultValue:null,description:"",name:"$height",required:!0,type:{name:"string | number"}},$effect:{defaultValue:null,description:"",name:"$effect",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.styled.tsx#StyledSkeleton"]={docgenInfo:StyledSkeleton.__docgenInfo,name:"StyledSkeleton",path:"src/components/skeleton/Skeleton.styled.tsx#StyledSkeleton"})}catch(__react_docgen_typescript_loader_error){}var theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const Skeleton=(0,react.forwardRef)(({height="20px",shape="rectangle",effect="scanlines",sx,className,...rest})=>(0,theme_ui_jsx_runtime_esm.Y)(StyledSkeleton,{className:(0,classNames.x)("skeleton-root",className),$shape:shape,$height:height,$effect:effect,sx,...rest}));Skeleton.displayName="Skeleton";try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"A retro skeleton loading component with authentic WIN31 styling.\nFeatures classic scan line, dithering, and processing effects reminiscent of early computer graphics.",displayName:"Skeleton",props:{height:{defaultValue:{value:"20px"},description:"The height of the skeleton.",name:"height",required:!1,type:{name:"string | number"}},shape:{defaultValue:{value:"rectangle"},description:"The shape of the skeleton. For a circle, the height will also be used for the width.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},effect:{defaultValue:{value:"scanlines"},description:"The effect to use for the skeleton loading animation.",name:"effect",required:!1,type:{name:"enum",value:[{value:'"scanlines"'},{value:'"dither"'},{value:'"processing"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=8005.b8b502d8.iframe.bundle.js.map