/*adding cards dynamically to webpage*/
const featuredCards = document.querySelector(".featuredCards");
let clientSize;
let xAxis;
let yAxis;
const shoes = [
  {
    src: "style/nikeAirForce.png",
    imgWidth: " 120px",
    title: "Air Force",
    description: "The definition of smart casual",
  },
  {
    src: "style/nikeBobMarley.png",
    imgWidth: "160px",
    title: "B.Marley",
    description: "For those too cool for school",
  },
  {
    src: "style/nikeYeezy.png",
    imgWidth: "120px",
    title: "Yeezy",
    description: "Back to the Future special",
  },
];

const addFeaturedShoes = function () {
  for (let i = 0; i < shoes.length; i++) {
    featuredCards.insertAdjacentHTML(
      "beforeend",
      `<div class="featuredCardContainer">
                <div class="featuredCard">
                <figure class="circleImage"></figure>
                <figure class="shoeImage">
                    <img src="${shoes[i].src}" alt="" width="${shoes[i].imgWidth}" />
                </figure>
                    <h5>${shoes[i].title}</h5>
                    <p>${shoes[i].description}</p>
                <form class="featuredSizingForm">
                    <p>Select your Size</p>
                    <div class="sizingRadioButtons">
                    <div class="radioButtonAndLabel">
                        <input type="radio" name="sizing" value="9" />9
                    </div>
                    <div class="radioButtonAndLabel">
                        <input type="radio" name="sizing" value="10" />10
                    </div>
                    <div class="radioButtonAndLabel">
                        <input type="radio" name="sizing" value="11" />11
                    </div>
                    <div class="radioButtonAndLabel">
                        <input type="radio" name="sizing" value="12" />12
                    </div>
                    <div class="radioButtonAndLabel">
                        <input type="radio" name="sizing" value="13" />13
                    </div>
                    </div>
                    <button type="submit" class="addToCart">Add to Cart</button>
                </form>
            </div>
          </div>`
    );
  }
};

addFeaturedShoes();

/*adding card rotation animation*/
const card = document.querySelectorAll(".featuredCard");
const container = document.querySelectorAll(".featuredCardContainer");

/*Moving animation event*/
container.forEach((value) =>
  value.addEventListener("mousemove", function (e) {
    clientSize = value.getBoundingClientRect();
    xAxis = (clientSize.width / 2 + clientSize.x - e.pageX) / 5;
    yAxis = (clientSize.height / 2 - e.pageY) / 50;
    value.firstElementChild.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  })
);

container.forEach((value) =>
  value.addEventListener("mouseenter", () => {
    value.firstElementChild.style.transition = "none";
    value.querySelector("h5").style.transform = "translateZ(50px)";
    value.querySelector("p").style.transform = "translateZ(40px)";
    value.querySelector(".shoeImage").style.transform =
      "translateZ(60px) rotate(-45deg)";
    value.querySelector(".featuredSizingForm").style.transform =
      "translateZ(40px)";
  })
);

container.forEach((value) =>
  value.addEventListener("mouseleave", () => {
    value.firstElementChild.style.transform = `rotateY(0deg) rotateX(0deg)`;
    value.firstElementChild.style.transition = `all 0.5s ease`;
    value.querySelector("h5").style.transform = "translateZ(0)";
    value.querySelector("p").style.transform = "translateZ(0)";
    value.querySelector(".shoeImage").style.transform = "translateZ(0)";
    value.querySelector(".featuredSizingForm").style.transform =
      "translateZ(0)";
  })
);
