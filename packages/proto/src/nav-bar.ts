import { html, css, LitElement } from "lit"
import { property } from "lit/decorators.js"
import reset from "./styles/reset.css.ts"


export class WarriorsNavElement extends LitElement {
  @property()
  activePage?: string

  override render() {
    return html`
      <nav>
        <div class="container">
          <ul>
            <li>
              <a 
                href="index.html" 
                class="${this.activePage === "home" ? "active" : ""}"
              >
                <slot name="home-text">Home</slot>
              </a>
            </li>
            <li>
              <a 
                href="warriors.html" 
                class="${this.activePage === "warriors" ? "active" : ""}"
              >
                <slot name="warriors-text">Warriors Overview</slot>
              </a>
            </li>
            <li>
              <a 
                href="players.html" 
                class="${this.activePage === "players" ? "active" : ""}"
              >
                <slot name="players-text">Warrior Players</slot>
              </a>
            </li>
            <li>
              <a 
                href="teamstats.html" 
                class="${this.activePage === "stats" ? "active" : ""}"
              >
                <slot name="stats-text">Stats</slot>
              </a>
            </li>
            <li>
              <a 
                href="games.html" 
                class="${this.activePage === "games" ? "active" : ""}"
              >
                <slot name="games-text">Games</slot>
              </a>
            </li>
            <li>
              <a 
                href="standings.html" 
                class="${this.activePage === "standings" ? "active" : ""}"
              >
                <slot name="standings-text">NBA Standings</slot>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `
  }

  static styles = [
    reset.styles,
    css`
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
    `,
  ]
}
