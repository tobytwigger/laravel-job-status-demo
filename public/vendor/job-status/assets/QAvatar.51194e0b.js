import{a as i,e as s,Q as u}from"./use-router-link.f1558560.js";import{c as d,f as v}from"./render.81c8b894.js";import{c as o,h as t}from"./index.5e935282.js";var q=d({name:"QAvatar",props:{...i,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const n=s(e),r=o(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),l=o(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const c=e.icon!==void 0?[t(u,{name:e.icon})]:void 0;return t("div",{class:r.value,style:n.value},[t("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},v(a.default,c))])}}});export{q as Q};
