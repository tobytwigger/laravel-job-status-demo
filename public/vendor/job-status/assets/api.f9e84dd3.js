import{c as l,h as f}from"./render.c1b09c46.js";import{p as o,c as s,h as m,a as i,q as y,I as v,g as C}from"./index.169a4949.js";import{a as b}from"./index.2cf0d985.js";import{C as c}from"./config.b6f61684.js";var z=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:n}){const{proxy:{$q:a}}=C(),e=i(y,o);if(e===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(i(v,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const p=s(()=>{const r=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const d=e.isContainer.value===!0?e.containerHeight.value:a.screen.height;return t.styleFn(r,d)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-r+"px":a.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":a.screen.height-r+"px"}}),g=s(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:g.value,style:p.value},f(n.default))}});const u=(t,n={})=>b.get(t,n),h=t=>{var e;const n=(e=c.get().domain)!=null?e:"",a=c.get().path;return n+(n.endsWith("/")?"":"/")+a+(a.endsWith("/")?"":"/")+"api/"+t},$=h("dashboard"),Q=h("job-list"),x=()=>u($).then(t=>({test:""})),P=()=>u(Q).then(t=>({jobs:[]}));var I={dashboard:x,jobList:P};export{z as Q,I as a};
