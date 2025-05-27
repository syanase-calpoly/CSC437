import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        games: resolve(__dirname, "games.html"),
        players: resolve(__dirname, "players.html"),
        playerstats: resolve(__dirname, "playerstats.html"),
        standings: resolve(__dirname, "standings.html"),
        teamstats: resolve(__dirname, "teamstats.html"),
        warriors: resolve(__dirname, "warriors.html"),
        login: resolve(__dirname, "login.html"),
      },
    },
    // server: {
    //   proxy: {

    //   }
    // }
  }
});
