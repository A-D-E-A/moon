"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3287],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79022:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(9619);function o(e){let{header:t,updated:n,version:o}=e;return a.createElement(r.Z,{text:`v${o}`,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(38944),o=n(31792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){let{className:t,icon:n,text:s,variant:l}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),s)}},90360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318)),o=n(79022);const i={title:"Targets"},s=void 0,l={unversionedId:"concepts/target",id:"concepts/target",title:"Targets",description:"A target is a compound identifier that pairs a scope to a task, separated by a",source:"@site/docs/concepts/target.mdx",sourceDirName:"concepts",slug:"/concepts/target",permalink:"/docs/concepts/target",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/target.mdx",tags:[],version:"current",frontMatter:{title:"Targets"},sidebar:"docs",previous:{title:"Projects",permalink:"/docs/concepts/project"},next:{title:"Tasks",permalink:"/docs/concepts/task"}},c={},p=[{value:"Common scopes",id:"common-scopes",level:2},{value:"By project",id:"by-project",level:3},{value:"Run scopes",id:"run-scopes",level:2},{value:'By tag<VersionLabel version="1.4.0" />',id:"by-tag",level:3},{value:"All projects",id:"all-projects",level:3},{value:"Config scopes",id:"config-scopes",level:2},{value:"Dependencies <code>^</code>",id:"dependencies-",level:3},{value:"Self <code>~</code>",id:"self-",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A target is a compound identifier that pairs a ",(0,r.kt)("a",{parentName:"p",href:"#scope"},"scope")," to a ",(0,r.kt)("a",{parentName:"p",href:"./task"},"task"),", separated by a\n",(0,r.kt)("inlineCode",{parentName:"p"},":"),", in the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"scope:task"),"."),(0,r.kt)("p",null,"Targets are used by terminal commands..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run designSystem:build\n")),(0,r.kt)("p",null,"And configurations for declaring cross-project or cross-task dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tasks:\n  build:\n    command: 'webpack'\n    deps:\n      - 'designSystem:build'\n")),(0,r.kt)("h2",{id:"common-scopes"},"Common scopes"),(0,r.kt)("p",null,"These scopes are available for both running targets and configuring them."),(0,r.kt)("h3",{id:"by-project"},"By project"),(0,r.kt)("p",null,"The most common scope is the project scope, which requires the name of a project, as defined in\n",(0,r.kt)("a",{parentName:"p",href:"../config/workspace"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml")),". When paired with a task name, it will run a specific\ntask from that project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run `lint` in project `app`\n$ moon run app:lint\n")),(0,r.kt)("h2",{id:"run-scopes"},"Run scopes"),(0,r.kt)("p",null,"These scopes are only available on the command line when running targets."),(0,r.kt)("h3",{id:"by-tag"},"By tag",(0,r.kt)(o.Z,{version:"1.4.0",mdxType:"VersionLabel"})),(0,r.kt)("p",null,"Another way to target projects is with the tag scope, which requires the name of a tag prefixed with\n",(0,r.kt)("inlineCode",{parentName:"p"},"#"),", and will run a specific task in all projects with that tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run `lint` in projects with the tag `frontend`\n$ moon run '#frontend:lint'\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," is a special character in the terminal (is considered a comment), you'll need to wrap\nthe target in quotes, or escape it like so ",(0,r.kt)("inlineCode",{parentName:"p"},"\\#"),".")),(0,r.kt)("h3",{id:"all-projects"},"All projects"),(0,r.kt)("p",null,"For situations where you want to run a specific target in ",(0,r.kt)("em",{parentName:"p"},"all")," projects, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"lint"),"ing, you\ncan utilize the all projects scope by omitting the project name from the target: ",(0,r.kt)("inlineCode",{parentName:"p"},":lint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Run `lint` in all projects\n$ moon run :lint\n")),(0,r.kt)("h2",{id:"config-scopes"},"Config scopes"),(0,r.kt)("p",null,"These scopes are only available when configuring a task."),(0,r.kt)("h3",{id:"dependencies-"},"Dependencies ",(0,r.kt)("inlineCode",{parentName:"h3"},"^")),(0,r.kt)("p",null,"When you want to include a reference for each project ",(0,r.kt)("a",{parentName:"p",href:"./project#dependencies"},"that's depended on"),",\nyou can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"^")," scope. This will be expanded to ",(0,r.kt)("em",{parentName:"p"},"all")," depended on projects. If you do not\nwant all projects, then you'll need to explicitly define them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml"',title:'"moon.yml"'},"dependsOn:\n    - 'apiClients'\n    - 'designSystem'\n\n# Configured as\ntasks:\n    build:\n        command: 'webpack'\n        deps:\n            - '^:build'\n\n# Resolves to\ntasks:\n    build:\n        command: 'webpack'\n        deps:\n            - 'apiClients:build'\n            - 'designSystem:build'\n")),(0,r.kt)("h3",{id:"self-"},"Self ",(0,r.kt)("inlineCode",{parentName:"h3"},"~")),(0,r.kt)("p",null,"When referring to another task within the current project, you can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," scope, or emit\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"~:")," prefix altogether, which will be expanded to the current project's name. This is useful for\nsituations where the name is unknown, for example, when configuring\n",(0,r.kt)("a",{parentName:"p",href:"../config/tasks"},(0,r.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml")),", or if you just want a shortcut!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks.yml"',title:'".moon/tasks.yml"'},"# Configured as\ntasks:\n    lint:\n        command: 'eslint'\n        deps:\n            - '~:typecheck'\n            # OR\n            - 'typecheck'\n    typecheck:\n        command: 'tsc'\n\n# Resolves to (assuming project is \"foo\")\ntasks:\n    lint:\n        command: 'eslint'\n        deps:\n            - 'foo:typecheck'\n    typecheck:\n        command: 'tsc'\n")))}d.isMDXComponent=!0}}]);