import express, { Request, Response } from "express";
import { Player_Card } from "../models/player_card"; 
import Players from "../services/player_card-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Players.index()
    .then((list: Player_Card[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:playerid", (req: Request, res: Response) => {
  const { playerid } = req.params;

  Players.get(playerid)
    .then((player: Player_Card) => res.json(player))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newPlayer = req.body;

  Players.create(newPlayer)
    .then((player: Player_Card) =>
      res.status(201).json(player)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:playerid", (req: Request, res: Response) => {
  const { playerid } = req.params;
  const newPlayer = req.body;

  Players.update(playerid, newPlayer)
    .then((player: Player_Card) => res.json(player))
    .catch((err) => res.status(404).end());
});

router.delete("/:playerid", (req: Request, res: Response) => {
  const { playerid } = req.params;

  Players.remove(playerid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;