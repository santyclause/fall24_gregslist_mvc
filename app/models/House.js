import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.address = data.address
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseCardTemplate() {
    return `
    <div class="col-md-6">
      <div class="house-card container-fluid mb-3">
        <section class="row">
          <div class="col-md-4">
            <img
              src="${this.imgUrl}"
              alt="" class="img-fluid house-img">
          </div>
          <div class="col-md-8">
            <h2>${this.address} <i onclick="app.HousesController.deleteHouse('${this.id}')" class="mdi mdi-delete" role="button"></i></h2>
            <h4>${this.year}<h4>
            <h5>${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms, ${this.sqft}sqft</h5>
            <h3>$${this.priceAsCurrency}</h3>
            <p>${this.description}</p>
          </div>
        </section>
      </div>
    </div>`
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat().format(this.price)
  }
}