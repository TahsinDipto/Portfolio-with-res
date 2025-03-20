const navUl= document.querySelector(".nav-ul-abs");
const navUlA= document.querySelector(".nav-ul-a");
const navMore= document.querySelector(".nav-more");


navMore.addEventListener("click", ()=>{
    navUl.classList.toggle("nav-ul-click");
})