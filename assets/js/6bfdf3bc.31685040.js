"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3544],{26675:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(35315),o=a.n(n),r=a(58406),l=a.n(r);function s(e,t){return o()({container:e,elements:t,layout:{fit:!0,name:"dagre",nodeDimensionsIncludeLabels:!0,spacingFactor:1},style:[{selector:"edges",style:{"arrow-scale":2,"curve-style":"straight","line-cap":"round","line-color":"#c9eef6","line-opacity":.25,"overlay-color":"#c9eef6","target-arrow-color":"#c9eef6","target-arrow-shape":"tee",width:3}},{selector:"node",style:{"background-fill":"linear-gradient","background-gradient-direction":"to-bottom-right","background-gradient-stop-colors":"#d7dfe9 #bdc9db #97a1af",color:"#fff",height:60,label:"data(label)","overlay-color":"#99aab7","overlay-shape":"ellipse",padding:0,shape:"ellipse","text-halign":"center","text-margin-y":6,"text-valign":"bottom","underlay-shape":"ellipse",width:60}},{selector:'node[type="run-target"], node[type="sm"]',style:{"background-gradient-stop-colors":"#6e58d1 #4a2ec6 #3b259e"}},{selector:'node[type="sync-project"], node[type="md"]',style:{"background-gradient-stop-colors":"#ffafff #ff79ff #cc61cc",height:80,width:80}},{selector:'node[type="install-deps"], node[type="lg"]',style:{"background-gradient-stop-colors":"#afe6f2 #79d5e9 #61aaba",height:100,width:100}},{selector:'node[type="setup-tool"], node[type="xl"]',style:{"background-gradient-stop-colors":"#ff9da6 #ff5b6b #cc4956",height:120,width:120}},{selector:'node[id="sync-workspace"]',style:{"background-gradient-stop-colors":"#b7a9f9 #9a87f7 #8c75f5",height:120,width:120}}]})}o().use(l())},25640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var n=a(25773),o=a(27378),r=a(35318),l=a(26675);function s(){const e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{e.current&&(0,l.A)(e.current,{edges:[{data:{source:"node-tool",target:"node-deps"}},{data:{source:"system-tool",target:"system-deps"}},{data:{source:"node-tool",target:"node-sync"}},{data:{source:"system-tool",target:"system-sync"}},{data:{source:"system-sync",target:"target-clean"}},{data:{source:"system-deps",target:"target-clean"}},{data:{source:"node-sync",target:"target-build"}},{data:{source:"node-deps",target:"target-build"}},{data:{source:"target-clean",target:"target-build"}},{data:{source:"target-build",target:"target-package"}}],nodes:[{data:{id:"sync-workspace",label:"SyncWorkspace"}},{data:{id:"node-tool",label:"SetupNodeTool(18.0.0)",type:"xl"}},{data:{id:"system-tool",label:"SetupSystemTool",type:"xl"}},{data:{id:"node-deps",label:"InstallNodeDeps(18.0.0)",type:"lg"}},{data:{id:"system-deps",label:"InstallSystemDepsInProject(example)",type:"lg"}},{data:{id:"node-sync",label:"SyncNodeProject(example)",type:"md"}},{data:{id:"system-sync",label:"SyncSystemProject(example)",type:"md"}},{data:{id:"target-clean",label:"RunTarget(example:clean)",type:"sm"}},{data:{id:"target-build",label:"RunTarget(example:build)",type:"sm"}},{data:{id:"target-package",label:"RunTarget(example:package)",type:"sm"}}]})}),[]),o.createElement("div",{id:"dep-graph",ref:e,className:"p-1 mb-2 rounded bg-slate-800",style:{height:"550px",width:"100%"}})}const i={title:"Dependency graph"},p=void 0,d={unversionedId:"how-it-works/dep-graph",id:"how-it-works/dep-graph",title:"Dependency graph",description:"When you run a task on the command line, we generate a dependency graph",source:"@site/docs/how-it-works/dep-graph.mdx",sourceDirName:"how-it-works",slug:"/how-it-works/dep-graph",permalink:"/docs/how-it-works/dep-graph",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/how-it-works/dep-graph.mdx",tags:[],version:"current",frontMatter:{title:"Dependency graph"},sidebar:"docs",previous:{title:"Project graph",permalink:"/docs/how-it-works/project-graph"},next:{title:"Install moon",permalink:"/docs/install"}},c={},h=[{value:"Actions",id:"actions",level:2},{value:"Sync workspace",id:"sync-workspace",level:3},{value:"Setup toolchain",id:"setup-toolchain",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Sync project",id:"sync-project",level:3},{value:"Run target",id:"run-target",level:3},{value:"Run persistent target",id:"run-persistent-target",level:3},{value:"What is the graph used for?",id:"what-is-the-graph-used-for",level:2}],u={toc:h};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you run a ",(0,r.kt)("a",{parentName:"p",href:"../config/project#tasks-1"},"task")," on the command line, we generate a dependency graph\nto ensure ",(0,r.kt)("a",{parentName:"p",href:"../config/project#deps"},"dependencies")," of tasks have ran before running run the primary\ntask."),(0,r.kt)("p",null,"The dependency graph is a representation of all ",(0,r.kt)("a",{parentName:"p",href:"../concepts/task"},"tasks"),", derived from the\n",(0,r.kt)("a",{parentName:"p",href:"./project-graph"},"project graph"),", and is also represented internally as a directed acyclic graph\n(DAG)."),(0,r.kt)(s,{mdxType:"DepGraph"}),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,"Unlike other task runners in the industry that represent each node in the graph as a task to run, we\nrepresent each node in the graph as an action to perform. This allows us to be more flexible and\nefficient with how we run tasks, and allows us to provide more functionality and automation than\nother runners."),(0,r.kt)("p",null,"The following actions compose our dependency graph:"),(0,r.kt)("h3",{id:"sync-workspace"},"Sync workspace"),(0,r.kt)("p",null,"This is a common action that always runs and give's moon a chance to perform operations and health\nchecks across the entire workspace."),(0,r.kt)("h3",{id:"setup-toolchain"},"Setup toolchain"),(0,r.kt)("p",null,"The most important action in the graph is the setup toolchain action, which downloads and installs a\ntier 3 language into the toolchain. For other tiers, this is basically a no-operation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the tool has already been installed, this action will be skipped."),(0,r.kt)("li",{parentName:"ul"},"Actions will be scoped by language and version, also known as a runtime. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"SetupNodeTool(18.1.0)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"SetupDenoTool(1.31.0)"),"."),(0,r.kt)("li",{parentName:"ul"},'Tools that require a global language binary will display the version as "global". For example,\n',(0,r.kt)("inlineCode",{parentName:"li"},"SetupNodeTool(global)"),".")),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"Before we run a target, we ensure that all language dependencies (",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," for example) have\nbeen installed, by automatically installing them if we detect changes since the last run. We achieve\nthis by comparing lockfile modified timestamps, parsing manifest files, and hashing resolved\ndependency versions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When dependencies do ",(0,r.kt)("em",{parentName:"li"},"not")," need to be installed, this action will be skipped."),(0,r.kt)("li",{parentName:"ul"},"Depending on the language and configuration, we may install dependencies in a project\n(",(0,r.kt)("inlineCode",{parentName:"li"},"InstallDepsInProject"),"), or in the workspace root for all projects (",(0,r.kt)("inlineCode",{parentName:"li"},"InstallDeps"),")."),(0,r.kt)("li",{parentName:"ul"},"Actions will be scoped by language and version, also known as a runtime. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"InstallNodeDeps(18.1.0)")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"InstallNodeDepsInProject(18.1.0, example)"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This action depends on the setup toolchain action, because we utilize the binaries in the\ntoolchain to install dependencies.")),(0,r.kt)("h3",{id:"sync-project"},"Sync project"),(0,r.kt)("p",null,"To ensure a consistently healthy project and repository, we run a process known as syncing\n",(0,r.kt)("em",{parentName:"p"},"everytime")," a target is ran. Actions will be scoped by language, for example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"SyncNodeProject(example)"),"."),(0,r.kt)("p",null,"What is synced or considered healthcare is dependent on the language and its ecosystem."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaScript",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Syncs ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," dependencies based on ",(0,r.kt)("a",{parentName:"li",href:"./project-graph"},"project graph")," dependencies."),(0,r.kt)("li",{parentName:"ul"},"Applies ",(0,r.kt)("a",{parentName:"li",href:"../config/toolchain#deno"},(0,r.kt)("inlineCode",{parentName:"a"},"deno"))," and ",(0,r.kt)("a",{parentName:"li",href:"../config/toolchain#node"},(0,r.kt)("inlineCode",{parentName:"a"},"node"))," related\nsettings."))),(0,r.kt)("li",{parentName:"ul"},"TypeScript",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Syncs project references based on ",(0,r.kt)("a",{parentName:"li",href:"./project-graph"},"project graph")," dependencies."),(0,r.kt)("li",{parentName:"ul"},"Applies ",(0,r.kt)("a",{parentName:"li",href:"../config/toolchain#typescript"},(0,r.kt)("inlineCode",{parentName:"a"},"typescript"))," related settings.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This action depends on the setup toolchain action, in case it requires binaries or functionality\nthat the toolchain provides.")),(0,r.kt)("h3",{id:"run-target"},"Run target"),(0,r.kt)("p",null,"The primary action in the graph is the run ",(0,r.kt)("a",{parentName:"p",href:"../concepts/target"},"target")," action, which runs a\nproject's task as a child process. Tasks can depend on other tasks, and they'll be effectively\norchestrated and executed by running in topological order ",(0,r.kt)("em",{parentName:"p"},"and")," in batches via a worker pool."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This action depends on the previous actions, as the toolchain is used for running the task's\ncommand, and the outcome of the task is best when the project state is healthy and deterministic.")),(0,r.kt)("h3",{id:"run-persistent-target"},"Run persistent target"),(0,r.kt)("p",null,"Like the base run target, but runs the task in a persistent process that never exits. All persistent\ntasks are run in parallel as the last batch in the graph."),(0,r.kt)("h2",{id:"what-is-the-graph-used-for"},"What is the graph used for?"),(0,r.kt)("p",null,"Without the dependency graph, tasks would not efficiently, or possibly at all! The graph helps to\nrun tasks in parallel, in the correct order, and to ensure a reliable outcome."))}g.isMDXComponent=!0}}]);