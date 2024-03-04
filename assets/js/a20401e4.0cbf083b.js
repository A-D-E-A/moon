"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70969],{53980:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=o(24246),s=o(71670);const l={title:"install"},r=void 0,a={id:"proto/commands/install",title:"install",description:"The proto install  (or proto i) command will download and install a tool by unpacking",source:"@site/docs/proto/commands/install.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/install",permalink:"/docs/proto/commands/install",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/install.mdx",tags:[],version:"current",frontMatter:{title:"install"},sidebar:"proto",previous:{title:"env",permalink:"/docs/proto/commands/debug/env"},next:{title:"list",permalink:"/docs/proto/commands/list"}},i={},c=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"proto install <tool>"})," (or ",(0,t.jsx)(n.code,{children:"proto i"}),") command will download and install a tool by unpacking\ntheir archive to ",(0,t.jsx)(n.code,{children:"~/.proto/tools/<tool>"}),". If the tool has already been installed, the command will\nexit early."]}),"\n",(0,t.jsxs)(n.p,{children:["The command is also smart enough to resolve partial versions, so 1, 1.2, and 1.2.3 are all\nacceptable. It even supports aliases when applicable, like ",(0,t.jsx)(n.code,{children:"latest"}),", ",(0,t.jsx)(n.code,{children:"next"}),", ",(0,t.jsx)(n.code,{children:"beta"}),", etc. To install\na canary release, use ",(0,t.jsx)(n.code,{children:"--canary"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ proto install deno 1.31\n$ proto install deno --canary\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Some tools run ",(0,t.jsx)(n.a,{href:"../tools",children:"post-install hooks"})," that support arbitrary arguments that can be passed\nafter ",(0,t.jsx)(n.code,{children:"--"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ proto install go -- --no-gobin\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<tool>"})," - Type of tool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[version]"}),' - Version of tool. Defaults to "latest".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"[-- <args>]"})," - Additional arguments to pass to post-install hooks."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--canary"})," - Install a canary (next, nightly, etc) version."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--pin"})," - Pin the resolved version and create a symlink in ",(0,t.jsx)(n.code,{children:"~/.proto/bin"}),'. Accepts a boolean (pins\nglobally), or the string "global", or the string "local".']}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(27378);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);