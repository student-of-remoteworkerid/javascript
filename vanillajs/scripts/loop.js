const nameCar = ["lamborghini", "BMW", "Ferrari"]

nameCar.forEach(function(item, index, array){
    // console.log(item, index)
})

nameCar.push("Jaguar")

const nameCarLama = nameCar.slice()

nameCar.pop()

// console.log("Nama mobil: ", nameCar)

// console.log("Nama mobil lama: ", nameCarLama)


for (let index = 0; index < nameCar.length; index++) {
    const element = nameCar[index];
    console.log(element)
}

console.log("\n")

let index = 0
while (index < nameCar.length) {
    const element = nameCar[index]
    console.log(element)
    index++
}

console.log(
    nameCar
    .filter( function(car, to) {
        return car == "BMW" 
    })
    .map( function(car, to) {
        return `${car} adalah mobil ke ${to + 1}`  
    })
)