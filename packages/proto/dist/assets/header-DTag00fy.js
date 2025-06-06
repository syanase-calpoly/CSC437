var u=Object.defineProperty;var v=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>v(a,typeof e!="symbol"?e+"":e,t);import{i as c,x as l,b as f,c as g,n as b,O as x,e as w,r as h}from"./reset.css-qamkHA0E.js";var y=Object.defineProperty,k=(a,e,t,o)=>{for(var r=void 0,i=a.length-1,n;i>=0;i--)(n=a[i])&&(r=n(e,t,r)||r);return r&&y(e,t,r),r};class m extends c{constructor(){super(...arguments);s(this,"activePage")}render(){return l`
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
    `}}s(m,"styles",[f.styles,g`
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
    `]);k([b()],m.prototype,"activePage");var P=Object.defineProperty,p=(a,e,t,o)=>{for(var r=void 0,i=a.length-1,n;i>=0;i--)(n=a[i])&&(r=n(e,t,r)||r);return r&&P(e,t,r),r};class d extends c{constructor(){super(...arguments);s(this,"_authObserver",new x(this,"warriors:auth"));s(this,"loggedIn",!1);s(this,"userid")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:o}=t;console.log("User:",o),o&&o.authenticated?(console.log("authenticated"),this.loggedIn=!0,this.userid=o.username,console.log("User ID:",this.userid)):(this.loggedIn=!1,this.userid=void 0),this.requestUpdate()})}renderSignInButton(){return l`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `}renderSignOutButton(){return l`
      <button
        @click=${t=>w.relay(t,"auth:message",["auth/signout"])}
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
    `}}s(d,"styles",g`
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 2rem;
      background: #1D428A; /* Warriors blue */
      color: white;
      font-family: 'Inter', 'Roboto', sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
  `);p([h()],d.prototype,"loggedIn");p([h()],d.prototype,"userid");export{d as H,m as W};
