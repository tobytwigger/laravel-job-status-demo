import{c as p,h as f}from"./render.3a9d07dd.js";import{p as a,c as s,h as m,a as i,q as y,I as v,g as C}from"./index.29407121.js";import{a as b}from"./index.2cf0d985.js";import{C as c}from"./config.b6f61684.js";var L=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:o}}=C(),t=i(y,a);if(t===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(i(v,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const g=s(()=>{const r=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const d=t.isContainer.value===!0?t.containerHeight.value:o.screen.height;return e.styleFn(r,d)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-r+"px":o.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":o.screen.height-r+"px"}}),h=s(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:h.value,style:g.value},f(n.default))}});const l=(e,n={})=>b.get(e,n),u=e=>{var t;const n=(t=c.get().domain)!=null?t:"",o=c.get().path;return console.log(n+(n.endsWith("/")?"":"/")+o+(o.endsWith("/")?"":"/")+e),n+(n.endsWith("/")?"":"/")+o+(o.endsWith("/")?"":"/")+"api/"+e},$=u("dashboard"),Q=u("job-list"),x=()=>l($).then(e=>(console.log(e),{test:""})),P=()=>l(Q).then(e=>(console.log(e),{jobs:[]}));var z={dashboard:x,jobList:P};export{L as Q,z as a};
