import{Q as n,a as l}from"./api.0466768a.js";import{_ as p,L as u,J as s,M as d,N as f,O as c,U as r,S as m}from"./index.8494eed7.js";import"./render.36a2e3d1.js";import"./index.2cf0d985.js";import"./config.b6f61684.js";const g=u({name:"JobListPage",setup(){let e=s({jobs:[]}),t=!0;function a(){t=!0,l.jobList().then(o=>{e=s(o),console.log(o)}).finally(()=>{t=!1})}return{loadApi:a,results:e,loading:t}}});function b(e,t,a,o,L,_){return d(),f(n,{class:"row items-center justify-evenly"},{default:c(()=>[r("div",null,m(e.results),1),r("button",{onClick:t[0]||(t[0]=(...i)=>e.loadApi&&e.loadApi(...i))}," Load API ")]),_:1})}var j=p(g,[["render",b]]);export{j as default};
