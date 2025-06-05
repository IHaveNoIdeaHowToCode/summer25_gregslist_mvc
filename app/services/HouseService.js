import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { loadState, saveState } from "../utils/Store.js";

export class HouseService {
  deleteHouse(houseId) {
  }

  createHouse(houseData) {
    console.log(houseData);
    const newHouse = new House(houseData)
    const houses = AppState.houses
    houses.push(newHouse)

    console.log('Added house!', AppState.houses);
  }
}

export const houseService = new HouseService()