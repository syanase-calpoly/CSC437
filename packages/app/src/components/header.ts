import { html, LitElement, css } from "lit"
import { state } from "lit/decorators.js"
import { type Auth, Observer, Events } from "@calpoly/mustang"

export class HeaderElement extends LitElement {
  static styles = css`
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 2rem;
      background: #1D428A; /* Warriors blue */
      color: white;
      font-family: 'Inter', 'Roboto', sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      position: sticky;
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
  `

  _authObserver = new Observer<Auth.Model>(this, "warriors:auth")

  @state() loggedIn = false
  @state() userid?: string

  connectedCallback() {
    super.connectedCallback()

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth
      console.log("User:", user)

      if (user && user.authenticated) {
        console.log("authenticated")
        this.loggedIn = true
        this.userid = user.username
        console.log("User ID:", this.userid)
      } else {
        this.loggedIn = false
        this.userid = undefined
      }
      this.requestUpdate()
    })
  }

  renderSignInButton() {
    return html`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `
  }

  renderSignOutButton() {
    return html`
      <button
        @click=${(e: UIEvent) => Events.relay(e, "auth:message", ["auth/signout"])}
        class="auth-btn"
      >
        Sign Out
      </button>
    `
  }

  override render() {
    console.log("loggedIn?", this.loggedIn)
    return html`
      <header class="header-bar">
        <div class="left">
          <slot></slot>
        </div>
        <div class="right">
          <span>Hello, ${this.userid || "user"}</span>
          ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}
        </div>
      </header>
    `
  }
}
