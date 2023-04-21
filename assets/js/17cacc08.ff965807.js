"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8893],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(38944);const r="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(25773),o=n(27378),r=n(38944),i=n(83457),l=n(35595),s=n(76457);const p="tabList_J5MA",c="tabItem_l0OV";function m(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=m.indexOf(t),a=p[n].value;a!==l&&(d(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:h,onClick:u},i,{className:(0,r.Z)("tabs__item",c,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function u(e){const t=(0,l.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement(m,(0,a.Z)({},e,t)),o.createElement(d,(0,a.Z)({},e,t)))}function h(e){const t=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(27378),o=n(35331),r=n(30654),i=n(70784),l=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[d,u]=m({queryString:n,groupId:o}),[h,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,l.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=d??h;return c({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,r]),tabValues:r}}},32189:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),o=n(83469),r=n(31792);function i(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(r.Z,{icon:o.dT$}))}},9785:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378),o=n(9619);function r(e){let{text:t="Required"}=e;return a.createElement(o.Z,{text:t,variant:"failure",className:"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),o=n(38944),r=n(31792);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function l(e){let{className:t,icon:n,text:l,variant:s}=e;return a.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?i[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(r.Z,{icon:n,className:"mr-1"}),l)}},28137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(25773),o=(n(27378),n(35318)),r=(n(33337),n(39798),n(32189)),i=n(9785);const l={title:".moon/workspace.yml",toc_max_heading_level:6},s=void 0,p={unversionedId:"config/workspace",id:"config/workspace",title:".moon/workspace.yml",description:"The .moon/workspace.yml file configures projects and services in the workspace. This file is",source:"@site/docs/config/workspace.mdx",sourceDirName:"config",slug:"/config/workspace",permalink:"/docs/config/workspace",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/workspace.mdx",tags:[],version:"current",frontMatter:{title:".moon/workspace.yml",toc_max_heading_level:6},sidebar:"docs",previous:{title:"Config files",permalink:"/docs/config"},next:{title:".moon/toolchain.yml",permalink:"/docs/config/toolchain"}},c={},m=[{value:"<code>extends</code>",id:"extends",level:2},{value:"<code>projects</code><RequiredLabel />",id:"projects",level:2},{value:"Using a map",id:"using-a-map",level:3},{value:"Using globs",id:"using-globs",level:3},{value:"Using a map <em>and</em> globs",id:"using-a-map-and-globs",level:3},{value:"<code>constraints</code>",id:"constraints",level:2},{value:"<code>enforceProjectTypeRelationships</code>",id:"enforceprojecttyperelationships",level:3},{value:"<code>tagRelationships</code>",id:"tagrelationships",level:3},{value:"<code>generator</code>",id:"generator",level:2},{value:"<code>templates</code>",id:"templates",level:3},{value:"<code>hasher</code>",id:"hasher",level:2},{value:"<code>batchSize</code>",id:"batchsize",level:3},{value:"<code>optimization</code>",id:"optimization",level:3},{value:"<code>walkStrategy</code>",id:"walkstrategy",level:3},{value:"<code>warnOnMissingInputs</code>",id:"warnonmissinginputs",level:3},{value:"<code>notifier</code>",id:"notifier",level:2},{value:"<code>webhookUrl</code>",id:"webhookurl",level:3},{value:"<code>runner</code>",id:"runner",level:2},{value:"<code>cacheLifetime</code>",id:"cachelifetime",level:3},{value:"<code>archivableTargets</code>",id:"archivabletargets",level:3},{value:"<code>inheritColorsForPipedTasks</code>",id:"inheritcolorsforpipedtasks",level:3},{value:"<code>logRunningCommand</code>",id:"logrunningcommand",level:3},{value:"<code>telemetry</code>",id:"telemetry",level:2},{value:"<code>vcs</code>",id:"vcs",level:2},{value:"<code>defaultBranch</code>",id:"defaultbranch",level:3},{value:"<code>manager</code>",id:"manager",level:3},{value:"<code>remoteCandidates</code>",id:"remotecandidates",level:3},{value:"<code>versionConstraint</code>",id:"versionconstraint",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml")," file configures projects and services in the workspace. This file is\n",(0,o.kt)("em",{parentName:"p"},"required"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"$schema: 'https://moonrepo.dev/schemas/workspace.json'\n")),(0,o.kt)("h2",{id:"extends"},(0,o.kt)("inlineCode",{parentName:"h2"},"extends")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#extends",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines an external ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml")," to extend and inherit settings from. Perfect for\nreusability and sharing configuration across repositories and projects. When defined, this setting\nmust be an HTTPS URL ",(0,o.kt)("em",{parentName:"p"},"or")," relative file system path that points to a valid YAML document!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',title:'".moon/workspace.yml"',"{1}":!0},"extends: 'https://raw.githubusercontent.com/organization/repository/master/.moon/workspace.yml'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Settings will be merged recursively for blocks, with values defined in the local configuration\ntaking precedence over those defined in the extended configuration. However, the ",(0,o.kt)("inlineCode",{parentName:"p"},"projects")," setting\n",(0,o.kt)("em",{parentName:"p"},"does not merge"),"!")),(0,o.kt)("h2",{id:"projects"},(0,o.kt)("inlineCode",{parentName:"h2"},"projects"),(0,o.kt)(i.Z,{mdxType:"RequiredLabel"})),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#projects",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the location of all ",(0,o.kt)("a",{parentName:"p",href:"../concepts/project"},"projects")," within the workspace. Supports either a\nmanual map of projects (default), a list of globs in which to automatically locate projects, ",(0,o.kt)("em",{parentName:"p"},"or"),"\nboth."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Projects that depend on each other and form a cycle must be avoided! While we do our best to avoid\nan infinite loop and disconnect nodes from each other, there's no guarantee that tasks will run in\nthe correct order.")),(0,o.kt)("h3",{id:"using-a-map"},"Using a map"),(0,o.kt)("p",null,"When using a map, each project must be ",(0,o.kt)("em",{parentName:"p"},"manually")," configured and requires a unique\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/project#names"},"name")," as the map key, where this name is used heavily on the command\nline and within the project graph for uniquely identifying the project amongst all projects. The map\nvalue (known as the project source) is a file system path to the project folder, relative from the\nworkspace root, and must be contained within the workspace boundary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n  admin: 'apps/admin'\n  apiClients: 'packages/api-clients'\n  designSystem: 'packages/design-system'\n  web: 'apps/web'\n")),(0,o.kt)("h3",{id:"using-globs"},"Using globs"),(0,o.kt)("p",null,"If manually mapping projects is too tedious or cumbersome, you may provide a list of\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/file-pattern#globs"},"globs")," to automatically locate all project folders, relative from\nthe workspace root."),(0,o.kt)("p",null,"When using this approach, the project name is derived from the project folder name, and is cleaned\nto our ",(0,o.kt)("a",{parentName:"p",href:"../concepts/project#names"},"supported characters")," . Furthermore, globbing ",(0,o.kt)("strong",{parentName:"p"},"does risk the\nchance of collision"),", and when that happens, we log a warning and skip the conflicting project from\nbeing configured in the project graph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n  - 'apps/*'\n  - 'packages/*'\n")),(0,o.kt)("h3",{id:"using-a-map-and-globs"},"Using a map ",(0,o.kt)("em",{parentName:"h3"},"and")," globs"),(0,o.kt)("p",null,"For those situations where you want to use ",(0,o.kt)("em",{parentName:"p"},"both")," patterns, you can! The list of globs can be\ndefined under a ",(0,o.kt)("inlineCode",{parentName:"p"},"globs")," field, while the map of projects under a ",(0,o.kt)("inlineCode",{parentName:"p"},"sources")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml"',title:'".moon/workspace.yml"'},"projects:\n  globs:\n    - 'apps/*'\n    - 'packages/*'\n  sources:\n    www: 'www'\n")),(0,o.kt)("h2",{id:"constraints"},(0,o.kt)("inlineCode",{parentName:"h2"},"constraints")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#constraints",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures constraints between projects that are enforced during project graph generation. This is\nalso known as project boundaries."),(0,o.kt)("h3",{id:"enforceprojecttyperelationships"},(0,o.kt)("inlineCode",{parentName:"h3"},"enforceProjectTypeRelationships")),(0,o.kt)(r.Z,{to:"/api/types/interface/ConstraintsConfig#enforceProjectTypeRelationships",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Enforces allowed relationships between a project its dependencies based on the project's\n",(0,o.kt)("a",{parentName:"p",href:"./project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," setting. When a project depends on another project of an invalid type, an\nerror will be thrown when attempting to run a task. The following relationships are enforced when\nthis setting is enabled, which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Applications can ",(0,o.kt)("em",{parentName:"li"},"only")," depend on libraries or tools."),(0,o.kt)("li",{parentName:"ul"},"Libraries can ",(0,o.kt)("em",{parentName:"li"},"only")," depend on other libraries."),(0,o.kt)("li",{parentName:"ul"},"Tools can ",(0,o.kt)("em",{parentName:"li"},"only")," depend on libraries.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"constraints:\n  enforceProjectTypeRelationships: false\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Projects with an unconfigured or unknown type are ignored during enforcement.")),(0,o.kt)("h3",{id:"tagrelationships"},(0,o.kt)("inlineCode",{parentName:"h3"},"tagRelationships")),(0,o.kt)(r.Z,{to:"/api/types/interface/ConstraintsConfig#tagRelationships",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Enforces allowed relationships between a project and its dependencies based on the project's\n",(0,o.kt)("a",{parentName:"p",href:"./project#tags"},(0,o.kt)("inlineCode",{parentName:"a"},"tags"))," setting. This works in a similar fashion to\n",(0,o.kt)("inlineCode",{parentName:"p"},"enforceProjectTypeRelationships"),", but gives you far more control over what these relationships look\nlike."),(0,o.kt)("p",null,"For example, let's enforce that Next.js projects using the ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," tag can only depend on React\nprojects using the ",(0,o.kt)("inlineCode",{parentName:"p"},"react")," tag. If a dependency does not have one of the configured required tags,\nin this case ",(0,o.kt)("inlineCode",{parentName:"p"},"react"),", an error will occur."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2,3}',title:'".moon/workspace.yml"',"{2,3}":!0},"constraints:\n  tagRelationships:\n    next: ['react']\n")),(0,o.kt)("p",null,"On the project side, we would configure ",(0,o.kt)("a",{parentName:"p",href:"./project#tags"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="app/moon.yml"',title:'"app/moon.yml"'},"tags: ['next']\ndependsOn: ['components']\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="packages/components/moon.yml"',title:'"packages/components/moon.yml"'},"tags: ['react']\n")),(0,o.kt)("h2",{id:"generator"},(0,o.kt)("inlineCode",{parentName:"h2"},"generator")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#generator",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures aspects of the template generator."),(0,o.kt)("h3",{id:"templates"},(0,o.kt)("inlineCode",{parentName:"h3"},"templates")),(0,o.kt)(r.Z,{to:"/api/types/interface/GeneratorConfig#templates",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"A list of file system paths where templates can be located, relative from the workspace root.\nDefaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"./templates"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',title:'".moon/workspace.yml"',"{2-4}":!0},"generator:\n  templates:\n    - './templates'\n    - './other/templates'\n")),(0,o.kt)("h2",{id:"hasher"},(0,o.kt)("inlineCode",{parentName:"h2"},"hasher")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#hasher",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures aspects of the smart hashing layer."),(0,o.kt)("h3",{id:"batchsize"},(0,o.kt)("inlineCode",{parentName:"h3"},"batchSize")),(0,o.kt)(r.Z,{to:"/api/types/interface/HasherConfig#batchSize",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When hashing a list of files, we split the list into batches to help reduce memory footprint and\navoid overloading the configured VCS. This setting controls how many files are in each batch and\ndefaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"2500"),"."),(0,o.kt)("p",null,"If you're running into memory issues, or moon hanging during the file hashing process, lowering this\nnumber may help resolve the issue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"hasher:\n  batchSize: 1000\n")),(0,o.kt)("h3",{id:"optimization"},(0,o.kt)("inlineCode",{parentName:"h3"},"optimization")),(0,o.kt)(r.Z,{to:"/api/types/interface/HasherConfig#optimization",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Determines the optimization level to utilize when hashing content before running targets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accuracy")," (default) - When hashing dependency versions, utilize the resolved value in the\nlockfile. This requires parsing the lockfile, which may reduce performance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"performance")," - When hashing dependency versions, utilize the value defined in the manifest. This\nis typically a version range or requirement.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"hasher:\n  optimization: 'performance'\n")),(0,o.kt)("h3",{id:"walkstrategy"},(0,o.kt)("inlineCode",{parentName:"h3"},"walkStrategy")),(0,o.kt)(r.Z,{to:"/api/types/interface/HasherConfig#walkStrategy",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines the file system walking strategy to utilize when discovering inputs to hash."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"glob")," - Walks the file system using glob patterns."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vcs")," (default) - Calls out to the ",(0,o.kt)("a",{parentName:"li",href:"#vcs"},"VCS")," to extract files from its working tree.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"hasher:\n  walkStrategy: 'glob'\n")),(0,o.kt)("h3",{id:"warnonmissinginputs"},(0,o.kt)("inlineCode",{parentName:"h3"},"warnOnMissingInputs")),(0,o.kt)(r.Z,{to:"/api/types/interface/HasherConfig#warnOnMissingInputs",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When enabled, will log warnings to the console when attempting to hash an input that does not exist.\nThis is useful in uncovering misconfigured tasks. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"hasher:\n  warnOnMissingInputs: false\n")),(0,o.kt)("h2",{id:"notifier"},(0,o.kt)("inlineCode",{parentName:"h2"},"notifier")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#notifier",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures how moon notifies and interacts with a developer or an external system."),(0,o.kt)("h3",{id:"webhookurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"webhookUrl")),(0,o.kt)(r.Z,{to:"/api/types/interface/NotifierConfig#webhookUrl",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines an HTTPS URL that all pipeline events will be posted to. View the\n",(0,o.kt)("a",{parentName:"p",href:"../guides/webhooks"},"webhooks guide for more information")," on available events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"notifier:\n  webhookUrl: 'https://api.company.com/some/endpoint'\n")),(0,o.kt)("h2",{id:"runner"},(0,o.kt)("inlineCode",{parentName:"h2"},"runner")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#runner",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures aspects of the action pipeline."),(0,o.kt)("h3",{id:"cachelifetime"},(0,o.kt)("inlineCode",{parentName:"h3"},"cacheLifetime")),(0,o.kt)(r.Z,{to:"/api/types/interface/RunnerConfig#cacheLifetime",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,'The maximum lifetime of cached artifacts before they\'re marked as stale and automatically removed by\nthe action pipeline. Defaults to "7 days". This field requires an integer and a timeframe unit that\ncan be ',(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/humantime/2.1.0/humantime/fn.parse_duration.html"},"parsed as a duration"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"runner:\n  cacheLifetime: '24 hours'\n")),(0,o.kt)("h3",{id:"archivabletargets"},(0,o.kt)("inlineCode",{parentName:"h3"},"archivableTargets")),(0,o.kt)(r.Z,{to:"/api/types/interface/RunnerConfig#archivableTargets",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines a list of ",(0,o.kt)("a",{parentName:"p",href:"../concepts/target"},"targets"),", with or without a project scope, that will be\ncached and archived within the runner. Tasks that produce ",(0,o.kt)("a",{parentName:"p",href:"./project#outputs"},"outputs")," are\nautomatically archived, and do not need to be defined here. Defaults to an empty list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',title:'".moon/workspace.yml"',"{2-4}":!0},"runner:\n  archivableTargets:\n    - ':test'\n    - 'app:typecheck'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This setting primarily exists for ",(0,o.kt)("a",{parentName:"p",href:"../guides/remote-cache"},"remote caching")," as it will create and\npersist tar archives located in ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/cache/outputs"),".")),(0,o.kt)("h3",{id:"inheritcolorsforpipedtasks"},(0,o.kt)("inlineCode",{parentName:"h3"},"inheritColorsForPipedTasks")),(0,o.kt)(r.Z,{to:"/api/types/interface/RunnerConfig#inheritColorsForPipedTasks",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Force colors to be inherited from the current terminal for all tasks that are ran as a child process\nand their output is piped to the action pipeline. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\n",(0,o.kt)("a",{parentName:"p",href:"../commands/overview#colors"},"View more about color handling in moon"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"runner:\n  inheritColorsForPipedTasks: true\n")),(0,o.kt)("h3",{id:"logrunningcommand"},(0,o.kt)("inlineCode",{parentName:"h3"},"logRunningCommand")),(0,o.kt)(r.Z,{to:"/api/types/interface/RunnerConfig#logRunningCommand",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When enabled, will log the task's command, resolved arguments, and working directory when a target\nis ran. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"runner:\n  logRunningCommand: true\n")),(0,o.kt)("h2",{id:"telemetry"},(0,o.kt)("inlineCode",{parentName:"h2"},"telemetry")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#telemetry",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"When enabled, will check for a newer moon version and send anonymous usage data to the moonrepo\nteam. This data is used to improve the quality and reliability of the tool. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',title:'".moon/workspace.yml"',"{1}":!0},"telemetry: false\n")),(0,o.kt)("h2",{id:"vcs"},(0,o.kt)("inlineCode",{parentName:"h2"},"vcs")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#vcs",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Configures the version control system to utilize within the workspace (and repository). A VCS is\nrequired for determining touched (added, modified, etc) files, calculating file hashes, computing\naffected files, and much more."),(0,o.kt)("h3",{id:"defaultbranch"},(0,o.kt)("inlineCode",{parentName:"h3"},"defaultBranch")),(0,o.kt)(r.Z,{to:"/api/types/interface/VcsConfig#defaultBranch",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,'Defines the default branch in the repository for comparing differences against. For git, this is\ntypically "master" (default) or "main". For svn, this should always be "trunk".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"vcs:\n  defaultBranch: 'master'\n")),(0,o.kt)("h3",{id:"manager"},(0,o.kt)("inlineCode",{parentName:"h3"},"manager")),(0,o.kt)(r.Z,{to:"/api/types/interface/VcsConfig#manager",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,'Defines the VCS tool/binary that is being used for managing the repository. Accepts "git" (default)\nor "svn" (experimental, in development).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2}',title:'".moon/workspace.yml"',"{2}":!0},"vcs:\n  manager: 'git'\n")),(0,o.kt)("h3",{id:"remotecandidates"},(0,o.kt)("inlineCode",{parentName:"h3"},"remoteCandidates")),(0,o.kt)(r.Z,{to:"/api/types/interface/VcsConfig#remoteCandidates",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,'(Git only) Defines a list of remote candidates to query agaist to determine merge bases. Defaults to\n"origin" and "upstream".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {2-4}',title:'".moon/workspace.yml"',"{2-4}":!0},"vcs:\n  remoteCandidates:\n    - 'origin'\n    - 'upstream'\n")),(0,o.kt)("h2",{id:"versionconstraint"},(0,o.kt)("inlineCode",{parentName:"h2"},"versionConstraint")),(0,o.kt)(r.Z,{to:"/api/types/interface/WorkspaceConfig#versionConstraint",mdxType:"HeadingApiLink"}),(0,o.kt)("p",null,"Defines a semantic version requirement for the currently running moon binary. This provides a\nmechanism for enforcing that the globally installed moon on every developers machine is using an\napplicable version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/workspace.yml" {1}',title:'".moon/workspace.yml"',"{1}":!0},"versionConstraint: '>=0.20.0'\n")))}u.isMDXComponent=!0}}]);