// import {modalBackdrop} from "./Menu.js"

export const modalBackdrop = document.querySelector('.backdrop');
export const menuList = document.querySelector('.menu-list')
 modalBackdrop.addEventListener("click", function(e){
e.preventDefault()
modalBackdrop.classList.add('remove-backdrop');
menuList.classList.add('remove-menu')
})
