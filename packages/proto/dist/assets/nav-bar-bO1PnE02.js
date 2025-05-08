(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,I=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),F=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const ct=r=>new rt(typeof r=="string"?r:r+"",void 0,q),ot=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new rt(e,r,q)},dt=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=T.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},J=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ct(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:ut,getOwnPropertyDescriptor:$t,getOwnPropertyNames:ft,getOwnPropertySymbols:_t,getPrototypeOf:mt}=Object,_=globalThis,Z=_.trustedTypes,gt=Z?Z.emptyScript:"",L=_.reactiveElementPolyfillSupport,w=(r,t)=>r,N={toAttribute(r,t){switch(t){case Boolean:r=r?gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},W=(r,t)=>!pt(r,t),G={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=$t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const h=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...ft(e),..._t(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const h=i.getPropertyOptions(s),a=typeof h.converter=="function"?{fromAttribute:h.converter}:((o=h.converter)==null?void 0:o.fromAttribute)!==void 0?h.converter:N;this._$Em=s,this[s]=a.fromAttribute(e,h.type)??((n=this._$Ej)==null?void 0:n.get(s))??null,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const o=this.constructor,n=this[t];if(i??(i=o.getPropertyOptions(t)),!((i.hasChanged??W)(n,e)||i.useDefault&&i.reflect&&n===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:h}=n,a=this[o];h!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[w("elementProperties")]=new Map,A[w("finalized")]=new Map,L==null||L({ReactiveElement:A}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,R=x.trustedTypes,X=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+f,yt=`<${at}>`,v=document,C=()=>v.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",V=Array.isArray,vt=r=>V(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",j=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,Y=/>/g,m=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ht=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),bt=At(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,g=v.createTreeWalker(v,129);function lt(r,t){if(!V(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const Et=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=S;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=Q:p[1]!==void 0?n=Y:p[2]!==void 0?(ht.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=m):p[3]!==void 0&&(n=m):n===m?p[0]===">"?(n=s??S,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?m:p[3]==='"'?et:tt):n===et||n===tt?n=m:n===Q||n===Y?n=S:(n=m,s=void 0);const $=n===m&&r[h+1].startsWith("/>")?" ":"";o+=n===S?a+yt:l>=0?(i.push(c),a.slice(0,l)+nt+a.slice(l)+f+$):a+f+(l===-2?h:$)}return[lt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[c,p]=Et(t,e);if(this.el=U.createElement(c,i),g.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=g.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(nt)){const u=p[n++],$=s.getAttribute(l).split(f),H=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:H[2],strings:$,ctor:H[1]==="."?wt:H[1]==="?"?xt:H[1]==="@"?Pt:k}),s.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(ht.test(s.tagName)){const l=s.textContent.split(f),u=l.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let $=0;$<u;$++)s.append(l[$],C()),g.nextNode(),a.push({type:2,index:++o});s.append(l[u],C())}}}else if(s.nodeType===8)if(s.data===at)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:o}),l+=f.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,h;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);g.currentNode=s;let o=g.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new M(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ct(o,this,t)),this._$AV.push(c),a=i[++h]}n!==(a==null?void 0:a.index)&&(o=g.nextNode(),n++)}return g.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(lt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new St(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new U(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new M(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,h[i+a],e,a),c===b&&(c=this._$AH[a]),n||(n=!O(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class xt extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Pt extends k{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const z=x.litHtmlPolyfillSupport;z==null||z(U,M),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.3.0");const Ot=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(C(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=globalThis;class P extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var it;P._$litElement$=!0,P.finalized=!0,(it=y.litElementHydrateSupport)==null||it.call(y,{LitElement:P});const D=y.litElementPolyfillSupport;D==null||D({LitElement:P});(y.litElementVersions??(y.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:W},Mt=(r=Ut,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,r)},init(h){return h!==void 0&&this.C(n,void 0,r,h),h}}}if(i==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function Ht(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}const Tt=ot`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
  }
  
  ul,
  menu {
    list-style: none;
    padding: 0;
  }
`,Nt={styles:Tt};var Rt=Object.defineProperty,kt=(r,t,e,i)=>{for(var s=void 0,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=n(t,e,s)||s);return s&&Rt(t,e,s),s};const K=class K extends P{render(){return bt`
      <nav>
        <div class="container">
          <ul>
            <li>
              <a 
                href="index.html" 
                class="${this.activePage==="home"?"active":""}"
              >
                <slot name="home-text">Home</slot>
              </a>
            </li>
            <li>
              <a 
                href="warriors.html" 
                class="${this.activePage==="warriors"?"active":""}"
              >
                <slot name="warriors-text">Warriors Overview</slot>
              </a>
            </li>
            <li>
              <a 
                href="players.html" 
                class="${this.activePage==="players"?"active":""}"
              >
                <slot name="players-text">Warrior Players</slot>
              </a>
            </li>
            <li>
              <a 
                href="teamstats.html" 
                class="${this.activePage==="stats"?"active":""}"
              >
                <slot name="stats-text">Stats</slot>
              </a>
            </li>
            <li>
              <a 
                href="games.html" 
                class="${this.activePage==="games"?"active":""}"
              >
                <slot name="games-text">Games</slot>
              </a>
            </li>
            <li>
              <a 
                href="standings.html" 
                class="${this.activePage==="standings"?"active":""}"
              >
                <slot name="standings-text">NBA Standings</slot>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `}};K.styles=[Nt.styles,ot`
      /* Navigation styles */
      nav {
        position: sticky;
        top: 0;
        z-index: 100;
        background: var(--color-background-nav);
        width: 100%;
        border-bottom: 2px solid var(--color-secondary);
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--spacing-medium) 0;
        max-width: var(--container-max-width);
        margin: 0 auto;
      }

      ul {
        display: flex;
        justify-content: center;
        gap: var(--spacing-large);
        width: auto;
        flex-direction: row;
      }

      li {
        position: relative;
      }

      a {
        color: var(--color-text);
        text-decoration: none;
        padding: var(--spacing-medium) var(--spacing-small);
        font-weight: var(--font-weight-medium);
        display: block;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
        position: relative;
        transition: color 0.3s ease;
      }

      a:hover {
        color: var(--color-secondary);
      }

      a.active {
        color: var(--color-secondary);
      }

      a.active::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background-color: var(--color-secondary);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        ul {
          flex-direction: column;
          gap: var(--spacing-small);
        }
      }
    `];let B=K;kt([Ht()],B.prototype,"activePage");export{B as W,ot as a,P as i,Ht as n,Nt as r,bt as x};
