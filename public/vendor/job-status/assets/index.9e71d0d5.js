import{u as jt,b as It,Q as Mt,f as Ut,h as At,i as Ct}from"./QBtn.765c16fc.js";import{c as et,e as Et,h as Tt}from"./render.b530c45a.js";import{c as $,h as P,g as Ft}from"./index.e74ab796.js";import{u as Lt,a as Bt}from"./QItem.e2c1a51d.js";import{b as Dt}from"./index.b7f28e66.js";var hn=et({name:"QBreadcrumbsEl",props:{...jt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(t,{slots:r}){const{linkTag:e,linkAttrs:n,linkClass:a,navigateOnClick:o}=It(),u=$(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(t.disable!==!0?"q-link--focusable"+a.value:"q-breadcrumbs__el--disable"),...n.value,onClick:o})),s=$(()=>"q-breadcrumbs__el-icon"+(t.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const i=[];return t.icon!==void 0&&i.push(P(Mt,{class:s.value,name:t.icon})),t.label!==void 0&&i.push(t.label),P(e.value,{...u.value},Et(r.default,i))}}});const kt=["",!0];var vn=et({name:"QBreadcrumbs",props:{...Ut,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:t=>["none","xs","sm","md","lg","xl"].includes(t),default:"sm"}},setup(t,{slots:r}){const e=At(t),n=$(()=>`flex items-center ${e.value}${t.gutter==="none"?"":` q-gutter-${t.gutter}`}`),a=$(()=>t.separatorColor?` text-${t.separatorColor}`:""),o=$(()=>` text-${t.activeColor}`);return()=>{const u=Ct(Tt(r.default));if(u.length===0)return;let s=1;const i=[],c=u.filter(f=>f.type!==void 0&&f.type.name==="QBreadcrumbsEl").length,l=r.separator!==void 0?r.separator:()=>t.separator;return u.forEach(f=>{if(f.type!==void 0&&f.type.name==="QBreadcrumbsEl"){const p=s<c,_=f.props!==null&&kt.includes(f.props.disable),M=(p===!0?"":" q-breadcrumbs--last")+(_!==!0&&p===!0?o.value:"");s++,i.push(P("div",{class:`flex items-center${M}`},[f])),p===!0&&i.push(P("div",{class:"q-breadcrumbs__separator"+a.value},l()))}else i.push(f)}),P("div",{class:"q-breadcrumbs"},[P("div",{class:n.value},i)])}}});let W,U=0;const h=new Array(256);for(let t=0;t<256;t++)h[t]=(t+256).toString(16).substring(1);const Qt=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return r=>{const e=new Uint8Array(r);return t.getRandomValues(e),e}}return r=>{const e=[];for(let n=r;n>0;n--)e.push(Math.floor(Math.random()*256));return e}})(),yt=4096;function yn(){(W===void 0||U+16>yt)&&(U=0,W=Qt(yt));const t=Array.prototype.slice.call(W,U,U+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,h[t[0]]+h[t[1]]+h[t[2]]+h[t[3]]+"-"+h[t[4]]+h[t[5]]+"-"+h[t[6]]+h[t[7]]+"-"+h[t[8]]+h[t[9]]+"-"+h[t[10]]+h[t[11]]+h[t[12]]+h[t[13]]+h[t[14]]+h[t[15]]}const gn={name:String};function mn(t={}){return(r,e,n)=>{r[e](P("input",{class:"hidden"+(n||""),...t.value}))}}function wn(t){return $(()=>t.name||t.for)}const Nt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},K={xs:2,sm:4,md:8,lg:16,xl:24};var Sn=et({name:"QSeparator",props:{...Lt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const r=Ft(),e=Bt(t,r.proxy.$q),n=$(()=>t.vertical===!0?"vertical":"horizontal"),a=$(()=>` q-separator--${n.value}`),o=$(()=>t.inset!==!1?`${a.value}-${Nt[t.inset]}`:""),u=$(()=>`q-separator${a.value}${o.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(e.value===!0?" q-separator--dark":"")),s=$(()=>{const i={};if(t.size!==void 0&&(i[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const c=t.spaced===!0?`${K.md}px`:t.spaced in K?`${K[t.spaced]}px`:t.spaced,l=t.vertical===!0?["Left","Right"]:["Top","Bottom"];i[`margin${l[0]}`]=i[`margin${l[1]}`]=c}return i});return()=>P("hr",{class:u.value,style:s.value,"aria-orientation":n.value})}}),d=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},rt={},nt={},S={},C={},b={};Object.defineProperty(b,"__esModule",{value:!0});b.baseUrl=b.hasSetting=b.allSettings=void 0;var at=function(){var t=window.JobStatusConfig||{};if(Jt(t))return t;throw new Error("Have you forgotten to share the config with the frontend?")};b.allSettings=at;function Jt(t){return t.baseUrl!==void 0}var Ht=function(t){return at().hasOwnProperty(t)};b.hasSetting=Ht;var Gt=function(){return at().baseUrl};b.baseUrl=Gt;Object.defineProperty(C,"__esModule",{value:!0});var Vt=Dt,zt=b;function Wt(t){var r={url:t.url,method:t.method,baseURL:(0,zt.baseUrl)()},e=t.data;return Object.keys(e).length>0&&(r.data=e),t.bypassAuth&&(r.params=Object.assign(r.params||{},{bypassAuth:t.bypassAuth})),Object.keys(t.params).length>0&&(r.params=Object.assign(r.params||{},t.params)),Vt.default.request(r)}C.default=Wt;var ot={},E={},ut={},it={};Object.defineProperty(it,"__esModule",{value:!0});var Kt=function(){function t(r,e){this._listenerId=r,this._stopListening=e}return t.prototype.stop=function(){this._stopListening(this._listenerId)},t}();it.default=Kt;Object.defineProperty(ut,"__esModule",{value:!0});var Zt=C,Xt=it,Yt=function(){function t(){this._ids=[],this.loading=[]}return t.prototype.handle=function(r,e){var n=this,a=setInterval(function(){n.handleRun(r,e)},2e3).toString();return this._ids.push(a),this.handleRun(r,e),new Xt.default(a,function(o){n.stopHandling(o)})},t.prototype.stopHandling=function(r){clearInterval(r)},t.prototype.handleRun=function(r,e){var n=!this.loading.includes(e.id);n&&(this.loading.push(e.id),e.triggerStartingInitialLoad()),e.triggerStartingUpdate(),(0,Zt.default)(r).then(function(a){e.triggerUpdated(a.data)}).catch(function(a){e.triggerErrored(a)}).finally(function(){e.triggerFinishingUpdate(),n&&e.triggerFinishingInitialLoad()})},t}();ut.default=Yt;Object.defineProperty(E,"__esModule",{value:!0});E.resolveHandler=void 0;var te=ut;function ee(t){return new te.default}E.resolveHandler=ee;var wt={},T={},F={};Object.defineProperty(F,"__esModule",{value:!0});F.default=ne;let A;const re=new Uint8Array(16);function ne(){if(!A&&(A=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!A))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return A(re)}var q={},j={},L={};Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var ae=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;L.default=ae;Object.defineProperty(j,"__esModule",{value:!0});j.default=void 0;var oe=ue(L);function ue(t){return t&&t.__esModule?t:{default:t}}function ie(t){return typeof t=="string"&&oe.default.test(t)}var se=ie;j.default=se;Object.defineProperty(q,"__esModule",{value:!0});q.default=void 0;q.unsafeStringify=St;var fe=le(j);function le(t){return t&&t.__esModule?t:{default:t}}const v=[];for(let t=0;t<256;++t)v.push((t+256).toString(16).slice(1));function St(t,r=0){return(v[t[r+0]]+v[t[r+1]]+v[t[r+2]]+v[t[r+3]]+"-"+v[t[r+4]]+v[t[r+5]]+"-"+v[t[r+6]]+v[t[r+7]]+"-"+v[t[r+8]]+v[t[r+9]]+"-"+v[t[r+10]]+v[t[r+11]]+v[t[r+12]]+v[t[r+13]]+v[t[r+14]]+v[t[r+15]]).toLowerCase()}function ce(t,r=0){const e=St(t,r);if(!(0,fe.default)(e))throw TypeError("Stringified UUID is invalid");return e}var de=ce;q.default=de;Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;var pe=he(F),_e=q;function he(t){return t&&t.__esModule?t:{default:t}}let gt,Z,X=0,Y=0;function ve(t,r,e){let n=r&&e||0;const a=r||new Array(16);t=t||{};let o=t.node||gt,u=t.clockseq!==void 0?t.clockseq:Z;if(o==null||u==null){const p=t.random||(t.rng||pe.default)();o==null&&(o=gt=[p[0]|1,p[1],p[2],p[3],p[4],p[5]]),u==null&&(u=Z=(p[6]<<8|p[7])&16383)}let s=t.msecs!==void 0?t.msecs:Date.now(),i=t.nsecs!==void 0?t.nsecs:Y+1;const c=s-X+(i-Y)/1e4;if(c<0&&t.clockseq===void 0&&(u=u+1&16383),(c<0||s>X)&&t.nsecs===void 0&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");X=s,Y=i,Z=u,s+=122192928e5;const l=((s&268435455)*1e4+i)%4294967296;a[n++]=l>>>24&255,a[n++]=l>>>16&255,a[n++]=l>>>8&255,a[n++]=l&255;const f=s/4294967296*1e4&268435455;a[n++]=f>>>8&255,a[n++]=f&255,a[n++]=f>>>24&15|16,a[n++]=f>>>16&255,a[n++]=u>>>8|128,a[n++]=u&255;for(let p=0;p<6;++p)a[n+p]=o[p];return r||(0,_e.unsafeStringify)(a)}var ye=ve;T.default=ye;var B={},x={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.default=void 0;var ge=me(j);function me(t){return t&&t.__esModule?t:{default:t}}function we(t){if(!(0,ge.default)(t))throw TypeError("Invalid UUID");let r;const e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=r&255,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=r&255,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=r&255,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=r&255,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=r&255,e}var Se=we;I.default=Se;Object.defineProperty(x,"__esModule",{value:!0});x.URL=x.DNS=void 0;x.default=be;var Oe=q,$e=Pe(I);function Pe(t){return t&&t.__esModule?t:{default:t}}function Re(t){t=unescape(encodeURIComponent(t));const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}const Ot="6ba7b810-9dad-11d1-80b4-00c04fd430c8";x.DNS=Ot;const $t="6ba7b811-9dad-11d1-80b4-00c04fd430c8";x.URL=$t;function be(t,r,e){function n(a,o,u,s){var i;if(typeof a=="string"&&(a=Re(a)),typeof o=="string"&&(o=(0,$e.default)(o)),((i=o)===null||i===void 0?void 0:i.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+a.length);if(c.set(o),c.set(a,o.length),c=e(c),c[6]=c[6]&15|r,c[8]=c[8]&63|128,u){s=s||0;for(let l=0;l<16;++l)u[s+l]=c[l];return u}return(0,Oe.unsafeStringify)(c)}try{n.name=t}catch{}return n.DNS=Ot,n.URL=$t,n}var D={};Object.defineProperty(D,"__esModule",{value:!0});D.default=void 0;function xe(t){if(typeof t=="string"){const r=unescape(encodeURIComponent(t));t=new Uint8Array(r.length);for(let e=0;e<r.length;++e)t[e]=r.charCodeAt(e)}return qe(je(Ie(t),t.length*8))}function qe(t){const r=[],e=t.length*32,n="0123456789abcdef";for(let a=0;a<e;a+=8){const o=t[a>>5]>>>a%32&255,u=parseInt(n.charAt(o>>>4&15)+n.charAt(o&15),16);r.push(u)}return r}function Pt(t){return(t+64>>>9<<4)+14+1}function je(t,r){t[r>>5]|=128<<r%32,t[Pt(r)-1]=r;let e=1732584193,n=-271733879,a=-1732584194,o=271733878;for(let u=0;u<t.length;u+=16){const s=e,i=n,c=a,l=o;e=y(e,n,a,o,t[u],7,-680876936),o=y(o,e,n,a,t[u+1],12,-389564586),a=y(a,o,e,n,t[u+2],17,606105819),n=y(n,a,o,e,t[u+3],22,-1044525330),e=y(e,n,a,o,t[u+4],7,-176418897),o=y(o,e,n,a,t[u+5],12,1200080426),a=y(a,o,e,n,t[u+6],17,-1473231341),n=y(n,a,o,e,t[u+7],22,-45705983),e=y(e,n,a,o,t[u+8],7,1770035416),o=y(o,e,n,a,t[u+9],12,-1958414417),a=y(a,o,e,n,t[u+10],17,-42063),n=y(n,a,o,e,t[u+11],22,-1990404162),e=y(e,n,a,o,t[u+12],7,1804603682),o=y(o,e,n,a,t[u+13],12,-40341101),a=y(a,o,e,n,t[u+14],17,-1502002290),n=y(n,a,o,e,t[u+15],22,1236535329),e=g(e,n,a,o,t[u+1],5,-165796510),o=g(o,e,n,a,t[u+6],9,-1069501632),a=g(a,o,e,n,t[u+11],14,643717713),n=g(n,a,o,e,t[u],20,-373897302),e=g(e,n,a,o,t[u+5],5,-701558691),o=g(o,e,n,a,t[u+10],9,38016083),a=g(a,o,e,n,t[u+15],14,-660478335),n=g(n,a,o,e,t[u+4],20,-405537848),e=g(e,n,a,o,t[u+9],5,568446438),o=g(o,e,n,a,t[u+14],9,-1019803690),a=g(a,o,e,n,t[u+3],14,-187363961),n=g(n,a,o,e,t[u+8],20,1163531501),e=g(e,n,a,o,t[u+13],5,-1444681467),o=g(o,e,n,a,t[u+2],9,-51403784),a=g(a,o,e,n,t[u+7],14,1735328473),n=g(n,a,o,e,t[u+12],20,-1926607734),e=m(e,n,a,o,t[u+5],4,-378558),o=m(o,e,n,a,t[u+8],11,-2022574463),a=m(a,o,e,n,t[u+11],16,1839030562),n=m(n,a,o,e,t[u+14],23,-35309556),e=m(e,n,a,o,t[u+1],4,-1530992060),o=m(o,e,n,a,t[u+4],11,1272893353),a=m(a,o,e,n,t[u+7],16,-155497632),n=m(n,a,o,e,t[u+10],23,-1094730640),e=m(e,n,a,o,t[u+13],4,681279174),o=m(o,e,n,a,t[u],11,-358537222),a=m(a,o,e,n,t[u+3],16,-722521979),n=m(n,a,o,e,t[u+6],23,76029189),e=m(e,n,a,o,t[u+9],4,-640364487),o=m(o,e,n,a,t[u+12],11,-421815835),a=m(a,o,e,n,t[u+15],16,530742520),n=m(n,a,o,e,t[u+2],23,-995338651),e=w(e,n,a,o,t[u],6,-198630844),o=w(o,e,n,a,t[u+7],10,1126891415),a=w(a,o,e,n,t[u+14],15,-1416354905),n=w(n,a,o,e,t[u+5],21,-57434055),e=w(e,n,a,o,t[u+12],6,1700485571),o=w(o,e,n,a,t[u+3],10,-1894986606),a=w(a,o,e,n,t[u+10],15,-1051523),n=w(n,a,o,e,t[u+1],21,-2054922799),e=w(e,n,a,o,t[u+8],6,1873313359),o=w(o,e,n,a,t[u+15],10,-30611744),a=w(a,o,e,n,t[u+6],15,-1560198380),n=w(n,a,o,e,t[u+13],21,1309151649),e=w(e,n,a,o,t[u+4],6,-145523070),o=w(o,e,n,a,t[u+11],10,-1120210379),a=w(a,o,e,n,t[u+2],15,718787259),n=w(n,a,o,e,t[u+9],21,-343485551),e=R(e,s),n=R(n,i),a=R(a,c),o=R(o,l)}return[e,n,a,o]}function Ie(t){if(t.length===0)return[];const r=t.length*8,e=new Uint32Array(Pt(r));for(let n=0;n<r;n+=8)e[n>>5]|=(t[n/8]&255)<<n%32;return e}function R(t,r){const e=(t&65535)+(r&65535);return(t>>16)+(r>>16)+(e>>16)<<16|e&65535}function Me(t,r){return t<<r|t>>>32-r}function k(t,r,e,n,a,o){return R(Me(R(R(r,t),R(n,o)),a),e)}function y(t,r,e,n,a,o,u){return k(r&e|~r&n,t,r,a,o,u)}function g(t,r,e,n,a,o,u){return k(r&n|e&~n,t,r,a,o,u)}function m(t,r,e,n,a,o,u){return k(r^e^n,t,r,a,o,u)}function w(t,r,e,n,a,o,u){return k(e^(r|~n),t,r,a,o,u)}var Ue=xe;D.default=Ue;Object.defineProperty(B,"__esModule",{value:!0});B.default=void 0;var Ae=Rt(x),Ce=Rt(D);function Rt(t){return t&&t.__esModule?t:{default:t}}const Ee=(0,Ae.default)("v3",48,Ce.default);var Te=Ee;B.default=Te;var Q={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;const Fe=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Le={randomUUID:Fe};N.default=Le;Object.defineProperty(Q,"__esModule",{value:!0});Q.default=void 0;var mt=bt(N),Be=bt(F),De=q;function bt(t){return t&&t.__esModule?t:{default:t}}function ke(t,r,e){if(mt.default.randomUUID&&!r&&!t)return mt.default.randomUUID();t=t||{};const n=t.random||(t.rng||Be.default)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){e=e||0;for(let a=0;a<16;++a)r[e+a]=n[a];return r}return(0,De.unsafeStringify)(n)}var Qe=ke;Q.default=Qe;var J={},H={};Object.defineProperty(H,"__esModule",{value:!0});H.default=void 0;function Ne(t,r,e,n){switch(t){case 0:return r&e^~r&n;case 1:return r^e^n;case 2:return r&e^r&n^e&n;case 3:return r^e^n}}function tt(t,r){return t<<r|t>>>32-r}function Je(t){const r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const u=unescape(encodeURIComponent(t));t=[];for(let s=0;s<u.length;++s)t.push(u.charCodeAt(s))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const n=t.length/4+2,a=Math.ceil(n/16),o=new Array(a);for(let u=0;u<a;++u){const s=new Uint32Array(16);for(let i=0;i<16;++i)s[i]=t[u*64+i*4]<<24|t[u*64+i*4+1]<<16|t[u*64+i*4+2]<<8|t[u*64+i*4+3];o[u]=s}o[a-1][14]=(t.length-1)*8/Math.pow(2,32),o[a-1][14]=Math.floor(o[a-1][14]),o[a-1][15]=(t.length-1)*8&4294967295;for(let u=0;u<a;++u){const s=new Uint32Array(80);for(let _=0;_<16;++_)s[_]=o[u][_];for(let _=16;_<80;++_)s[_]=tt(s[_-3]^s[_-8]^s[_-14]^s[_-16],1);let i=e[0],c=e[1],l=e[2],f=e[3],p=e[4];for(let _=0;_<80;++_){const M=Math.floor(_/20),qt=tt(i,5)+Ne(M,c,l,f)+p+r[M]+s[_]>>>0;p=f,f=l,l=tt(c,30)>>>0,c=i,i=qt}e[0]=e[0]+i>>>0,e[1]=e[1]+c>>>0,e[2]=e[2]+l>>>0,e[3]=e[3]+f>>>0,e[4]=e[4]+p>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}var He=Je;H.default=He;Object.defineProperty(J,"__esModule",{value:!0});J.default=void 0;var Ge=xt(x),Ve=xt(H);function xt(t){return t&&t.__esModule?t:{default:t}}const ze=(0,Ge.default)("v5",80,Ve.default);var We=ze;J.default=We;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.default=void 0;var Ke="00000000-0000-0000-0000-000000000000";G.default=Ke;var V={};Object.defineProperty(V,"__esModule",{value:!0});V.default=void 0;var Ze=Xe(j);function Xe(t){return t&&t.__esModule?t:{default:t}}function Ye(t){if(!(0,Ze.default)(t))throw TypeError("Invalid UUID");return parseInt(t.slice(14,15),16)}var tr=Ye;V.default=tr;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return u.default}});var r=l(T),e=l(B),n=l(Q),a=l(J),o=l(G),u=l(V),s=l(j),i=l(q),c=l(I);function l(f){return f&&f.__esModule?f:{default:f}}})(wt);Object.defineProperty(ot,"__esModule",{value:!0});var er=E,rr=wt,nr=function(){function t(r){this._onStartingInitialLoad=[],this._onFinishingInitialLoad=[],this._onStartingUpdate=[],this._onFinishingUpdate=[],this._onUpdated=[],this._onErrored=[],this._request=r,this.id=(0,rr.v4)()}return t.prototype.onStartingInitialLoad=function(r){return this._onStartingInitialLoad.push(r),this},t.prototype.triggerStartingInitialLoad=function(){for(var r=0,e=this._onStartingInitialLoad;r<e.length;r++){var n=e[r];n()}},t.prototype.onFinishingInitialLoad=function(r){return this._onFinishingInitialLoad.push(r),this},t.prototype.triggerFinishingInitialLoad=function(){for(var r=0,e=this._onFinishingInitialLoad;r<e.length;r++){var n=e[r];n()}},t.prototype.onStartingUpdate=function(r){return this._onStartingUpdate.push(r),this},t.prototype.triggerStartingUpdate=function(){for(var r=0,e=this._onStartingUpdate;r<e.length;r++){var n=e[r];n()}},t.prototype.onFinishingUpdate=function(r){return this._onFinishingUpdate.push(r),this},t.prototype.triggerFinishingUpdate=function(){for(var r=0,e=this._onFinishingUpdate;r<e.length;r++){var n=e[r];n()}},t.prototype.onUpdated=function(r){return this._onUpdated.push(r),this},t.prototype.triggerUpdated=function(r){for(var e=0,n=this._onUpdated;e<n.length;e++){var a=n[e];a(r)}},t.prototype.onErrored=function(r){return this._onErrored.push(r),this},t.prototype.triggerErrored=function(r){for(var e=0,n=this._onErrored;e<n.length;e++){var a=n[e];a(r)}},t.prototype.start=function(){var r=(0,er.resolveHandler)(this._request);return r.handle(this._request,this)},t}();ot.default=nr;Object.defineProperty(S,"__esModule",{value:!0});var ar=C,or=ot,ur=function(){function t(){this._bypassAuth=!1}return t.prototype.listen=function(){var r=this.create();return r.bypassAuth=this._bypassAuth,new or.default(r)},t.prototype.bypassAuth=function(){return this._bypassAuth=!0,this},t.prototype.send=function(){var r=this.create();return r.bypassAuth=this._bypassAuth,(0,ar.default)(r)},t}();S.default=ur;var O={};Object.defineProperty(O,"__esModule",{value:!0});var ir=function(){function t(r,e){this._bypassAuth=!1,this._data={},this._params={},this._url=r,this._method=e}return Object.defineProperty(t.prototype,"bypassAuth",{get:function(){return this._bypassAuth},set:function(r){this._bypassAuth=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._url},set:function(r){this._url=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"method",{get:function(){return this._method},set:function(r){this._method=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(r){this._data=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"params",{get:function(){return this._params},set:function(r){this._params=r},enumerable:!1,configurable:!0}),t}();O.default=ir;var sr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(nt,"__esModule",{value:!0});var fr=S,lr=O,cr=function(t){sr(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e._page=1,e._perPage=10,e}return r.prototype.page=function(e){return this._page=e,this},r.prototype.perPage=function(e){return this._perPage=e,this},r.prototype.create=function(){var e=new lr.default("/jobs","GET");return e.params={page:this._page,per_page:this._perPage},e},r}(fr.default);nt.default=cr;var st={},dr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(st,"__esModule",{value:!0});var pr=S,_r=O,hr=function(t){dr(r,t);function r(e){var n=t.call(this)||this;return n.alias=e,n}return r.prototype.create=function(){return new _r.default("/jobs/"+this.alias,"GET")},r}(pr.default);st.default=hr;var ft={},vr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(ft,"__esModule",{value:!0});var yr=S,gr=O,mr=function(t){vr(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e._page=1,e._perPage=10,e}return r.prototype.page=function(e){return this._page=e,this},r.prototype.perPage=function(e){return this._perPage=e,this},r.prototype.create=function(){var e=new gr.default("/batches","GET");return e.params={page:this._page,per_page:this._perPage},e},r}(yr.default);ft.default=mr;var lt={},wr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(lt,"__esModule",{value:!0});var Sr=S,Or=O,$r=function(t){wr(r,t);function r(e){var n=t.call(this)||this;return n.batchId=e,n}return r.prototype.create=function(){return new Or.default("/batches/"+this.batchId.toString(),"GET")},r}(Sr.default);lt.default=$r;var ct={},Pr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(ct,"__esModule",{value:!0});var Rr=S,br=O,xr=function(t){Pr(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e._alias=[],e._status=[],e._batchId=[],e._queue=[],e._page=1,e._perPage=10,e}return r.prototype.page=function(e){return this._page=e,this},r.prototype.perPage=function(e){return this._perPage=e,this},r.prototype.whereAlias=function(e){return this._alias.push(e),this},r.prototype.whereStatus=function(e){return this._status.push(e),this},r.prototype.whereBatchId=function(e){return this._batchId.push(e),this},r.prototype.whereQueue=function(e){return this._queue.push(e),this},r.prototype.create=function(){var e=new br.default("/runs","GET"),n={page:this._page,per_page:this._perPage};return this._alias&&(n.alias=this._alias),this._status&&(n.status=this._status),this._batchId&&(n.batchId=this._batchId),this._queue&&(n.queue=this._queue),e.params=n,e},r}(Rr.default);ct.default=xr;var dt={},qr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(dt,"__esModule",{value:!0});var jr=S,Ir=O,Mr=function(t){qr(r,t);function r(e){var n=t.call(this)||this;return n.runId=e,n}return r.prototype.create=function(){return new Ir.default("/runs/"+this.runId.toString()+"/retry","POST")},r}(jr.default);dt.default=Mr;var z={},Ur=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(z,"__esModule",{value:!0});var Ar=S,Cr=O,Er=function(t){Ur(r,t);function r(e,n){var a=t.call(this)||this;return a.runId=e,a.signal=n,a._shouldCancelJob=!1,a}return r.prototype.create=function(){var e=new Cr.default("/runs/"+this.runId.toString()+"/signal","POST");return e.data={signal:this.signal,cancel_job:this._shouldCancelJob},e},r.prototype.shouldCancelJob=function(){return this._shouldCancelJob=!0,this},r}(Ar.default);z.default=Er;var pt={},Tr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(pt,"__esModule",{value:!0});var Fr=S,Lr=O,Br=function(t){Tr(r,t);function r(e){var n=t.call(this)||this;return n.runId=e,n}return r.prototype.create=function(){return new Lr.default("/runs/"+this.runId.toString(),"GET")},r}(Fr.default);pt.default=Br;var _t={},Dr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(_t,"__esModule",{value:!0});var kr=z,Qr=function(t){Dr(r,t);function r(e){var n=t.call(this,e,"cancel")||this;return t.prototype.shouldCancelJob.call(n),n}return r}(kr.default);_t.default=Qr;var ht={},Nr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(ht,"__esModule",{value:!0});var Jr=S,Hr=O,Gr=function(t){Nr(r,t);function r(){var e=t!==null&&t.apply(this,arguments)||this;return e._page=1,e._perPage=10,e}return r.prototype.page=function(e){return this._page=e,this},r.prototype.perPage=function(e){return this._perPage=e,this},r.prototype.create=function(){var e=new Hr.default("/queues","GET");return e.params={page:this._page,per_page:this._perPage},e},r}(Jr.default);ht.default=Gr;var vt={},Vr=d&&d.__extends||function(){var t=function(r,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])},t(r,e)};return function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(vt,"__esModule",{value:!0});var zr=S,Wr=O,Kr=function(t){Vr(r,t);function r(e){var n=t.call(this)||this;return n.queue=e,n}return r.prototype.create=function(){return new Wr.default("/queues/"+this.queue,"GET")},r}(zr.default);vt.default=Kr;Object.defineProperty(rt,"__esModule",{value:!0});var Zr=rt.client=void 0,Xr=nt,Yr=st,tn=ft,en=lt,rn=ct,nn=dt,an=z,on=pt,un=_t,sn=ht,fn=vt;Zr=rt.client={jobs:{search:function(){return new Xr.default},show:function(t){return new Yr.default(t)}},queues:{search:function(){return new sn.default},show:function(t){return new fn.default(t)}},batches:{search:function(){return new tn.default},show:function(t){return new en.default(t)}},runs:{search:function(){return new rn.default},show:function(t){return new on.default(t)},signal:function(t,r){return new an.default(t,r)},retry:function(t){return new nn.default(t)},cancel:function(t){return new un.default(t)}}};export{hn as Q,wn as a,vn as b,Zr as c,Sn as d,yn as e,d as f,mn as g,gn as u};