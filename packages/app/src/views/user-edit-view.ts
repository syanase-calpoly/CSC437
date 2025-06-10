import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { View } from "@calpoly/mustang";
import { define, Form, History } from "@calpoly/mustang";
import type { Model } from "../model";
import type { Msg } from "../messages";
import type { Profile } from "../model"; 

export class ProfileEditElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element,
  });

  @property()
  userid?: string;

  @state()
  get profile(): Profile | undefined {
    return this.model.profile;
  }

  render() {
    return html`
      <main class="page">
        <mu-form
          .init=${this.profile}
          @mu-form:submit=${this.handleSubmit}>
          <label>
            Name:
            <input name="name" .value=${this.profile?.name ?? ""} />
          </label>
          <!-- Add more fields as needed -->
          <button type="submit">Save</button>
        </mu-form>
      </main>
    `;
  }

  handleSubmit(event: Form.SubmitEvent<Profile>) {
    this.dispatchMessage([
      "profile/save",
      {
        userid: this.userid!,
        profile: event.detail,
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/profiles/${this.userid}`,
          }),
        onFailure: (error: Error) =>
          console.log("ERROR:", error),
      },
    ]);
  }
}