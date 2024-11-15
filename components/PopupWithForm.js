import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFromSubmit }) {
    super({ popupSelector });
  }
}
