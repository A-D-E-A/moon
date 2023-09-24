"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5679],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(37140);const l="tabItem_wHwb";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(25773),r=n(27378),l=n(37140),o=n(83457),s=n(35595),i=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(m(t),i(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,s.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(m,(0,a.Z)({},e,t)))}function f(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>m});var a=n(27378),r=n(35331),l=n(30654),o=n(70784),s=n(71819);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??i(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[m,d]=p({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=m??f;return c({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function s(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function i(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=s(e,!1,!0),n=i(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=s(e,!0,!0),n+=i(e,!0)),a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},s(e,!1,!1))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},t)),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},n)))}},27457:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function s(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function i(e){let{dep:t,args:n=[]}=e;return a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},s("yarn",t,n))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},s("yarn",t,n))),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},s("npm",t,n))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},s("pnpm",t,n))))}},32189:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(83469),l=n(31792);function o(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(l.Z,{icon:r.dT$}))}},79597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(25773),r=(n(27378),n(35318));n(36642),n(27457),n(33337),n(39798),n(32189);const l={title:"NestJS example",sidebar_label:"NestJS"},o=void 0,s={unversionedId:"guides/examples/nest",id:"guides/examples/nest",title:"NestJS example",description:"In this guide, you'll learn how to integrate NestJS into moon.",source:"@site/docs/guides/examples/nest.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/nest",permalink:"/docs/guides/examples/nest",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/nest.mdx",tags:[],version:"current",frontMatter:{title:"NestJS example",sidebar_label:"NestJS"},sidebar:"guides",previous:{title:"Jest",permalink:"/docs/guides/examples/jest"},next:{title:"Next.js",permalink:"/docs/guides/examples/next"}},i={},u=[{value:"Setup",id:"setup",level:2},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS")," into moon."),(0,r.kt)("p",null,"Begin by creating a new NestJS project in the root of an existing moon project (this should not be\ncreated in the workspace root, unless a polyrepo)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @nestjs/cli@latest new nestjs-app --skip-git\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"View the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/first-steps"},"official NestJS docs")," for a more in-depth guide to\ngetting started!")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Since NestJS is per-project, the associated moon tasks should be defined in each project's\n",(0,r.kt)("a",{parentName:"p",href:"../../config/project"},(0,r.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"type: 'application'\n\nfileGroups:\n  app:\n    - 'nest-cli.*'\n\ntasks:\n  dev:\n    command: 'nest start --watch'\n    local: true\n\n  build:\n    command: 'nest build'\n    inputs:\n      - '@group(app)'\n      - '@group(sources)'\n")),(0,r.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,r.kt)("p",null,"NestJS has ",(0,r.kt)("a",{parentName:"p",href:"https://NestJS.io/guide/typescript-configuration"},"built-in support for TypeScript"),", so\nthere is no need for additional configuration to enable TypeScript support."),(0,r.kt)("p",null,"At this point we'll assume that a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," has been created in the application, and\ntypechecking works. From here we suggest utilizing a ",(0,r.kt)("a",{parentName:"p",href:"./typescript"},"global ",(0,r.kt)("inlineCode",{parentName:"a"},"typecheck")," task")," for\nconsistency across all projects within the repository."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"root-level"},"Root-level"),(0,r.kt)("p",null,"We suggest ",(0,r.kt)("em",{parentName:"p"},"against")," root-level configuration, as NestJS should be installed per-project, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"nest")," command expects the configuration to live relative to the project root."),(0,r.kt)("h3",{id:"project-level"},"Project-level"),(0,r.kt)("p",null,"When creating a new NestJS project, a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/cli/monorepo"},(0,r.kt)("inlineCode",{parentName:"a"},"nest-cli.json"))," is\ncreated, and ",(0,r.kt)("em",{parentName:"p"},"must")," exist in the project root. This allows each project to configure NestJS for\ntheir needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/nest-cli.json"',title:'"<project>/nest-cli.json"'},'{\n  "$schema": "https://json.schemastore.org/nest-cli",\n  "collection": "@nestjs/schematics",\n  "type": "application",\n  "root": "./",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "tsConfigPath": "tsconfig.build.json"\n  }\n}\n')))}p.isMDXComponent=!0}}]);