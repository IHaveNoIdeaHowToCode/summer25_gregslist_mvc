import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  cars = [
    new Car(
      {
        make: 'mazda',
        model: 'miata',
        year: 1996,
        color: 'red',
        mileage: 200000,
        imgUrl: 'https://images.unsplash.com/photo-1725199583250-9f59567ba965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pYXRhfGVufDB8fDB8fHwy',
        isManualTransmission: true,
        cylinders: 4,
        price: 2000,
        fuelType: 'gas',
        listedAt: '12/12/2020',
        titleStatus: 'clean'
      }
    ),
    new Car(
      {
        make: 'vw',
        model: 'beetle',
        year: 1960,
        color: 'blue',
        mileage: 300000,
        imgUrl: 'https://images.unsplash.com/photo-1531850959096-cfbb6f26c5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnclMjBiZWV0bGV8ZW58MHx8MHx8fDI%3D',
        isManualTransmission: true,
        cylinders: 4,
        price: 40000,
        fuelType: 'gas',
        listedAt: '12/12/2010',
        titleStatus: 'rebuilt'
      }
    ),
    new Car(
      {
        make: 'bat',
        model: 'mobile',
        year: 1968,
        color: 'black',
        mileage: 2000,
        imgUrl: 'https://images.unsplash.com/photo-1671877077293-ae670e67f2af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmF0bW9iaWxlfGVufDB8fDB8fHwy',
        isManualTransmission: false,
        cylinders: 10,
        price: 4200000,
        fuelType: 'batfuel',
        listedAt: '6/8/2024'
      }
    ),
  ]

  houses = [
    new House({
      year: '1974',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1400,
      price: 375000,
      description: 'Newly renovated mid-century modern home',
      imgURL: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG91c2V8ZW58MHx8MHx8fDA%3D'
    }),
    new House({
      year: '1945',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1100,
      price: 175000,
      description: 'Recently refurbished post war home, ready for a new family',
      imgURL: 'https://plus.unsplash.com/premium_photo-1733760125038-06564d0a4568?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MTk0MHMlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    }),
    new House({
      year: '2025',
      bedrooms: 8,
      bathrooms: 4,
      sqft: 10000,
      price: 2500000,
      description: 'Brand new home nestled in the Eagle foothills, ready for a California millionaire!',
      imgURL: 'https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D'
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())