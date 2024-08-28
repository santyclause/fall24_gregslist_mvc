import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
housesService

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses;
    let houseCont = '';
    const houseElem = document.getElementById('houses')

    houses.forEach((house) => houseCont += house.houseCardTemplate)

    houseElem.innerHTML = houseCont
  }

  createNewHouse() {
    event.preventDefault();
    const form = event.target;
    const houseFormData = getFormData(form);

    housesService.createNewHouse(houseFormData);
  }
}