// sık kullanılan events:onclick, onclick, onchange, onmouseover, onmouseout, onkeyup, onload

const button1 = document.getElementById('btn');

button1.addEventListener('click', function(e){
    console.log("Ok!!")
})

//farklı kullanımlar 

function button2() {
    console.log("Ok2!!")
}

const button3 = document.getElementById('btn-3')
button3.onclick = e =>{
    console.log(e)
}


//double click

const btn4 = document.getElementById('btn-4') 
btn4.addEventListener('dblclick', function(e){
    console.log(('double click'))
})

//mouse on button

const btn5 = document.getElementById('btn-5') 
btn5.addEventListener('mouseenter', function(e){
    console.log(('mouse enter'))
})

//mouse move on button

const btn6 = document.getElementById('btn-6') 
btn6.addEventListener('mousemove', function(e){
    console.log(('mouse move'))
})


//input

const name = document.getElementById('name')

name.addEventListener('input', e =>{
    if(e.target.value){
        e.target.classList.remove('error')
    }
    console.log(e.target.value)
})

name.addEventListener('blur', e =>{
    if(e.target.value ==''){
        e.target.classList.add('error')
    }
    console.log('odak kalktı')

})

//input for color

const color = document.getElementById('color-pick')

color.addEventListener('input', e =>{
    document.body.style.backgroundColor = e.target.value
})

//save-btn

const save = document.getElementById('save-btn')

save.addEventListener('click', function(){
    console.log(
        name.value,
        color.value
    )
})

//select box 

const gender = document.getElementById('gender')

gender.addEventListener('change', e =>{
    console.log(gender.value)
})