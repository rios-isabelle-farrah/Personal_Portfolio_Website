let menu = document.querySelector("#hamburger-menu");//
let dropDown = document.querySelector("#drop-down");//
let homeLi = document.querySelector('#home-li')
let projectLi = document.querySelector('#projects-li')
let aboutLi = document.querySelector('#about-li')
let contactLi = document.querySelector('#contact-li')
let x = document.querySelector('#xb')


menu.addEventListener('mouseover', (event) => {
   dropDown.style.display = 'block' 
    })

//this event listener makes the dropdown menu disappear by using display none.
let xButton = document.querySelector('#xb')
   xButton.addEventListener('click', (event) => {
           dropDown.style.display = 'none' 
    })
   let makeRain = document.getElementById("no-matrix");
   let makeRainButton = document.getElementById("rain");
   
   makeRainButton.addEventListener('click', (event) => {
       makeRain.classList.toggle("matrix");
       if (makeRainButton.innerHTML === "dark mode") {
           makeRainButton.innerHTML = "matrix mode";
           let divOfPic = document.getElementById('pic')
           let switchPic = document.getElementById('matrix-pic')
           let plainPic = document.getElementById('plain-pic')
           divOfPic.removeChild(switchPic)
           plainPic.style.display = 'block'
       
        } else {
            makeRainButton.innerHTML = "dark mode";
            let matrixPic = document.createElement("IMG")
            matrixPic.id = 'matrix-pic';
            matrixPic.setAttribute("src", "matrix.png");
            matrixPic.setAttribute("width", "20");
            matrixPic.setAttribute("height", "28");
            matrixPic.setAttribute("alt", "Farrah's Matric Pic");
            let divOfPic = document.getElementById('pic')
            divOfPic.appendChild(matrixPic);
            let plainPic = document.getElementById('plain-pic')
           plainPic.style.display = 'none' 
        }
 })
    

let watchButton = document.querySelector('#watch')
 watchButton.addEventListener('click', (event) => {
let cover = document.getElementById('snow-video-cover')
// cover.classList.toggle("cover-away");
cover.style.display = 'none'

setTimeout(function () {
    cover.style.display = 'block'
        }, 15000);

  })
  



