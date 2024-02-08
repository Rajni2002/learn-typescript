//* Nominal vs Structural
// Nominal -> Is object a instance of the class containing exact properties
// Structural ->  Is object a instance of the class containing atleast properties

class Car {
  make: string
  model: string
  year: number
  isElectric: boolean
}

class Truck {
  make: string
  model: string
  year: number
  towingCapacity: number
}

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2017,
}

function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}
/*
//printCar(new Car()) //✔️ Fine
//printCar(new Truck()) //✔️ Fine
//printCar(vehicle) //✔️ Fine
/**/

console.log(vehicle instanceof Car);