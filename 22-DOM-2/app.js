// Yen element oluşturma

let h1 = document.createElement('h1');
h1.style.color = 'white' 
h1.className = 'test'
h1.style.backgroundColor = 'blue'
h1.textContent = 'Javascript Element'
document.body.appendChild(h1)

// Çoklu Element Ekleme

/* for (let i = 1; i <= 4; i++) {
    let h1 = document.createElement('h1');
    h1.className = 'test'
    h1.style.backgroundColor = 'gray'
    h1.textContent = 'Javascript Element' + i
    document.body.appendChild(h1)
}
*/

//append sonuna - prepend başına ekler!!


//EXAMPLES

const first = document.querySelector(".first");

for (let i = 1; i <= 4; i++) {
    let h1 = document.createElement('h1');
    h1.className = 'test'
    h1.style.backgroundColor = 'gray'
    h1.textContent = 'Javascript Element' + i
    first.appendChild(h1)
}
const second = document.querySelector(".second");
for (let i = 1; i <= 4; i++) {
    let h1 = document.createElement('h1');
    h1.className = 'test'
    h1.style.backgroundColor = 'lightblue'
    h1.textContent = 'Javascript Element' + i
    second.appendChild(h1)
}

// Element silme removechild - remove


//document.body.remove('h1')

const first2 = document.querySelector(".first");

for (let i = 0; i <= 3; i++) {
    first2.remove('h1')
}
