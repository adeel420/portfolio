var typed = new Typed('#element', {
    strings: ['Video Editor','a Web Developer.'],
    typeSpeed: 50,
});

function tabClick(tabName){
    let tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
btn1.addEventListener("click", function run(){
    btn1.style.borderBottom = "2px solid #ff004f"
    btn1.style.color = "#ff004f"
    btn1.style.left = "0"
    btn1.style.transition = "ease .4s"
    btn1.style.paddingBottom = "5px"
    btn2.style.borderBottom = "none"
    btn2.style.color = "gray"
    btn2.style.left = "0"
    btn2.style.transition = "ease .4s"
    btn3.style.borderBottom = "none"
    btn3.style.color = "gray"
    btn3.style.left = "0"
    btn3.style.transition = "ease .4s"
})
btn2.addEventListener("click", function run(){
    btn2.style.borderBottom = "2px solid #ff004f"
    btn2.style.color = "#ff004f"
    btn2.style.left = "0"
    btn2.style.transition = "ease .4s"
    btn2.style.paddingBottom = "5px"
    btn1.style.borderBottom = "none"
    btn1.style.color = "gray"
    btn1.style.left = "0"
    btn1.style.transition = "ease .4s"
    btn3.style.borderBottom = "none"
    btn3.style.color = "gray"
    btn3.style.left = "0"
    btn3.style.transition = "ease .4s"
})
btn3.addEventListener("click", function run(){
    btn3.style.borderBottom = "2px solid #ff004f"
    btn3.style.color = "#ff004f"
    btn3.style.paddingBottom = "5px"
    btn3.style.left = "0"
    btn3.style.transition = "ease .4s"
    btn2.style.borderBottom = "none"
    btn2.style.color = "gray"
    btn2.style.left = "0"
    btn2.style.transition = "ease .4s"
    btn1.style.borderBottom = "none"
    btn1.style.color = "gray"
    btn1.style.left = "0"
    btn1.style.transition = "ease .4s"
})

let container = document.querySelectorAll('.container')
container.forEach(cont => {
    cont.addEventListener('mouseenter', function run(){
        cont.style.backgroundColor = "#ff004f"
    })
    cont.addEventListener('mouseleave', function run(){
        cont.style.backgroundColor = 'rgb(35, 35, 35)'
    })
})

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let container1 = document.querySelector(".container1")
let container2 = document.querySelector(".container2")
let container3 = document.querySelector(".container3")

img1.addEventListener("mouseenter", function run(){
    container1.style.display = "block"
})
img1.addEventListener("mouseleave", function run(){
    container1.style.display = "none"
})

img2.addEventListener("mouseenter", function run(){
    container2.style.display = "block"
})
img2.addEventListener("mouseleave", function run(){
    container2.style.display = "none"
})

img3.addEventListener("mouseenter", function run(){
    container3.style.display = "block"
})
img3.addEventListener("mouseleave", function run(){
    container3.style.display = "none"
})