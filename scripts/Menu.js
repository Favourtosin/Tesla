const menuBtn = document.querySelector(".menu");
import {sectionContent} from './scrolls.js';
import {modalBackdrop, menuList} from './allClicks.js';
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
modalBackdrop.classList.remove('remove-backdrop');
menuList.classList.remove('remove-menu')
modalBackdrop.classList.remove('remove-backdrop');
menuList.classList.remove('remove-menu')
});
