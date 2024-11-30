let sapmleJson = `[
    {
        "name": "Kadir",
        "surname": "Zeybekoğlu",
        "Age":21
    },
    {
        "name": "Faruk",
        "surname": "Aytek",
        "Age":21
    },
    {
        "name": "Sadettin",
        "surname": "Pak",
        "Age":21
    }
]`

//json to Javascript

let users = JSON.parse(sapmleJson)
console.log(typeof users)
console.log(users)


const categories = [
    {
        name:"T-shirt",
        number:50
    },
    {
        name:"Short",
        number:30
    },
    {
        name:"Sweatshirt",
        number:45
    }
]

//javascript to JSON

let categJson = JSON.stringify(categories);

console.log(typeof categJson)

//different use

let categJson1 = JSON.stringify(categories,['name']);

console.log(categJson1)
