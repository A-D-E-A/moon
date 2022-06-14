"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3206],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7378),a=n(9619);function o(e){var t=e.className;switch(e.status){case"experimental":return r.createElement(a.Z,{className:t,text:"Experimental",variant:"failure"});case"in-development":return r.createElement(a.Z,{className:t,text:"In development",variant:"success"});case"coming-soon":return r.createElement(a.Z,{className:t,text:"Coming soon",variant:"warning"});default:return null}}},9619:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7378),a=n(8944),o=n(8896),i={failure:"bg-red-100 text-red-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){var t=e.className,n=e.icon,s=e.text,l=e.variant;return r.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(o.Z,{icon:n,className:"mr-1"}),s)}},2661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=n(60),s=["components"],l={slug:"/",title:"Introduction"},c=void 0,u={unversionedId:"intro",id:"intro",title:"Introduction",description:"moon is a repository management, organization, orchestration, and notification tool for",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/intro.mdx",tags:[],version:"current",frontMatter:{slug:"/",title:"Introduction"},sidebar:"docs",next:{title:"Install moon",permalink:"/docs/install"}},p={},m=[{value:"Why use moon?",id:"why-use-moon",level:2},{value:"Features",id:"features",level:2},{value:"Management",id:"management",level:4},{value:"Organization",id:"organization",level:4},{value:"Orchestration",id:"orchestration",level:4},{value:"Notification",id:"notification",level:4}],d={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"moon is a repository ",(0,o.kt)("em",{parentName:"p"},"m"),"anagement, ",(0,o.kt)("em",{parentName:"p"},"o"),"rganization, ",(0,o.kt)("em",{parentName:"p"},"o"),"rchestration, and ",(0,o.kt)("em",{parentName:"p"},"n"),"otification tool for\nJavaScript based projects, written in Rust. Many of the concepts within moon are heavily inspired\nfrom Bazel and other popular build systems, but tailored for the JavaScript ecosystem."),(0,o.kt)("h2",{id:"why-use-moon"},"Why use moon?"),(0,o.kt)("p",null,"Working in the JavaScript ecosystem can be very involved, especially when it comes to managing a\nrepository effectively. Which package manager to use? Which Node.js version to use? How to import\nnode modules? How to build packages? So on and so forth. moon aims to streamline this entire process\nand provide a first-class developer experience."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Increased productivity")," - With ",(0,o.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," as our foundation, we can\nensure robust speeds, high performance, and low memory usage. Instead of long builds blocking you,\nfocus on your work."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exceptional developer experience")," - As veterans of the JavaScript ecosystem, we're well aware\nof the pain points and frustrations. Our goal is to mitigate and overcome these obstacles."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental adoption")," - At its core, moon has been designed to be adopted incrementally and is\n",(0,o.kt)("em",{parentName:"li"},"not"),' an "all at once adoption". Migrate project-by-project, or task-by-task, it\'s up to you!'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduced scripts confusion")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," scripts can become unwieldy, very quickly. No more\nduplicating the same script into every package, or reverse-engineering which root scripts to use.\nWith moon, all you need to know is the project ID, and a task ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ensure correct versions")," - Whether it's Node.js or npm, ensure the same version of each tool is\nthe same across ",(0,o.kt)("em",{parentName:"li"},"every")," developer's environment. No more wasted hours of debugging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automation built-in")," - When applicable, moon will automatically install ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", or\n",(0,o.kt)("a",{parentName:"li",href:"/docs/config/workspace#syncprojectworkspacedependencies"},"sync package dependencies"),", or even\n",(0,o.kt)("a",{parentName:"li",href:"/docs/config/workspace#syncprojectreferences"},"sync TypeScript project references"),"."),(0,o.kt)("li",{parentName:"ul"},"And of course, the amazing list of features below!")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h4",{id:"management"},"Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Smart hashing")," ",(0,o.kt)(i.Z,{status:"experimental",mdxType:"FeatureStatus"})," - Collects inputs from multiple sources\nto ensure builds are deterministic and reproducible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote caching")," ",(0,o.kt)(i.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Persists builds, hashes, and caches\nbetween teammates and CI/CD environments."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integrated toolchain")," - Automatically downloads and installs explicit versions of Node.js and\nother tools for consistency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-platform")," - Runs on common development platforms: Linux, macOS, and Windows.")),(0,o.kt)("h4",{id:"organization"},"Organization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project graph")," - Generates a project graph for dependency and dependent relationships."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project boundaries")," - Enforces boundaries to eliminate cycles and reduce indirection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependency workspaces")," - Works alongside package manager workspaces so that projects have\ndistinct dependency trees."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ownership metadata")," - Declare an owner, maintainers, support channels, and more, for LDAP or\nanother integration.")),(0,o.kt)("h4",{id:"orchestration"},"Orchestration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dependency graph")," - Generates a dependency graph to increase performance and reduce workloads."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action runner")," - Executes actions in parallel and in order using a thread pool and our\ndependency graph."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action distribution")," ",(0,o.kt)(i.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Distributes actions across\nmultiple machines to increase throughput."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental builds")," ",(0,o.kt)(i.Z,{status:"experimental",mdxType:"FeatureStatus"})," - With our smart hashing, only\nrebuild projects that have been touched since the last build.")),(0,o.kt)("h4",{id:"notification"},"Notification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flakiness detection")," ",(0,o.kt)(i.Z,{status:"experimental",mdxType:"FeatureStatus"})," - Reduce flaky builds with\nautomatic retries and passthrough settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Webhook events")," ",(0,o.kt)(i.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Receive a webhook for every event in\nthe pipeline. Useful for metrics gathering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Terminal notifications")," ",(0,o.kt)(i.Z,{status:"coming-soon",mdxType:"FeatureStatus"})," - Receives notifications in your\nchosen terminal when builds are successful... or are not.")))}g.isMDXComponent=!0}}]);