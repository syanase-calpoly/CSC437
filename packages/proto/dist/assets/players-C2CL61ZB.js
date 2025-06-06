var g=Object.defineProperty;var v=(a,r,e)=>r in a?g(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var s=(a,r,e)=>v(a,typeof r!="symbol"?r+"":r,e);import{i as m,x as i,r as h,b as f,c as u,n as b,d as x,a as w}from"./reset.css-B_wKpHQb.js";import{W as y,H as $}from"./header-D-8JC5ve.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=a=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,r)}):customElements.define(a,r)};class d extends m{constructor(){super(...arguments);s(this,"playerImg","/placeholder.svg?height=60&width=60");s(this,"position");s(this,"number");s(this,"stats");s(this,"bio")}render(){return i`
      <div class="player-card">
        <img src="${this.playerImg}" alt="Player" />
        <div class="player-info">
          <div class="player-name">
            <slot></slot>
            ${this.number?i`<span class="player-number">#${this.number}</span>`:""}
          </div>
          <div class="player-position">${this.position}</div>
          ${this.stats?i`<div class="player-stats">${this.stats}</div>`:""}
          ${this.bio?i`<div class="player-bio">${this.bio}</div>`:""}
        </div>
      </div>
    `}}s(d,"properties",{playerImg:{type:String,attribute:"player-img"},position:{type:String},number:{type:Number},stats:{type:String},bio:{type:String}}),s(d,"styles",[h.styles,f`
      .player-card {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--spacing-medium);
        align-items: start;
        padding: var(--spacing-medium);
        background-color: rgba(29, 66, 138, 0.1);
        border-radius: var(--border-radius);
        margin-bottom: var(--spacing-medium);
        border: 1px solid var(--color-border);
        box-shadow: var(--box-shadow);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .player-card:hover {
        transform: translateY(-3px);
        box-shadow: var(--box-shadow-lg);
      }

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--color-secondary);
      }

      .player-info {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .player-name {
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: var(--spacing-small);
      }

      .player-number {
        color: var(--color-secondary);
        font-size: 0.9rem;
      }

      .player-position {
        font-size: var(--font-size-small);
        color: var(--color-text-muted);
        font-weight: var(--font-weight-medium);
      }

      .player-stats {
        font-size: var(--font-size-small);
        color: var(--color-primary);
        margin-top: 4px;
        font-weight: var(--font-weight-medium);
      }

      .player-bio {
        font-size: var(--font-size-small);
        color: var(--color-text);
        margin-top: var(--spacing-small);
        line-height: 1.4;
      }

      @media (max-width: 768px) {
        .player-card {
          grid-template-columns: 1fr;
          text-align: center;
        }

        img {
          margin: 0 auto;
        }

        .player-name {
          justify-content: center;
        }
      }
    `]);var P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,c=(a,r,e,o)=>{for(var t=o>1?void 0:o?j(r,e):r,n=a.length-1,p;n>=0;n--)(p=a[n])&&(t=(o?p(r,e,t):p(t))||t);return o&&t&&P(r,e,t),t};let l=class extends m{constructor(){super(...arguments);s(this,"src");s(this,"players",[])}async firstUpdated(){if(console.log("FirstUpdated called"),this.src){const r=await fetch(this.src);if(r.ok){const e=await r.json();console.log("fetched players:",e),this.players=[...e],this.requestUpdate()}}}renderPlayer(r){return i`
      <li>
        <player-card
          player-img=${r.playerImg}
          position=${r.position}
          number=${r.number}
          stats=${r.stats}
          bio=${r.bio}
        >
          ${r.name}
        </player-card>
      </li>
    `}render(){return console.log("Rendering players:",this.players),i`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map(r=>this.renderPlayer(r))}
        </ul>
        <p><a href="playerstats.html">View Player Stats →</a></p>
      </section>
    `}};c([b()],l.prototype,"src",2);c([u()],l.prototype,"players",2);l=c([z("player-roster")],l);customElements.define("warriors-nav",y);customElements.define("player-card",d);x({"warriors-nav":y,"warriors-header":$,"mu-auth":w.Provider});
