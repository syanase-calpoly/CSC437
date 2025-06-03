import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-view")
export class HomeViewElement extends LitElement {
  render() {
    return html`
      <main>
        <div class="container">
          <section>
            <h2>Welcome to Warriors Nation</h2>
            <p>
              Your ultimate destination for everything Golden State Warriors.
              Explore our team's history, current roster, statistics, and more.
            </p>
            <a href="/app/about" class="warriors-btn">Explore More</a>
          </section>
        </div>
      </main>
    `;
  }
}
