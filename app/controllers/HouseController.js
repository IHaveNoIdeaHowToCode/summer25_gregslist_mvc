import { AppState } from "../AppState.js";

export class HouseController {
  constructor() {
    // console.log("House Controller is here!");
    this.drawHouses()
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
    event.preventDefault()
    let form = event.target
    let houseData = {

    }
    console.log(houseData);

  }
}