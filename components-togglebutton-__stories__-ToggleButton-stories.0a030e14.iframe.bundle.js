"use strict";(globalThis.webpackChunkretro_react=globalThis.webpackChunkretro_react||[]).push([[6792],{"./src/components/togglebutton/__stories__/ToggleButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/utils/classNames.ts"),commonClassNames=__webpack_require__("./src/constants/commonClassNames.ts"),Button=__webpack_require__("./src/components/button/Button.tsx"),theme_ui_jsx_runtime_esm=__webpack_require__("./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");const ToggleButton=(0,react.forwardRef)(((_ref,ref)=>{let{selected=!1,...buttonProps}=_ref;return(0,theme_ui_jsx_runtime_esm.tZ)(Button.z,{...buttonProps,sx:{...buttonProps.sx,minWidth:"fit-content",filter:selected?"brightness(0.65) contrast(1.2)":"none","&:hover":{transform:selected?"scale(1.05)":"scale(1.02)"}},ref})}));ToggleButton.displayName="ToggleButton";const ToggleButtonGroup=(0,react.forwardRef)(((_ref2,ref)=>{let{id,className,children,size="medium",value,onValueChange,multiple=!1,sx,...rest}=_ref2;const[selectedValues,setSelectedValues]=(0,react.useState)(value||[]);return(0,theme_ui_jsx_runtime_esm.tZ)("div",{ref,id,className:(0,classNames.A)("toggle-button-group-root",className,commonClassNames.Z),sx,...rest,children:react.Children.map(children,(child=>{if(!(0,react.isValidElement)(child)||child.type!==ToggleButton)return child;const val=child.props.value,selected=selectedValues.includes(val);return(0,react.cloneElement)(child,{size,selected,onClick:()=>(val=>{let newSelectedValues;newSelectedValues=multiple?selectedValues.includes(val)?selectedValues.filter((v=>v!==val)):[...selectedValues,val]:[val],setSelectedValues(newSelectedValues),onValueChange?.(newSelectedValues)})(val)})}))})}));ToggleButtonGroup.displayName="ToggleButtonGroup";try{ToggleButton.displayName="ToggleButton",ToggleButton.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'primary'"},description:"The color of the Button.",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"warn"'},{value:'"greyscale"'},{value:'"greyscale-dark"'}]}},variant:{defaultValue:{value:"'solid'"},description:"The visual style of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"text"'},{value:'"outline"'}]}},size:{defaultValue:{value:"medium"},description:"The size of the Button.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disableClickEffect:{defaultValue:{value:"false"},description:"If true disables the click transform effect.",name:"disableClickEffect",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUICSSObject"}},isButtonGroup:{defaultValue:null,description:"@internal Modify styles for ButtonGroup component.",name:"isButtonGroup",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/togglebutton/ToggleButton.tsx#ToggleButton"]={docgenInfo:ToggleButton.__docgenInfo,name:"ToggleButton",path:"src/components/togglebutton/ToggleButton.tsx#ToggleButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleButton_stories={title:"Components/ToggleButtonGroup",component:ToggleButtonGroup,parameters:{docs:{description:{component:"A group of toggle buttons. It can be used to select one or multiple values. It's a controlled component. Uses `Button` to render the toggle buttons. You can apply the `Button` props to this component."}}},argTypes:{children:{control:{disable:!0},description:"The children of this component, typically `ToggleButton` components."},size:{control:{type:"select",options:["small","medium","large"]},description:"The size of the buttons. It will be passed to the `ToggleButton` children."},value:{control:{disable:!0},description:"An array of values of the selected buttons in this group. It can be used to control the selection (controlled component)."},onValueChange:{control:{disable:!0},description:"A callback function that is called when the selected value changes. The new selection (array of values of the selected buttons) is passed as argument."},multiple:{control:"boolean",description:"If true, multiple buttons can be selected. If false (default), only one button can be selected."},sx:{control:{disable:!0},description:"Additional style that should be applied to the group. It's a style object defined by Theme UI."},color:{control:"select",description:"The color of the toggle buttons. This should be passed to the `ToggleButton` children.",options:["primary","secondary","success","error","warn","greyscale","greyscale-dark"]}}},Template=args=>(0,jsx_runtime.jsxs)(ToggleButtonGroup,{...args,onValueChange:value=>console.log(value),children:[(0,jsx_runtime.jsx)(ToggleButton,{value:"first",color:args.color,children:"A"}),(0,jsx_runtime.jsx)(ToggleButton,{value:"second",color:args.color,children:"B"}),(0,jsx_runtime.jsx)(ToggleButton,{value:"third",color:args.color,children:"C"})]});Template.displayName="Template";const Basic=Template.bind({});Basic.args={size:"medium",color:"greyscale",multiple:!1};const TemplateMultiple=args=>(0,jsx_runtime.jsxs)(ToggleButtonGroup,{...args,onValueChange:value=>console.log(value),children:[(0,jsx_runtime.jsx)(ToggleButton,{value:"first",color:"greyscale",children:"A"}),(0,jsx_runtime.jsx)(ToggleButton,{value:"second",color:"greyscale",children:"B"}),(0,jsx_runtime.jsx)(ToggleButton,{value:"third",color:"greyscale",children:"C"})]});TemplateMultiple.displayName="TemplateMultiple";const Multiple=TemplateMultiple.bind({});Multiple.args={size:"medium",multiple:!0},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'args => <ToggleButtonGroup {...args} onValueChange={value => console.log(value)}>\n        <ToggleButton value="first" color={(args.color as ButtonColor)}>\n            A\n        </ToggleButton>\n        <ToggleButton value="second" color={(args.color as ButtonColor)}>\n            B\n        </ToggleButton>\n        <ToggleButton value="third" color={(args.color as ButtonColor)}>\n            C\n        </ToggleButton>\n    </ToggleButtonGroup>',...Basic.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'args => <ToggleButtonGroup {...args} onValueChange={value => console.log(value)}>\n        <ToggleButton value="first" color="greyscale">\n            A\n        </ToggleButton>\n        <ToggleButton value="second" color="greyscale">\n            B\n        </ToggleButton>\n        <ToggleButton value="third" color="greyscale">\n            C\n        </ToggleButton>\n    </ToggleButtonGroup>',...Multiple.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Multiple"]}}]);