import{Q as s}from"./QPage.3ab3f2f1.js";import{_ as o,L as r,J as n,M as i,N as p,O as d,R as l,S as u,U as c}from"./index.f0d8d239.js";import"./render.eec0f3a3.js";const f=r({name:"IndexPage",setup(){const e=n({api:[]});function a(){e.api=["test"]}return{apiResult:e,loadApi:a}}});function m(e,a,_,g,A,P){return i(),p(s,{class:"row items-center justify-evenly"},{default:d(()=>[l(" Result: "+u(e.apiResult)+" ",1),c("button",{onClick:a[0]||(a[0]=(...t)=>e.loadApi&&e.loadApi(...t))}," Load API ")]),_:1})}var v=o(f,[["render",m]]);export{v as default};
