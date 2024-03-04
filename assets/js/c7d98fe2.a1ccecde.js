"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51084],{12037:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(24246),r=n(71670);const s={title:"FAQ"},t=void 0,l={id:"proto/faq",title:"FAQ",description:"General",source:"@site/docs/proto/faq.mdx",sourceDirName:"proto",slug:"/proto/faq",permalink:"/docs/proto/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"proto",previous:{title:"use",permalink:"/docs/proto/commands/use"}},a={},d=[{value:"General",id:"general",level:2},{value:"Where did the name &quot;proto&quot; come from?",id:"where-did-the-name-proto-come-from",level:3},{value:"Are you worried about confusion with other tools like protobufs?",id:"are-you-worried-about-confusion-with-other-tools-like-protobufs",level:3},{value:"What is a tool?",id:"what-is-a-tool",level:3},{value:"What is a plugin?",id:"what-is-a-plugin",level:3},{value:"Will you support more languages?",id:"will-you-support-more-languages",level:3},{value:"Will you support other kinds of tools?",id:"will-you-support-other-kinds-of-tools",level:3},{value:"Will you support &quot;build from source&quot;?",id:"will-you-support-build-from-source",level:3},{value:"How to run a canary release after installing it?",id:"how-to-run-a-canary-release-after-installing-it",level:3},{value:"OS is unable to find an installed binary, how to resolve?",id:"os-is-unable-to-find-an-installed-binary-how-to-resolve",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Network requests keep failing, how can I bypass?",id:"network-requests-keep-failing-how-can-i-bypass",level:3}];function h(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(o.h3,{id:"where-did-the-name-proto-come-from",children:'Where did the name "proto" come from?'}),"\n",(0,i.jsxs)(o.p,{children:["We wanted to keep with the space theme, and spent quite some time digging through Wikipedia and\nultimately landed on the page for ",(0,i.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Protostar",children:"protostar"}),' (this is why\nour logo\'s a star). We really liked the definition of protostar, as it basically means "the\nbeginning phase of a star". Even the the prefix proto means "first" or "earliest form of".']}),"\n",(0,i.jsx)(o.p,{children:"This was great as that's the impression we had in mind for our tool. proto is the first piece\nrequired for setting up your developer environment. The toolchain is the first layer in the\nfoundation."}),"\n",(0,i.jsx)(o.p,{children:"From an aesthetic standpoint, proto's typography works well with moon and moonbase, as most of the\nletters are circle shaped. Double points for proto having two o's like the other products!"}),"\n",(0,i.jsx)(o.h3,{id:"are-you-worried-about-confusion-with-other-tools-like-protobufs",children:"Are you worried about confusion with other tools like protobufs?"}),"\n",(0,i.jsx)(o.p,{children:"Nah."}),"\n",(0,i.jsx)(o.h3,{id:"what-is-a-tool",children:"What is a tool?"}),"\n",(0,i.jsxs)(o.p,{children:["A tool in the context of proto is either a language, dependency/package manager (typically for a\nlanguage), or third-party CLI. The tool is something that can be downloaded and installed ",(0,i.jsx)(o.em,{children:"by\nversion"})," onto a machine."]}),"\n",(0,i.jsxs)(o.p,{children:["Furthermore, a tool should have a primary executable file that can be executed with ",(0,i.jsx)(o.code,{children:"proto run"})," or\nthrough proto's shims. Additionally, a tool can also provide secondary executable files. For\nexample, ",(0,i.jsx)(o.code,{children:"npm"})," (the primary) also provides ",(0,i.jsx)(o.code,{children:"npx"})," and ",(0,i.jsx)(o.code,{children:"node-gyp"})," (secondaries)."]}),"\n",(0,i.jsx)(o.h3,{id:"what-is-a-plugin",children:"What is a plugin?"}),"\n",(0,i.jsx)(o.p,{children:"A plugin is a WASM (or TOML) file for a tool."}),"\n",(0,i.jsx)(o.p,{children:"The terms tool and plugin are often used interchangeably, but plugin primarily refers to the WASM\nportion of a tool, while tool refers to the entire package: metadata, business logic, branding, so\non an so forth."}),"\n",(0,i.jsx)(o.h3,{id:"will-you-support-more-languages",children:"Will you support more languages?"}),"\n",(0,i.jsxs)(o.p,{children:["Yes! We'd love to support as many as possible, and if you'd like to help, join our Discord\ncommunity! Feel free to create a ",(0,i.jsx)(o.a,{href:"./plugins",children:"plugin"})," in the mean time."]}),"\n",(0,i.jsx)(o.h3,{id:"will-you-support-other-kinds-of-tools",children:"Will you support other kinds of tools?"}),"\n",(0,i.jsxs)(o.p,{children:["No, we will only support languages, dependency managers, and CLIs, which should be enough. However,\nyou can create a ",(0,i.jsx)(o.a,{href:"./plugins",children:"plugin"})," to support other kinds of tools."]}),"\n",(0,i.jsx)(o.h3,{id:"will-you-support-build-from-source",children:'Will you support "build from source"?'}),"\n",(0,i.jsx)(o.p,{children:"In the future we have plans to support building from source. For the time being, proto is built\naround pre-built archives for easier portability."}),"\n",(0,i.jsx)(o.h3,{id:"how-to-run-a-canary-release-after-installing-it",children:"How to run a canary release after installing it?"}),"\n",(0,i.jsxs)(o.p,{children:["Once a tool has been installed with ",(0,i.jsx)(o.code,{children:"--canary"}),", the canary version can be explicitly referenced\nusing our ",(0,i.jsx)(o.a,{href:"./detection",children:"version detection rules"}),". The easiest approach is to prefix the shim with an\nenvironment variable:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"$ PROTO_BUN_VERSION=canary bun ./index.ts\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Or to explicitly configure the version in ",(0,i.jsx)(o.a,{href:"./config",children:(0,i.jsx)(o.code,{children:".prototools"})}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-toml",children:'bun = "canary"\n'})}),"\n",(0,i.jsx)(o.h3,{id:"os-is-unable-to-find-an-installed-binary-how-to-resolve",children:"OS is unable to find an installed binary, how to resolve?"}),"\n",(0,i.jsxs)(o.p,{children:["To start, ensure that proto's shim and binary directories are listed first on ",(0,i.jsx)(o.code,{children:"PATH"}),", and takes\nprecedence over other binaries of the same name that may collide."]}),"\n",(0,i.jsxs)(o.p,{children:["Secondly, proto is powered through shims, which means on Windows, we do not provide ",(0,i.jsx)(o.code,{children:".exe"})," binaries\n(for shims), and instead use ",(0,i.jsx)(o.code,{children:".cmd"}),". If you're attempting to run a script that uses a hard-coded\nbinary name like ",(0,i.jsx)(o.code,{children:"node.exe"}),", you'll need to do one of the following:"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Remove the trailing ",(0,i.jsx)(o.code,{children:".exe"})," and simply run ",(0,i.jsx)(o.code,{children:"node"})," instead. Windows will use the ",(0,i.jsx)(o.code,{children:"PATHEXT"}),"\nenvironment variable to find the appropriate extension, which includes ",(0,i.jsx)(o.code,{children:".cmd"})," by default."]}),"\n",(0,i.jsxs)(o.li,{children:["Ensure ",(0,i.jsx)(o.code,{children:"~/.proto/bin"})," is in your ",(0,i.jsx)(o.code,{children:"PATH"}),". If a shim cannot be found, the original binary will be\nused instead."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(o.h3,{id:"network-requests-keep-failing-how-can-i-bypass",children:"Network requests keep failing, how can I bypass?"}),"\n",(0,i.jsx)(o.p,{children:"When a tool is executed, we validate the version to ensure it's correct. We achieve this by making\nnetwork requests to a remote service to gather the list of valid versions. If you're having network\nissues, or the request is timing out, you can bypass these checks with the following:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Pass a fully-qualified version as an environment variable. The version must be installed for this\nto work."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"PROTO_NODE_VERSION=20.0.0 node --version\n"})}),"\n",(0,i.jsxs)(o.p,{children:["If executing a Node.js package manager, you'll need to set versions for both Node.js and the\nmanager. This is required since manager's execute ",(0,i.jsx)(o.code,{children:"node"})," processes under the hood."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"PROTO_NODE_VERSION=20.0.0 PROTO_NPM_VERSION=10.0.0 npm --version\n"})}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Pass the ",(0,i.jsx)(o.code,{children:"PROTO_BYPASS_VERSION_CHECK"})," environment variable. This will bypass the network request\nto load versions, but does not bypass other requests. However, this is typically enough."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-shell",children:"PROTO_BYPASS_VERSION_CHECK=1 node --version\n"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,o,n)=>{n.d(o,{Z:()=>l,a:()=>t});var i=n(27378);const r={},s=i.createContext(r);function t(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);