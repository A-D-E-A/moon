"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5995],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(25773),o=(n(27378),n(35318));const a={title:"sync projects",sidebar_label:"projects"},c=void 0,s={unversionedId:"commands/sync/projects",id:"commands/sync/projects",title:"sync projects",description:"The moon sync projects command will force sync all projects in the workspace to help achieve a",source:"@site/docs/commands/sync/projects.mdx",sourceDirName:"commands/sync",slug:"/commands/sync/projects",permalink:"/docs/commands/sync/projects",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/sync/projects.mdx",tags:[],version:"current",frontMatter:{title:"sync projects",sidebar_label:"projects"},sidebar:"docs",previous:{title:"codeowners",permalink:"/docs/commands/sync/codeowners"},next:{title:"task",permalink:"/docs/commands/task"}},i={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon sync projects")," command will force sync ",(0,o.kt)("em",{parentName:"p"},"all")," projects in the workspace to help achieve a\n",(0,o.kt)("a",{parentName:"p",href:"../../faq#what-should-be-considered-the-source-of-truth"},"healthy repository state"),". This applies\nthe following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensures cross-project dependencies are linked based on\n",(0,o.kt)("a",{parentName:"li",href:"../../config/project#dependsOn"},(0,o.kt)("inlineCode",{parentName:"a"},"dependsOn")),"."),(0,o.kt)("li",{parentName:"ul"},"Ensures language specific configuration files are present and accurate (",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),", etc)."),(0,o.kt)("li",{parentName:"ul"},"Ensures root configuration and project configuration are in sync."),(0,o.kt)("li",{parentName:"ul"},"Any additional language specific semantics that may be required.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon sync projects\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This command should rarely be ran, as ",(0,o.kt)("a",{parentName:"p",href:"../run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run"))," will sync affected projects\nautomatically! However, when migrating or refactoring, manual syncing may be necessary.")))}m.isMDXComponent=!0}}]);