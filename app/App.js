import { CarsController } from "./controllers/CarsController.js"
import { HouseController } from "./controllers/HouseController.js"

class App {
  carsController = new CarsController()
  houseController = new HouseController()
}

window['app'] = new App()


