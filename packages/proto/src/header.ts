import { html, LitElement } from "lit"
import { state } from "lit/decorators.js"
import { Auth, Observer, Events } from "@calpoly/mustang"

export class HeaderElement extends LitElement {
  _authObserver = new Observer<Auth.Model>(this, "warriors:auth");

  @state() loggedIn = false;

  @state() userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;
      console.log("User:", user);
      
      if (user && user.authenticated ) {
        console.log("authenticated");
        this.loggedIn = true;
        this.userid = user.username;
        console.log("User ID:", this.userid);
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
      this.requestUpdate();
    });
  }

  renderSignInButton() {
    return html`
      <a href="/login.html" class="auth-link">Sign In…</a>
    `;
  }

  renderSignOutButton() {
    return html`
      <button
        @click=${(e: UIEvent) =>
          Events.relay(e, "auth:message", ["auth/signout"])}
        class="auth-btn"
      >
        Sign Out
      </button>
    `;
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
          ${this.loggedIn
            ? this.renderSignOutButton()
            : this.renderSignInButton()}
        </div>
      </header>
    `;
  }

}