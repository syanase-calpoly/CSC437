import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface Player {
  name: string;
  playerImg: string;
  position: string;
  number: string;
  stats: string;
  bio: string;
}

@customElement("player-roster")
export class PlayerRoster extends LitElement {
  @property()
  src?: string;

  @state()
  players: Player[] = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  async hydrate(src: string) {
    const res = await fetch(src);
    if (res.ok) {
      const json = await res.json();
      console.log("Fetched players:", json); // Add this
      this.players = json as Player[];
      console.log("here now", this.players);
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
