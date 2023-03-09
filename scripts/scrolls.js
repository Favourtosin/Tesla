// import { pointer } from "./CarsInfo.js";

const obsOpt = {
  root: null,
  threshold: 0.4,
};

//section-content disapear
const pointer = document.querySelector('.pointer')
export const sectionContent = document.querySelector(".section-content");
const footerSection = document.querySelector(".footer");
const textReplaced = "";
const m = document.querySelector('.section')
const sectionAll = document.querySelectorAll(".section");
const prodModel = document.querySelector(".model-cta h1");
sectionAll.forEach((section) => {
  const observer = new IntersectionObserver(function (entries, obsOpt) {
    entries.forEach((entry) => {
      const to = document.querySelector("#" + entry.target.id);

      if (!entry.isVisible) {
        sectionContent.classList.toggle("disapear");
      }
      if (entry.isIntersecting) {
// alert('pointer')
      }
      if (section.id == "section1") {
     pointer.classList.add('p-remove')
        return (prodModel.textContent = "Model Y");
       
      }
      if (section.id == "section2") {
//  pointer.style.opacity = 0;
pointer.classList.add('p-remove')
        return (prodModel.textContent = "Solar house");
      }
      if (section.id == "section3") {
        pointer.classList.remove('p-remove')
        return (prodModel.textContent = "Model S");
      }
      if (section.id == "section4") {
        pointer.classList.add('p-remove')
        // pointer.classList.remove('p-remove')
        return (prodModel.textContent = "Solar Panels");
      }
      if (!entry.isIntersecting) {
        // console.log("y");
      }
    });
  }, obsOpt);
  observer.observe(section);
});

//6:20

const footerOpt = {
  root: null,
  threshold: 0.1,
};
const observeFooter = new IntersectionObserver(function (enteries, footerOpt) {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      sectionContent.style.height = "22rem";
      sectionContent.style.transiton = "1s ease-in";
    }
    if (!entry.isIntersecting) {
      sectionContent.style.height = "100vh";
    }
  });
});
observeFooter.observe(footerSection);

window.addEventListener("resize", function(event) {
const a = document.body.clientWidth;
// console.log(a);
//removing desktop  class for images.
if (a == 511 ) {

  
  // console.log('Here is the spot');
}

// removing desktop classs
if (a == 559) {
  
}

  // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
})
