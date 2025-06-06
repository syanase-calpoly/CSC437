var m=Object.defineProperty;var y=(s,e,r)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var n=(s,e,r)=>y(s,typeof e!="symbol"?e+"":e,r);import{r as f,n as h,i as u,x as c,d as v,a as P}from"./reset.css-qamkHA0E.js";import{W as p,H as $}from"./header-DTag00fy.js";import{P as w}from"./player-card-_f3eTCoQ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=s=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,d=(s,e,r,a)=>{for(var t=a>1?void 0:a?g(e,r):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(t=(a?l(e,r,t):l(t))||t);return a&&t&&b(e,r,t),t};let o=class extends u{constructor(){super(...arguments);n(this,"src");n(this,"players",[])}async firstUpdated(){if(console.log("FirstUpdated called"),this.src){const e=await fetch(this.src);if(e.ok){const r=await e.json();console.log("fetched players:",r),this.players=[...r],this.requestUpdate()}}}renderPlayer(e){return c`
      <li>
        <a
          href="player.html?playerid=${e.playerid}"
          style="text-decoration: none; color: inherit;"
        >
          <player-card
            player-img=${e.playerImg}
            position=${e.position}
            number=${e.number}
            stats=${e.stats}
            bio=${e.bio}
          >
            ${e.name}
          </player-card>
        </a>
      </li>
    `}render(){return console.log("Rendering players:",this.players),c`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map(e=>this.renderPlayer(e))}
        </ul>
      </section>
    `}};d([h()],o.prototype,"src",2);d([f()],o.prototype,"players",2);o=d([E("player-roster")],o);customElements.define("warriors-nav",p);customElements.define("player-card",w);v({"warriors-nav":p,"warriors-header":$,"mu-auth":P.Provider});
