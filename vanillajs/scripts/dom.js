const foo = document.getElementById("foo").innerText = "Bar"
console.log(foo)

let div = document.getElementsByTagName("div")
console.log(div)

for (let index = 0; index < div.length; index++) {
    const element = div[index];

    console.log(element)
    
}

div = document.getElementsByClassName("foo")
console.log(div)

for (let index = 0; index < div.length; index++) {
    const element = div[index];

    console.log(element)
    
}