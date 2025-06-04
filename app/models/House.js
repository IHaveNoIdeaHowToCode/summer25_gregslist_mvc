import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgURL = data.imgURL
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
              <div class="position-relative shadow house-border">
                <img
                  src="${this.imgURL}"
                  alt="An image of a house" class="house-img">
                <span class="house-price bg-dark text-success fs-2 px-2 d-inline-block">
                  $${this.priceWithCommas}
                </span>
                <div class="p-3">
                  <div class="d-flex justify-content-between">
                    <h3>${this.year}</h3>
                  </div>
                  <p>${this.description}</p>
                  <p>${this.bedrooms} bedrooms</p>
                  <p>${this.bathrooms} bathrooms</p>
                  <p>${this.sqft} sqft</p>
                </div>
              </div>
            </div>
            `
  }

  get priceWithCommas() {
    return this.price.toLocaleString()
  }
}