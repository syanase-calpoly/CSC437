import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-view")
export class AboutViewElement extends LitElement {
  render() {
    return html`
      <main>
        <div class="container">
          <section>
            <h2>About the Warriors</h2>
            <p>
              Greatest Team of All Time (GOAT) in the NBA. The Golden State Warriors
              are a professional basketball team based in San Francisco, California.
              Founded in 1946, they are one of the oldest teams in the league and have
              a rich history of success, including multiple NBA championships. The
              Warriors are known for their fast-paced, high-scoring style of play,
              and they have been at the forefront of the three-point shooting revolution
              in the NBA. 
            </p>
          </section>
        </div>
      </main>
    `;
  }
}
