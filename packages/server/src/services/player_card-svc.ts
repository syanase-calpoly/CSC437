import { Schema, model } from "mongoose";
import { Player_Card } from "../models/player_card";
import { removeAllListeners } from "process";
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

function create(json: Player_Card): Promise<Player_Card> {
  const t = new PlayerModel(json);
  return t.save();
}

function update(playerid: String, player: Player_Card): Promise<Player_Card> {
  return PlayerModel.findOneAndUpdate({ playerid }, player, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${playerid} not updated`;
    else return updated as Player_Card;
  });
}

function remove(playerid: String): Promise<void> {
  return PlayerModel.findOneAndDelete({ playerid }).then(
    (deleted) => {
      if (!deleted) throw `${playerid} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };
