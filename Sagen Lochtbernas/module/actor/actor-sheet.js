// module/actor/actor-sheet.js
export class MeinHexActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["lochtberna", "sheet", "actor"],
      template: "systems/lochtberna/templates/actor/actor-sheet.html",
      width: 500,
      height: 500
    });
  }

  getData() {
    const data = super.getData();
    data.system = this.actor.system;
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.find("input").change(this._onChangeInput.bind(this));
  }

  async _onChangeInput(event) {
    const element = event.currentTarget;
    const field = element.name;
    let value = element.value;

    // Zahleneingaben zu Nummern casten
    if (element.type === "number") {
      value = parseInt(value) || 0;
    }

    await this.actor.update({ [field]: value });
  }
}
