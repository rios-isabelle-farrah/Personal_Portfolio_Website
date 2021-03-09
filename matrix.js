let menu = document.querySelector("#hamburger-menu");//
let dropDown = document.querySelector("#drop-down");//
let homeLi = document.querySelector('#home-li')
let projectLi = document.querySelector('#project-li')
let aboutLi = document.querySelector('#about-li')
let contactLi = document.querySelector('#contact-li')
let x = document.querySelector('#xb')
let revert = document.createElement('button')
revert.id = 'no-rain'
revert.textContent = "revert"

menu.addEventListener('mouseover', (event) => {
   dropDown.style.display = 'block' 
    })


let xButton = document.querySelector('#xb')
   xButton.addEventListener('click', (event) => {
           dropDown.style.display = 'none' 
    })



   let makeRain = document.getElementById("no-matrix");
   let makeRainButton = document.getElementById("rain");
   let revertButton = document.getElementById("revert");
   
   makeRainButton.addEventListener('click', (event) => {
       makeRain.classList.toggle("matrix");
       if (makeRainButton.innerHTML === "dark mode") {
           makeRainButton.innerHTML = "matrix mode";
           let divOfPic = document.getElementById('pic')
           let switchPic = document.getElementById('matrix-pic')
           let plainPic = document.getElementById('plain-pic')
           divOfPic.removeChild(switchPic)
           plainPic.style.display = 'block'
        //    document.getElementById('name').style.color = 'limegreen'
        //    document.getElementById('title').style.color = 'limegreen'
        //    document.getElementById('pursuit').style.color = 'limegreen'
       
          
        
          
           
        } else {
            makeRainButton.innerHTML = "dark mode";
            let matrixPic = document.createElement("IMG")
            matrixPic.id = 'matrix-pic';
            matrixPic.setAttribute("src", "matrix.png");
            matrixPic.setAttribute("width", "200");
            matrixPic.setAttribute("height", "228");
            matrixPic.setAttribute("alt", "Farrah's Matric Pic");
            let divOfPic = document.getElementById('pic')
            divOfPic.appendChild(matrixPic);
            let plainPic = document.getElementById('plain-pic')
            plainPic.style.display = 'none'
        //   document.getElementById('name').style.color = 'white'
        //     document.getElementById('title').style.color = 'white'
        //     document.getElementById('pursuit').style.color = 'white'
            

     }
       
    })
    
    
  



