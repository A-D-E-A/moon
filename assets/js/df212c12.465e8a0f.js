"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36863],{77748:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(24246),t=s(71670),o=s(79022);const i={title:"Task inheritance"},a=void 0,c={id:"concepts/task-inheritance",title:"Task inheritance",description:"Unlike other task runners that require the same tasks to be repeatedly defined for every project,",source:"@site/docs/concepts/task-inheritance.mdx",sourceDirName:"concepts",slug:"/concepts/task-inheritance",permalink:"/docs/concepts/task-inheritance",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/concepts/task-inheritance.mdx",tags:[],version:"current",frontMatter:{title:"Task inheritance"},sidebar:"docs",previous:{title:"Tasks",permalink:"/docs/concepts/task"},next:{title:"Tokens",permalink:"/docs/concepts/token"}},l={},d=[{value:"Scope by project metadata",id:"scope-by-project-metadata",level:2},{value:"JavaScript platforms",id:"javascript-platforms",level:3},{value:"Merge strategies",id:"merge-strategies",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Unlike other task runners that require the same tasks to be repeatedly defined for ",(0,r.jsx)(n.em,{children:"every"})," project,\nmoon uses an inheritance model where tasks can be defined once at the workspace-level, and are then\ninherited by ",(0,r.jsx)(n.em,{children:"many or all"})," projects."]}),"\n",(0,r.jsxs)(n.p,{children:["Workspace-level tasks (also known as global tasks) are defined in ",(0,r.jsx)(n.a,{href:"../config/tasks",children:(0,r.jsx)(n.code,{children:".moon/tasks.yml"})})," or\n",(0,r.jsx)(n.a,{href:"../config/tasks",children:(0,r.jsx)(n.code,{children:".moon/tasks/**/*.yml"})}),", and are inherited by default. However, projects are able to\ninclude, exclude, or rename inherited tasks using the\n",(0,r.jsx)(n.a,{href:"../config/project#inheritedtasks",children:(0,r.jsx)(n.code,{children:"workspace.inheritedTasks"})})," in ",(0,r.jsx)(n.a,{href:"../config/project",children:(0,r.jsx)(n.code,{children:"moon.yml"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"scope-by-project-metadata",children:"Scope by project metadata"}),"\n",(0,r.jsxs)(n.p,{children:["By default tasks defined in ",(0,r.jsx)(n.a,{href:"../config/tasks",children:(0,r.jsx)(n.code,{children:".moon/tasks.yml"})})," will be inherited by ",(0,r.jsx)(n.em,{children:"all"})," projects. This\napproach works well when a monorepo is comprised of a single programming language, but breaks down\nquickly in multi-language setups."]}),"\n",(0,r.jsxs)(n.p,{children:["To support these complex repositories, we support scoped tasks with ",(0,r.jsx)(n.a,{href:"../config/tasks",children:(0,r.jsx)(n.code,{children:".moon/tasks/**/*.yml"})}),",\nwhere ",(0,r.jsx)(n.code,{children:"*.yml"})," maps to a project based on a combination of its ",(0,r.jsx)(n.a,{href:"../config/project#language",children:"language"}),", ",(0,r.jsx)(n.a,{href:"../config/project#type",children:"type"}),", or\n",(0,r.jsx)(n.a,{href:"../config/project#tags",children:"tags"}),'. This enables you to easily declare tasks for "JavaScript projects", "Go applications",\n"Ruby libraries", so on and so forth.']}),"\n",(0,r.jsxs)(n.p,{children:["When resolving configuration files, moon will locate and ",(0,r.jsx)(n.em,{children:"shallow"})," merge files in the following\norder, from widest scope to narrowest scope:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".moon/tasks.yml"})," - All projects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".moon/tasks/<language>.yml"})," - Projects with a matching ",(0,r.jsx)(n.a,{href:"../config/project#language",children:(0,r.jsx)(n.code,{children:"language"})})," setting."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".moon/tasks/<language>-<type>.yml"})," - Projects with matching ",(0,r.jsx)(n.a,{href:"../config/project#language",children:(0,r.jsx)(n.code,{children:"language"})})," and\n",(0,r.jsx)(n.a,{href:"../config/project#type",children:(0,r.jsx)(n.code,{children:"type"})})," settings."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".moon/tasks/tag-<name>.yml"})," - Projects with a matching ",(0,r.jsx)(n.a,{href:"../config/project#tags",children:(0,r.jsx)(n.code,{children:"tag"})}),".","\n",(0,r.jsx)(o.Z,{version:"1.2.0"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['As mentioned above, all of these files are shallow merged into a single "global tasks" configuration\nthat is unique per-project. Merging ',(0,r.jsx)(n.strong,{children:"does not"})," utilize the ",(0,r.jsx)(n.a,{href:"#merge-strategies",children:"merge strategies"}),"\nbelow, as those strategies are only utilized when merging global and local tasks."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Tags are resolved in the order they are defined in ",(0,r.jsx)(n.code,{children:"moon.yml"})," ",(0,r.jsx)(n.code,{children:"tags"})," setting."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"javascript-platforms",children:"JavaScript platforms"}),"\n",(0,r.jsxs)(n.p,{children:["Unlike most languages that have 1 runtime, JavaScript has 3 (Node.js, Deno, Bun), and we must\nsupport repositories that are comprised of any combination of these 3. As such, JavaScript (and\nTypeScript) based projects have a special lookup order using\n",(0,r.jsx)(n.a,{href:"../config/project#platform-1",children:(0,r.jsx)(n.code,{children:"platform"})})," to account for this:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".moon/tasks.yml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".moon/tasks/<platform>.yml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".moon/tasks/<language>.yml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".moon/tasks/<platform>-<type>.yml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:".moon/tasks/<language>-<type>.yml"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".moon/tasks/tag-<name>.yml"})," ",(0,r.jsx)(o.Z,{version:"1.2.0"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example, ",(0,r.jsx)(n.code,{children:"node.yml"})," would be inherited for Node.js projects, ",(0,r.jsx)(n.code,{children:"bun-library.yml"})," for Bun\nlibraries, and ",(0,r.jsx)(n.code,{children:"deno-application.yml"})," for Deno applications. While ",(0,r.jsx)(n.code,{children:"javascript.yml"}),",\n",(0,r.jsx)(n.code,{children:"typescript-library.yml"}),", etc, will be inherited for all platforms."]}),"\n",(0,r.jsx)(n.h2,{id:"merge-strategies",children:"Merge strategies"}),"\n",(0,r.jsxs)(n.p,{children:["When a ",(0,r.jsx)(n.a,{href:"../config/tasks#tasks",children:"global task"})," and ",(0,r.jsx)(n.a,{href:"../config/project#tasks",children:"local task"})," of the same\nname exist, they are merged into a single task. To accomplish this, one of many\n",(0,r.jsx)(n.a,{href:"../config/project#options",children:"merge strategies"})," can be used."]}),"\n",(0,r.jsxs)(n.p,{children:["Merging is applied to the parameters ",(0,r.jsx)(n.a,{href:"../config/project#args",children:(0,r.jsx)(n.code,{children:"args"})}),",\n",(0,r.jsx)(n.a,{href:"../config/project#deps",children:(0,r.jsx)(n.code,{children:"deps"})}),", ",(0,r.jsx)(n.a,{href:"../config/project#env-1",children:(0,r.jsx)(n.code,{children:"env"})}),",\n",(0,r.jsx)(n.a,{href:"../config/project#inputs",children:(0,r.jsx)(n.code,{children:"inputs"})}),", and ",(0,r.jsx)(n.a,{href:"../config/project#outputs",children:(0,r.jsx)(n.code,{children:"outputs"})}),", using the\n",(0,r.jsx)(n.a,{href:"../config/project#mergeargs",children:(0,r.jsx)(n.code,{children:"mergeArgs"})}),", ",(0,r.jsx)(n.a,{href:"../config/project#mergedeps",children:(0,r.jsx)(n.code,{children:"mergeDeps"})}),",\n",(0,r.jsx)(n.a,{href:"../config/project#mergeenv",children:(0,r.jsx)(n.code,{children:"mergeEnv"})}),", ",(0,r.jsx)(n.a,{href:"../config/project#mergeinputs",children:(0,r.jsx)(n.code,{children:"mergeInputs"})})," and\n",(0,r.jsx)(n.a,{href:"../config/project#mergeoutputs",children:(0,r.jsx)(n.code,{children:"mergeOutputs"})})," options respectively. Each of these options support\none of the following strategy values."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"append"})," (default) - Values found in the local task are merged ",(0,r.jsx)(n.em,{children:"after"})," the values found in the\nglobal task. For example, this strategy is useful for toggling flag arguments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prepend"})," - Values found in the local task are merged ",(0,r.jsx)(n.em,{children:"before"})," the values found in the global\ntask. For example, this strategy is useful for applying option arguments that must come before\npositional arguments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"replace"})," - Values found in the local task entirely ",(0,r.jsx)(n.em,{children:"replaces"})," the values in the global task. This\nstrategy is useful when you need full control."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All 3 of these strategies are demonstrated below, with a somewhat contrived example, but you get the\npoint."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Global\ntasks:\n  build:\n    command:\n      - 'webpack'\n      - '--mode'\n      - 'production'\n      - '--color'\n    deps:\n      - 'designSystem:build'\n    inputs:\n      - '/webpack.config.js'\n    outputs:\n      - 'build/'\n\n# Local\ntasks:\n  build:\n    args: '--no-color --no-stats'\n    deps:\n      - 'reactHooks:build'\n    inputs:\n      - 'webpack.config.js'\n    options:\n      mergeArgs: 'append'\n      mergeDeps: 'prepend'\n      mergeInputs: 'replace'\n\n# Merged result\ntasks:\n  build:\n    command:\n      - 'webpack'\n      - '--mode'\n      - 'production'\n      - '--color'\n      - '--no-color'\n      - '--no-stats'\n    deps:\n      - 'reactHooks:build'\n      - 'designSystem:build'\n    inputs:\n      - 'webpack.config.js'\n    outputs:\n      - 'build/'\n    options:\n      mergeArgs: 'append'\n      mergeDeps: 'prepend'\n      mergeInputs: 'replace'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79022:(e,n,s)=>{s.d(n,{Z:()=>o});var r=s(9619),t=s(24246);function o(e){let{header:n,inline:s,updated:o,version:i}=e;return(0,t.jsx)(r.Z,{text:`v${i}`,variant:o?"success":"info",className:n?"absolute right-0 top-1.5":s?"inline-block":"ml-2"})}},9619:(e,n,s)=>{s.d(n,{Z:()=>a});var r=s(40624),t=s(31792),o=s(24246);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function a(e){let{className:n,icon:s,text:a,variant:c}=e;return(0,o.jsxs)("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",c?i[c]:"bg-gray-100 text-gray-800",n),children:[s&&(0,o.jsx)(t.Z,{icon:s,className:"mr-1"}),a]})}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(27378);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);