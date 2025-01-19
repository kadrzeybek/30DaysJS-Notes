/*
try{
    let firstName = 'Kadir';
    let LAstName = 'Zeybek';
    let fulName = firstName + " " + LAstNam
}catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)

}

console.log(fulName)

*/
//Throw

/*
try {
    let firstName = 'Kadir';
    let lastName = 'Zeybek';
    let fullName = firstName + ' ' + lastName; 
    throw 'Errorr' 
} catch(err) {
    console.log(err);
}
*/

/*
try {
    let firstName = 'Kadir';
    let lastName = 'Zeybek';
    let fullName = firstName + ' ' + lastName; 
    throw new Error('There is error') 
} catch(err) {
    console.log(err);
}

*/

//EXAMPLE
let age = prompt('Age:?');
try {
    if (age<18) {
        throw new Error('Invalid Age')
    }
} catch (err) {
    alert(err.message);
}



//referenceError
let A = 'A';
let B = 'B';
//let C = A+D;



//typeError
let X = 'AA';
//console.log(X.toFixed(3))