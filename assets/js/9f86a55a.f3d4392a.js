"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3467],{55126:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(24246),s=t(71670),l=t(79022);const i={title:"plugin list",sidebar_label:"list"},r=void 0,a={id:"proto/commands/plugin/list",title:"plugin list",description:"The proto plugin list command will list all available and configured plugins, for both third-party",source:"@site/docs/proto/commands/plugin/list.mdx",sourceDirName:"proto/commands/plugin",slug:"/proto/commands/plugin/list",permalink:"/docs/proto/commands/plugin/list",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/plugin/list.mdx",tags:[],version:"current",frontMatter:{title:"plugin list",sidebar_label:"list"},sidebar:"proto",previous:{title:"info",permalink:"/docs/proto/commands/plugin/info"},next:{title:"remove",permalink:"/docs/proto/commands/plugin/remove"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function u(n){const e={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{version:"0.23.0",header:!0}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"proto plugin list"})," command will list all available and configured plugins, for both third-party\nand built-in tools. Will load all ",(0,o.jsx)(e.code,{children:".prototools"})," traversing upwards, and the ",(0,o.jsx)(e.code,{children:"~/.proto/.prototools"}),"\nfile."]}),"\n",(0,o.jsx)(e.p,{children:"Furthermore, it can list tool information, along with their installed versions, relevant timestamps,\navailable aliases, and store location."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"$ proto plugin list --versions\n\nbun - Bun\n  Store: ~/.proto/tools/bun\n  Source: https://github.com/moonrepo/bun-plugin/releases/download/v0.10.0/bun_plugin.wasm\n  Versions:\n    1.0.13 - installed 11/21/23, last used 02/28/24, default version\n    0.8.0 - installed 11/19/23, last used 03/04/24\n    1.0.0 - installed 11/19/23, last used 03/04/24\n    1.0.15 - installed 12/09/23, last used 03/04/24\n\ndeno - Deno\n  Store: ~/.proto/tools/deno\n  Source: https://github.com/moonrepo/deno-plugin/releases/download/v0.10.0/deno_plugin.wasm\n  Versions:\n    1.36.1 - installed 08/15/23, default version\n    1.30.0 - installed 02/01/24, last used 03/04/24\n    1.38.0 - installed 11/08/23\n    1.40.0 - installed 02/01/24, last used 03/04/24\n\ngo - Go\n  Store: ~/.proto/tools/go\n  Source: https://github.com/moonrepo/go-plugin/releases/download/v0.10.0/go_plugin.wasm\n  Versions:\n    1.21.5 - installed 12/06/23, last used 02/29/24, default version\n    1.20.12 - installed 12/09/23\n\nnode - Node.js\n  Store: ~/.proto/tools/node\n  Source: https://github.com/moonrepo/node-plugin/releases/download/v0.10.0/node_plugin.wasm\n  Versions:\n    20.0.0 - installed 09/03/23, last used 03/04/24, default version\n"})}),"\n",(0,o.jsx)(e.p,{children:"A list of tool IDs can be provided to filter the output list."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"$ proto plugin list node npm\n"})}),"\n",(0,o.jsx)(e.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"[id...]"})," - IDs of tools."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"--aliases"})," - Print the list with resolved aliases."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"--versions"})," - Print the list with installed versions."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"--json"})," - Print the list in JSON format."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},79022:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(9619),s=t(24246);function l(n){let{header:e,inline:t,updated:l,version:i}=n;return(0,s.jsx)(o.Z,{text:`v${i}`,variant:l?"success":"info",className:e?"absolute right-0 top-1.5":t?"inline-block":"ml-2"})}},9619:(n,e,t)=>{t.d(e,{Z:()=>r});var o=t(40624),s=t(31792),l=t(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function r(n){let{className:e,icon:t,text:r,variant:a}=n;return(0,l.jsxs)("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",a?i[a]:"bg-gray-100 text-gray-800",e),children:[t&&(0,l.jsx)(s.Z,{icon:t,className:"mr-1"}),r]})}},71670:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var o=t(27378);const s={},l=o.createContext(s);function i(n){const e=o.useContext(l);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);