import { AppState } from "../AppState.js";

export class HousesController {
  constructor() {
    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses;
    let houseCont = '';
    const houseElem = document.getElementById('houses')

    houses.forEach((house) => houseCont += house.houseCardTemplate)

    houseElem.innerHTML = houseCont
  }
}