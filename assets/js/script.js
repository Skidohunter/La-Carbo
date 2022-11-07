let nav = document.querySelector("#navTuning");
let stopbtn = document.getElementById("anim");
let h1 = document.querySelector("h1");
let imgNav = document.getElementById("imgNav");
let imgNav2 = document.getElementById("imgNav2");
document.addEventListener('click', anim);


function anim(){
    nav.classList.toggle('headerBg');
    h1.classList.toggle('h1Anim');
    imgNav.classList.toggle('displayNone');
    imgNav2.classList.toggle('displayNone');
    
}
