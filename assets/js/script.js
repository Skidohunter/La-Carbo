let nav = document.querySelector("#navTuning")
let stopbtn = document.getElementById("anim")
let h1 = document.querySelector(".h1Anim")
document.addEventListener('click', anim)


function anim(){
    nav.classList.toggle('headerBg');
    h1.classList.toggle('h1Anim')
}
