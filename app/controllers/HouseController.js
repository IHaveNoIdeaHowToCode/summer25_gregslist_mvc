import { AppState } from "../AppState.js";
import { houseService, HouseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HouseController {
  constructor() {
    // console.log("House Controller is here!");
    this.drawHouses()
    this.createHouse()
    // AppState.on('houses', this.drawHouses)

  }

  drawHouses() {
    const houses = AppState.houses
    let houseListingContent = ''
    houses.forEach(house => houseListingContent += house.listingHTMLTemplate)
    const houseListingsElm = document.getElementById('house-listings')
    // console.log('drawing houses', houseListingsElm);
    houseListingsElm.innerHTML = houseListingContent
  }

  createHouse() {
    // event.preventDefault()
    const formElem = event.target
    const houseData = getFormData(formElem)

    console.log(houseData);
    houseService.createHouse(houseData)
  }
}