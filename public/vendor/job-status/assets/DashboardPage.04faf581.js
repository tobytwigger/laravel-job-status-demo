import{Q as s,a as r}from"./api.c53182d3.js";import{_ as n,L as i,M as p,N as l,O as d,J as u,R as c,S as f,U as m}from"./index.7aa103f3.js";import"./render.ac565c71.js";import"./index.aa7156d4.js";import"./config.b6f61684.js";const _=i({name:"IndexPage",setup(){let e=null;function a(){r.dashboard().then(t=>{e=u(t)})}return{loadApi:a,results:e}}});function g(e,a,t,A,P,$){return p(),l(s,{class:"row items-center justify-evenly"},{default:d(()=>[c(" Result: "+f(e.apiResult)+" ",1),m("button",{onClick:a[0]||(a[0]=(...o)=>e.loadApi&&e.loadApi(...o))}," Load API ")]),_:1})}var y=n(_,[["render",g]]);export{y as default};
