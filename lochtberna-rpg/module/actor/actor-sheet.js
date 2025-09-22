export class LochtbernaActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lochtberna-rpg", "sheet", "actor"],
      template: "systems/lochtberna-rpg/templates/actor/actor-sheet.html",
      width: 600,
      height: 500,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "attributes" }]
    });
  }

  getData() {
    const data = super.getData();
    data.system = this.actor.system;
    return data;
  }
}
