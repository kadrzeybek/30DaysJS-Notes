//Element Attributes

const title = document.querySelector('h1')

console.log(title.attributes.title.value)

for(const element of title.attributes) {
    console.log(element.name, element.value)
};

//Child Element count

const ul = document.querySelector('ul')
const deleteButtons = document.querySelectorAll('.delete-btn')

deleteButtons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        e.target.remove()
        if(ul.childElementCount == 0){
            ul.innerHTML = 'Gösterilecek Element Kalmadı'
        }
    })
})

// children - collection döndürür

const deletebtn = ul.children;

[...deletebtn].forEach(btn =>{
    btn.addEventListener('click', e =>{
        e.target.remove()
        if(ul.childElementCount == 0){
            ul.innerHTML = 'Gösterilecek Element Kalmadı'
        }
    })
})


//clientHeight
console.log('Height:'+title.clientHeight, 'Width:'+title.clientWidth)

//firstElementChild - lastElementChild

console.log(ul.firstElementChild)
console.log(ul.lastElementChild)

// nextElement - previousElement

const t = document.querySelector('.t')
console.log(t.nextElementSibling)
console.log(t.previousElementSibling)


//scrollHeight - scrollWitdh scroll uzunluğunu değil de tamamının uzunluğunu verir


