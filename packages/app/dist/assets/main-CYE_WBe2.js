import{r as p,i as h,O as f,x as n,e as y,d as w,_ as b,h as _,a as O}from"./state-Dtfubfaf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var $=Object.defineProperty,g=(e,t,s,i)=>{for(var r=void 0,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=o(t,s,r)||r);return r&&$(t,s,r),r};class v extends h{constructor(){super(...arguments),this._authObserver=new f(this,"warriors:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{const{user:s}=t;console.log("User:",s),s&&s.authenticated?(console.log("authenticated"),this.loggedIn=!0,this.userid=s.username,console.log("User ID:",this.userid)):(this.loggedIn=!1,this.userid=void 0),this.requestUpdate()})}renderSignInButton(){return n`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `}renderSignOutButton(){return n`
      <button
        @click=${t=>y.relay(t,"auth:message",["auth/signout"])}
        class="auth-btn"
      >
        Sign Out
      </button>
    `}render(){return console.log("loggedIn?",this.loggedIn),n`
      <header class="header-bar">
        <div class="left">
          <slot></slot>
        </div>
        <div class="right">
          <span>Hello, ${this.userid||"user"}</span>
          ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}
        </div>
      </header>
    `}}g([p()],v.prototype,"loggedIn");g([p()],v.prototype,"userid");var P=Object.defineProperty,I=Object.getOwnPropertyDescriptor,m=(e,t,s,i)=>{for(var r=i>1?void 0:i?I(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=(i?o(t,s,r):o(r))||r);return i&&r&&P(t,s,r),r};let l=class extends h{constructor(){super(...arguments),this.players=[]}get src(){return"/api/player"}async firstUpdated(){if(console.log("FirstUpdated called"),this.src){console.log("Fetching players from:",this.src);const e=await fetch(this.src);if(e.ok){console.log("Okay response received");const t=await e.json();console.log("fetched players:",t),this.players=[...t],this.requestUpdate()}}}renderPlayer(e){return n`
      <li>
        <player-card
          player-img=${e.playerImg}
          position=${e.position}
          number=${e.number}
          stats=${e.stats}
          bio=${e.bio}
        >
          ${e.name}
        </player-card>
      </li>
    `}render(){return console.log("Rendering players:",this.players),n`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map(e=>this.renderPlayer(e))}
        </ul>
        <p><a href="playerstats.html">View Player Stats →</a></p>
      </section>
    `}};m([p()],l.prototype,"players",2);l=m([d("player-view")],l);var S=Object.getOwnPropertyDescriptor,x=(e,t,s,i)=>{for(var r=i>1?void 0:i?S(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=o(r)||r);return r};let c=class extends h{render(){return n`
      <main>
        <div class="container">
          <section>
            <h2>Welcome to Warriors Nation</h2>
            <p>
              Your ultimate destination for everything Golden State Warriors.
              Explore our team's history, current roster, statistics, and more.
            </p>
            <a href="/app/about" class="warriors-btn">Explore More</a>
          </section>
        </div>
      </main>
    `}};c=x([d("home-view")],c);var E=Object.getOwnPropertyDescriptor,A=(e,t,s,i)=>{for(var r=i>1?void 0:i?E(t,s):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=o(r)||r);return r};let u=class extends h{render(){return n`
      <main>
        <div class="container">
          <section>
            <h2>About the Warriors</h2>
            <p>
              Greatest Team of All Time (GOAT) in the NBA. The Golden State Warriors
              are a professional basketball team based in San Francisco, California.
              Founded in 1946, they are one of the oldest teams in the league and have
              a rich history of success, including multiple NBA championships. The
              Warriors are known for their fast-paced, high-scoring style of play,
              and they have been at the forefront of the three-point shooting revolution
              in the NBA. 
            </p>
            <a href="/app/about" class="warriors-btn">Explore More</a>
          </section>
        </div>
      </main>
    `}};u=A([d("about-view")],u);const C=[{path:"/app/players",view:()=>n`<player-view></player-view>`},{path:"/app",view:()=>n`<home-view></home-view>`},{path:"/app/about",view:()=>n`<about-view></about-view>`},{path:"/",redirect:"/app"}];w({"mu-auth":O.Provider,"mu-history":_.Provider,"warriors-header":v,"home-view":c,"player-view":l,"about-view":u,"mu-switch":class extends b.Element{constructor(){super(C,"warriors:history","warriors:auth")}}});
