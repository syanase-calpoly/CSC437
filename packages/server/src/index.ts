// src/index.ts
import express, { Request, Response } from "express";
import Players from "./services/player_card-svc";
import { connect } from "./services/mongo";
import players from "./routes/players";
import profiles from "./routes/profiles";
import auth, { authenticateUser } from "./routes/auth";
import fs from "node:fs/promises";
import path from "path";

connect("blazing");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));
app.use(express.json());
app.use("/api/profiles", authenticateUser, profiles);

app.use("/api/players", authenticateUser, players);
app.use("/auth", auth);
app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.get("/api/player", async (req: Request, res: Response) => {
  try {
    const players = await Players.index();
    res.json(players);
  } catch (err) {
    res.status(500).send("Error fetching players");
  }
});

app.get("/api/player/:playerid", (req: Request, res: Response) => {
  const { playerid } = req.params;

  Players.get(playerid).then((data) => {
    if (data) {
      res.set("Content-Type", "application/json").send(JSON.stringify(data));
    } else {
      res.status(404).send();
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
