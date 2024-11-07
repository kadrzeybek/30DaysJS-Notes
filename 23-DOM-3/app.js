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