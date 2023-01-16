"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6911],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8109:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7378);function a(e){let{src:t,width:r="90%",alt:a="",title:o,align:i="center",padding:l="1rem"}=e;return n.createElement("div",{style:{marginBottom:l,marginTop:l,textAlign:i}},n.createElement("img",{src:t.default,width:r,alt:a,title:o,className:"inline-block"}))}},9619:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7378),a=r(8944),o=r(1792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:r,text:l,variant:s}=e;return n.createElement("span",{className:(0,a.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?i[s]:"bg-gray-100 text-gray-800",t)},r&&n.createElement(o.Z,{icon:r,className:"mr-1"}),l)}},6858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(5773),a=(r(7378),r(5318));r(9619),r(8109);const o={slug:"v0.21",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",authors:["milesj"],tags:["runner","language","platform","cache","graph"],image:"./img/v0.21.png"},i=void 0,l={permalink:"/blog/v0.21",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-12-19_v0.21.mdx",source:"@site/blog/2022-12-19_v0.21.mdx",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",description:"Happy Holidays \ud83c\udf84\u2603\ufe0f! With our last release of the year, we're very excited to announce our tiered",date:"2022-12-19T00:00:00.000Z",formattedDate:"December 19, 2022",tags:[{label:"runner",permalink:"/blog/tags/runner"},{label:"language",permalink:"/blog/tags/language"},{label:"platform",permalink:"/blog/tags/platform"},{label:"cache",permalink:"/blog/tags/cache"},{label:"graph",permalink:"/blog/tags/graph"}],readingTime:4.215,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.21",title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",authors:["milesj"],tags:["runner","language","platform","cache","graph"],image:"./img/v0.21.png"},prevItem:{title:"What's in store for 2023",permalink:"/blog/2023-roadmap"},nextItem:{title:"moon v0.20 - Toolchain, caching, and hydration improvements",permalink:"/blog/v0.20"}},s={image:r(9851).Z,authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Happy Holidays \ud83c\udf84\u2603\ufe0f! With our last release of the year, we're very excited to announce our tiered\nlanguage support structure, which lays the foundation for turning moon into a multi-language build\nsystem! On top of this, we've worked heavily on bug fixing, optimizations, and overall quality of\nlife improvements."))}u.isMDXComponent=!0},9851:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v0.21-a2807b8b9cbc5e05fe2d8cb2b78050ed.png"}}]);