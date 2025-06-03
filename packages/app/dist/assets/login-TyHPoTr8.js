import{b as c,i as l,x as p,r as m,n as d,d as f,a as b}from"./state-Dtfubfaf.js";const g=c`
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
`,v={styles:g};var y=Object.defineProperty,i=(h,s,t,o)=>{for(var e=void 0,a=h.length-1,u;a>=0;a--)(u=h[a])&&(e=u(s,t,e)||e);return e&&y(s,t,e),e};const n=class n extends l{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return console.log("canSubmit",this.api,this.formData.username),!!(this.api&&this.formData.username&&this.formData.password)}render(){return p`
      <form
        @change=${s=>this.handleChange(s)}
        @submit=${s=>this.handleSubmit(s)}
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
    `}handleChange(s){const t=s.target,o=t==null?void 0:t.name,e=t==null?void 0:t.value,a=this.formData;switch(o){case"username":this.formData={...a,username:e};break;case"password":this.formData={...a,password:e};break}this.requestUpdate()}handleSubmit(s){s.preventDefault(),this.canSubmit&&fetch(this.api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:o}=t,e=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:o,redirect:this.redirect}]});console.log("dispatching message",e),this.dispatchEvent(e)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[v.styles,c`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }
  `];let r=n;i([m()],r.prototype,"formData");i([d()],r.prototype,"api");i([d()],r.prototype,"redirect");i([m()],r.prototype,"error");f({"mu-auth":b.Provider,"login-form":r});
