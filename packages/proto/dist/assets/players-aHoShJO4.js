import{n as m,i as y,x as s,r as u,a as g,W as h}from"./nav-bar-bO1PnE02.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(r){return m({...r,state:!0,attribute:!1})}const n=class n extends y{constructor(){super(...arguments),this.playerImg="/placeholder.svg?height=60&width=60"}render(){return s`
      <div class="player-card">
        <img src="${this.playerImg}" alt="Player" />
        <div class="player-info">
          <div class="player-name">
            <slot></slot>
            ${this.number?s`<span class="player-number">#${this.number}</span>`:""}
          </div>
          <div class="player-position">${this.position}</div>
          ${this.stats?s`<div class="player-stats">${this.stats}</div>`:""}
          ${this.bio?s`<div class="player-bio">${this.bio}</div>`:""}
        </div>
      </div>
    `}};n.properties={playerImg:{type:String,attribute:"player-img"},position:{type:String},number:{type:Number},stats:{type:String},bio:{type:String}},n.styles=[u.styles,g`
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
    `];let c=n;var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,d=(r,e,t,o)=>{for(var a=o>1?void 0:o?x(e,t):e,l=r.length-1,p;l>=0;l--)(p=r[l])&&(a=(o?p(e,t,a):p(a))||a);return o&&a&&b(e,t,a),a};let i=class extends y{constructor(){super(...arguments),this.players=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}async hydrate(r){const e=await fetch(r);if(e.ok){const t=await e.json();this.players=t}}renderPlayer(r){return s`
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
    `}render(){return s`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map(r=>this.renderPlayer(r))}
        </ul>
        <p><a href="playerstats.html">View Player Stats →</a></p>
      </section>
    `}};d([m()],i.prototype,"src",2);d([f()],i.prototype,"players",2);i=d([v("player-roster")],i);customElements.define("warriors-nav",h);customElements.define("player-card",c);customElements.define("player-roster",i);
