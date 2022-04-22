let burGer = document.querySelector(".burger");
let navBar = document.querySelector("#head_container");
let navList = document.querySelector("#list-container");
let menulogo = document.querySelector(".bx-x-v");
let hideMenu = document.querySelector("#btn");
function showlists(){
    navList.classList.toggle("list-show");
    navBar.classList.toggle("h-inc-icon");
    menulogo.classList.toggle("bx-show");
    hideMenu.classList.toggle("bx-y-v");

}