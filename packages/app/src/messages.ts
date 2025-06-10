import { Profile } from "server/models";

export type Msg =
  | ["profile/select", { userid: string }]
  | [
      "profile/save",
      {
        userid: string;
        profile: Profile;
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]