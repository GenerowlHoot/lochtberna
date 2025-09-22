import { LochtbernaActorSheet } from "./actor/actor-sheet.js";
import { LochtbernaItemSheet } from "./item/item-sheet.js";

Hooks.once("init", async function() {
  console.log("Sagen Lochtbernas | Initialisierung");
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("lochtberna-rpg", LochtbernaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("lochtberna-rpg", LochtbernaItemSheet, { makeDefault: true });
});
