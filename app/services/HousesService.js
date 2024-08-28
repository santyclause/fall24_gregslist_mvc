import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";

class HousesService {

  createNewHouse(houseData) {
    const houses = AppState.houses;
    const newHouse = new House(houseData);

    houses.push(newHouse);
    this.saveHouses();
  }

  deleteHouse(selectedHouse) {
    const houses = AppState.houses;
    let selectedIndex = houses.findIndex((house) => house.id == selectedHouse);

    houses.splice(selectedIndex, 1);
    this.saveHouses();
  }

  saveHouses() {
    saveState('houses', AppState.houses)
  }

  loadHouses() {
    const storedHouses = loadState('houses', [House])
    AppState.houses = storedHouses;
  }
}

export const housesService = new HousesService();