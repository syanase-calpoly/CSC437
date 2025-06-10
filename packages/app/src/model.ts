import { Player_Card, Profile } from "server/models";

export interface Model {
  player?: Player_Card;
  profile?: Profile;
}

export const init: Model = {};

export type { Profile };
