const Person = {
    firstname: "Watanabe",
    lastName: "Mayu",
    fullName: function() {
        return `${this.firstname} ${this.lastName}`
    },
    weight: 65,
    height: 172,
    weightIdeal : function() {
        const heightMinus100 = this.height - 100
        return heightMinus100 - (heightMinus100) * 10 / 100
    },
    needDiet: function () {
        const weightIdeal = this.weightIdeal()
        if (weightIdeal - 5 > this.weight) 
            return (
                "you need more protein, need more " + (weightIdeal - this.weight) + "kg"
            )
        else if (weightIdeal + 5 < this.weight) 
            return (
                "you need a mayo diet, need reduce weight: " + (this.weight - weightIdeal) + "kg"
            ) 
        return "you are in a good shape"
    }
}

console.log(Person.fullName())
console.log(Person.weightIdeal())
console.log(Person.needDiet())
