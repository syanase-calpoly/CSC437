import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "profile/select":
      loadProfile(message[1], user)
        .then((profile) =>
          apply((model) =>
            ({ ...model, profile })
          )
        );
      break;
    // put the rest of your cases here
    default:
      throw new Error(`Unhandled Auth"`);
  }
}

function loadProfile(
  payload: { userid: string },
  user: Auth.User
) {
  return fetch(`/api/profile/${payload.userid}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Model["profile"];
      }
    });
}