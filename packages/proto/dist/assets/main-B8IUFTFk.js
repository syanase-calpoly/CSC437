var u=Object.defineProperty;var p=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>p(r,typeof e!="symbol"?e+"":e,t);import{i as m,a as c,x as l}from"./reset.css-CZfO2Pde.js";import{O as f,e as b,d as v,a as x}from"./mustang-B-s5d2MX.js";import{W as w}from"./nav-bar-aKzB4Al5.js";import{r as h}from"./state-B593l9wF.js";var k=Object.defineProperty,g=(r,e,t,a)=>{for(var i=void 0,s=r.length-1,d;s>=0;s--)(d=r[s])&&(i=d(e,t,i)||i);return i&&k(e,t,i),i};class o extends m{constructor(){super(...arguments);n(this,"_authObserver",new f(this,"warriors:auth"));n(this,"loggedIn",!1);n(this,"userid")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:a}=t;console.log("User:",a),a&&a.authenticated?(console.log("authenticated"),this.loggedIn=!0,this.userid=a.username,console.log("User ID:",this.userid)):(this.loggedIn=!1,this.userid=void 0),this.requestUpdate()})}renderSignInButton(){return l`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `}renderSignOutButton(){return l`
      <button
        @click=${t=>b.relay(t,"auth:message",["auth/signout"])}
        class="auth-btn"
      >
        Sign Out
      </button>
    `}render(){return console.log("loggedIn?",this.loggedIn),l`
      <header class="header-bar">
        <div class="left">
          <slot></slot>
        </div>
        <div class="right">
          <span>Hello, ${this.userid||"user"}</span>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        </div>
      </header>
    `}}n(o,"styles",c`
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 2rem;
      background: #1D428A; /* Warriors blue */
      color: white;
      font-family: 'Inter', 'Roboto', sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
      white-space: nowrap;
    }

    .left ::slotted(*) {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0.02em;
      color: white;
      text-transform: uppercase;
      position: relative;
      height: 100%;
      padding-top: 2rem;    
      padding-bottom: 2rem;
    }

    /* Yellow underline similar to the image */
    .left ::slotted(*):after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #FFC72C; /* Warriors gold */
      max-width: 120px;
      margin: 0 auto;
      left: 0;
      right: 0;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .right span {
      font-size: 0.95rem;
      font-weight: 500;
    }

    .auth-link,
    .auth-btn {
      color: white;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 0.5rem 1rem;
      cursor: pointer;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .auth-link:hover,
    .auth-btn:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    .auth-link:active,
    .auth-btn:active {
      background: rgba(255, 255, 255, 0.35);
    }

    @media (max-width: 768px) {
      .header-bar {
        padding: 1rem 1.2rem;
      }
      
      .left ::slotted(*) {
        font-size: 1.4rem;
      }
      
      .right {
        gap: 0.8rem;
      }
      
      .right span {
        font-size: 0.85rem;
      }
      
      .auth-link,
      .auth-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
      }
    }
  `);g([h()],o.prototype,"loggedIn");g([h()],o.prototype,"userid");v({"warriors-nav":w,"warriors-header":o,"mu-auth":x.Provider});
