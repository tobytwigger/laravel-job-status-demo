import{j as r,d}from"./QBtn.765c16fc.js";import{$ as f,k as m,z as h,g as o,c as s,h as i}from"./index.e74ab796.js";import{c as l,h as c}from"./render.b530c45a.js";import{u as v,a as g}from"./QItem.e2c1a51d.js";const q=[];function Q(e){return q.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function P(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return r(e)}else if(e.__qPortal===!0){const a=r(e);return a!==void 0&&a.$options.name==="QPopupProxy"?(e.hide(t),a):e}e=r(e)}while(e!=null)}function _(e,t,a){for(;a!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(a--,e.$options.name==="QMenu"){e=P(e,t);continue}e.hide(t)}e=r(e)}}function $(){let e;const t=o();function a(){e=void 0}return f(a),m(a),{removeTick:a,registerTick(n){e=n,h(()=>{e===n&&(d(t)===!1&&e(),e=void 0)})}}}let k=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,k=e.scrollLeft>=0,e.remove()}var B=l({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const a=s(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>i(e.tag,{class:a.value},c(t.default))}}),S=l({name:"QCard",props:{...v,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=o(),n=g(e,a),u=s(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>i(e.tag,{class:u.value},c(t.default))}});export{B as Q,S as a,_ as b,P as c,Q as g,q as p,k as r,$ as u};
