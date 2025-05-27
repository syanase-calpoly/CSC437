var l=Object.defineProperty;var u=(a,r,t)=>r in a?l(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var i=(a,r,t)=>u(a,typeof r!="symbol"?r+"":r,t);import{i as d,x as f,r as b,a as g,n as p}from"./reset.css-CZfO2Pde.js";import{d as v,a as y}from"./mustang-B-s5d2MX.js";import{r as c}from"./state-B593l9wF.js";var D=Object.defineProperty,h=(a,r,t,e)=>{for(var o=void 0,s=a.length-1,m;s>=0;s--)(m=a[s])&&(o=m(r,t,o)||o);return o&&D(r,t,o),o};class n extends d{constructor(){super(...arguments);i(this,"formData",{});i(this,"api");i(this,"redirect","/");i(this,"error")}get canSubmit(){return console.log("canSubmit",this.api,this.formData.username),!!(this.api&&this.formData.username&&this.formData.password)}render(){return f`
      <form
        @change=${t=>this.handleChange(t)}
        @submit=${t=>this.handleSubmit(t)}
      >
        <slot></slot>
        <slot name="button">
          <button
            ?disabled=${!this.canSubmit}
            type="submit">
            Login
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(t){const e=t.target,o=e==null?void 0:e.name,s=e==null?void 0:e.value,m=this.formData;switch(o){case"username":this.formData={...m,username:s};break;case"password":this.formData={...m,password:s};break}this.requestUpdate()}handleSubmit(t){t.preventDefault(),this.canSubmit&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(e=>{if(e.status!==200)throw"Login failed";return e.json()}).then(e=>{const{token:o}=e,s=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",s),this.dispatchEvent(s)}).catch(e=>{console.log(e),this.error=e.toString()})}}i(n,"styles",[b.styles,g`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
  `]);h([c()],n.prototype,"formData");h([p()],n.prototype,"api");h([p()],n.prototype,"redirect");h([c()],n.prototype,"error");v({"mu-auth":y.Provider,"login-form":n});
