import { Credential } from "server/models";

export type Msg =
  | ["profile/save", { userid: string; profile: Credential }]
  | ["profile/select", { userid: string }]