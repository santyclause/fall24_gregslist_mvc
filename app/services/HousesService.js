import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {

  createNewHouse(houseData) {
    const houses = AppState.houses;
    const newHouse = new House(houseData);

    houses.push(newHouse);
  }
}

export const housesService = new HousesService();