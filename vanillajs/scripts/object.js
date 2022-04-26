const person = {
    firstname: "Watanabe",
    lastName: "Mayu",
    fullName: function() {
        return `${this.firstname} ${this.lastName}`
    },
    weight: 65,
    height: 172,
    isWeightIdeal : function() {
        const heightMinus100 = this.height - 100
        return (heightMinus100 - ( heightMinus100) * 10 / 100) < this.weight
    },
}

console.log(person.fullName())
console.log(person.isWeightIdeal())

// Object Part 2
const countries = {
    ID: {
        province: ['Bali', 'Jawa Barat', 'Jakarta'],
        city: ['Kuta', 'Bandung', 'Senayan']
    },
    MY: {},
    TH: {
        province: [],
    },
}

// console.log(countries.ID.province)
// console.log(countries?.TH)
console.log(countries?.TH?.province ?? "Not Found")