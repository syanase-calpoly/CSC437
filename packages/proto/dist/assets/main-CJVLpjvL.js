var g=Object.defineProperty;var c=(t,e,r)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var a=(t,e,r)=>c(t,typeof e!="symbol"?e+"":e,r);import{i as v,x as i}from"./reset.css-CZfO2Pde.js";import{O as f,e as m,d as p,a as b}from"./mustang-B-s5d2MX.js";import{W as I}from"./nav-bar-aKzB4Al5.js";import{r as u}from"./state-B593l9wF.js";var O=Object.defineProperty,h=(t,e,r,n)=>{for(var s=void 0,o=t.length-1,d;o>=0;o--)(d=t[o])&&(s=d(e,r,s)||s);return s&&O(e,r,s),s};class l extends v{constructor(){super(...arguments);a(this,"_authObserver",new f(this,"warriors:auth"));a(this,"loggedIn",!1);a(this,"userid")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{const{user:n}=r;console.log("User:",n),n&&n.authenticated?(console.log("authenticated"),this.loggedIn=!0,this.userid=n.username,console.log("User ID:",this.userid)):(this.loggedIn=!1,this.userid=void 0),this.requestUpdate()})}renderSignInButton(){return i`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `}renderSignOutButton(){return i`
      <button
        @click=${r=>m.relay(r,"auth:message",["auth/signout"])}
        class="auth-btn"
      >
        Sign Out
      </button>
    `}render(){return console.log("loggedIn?",this.loggedIn),i`
      <header class="header-bar">
        <div class="left">
          <slot></slot>
        </div>
        <div class="right">
          <span>Hello, ${this.userid||"user"}</span>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        </div>
      </header>
    `}}h([u()],l.prototype,"loggedIn");h([u()],l.prototype,"userid");p({"warriors-nav":I,"warriors-header":l,"mu-auth":b.Provider});
