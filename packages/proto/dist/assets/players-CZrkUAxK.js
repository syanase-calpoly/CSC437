var y=Object.defineProperty;var g=(a,r,e)=>r in a?y(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var t=(a,r,e)=>g(a,typeof r!="symbol"?r+"":r,e);import{i as m,x as o,r as h,a as v,n as f}from"./reset.css-CZfO2Pde.js";import{W as u}from"./nav-bar-aKzB4Al5.js";import{r as b}from"./state-B593l9wF.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=a=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,r)}):customElements.define(a,r)};class c extends m{constructor(){super(...arguments);t(this,"playerImg","/placeholder.svg?height=60&width=60");t(this,"position");t(this,"number");t(this,"stats");t(this,"bio")}render(){return o`
      <div class="player-card">
        <img src="${this.playerImg}" alt="Player" />
        <div class="player-info">
          <div class="player-name">
            <slot></slot>
            ${this.number?o`<span class="player-number">#${this.number}</span>`:""}
          </div>
          <div class="player-position">${this.position}</div>
          ${this.stats?o`<div class="player-stats">${this.stats}</div>`:""}
          ${this.bio?o`<div class="player-bio">${this.bio}</div>`:""}
        </div>
      </div>
    `}}t(c,"properties",{playerImg:{type:String,attribute:"player-img"},position:{type:String},number:{type:Number},stats:{type:String},bio:{type:String}}),t(c,"styles",[h.styles,v`
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
    `]);var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(a,r,e,s)=>{for(var i=s>1?void 0:s?$(r,e):r,n=a.length-1,p;n>=0;n--)(p=a[n])&&(i=(s?p(r,e,i):p(i))||i);return s&&i&&w(r,e,i),i};let l=class extends m{constructor(){super(...arguments);t(this,"src");t(this,"players",[])}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src),this.requestUpdate()}async hydrate(r){const e=await fetch(r);if(e.ok){const s=await e.json();console.log("Fetched players:",s),this.players=s,console.log("here now",this.players)}}renderPlayer(r){return o`
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
    `}render(){return console.log("Rendering players:",this.players),o`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map(r=>this.renderPlayer(r))}
        </ul>
        <p><a href="playerstats.html">View Player Stats →</a></p>
      </section>
    `}};d([f()],l.prototype,"src",2);d([b()],l.prototype,"players",2);l=d([x("player-roster")],l);customElements.define("warriors-nav",u);customElements.define("player-card",c);
