import { Player_Card, Credential } from "server/models";

export interface Model {
  player?: Player_Card;
  profile?: Credential;
}

export const init: Model = {};