import { Auth, define, History, Switch, Store } from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { HeaderElement } from "./components/header.js";
import { PlayerRoster } from "./views/players-view.js";
import { HomeViewElement } from "./views/home-view.js";
import { AboutViewElement } from "./views/about-view.js";

const routes = [
  {
    path: "/app/players",
    view: () => html`<player-view></player-view>`,
  },
  {
    path: "/app",
    view: () => html`<home-view></home-view>`,
  },
  {
  path: "/app/about",
  view: () => html`<about-view></about-view>`
    },
  {
    path: "/",
    redirect: "/app",
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "warriors-header": HeaderElement,
  "mu-store": class AppStore
    extends Store.Provider<Model, Msg>
  {
    constructor() {
      super(update, init, "warriors:auth");
    }
  },
  "home-view": HomeViewElement,
  "player-view": PlayerRoster,
  "about-view": AboutViewElement,
  
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "warriors:history", "warriors:auth");
    }
  },
});
