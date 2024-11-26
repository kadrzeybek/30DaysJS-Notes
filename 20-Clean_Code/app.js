//CamelCase
let firstName = "Kadir"
let lastName = "Zeybekoğlu"


const PI = Math.PI


//function
function funct(params) {
    console.log('test'+ params)
}

funct(123)

//arraw function
const func = () =>{
    console.log('Hi!')
}

func()

//Arrays
const names = ['A','B','C']


const date = new Date().toLocaleDateString()
console.log(date)

//loops
for(let i = 0; i < 3; i++){
    console.log(i);
}

//for array
for(name of names){
    console.log(name)
}

//object
const person = {
    name: 'Kadir',
    Surname: 'Zeybekoğlu',
    Age: 21
}


//if-else
if(person.Age == 22){
    console.log('Waw')
} else{
    console.log('Wow')
}

let x = true

x 
? console.log('Yes') 
: console.log('No')

//classes

class Person{
    
}