import{c as d,h as g}from"./render.5f31fa9a.js";import{p as n,c,h as f,a as u,q as h,I as y,g as m,_ as v,L as C,J as $,M as x,N as P,O as Q,R as F,S as I,U as R}from"./index.8ef67df6.js";var _=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:s}}=m(),t=u(h,n);if(t===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(u(y,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const i=c(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const p=t.isContainer.value===!0?t.containerHeight.value:s.screen.height;return e.styleFn(o,p)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":s.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":s.screen.height-o+"px"}}),r=c(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:r.value,style:i.value},g(a.default))}});const q=C({name:"IndexPage",setup(){const e=$({api:[]});function a(){e.api=["test"]}return{apiResult:e,loadApi:a}}});function A(e,a,s,t,l,i){return x(),P(_,{class:"row items-center justify-evenly"},{default:Q(()=>[F(" Result: "+I(e.apiResult)+" ",1),R("button",{onClick:a[0]||(a[0]=(...r)=>e.loadApi&&e.loadApi(...r))}," Load API ")]),_:1})}var k=v(q,[["render",A]]);export{k as default};
