var u=Object.defineProperty;var d=(a,r,t)=>r in a?u(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;var i=(a,r,t)=>d(a,typeof r!="symbol"?r+"":r,t);import{i as p,x as f,r as b,b as g,c,n as l,d as v,a as y}from"./reset.css-B_wKpHQb.js";var D=Object.defineProperty,m=(a,r,t,e)=>{for(var s=void 0,o=a.length-1,h;o>=0;o--)(h=a[o])&&(s=h(r,t,s)||s);return s&&D(r,t,s),s};class n extends p{constructor(){super(...arguments);i(this,"formData",{});i(this,"api");i(this,"redirect","/");i(this,"error")}get canSubmit(){return console.log("canSubmit",this.api,this.formData.username),!!(this.api&&this.formData.username&&this.formData.password)}render(){return f`
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
    `}handleChange(t){const e=t.target,s=e==null?void 0:e.name,o=e==null?void 0:e.value,h=this.formData;switch(s){case"username":this.formData={...h,username:o};break;case"password":this.formData={...h,password:o};break}this.requestUpdate()}handleSubmit(t){t.preventDefault(),this.canSubmit&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(e=>{if(e.status!==200)throw"Login failed";return e.json()}).then(e=>{const{token:s}=e,o=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});console.log("dispatching message",o),this.dispatchEvent(o)}).catch(e=>{console.log(e),this.error=e.toString()})}}i(n,"styles",[b.styles,g`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
  `]);m([c()],n.prototype,"formData");m([l()],n.prototype,"api");m([l()],n.prototype,"redirect");m([c()],n.prototype,"error");v({"mu-auth":y.Provider,"login-form":n});
