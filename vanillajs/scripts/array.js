const nameCar = ["lamborghini", "BMW", "Ferrari", "Marcedes"]

/*
nameCar.forEach( function(item, index, array) {
    console.log(item, index)
    // console.log(item, index, array)
})
*/

// console.log(nameCar)
// console.log(nameCar[0])
// console.log(nameCar.length)


nameCar.push("Jaguar")

// console.log(nameCar)

// nameCar.pop(nameCar)

// console.log(nameCar)

// nameCar.shift()

// console.log(nameCar)

// console.log(nameCar.indexOf("BMW") + 1)

// const indexFerrari = nameCar.indexOf("Ferrari")

// console.log(indexFerrari)

// nameCar.splice(indexFerrari, 1)

// console.log(nameCar)

const nameCarLama = nameCar.slice()

nameCar.pop()

// console.log("Nama mobil: ", nameCar)

// console.log("Nama mobil lama: ", nameCarLama)

console.log(
    nameCar.reduce(function (acc, car, ke) {
        acc[car] = `Mobil ke ${ke + 1}`

        return acc
    }, {})
)

