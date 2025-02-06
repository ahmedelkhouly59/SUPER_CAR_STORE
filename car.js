var swiper = new Swiper(".fourth-part", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    860: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

clicked=false
function changenav(){
  if (!clicked){
    document.querySelector('.da')
  }
  else{
    document.querySelector('.dashes').classList.toggle('.onc')

  }
}
cars=[{
  name:'Tesla',
  model:'Model X',
  img:'img/popular1.png',
  time:3.7,
  speed:373,
  type:'Electric',
  price: '98,900'
},{
  name:'Tesla',
  model:'Model 3',
  img:'img/popular2.png',
  time:3.3,
  speed:396,
  type:'Electric',
  price:'45,900'
},{
  name:'Audi',
  model:'E-tron',
  img:"img/popular3.png",
  time:3.9,
  speed:356,
  type:'Electric',
  price:'175,900'
},{
  name:'Porsche',
  model:'Boxster 987',
  img:"img/popular4.png",
  time:3.2,
  speed:359,
  type:'Electric',
  price:'126,900'
},{
  name:'Porsche',
  model:'Panamera',
  img:'img/popular5.png',
  time:3.8,
  speed:381,
  type:'Electric',
  price:'128,900'
}
]

function renderHTML(){
  html=''
  cars.forEach((car)=>{
    html+=add(car)
  })
  document.querySelector('.sixth-3').innerHTML=html
}
renderHTML()

 
function add(car){
  return (`
  <div class="master x">
  <div class="head-1">
      ${car.name}
  </div>
  <div class="head-2">
    ${car.model}
  </div>
  <div class="head-3">
      <img src=${car.img} height="90px" width="180px">
  </div>
  <div class="head-4">
      <div class="head-4-1">
          <div class="head-4-1-1"><i class="fa-solid fa-gauge"></i></div>
          <div>${car.time} Sec</div>
      </div>
      <div class="head-4-1 gg">
          <div class="head-4-1-1">
              <i class="fa-solid fa-tachograph-digital"></i>  
          </div>
          <div>
              ${car.speed} Km/h
          </div>
      </div>
  </div>
  <div class="head-5">
      <div class="head-4-1">
          <div class="head-4-1-1">
              <i class="fa-solid fa-charging-station"></i>
          </div>
          <div>${car.type}</div>
      </div>

  </div>
  <div class="head-6">
      $${car.price}
  </div>     
  <div class="blue-box">
      <i class="fa-regular fa-bookmark cen"></i>
  </div>
</div>
  `)
}

const sr=ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:2500,
  delay:400,
})
sr.reveal(`.best-car, .fourth-part, .rotate1 ,.sixth-2`)
sr.reveal(`.best-car-1`,{delay:500})
sr.reveal(`.flex-light`,{delay:600})
sr.reveal(`.porsche-car`,{delay:800})
sr.reveal(`.m`,{delay:900,origin:'bottom',interval:100})
sr.reveal(`.start`,{delay:1000,origin:'bottom'})
sr.reveal(`.rel-img, .seventh-1`,{origin:'left'})
sr.reveal(`.div-machines, .seventh-2`,{origin:'right'})
sr.reveal(`.featu`,{delay:600,origin:'bottom'})
sr.reveal(`.ggg`,{interval:300})
sr.reveal(`.x`,{interval:100})

function push(carType){
  if (carType=='All'){
    renderHTML()
  }
  if (carType=='Tesla'){
    htmlTesla=''
    cars.forEach((car)=>{
      if (car.name==='Tesla'){
        htmlTesla+=add(car)
      }
    })
    document.querySelector('.sixth-3').innerHTML=htmlTesla
  }
  if (carType=='Audi'){
    htmlAudi=''
    cars.forEach((car)=>{
      if (car.name==='Audi'){
        htmlAudi+=add(car)
      }
    })
    document.querySelector('.sixth-3').innerHTML=htmlAudi
  }
  if (carType=='Porsche'){
    htmlPorsche=''
    cars.forEach((car)=>{
      if (car.name==='Porsche'){
        htmlPorsche+=add(car)
      }
    })
    document.querySelector('.sixth-3').innerHTML=htmlPorsche
  }
}

clicked=false
function changenav(){
  if (!clicked){
    clicked=true;
    document.getElementById('here').classList.remove('nav-bar-right')
    document.getElementById('here').classList.add('nav-bar-rightt')
  } 
  else{
    clicked=false
    document.getElementById('here').classList.remove('nav-bar-rightt')
    document.getElementById('here').classList.add('nav-bar-right')
  }
}

