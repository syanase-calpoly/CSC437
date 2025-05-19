import { Schema, model } from "mongoose";
import { Player_Card } from "../models/player_card";
const PlayerSchema = new Schema<Player_Card>(
  {
    playerid: String,
    name: String,
    playerImg: String,
    position: String,
    number: String,
    stats: String,
    bio: String
  },
  { collection: "players" }
);

const PlayerModel = model<Player_Card>("Player", PlayerSchema);

function index(): Promise<Player_Card[]> {
  return PlayerModel.find();
}

function get(playerid: string): Promise<Player_Card> {
  return PlayerModel.find({ playerid })
    .then((list) => list[0])
    .catch(() => {
      throw `${playerid} Not Found`;
    });
}

export default { index, get };
