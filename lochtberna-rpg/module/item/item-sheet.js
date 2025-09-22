export class LochtbernaItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lochtberna-rpg", "sheet", "item"],
      template: "systems/lochtberna-rpg/templates/item/item-sheet.html",
      width: 400,
      height: 300
    });
  }

  getData() {
    const data = super.getData();
    data.system = this.item.system;
    return data;
  }
}
