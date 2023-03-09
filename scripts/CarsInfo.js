const Prod = function (
  Model,
  img,
  id
) {
  this.Model = Model;

  this.img = img;
  this.id = id;
};

export const pointer = document.querySelector('.pointer');
const html = `
<section class="section">
  <svg
    class="pointer"
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    width="48"
  >
    <path d="M4 40 24.05 8 44 40Z" />
  </svg>
</section>`;
const sectionContent = document.querySelector(".section-content");
const Products = {
  roll: [
    [new Prod("Model 3", "./Imgs/car1-Homepage-Mobile-LHD.png", 'section1')],
    [new Prod("Model S", "./Imgs/car2-mobile.png", "section2")],
    [new Prod("Model Y", "./Imgs/car3-Model-X-Mobile-LHD.png", 'section3')],
    [new Prod("Solar Panel", "./Imgs/Homepage-SolarRoof-Mobile-Global.png", 'section4'), ],
  ],
  rollD: [
    [new Prod("Model 3", "./Imgs/car1-Homepage-Mobile-LHD.png", 'section1')],
    [new Prod("Model S", "./Imgs/car2-mobile.png", "section2")],
    [new Prod("Model Y", "./Imgs/car3-Model-X-Mobile-LHD.png", 'section3')],
    [new Prod("Solar Panel", "./Imgs/Homepage-SolarRoof-Mobile-Global.png", 'section4'), ],

  ]
};

for (let i = 0; i < Products.roll.length; i++) {

  sectionContent.insertAdjacentHTML(
    "afterend",

    `
<section class="section sectionly" id= ${Products.roll[i][0].id} style="background: url(${`./Imgs/img${i}.png`});  background-position: center;
background-repeat: no-repeat;                   
background-size: cover;">
  <svg
    class="pointer"
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    width="48"
  >
    <path d="M4 40 24.05 8 44 40Z" />
  </svg>
  </section>
  `
  );
}
