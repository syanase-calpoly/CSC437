import { html, css, LitElement } from "lit"
import reset from "../styles/reset.css.ts"
import { customElement } from "lit/decorators.js";


@customElement("player-card")
export class PlayerCardElement extends LitElement {
  static properties = {
    playerImg: { type: String, attribute: "player-img" },
    position: { type: String },
    number: { type: Number },
    stats: { type: String },
    bio: { type: String },
  }

  playerImg = "/placeholder.svg?height=60&width=60"
  position?: string
  number?: number
  stats?: string
  bio?: string

  override render() {
    return html`
      <div class="player-card">
        <img src="${this.playerImg}" alt="Player" />
        <div class="player-info">
          <div class="player-name">
            <slot></slot>
            ${this.number ? html`<span class="player-number">#${this.number}</span>` : ""}
          </div>
          <div class="player-position">${this.position}</div>
          ${this.stats ? html`<div class="player-stats">${this.stats}</div>` : ""}
          ${this.bio ? html`<div class="player-bio">${this.bio}</div>` : ""}
        </div>
      </div>
    `
  }

  static styles = [
    reset.styles,
    css`
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
    `,
  ]
}
