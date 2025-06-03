import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
//import "./components/player-card.ts";

interface Player {
  name: string;
  playerImg: string;
  position: string;
  number: string;
  stats: string;
  bio: string;
  playerid: string;
  _id: string;
}

@customElement("player-view")
export class PlayerRoster extends LitElement {
  @state()
  players: Player[] = [];

  get src() {
    return `/api/player`;
  }

  override async firstUpdated() {
    console.log("FirstUpdated called");
    if (this.src) {
      console.log("Fetching players from:", this.src);
      const res = await fetch(this.src);
      if (res.ok) {
        console.log("Okay response received");
        const json = await res.json();
        console.log("fetched players:", json);
        this.players = [...(json as Player[])];
        this.requestUpdate();
      }
    }
  }

  renderPlayer(p: Player) {
    return html`
      <li>
        <player-card
          player-img=${p.playerImg}
          position=${p.position}
          number=${p.number}
          stats=${p.stats}
          bio=${p.bio}
        >
          ${p.name}
        </player-card>
      </li>
    `;
  }

  render() {
    console.log("Rendering players:", this.players);
    return html`
      <section>
        <h2>Current Roster</h2>
        <ul>
          ${this.players.map((p) => this.renderPlayer(p))}
        </ul>
        <p><a href="playerstats.html">View Player Stats →</a></p>
      </section>
    `;
  }
}
