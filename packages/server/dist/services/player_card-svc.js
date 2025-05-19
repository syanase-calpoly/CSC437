"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var player_card_svc_exports = {};
__export(player_card_svc_exports, {
  default: () => player_card_svc_default
});
module.exports = __toCommonJS(player_card_svc_exports);
var import_mongoose = require("mongoose");
const PlayerSchema = new import_mongoose.Schema(
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
const PlayerModel = (0, import_mongoose.model)("Player", PlayerSchema);
function index() {
  return PlayerModel.find();
}
function get(playerid) {
  return PlayerModel.find({ playerid }).then((list) => list[0]).catch(() => {
    throw `${playerid} Not Found`;
  });
}
var player_card_svc_default = { index, get };
