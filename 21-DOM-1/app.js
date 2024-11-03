//TagNamei, Id... kullanılabilir
const h1 = document.getElementsByTagName('h1')
console.log(h1)

// h1 bir array değildir foreach ile kullanılmaz

for (let i = 0; i <h1.length; i++){
    console.log(h1[i].innerHTML)
}

//query selector olduğunda sadece ilk eleman döner  . kullanılır
const title = document.querySelector('.title-1')

console.log(title)

//query selectorAll oluduğunda ise  tamamı array olarak döner, foreach kullanılabilir

const titles = document.querySelectorAll('.title-1')

titles.forEach(item => console.log(item.innerHTML))

//style değişimi yapılabilir

const t = document.getElementById('t-1')
t.style.color='red'
t.style.backgroundColor = 'yellow'
t.title = 'test baslik'
t.className = 'adana'

// bu şekilde de olabilir
title.setAttribute('style','color: blue; background-color: yellow' )
title.setAttribute('title','test')
title.setAttribute('class','denizli')


//fakat bu şekilde diğer classlar yok olucaktır aşağıdaki gibi olursa diğerlerinin yanına ekler veya siler

t.classList.add('bursa')
t.classList.remove('bursa')


// içerik değiştirme
t.innerHTML = 'Değişen başlık' 


