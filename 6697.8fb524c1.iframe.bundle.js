"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[6697],{"./src/constants/colors.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{EE:()=>RAINBOW_GRADIENT,EG:()=>VGA_YELLOW,N1:()=>VGA_WHITE,Pu:()=>CRT_SCAN_LINE,R8:()=>WIN31_BUTTON_HIGHLIGHT,UE:()=>WHITE,Uv:()=>BLACK,X5:()=>GRAYSCALE_GRADIENT,XH:()=>VGA_GREEN,Y5:()=>CRT_GREEN,YA:()=>NEON_GRADIENT,ZW:()=>WARN,a5:()=>WIN31_BUTTON_FACE,c8:()=>WIN31_BLUE,cI:()=>VGA_BLUE,dB:()=>SHADE_2,ff:()=>ERROR,jY:()=>HIGHLIGHT,jd:()=>PRIMARY,kd:()=>SHADE_3,lS:()=>SECONDARY,mv:()=>SHADE_5,p:()=>VGA_BLACK,qO:()=>SUCCESS,rB:()=>PASTEL_GRADIENT,rR:()=>SHADE_4,t9:()=>SHADE_6,tL:()=>WIN31_BUTTON_SHADOW,uA:()=>RETRO_GRADIENT});const BLACK="#000000",WHITE="#ffffff",VGA_BLACK="#000000",VGA_BLUE="#0000AA",VGA_GREEN="#00AA00",VGA_YELLOW="#FFFF55",VGA_WHITE="#FFFFFF",CRT_GREEN="#00FF41",CRT_SCAN_LINE="#002200",WIN31_BUTTON_FACE="#C0C0C0",WIN31_BUTTON_SHADOW="#808080",WIN31_BUTTON_HIGHLIGHT="#FFFFFF",WIN31_BLUE="#000080",PRIMARY=WIN31_BLUE,SECONDARY="#AA00AA",SUCCESS=CRT_GREEN,ERROR="#AA0000",WARN=VGA_YELLOW,HIGHLIGHT="#FF1493",SHADE_2="#AAAAAA",SHADE_3="#555555",SHADE_4="#444444",SHADE_5="#333333",SHADE_6=VGA_BLACK,RAINBOW_GRADIENT=["#AA0000",VGA_YELLOW,VGA_GREEN,"#00AAAA",VGA_BLUE,"#AA00AA"],NEON_GRADIENT=["#FF1493","#FF00FF","#8A2BE2","#0080FF","#00FFFF","#32CD32"],RETRO_GRADIENT=["#AA0000",VGA_YELLOW,VGA_GREEN,"#00AAAA",VGA_BLUE,"#AA00AA"],PASTEL_GRADIENT=["#ff6666","#ffcc66","#ffff66","#ccff66","#66ff66","#66ffcc","#66ffff","#66ccff","#6666ff","#cc66ff","#ff66ff","#ff66cc"],GRAYSCALE_GRADIENT=["#000000","#333333","#666666","#999999","#cccccc","#eeeeee"]},"./src/constants/fonts.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$A:()=>TERMINAL_FONT,$N:()=>FONT_SIZES,cN:()=>CRT_FONT,u8:()=>SYSTEM_FONT,xj:()=>BODY_FONT});const SYSTEM_FONT="\n  'MS Sans Serif', \n  'Chicago', \n  'Geneva', \n  'Helvetica', \n  sans-serif\n",TERMINAL_FONT="\n  'Consolas', \n  'Monaco', \n  'Lucida Console', \n  'Liberation Mono', \n  'DejaVu Sans Mono', \n  'Courier New', \n  monospace\n",BODY_FONT="\n  'MS Sans Serif', \n  'Tahoma', \n  'Verdana', \n  sans-serif\n",CRT_FONT="\n  'VT323', \n  'Share Tech Mono', \n  'Courier New', \n  monospace\n",FONT_SIZES={TINY:"8px",SMALL:"11px",NORMAL:"12px",MEDIUM:"14px",LARGE:"16px",XLARGE:"20px",DISPLAY:"24px",GIANT:"32px"}},"./src/utils/retroEffects.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{El:()=>crtFlicker,Z5:()=>scanlines,Z6:()=>crtEffect,r5:()=>terminalBlink,wZ:()=>terminalGlow});var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_constants_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/colors.ts");const scanlines=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`,crtFlicker=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0%, 98% { opacity: 1; }
  99% { opacity: 0.98; filter: brightness(0.95); }
  100% { opacity: 1; filter: brightness(1); }
`,terminalBlink=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,retroGlow=_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0%, 100% { 
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor;
  }
  50% { 
    text-shadow: 
      0 0 2px currentColor,
      0 0 5px currentColor,
      0 0 8px currentColor;
  }
`,crtEffect=(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.i7`
  0% { filter: hue-rotate(0deg) saturate(1); }
  20% { filter: hue-rotate(5deg) saturate(1.1); }
  40% { filter: hue-rotate(-2deg) saturate(0.9); }
  60% { filter: hue-rotate(3deg) saturate(1.05); }
  80% { filter: hue-rotate(-1deg) saturate(0.95); }
  100% { filter: hue-rotate(0deg) saturate(1); }
`,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("position:relative;background:",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.p,";&::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(\n\t\t\t0deg,\n\t\t\ttransparent,\n\t\t\ttransparent 2px,\n\t\t\t",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Pu," 2px,\n\t\t\t",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Pu," 4px\n\t\t);pointer-events:none;z-index:1;}&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(\n\t\t\tellipse at center,\n\t\t\ttransparent 60%,\n\t\t\trgba(0, 0, 0, 0.3) 100%\n\t\t);pointer-events:none;z-index:2;}","")),terminalGlow=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.AH)("color:",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Y5,";text-shadow:0 0 5px ",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Y5,",0 0 10px ",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Y5,",0 0 15px ",_constants_colors__WEBPACK_IMPORTED_MODULE_1__.Y5,";animation:",retroGlow," 2s ease-in-out infinite alternate;","")}}]);
//# sourceMappingURL=6697.8fb524c1.iframe.bundle.js.map