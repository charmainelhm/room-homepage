const featureText = {
  slide1: {
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combined form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  slide2: {
    title: "We are available all across the globe",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  slide3: {
    title: "Manufactured with the best materials",
    content:
      "Our moden furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible, With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
};

const featureDiv = document.querySelector(".feature");
const slidePhoto = document.querySelector(".feature__gallery > picture");
const slideButtons = document.querySelectorAll(".feature__controller > button");
const slideTitle = document.querySelector(".feature__content > h1");
const slideInfo = document.querySelector(".feature__content > p");

const updateSlideContent = function () {
  let currentSlide = featureDiv.dataset.slide;
  slidePhoto.innerHTML = `
  <source
  srcset="images/desktop-image-hero-${currentSlide}.jpg"
  media=" (min-width: 600px)"
/>
<img
  src="images/mobile-image-hero-${currentSlide}.jpg"
  srcset="
    images/mobile-image-hero-${currentSlide}.jpg,
    images/desktop-image-hero-${currentSlide}.jpg
  "
  alt="Room with dining furniture"
/>
`;

  slideTitle.innerText = featureText[`slide${currentSlide}`].title;
  slideInfo.innerText = featureText[`slide${currentSlide}`].content;
};

const updateSlideNum = function (btnClicked) {
  let currentSlide = featureDiv.dataset.slide;
  if (btnClicked === "prev-slide") {
    currentSlide--;
  } else currentSlide++;

  if (currentSlide < 1 || currentSlide > 3) return;
  featureDiv.dataset.slide = currentSlide;

  updateSlideContent();
};

slideButtons.forEach((button) => {
  button.addEventListener("click", function () {
    updateSlideNum(button.id);
  });
});
