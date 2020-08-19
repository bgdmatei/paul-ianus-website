// const writing = document.querySelectorAll("#main-text path");

// for (let i = 0; i < writing.length; i++) {
//   console.log(`Letter ${i} is ${writing[i].getTotalLength()}`);
// }

function init() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");

  //Tracker
  let current = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      changeDots(this);
      nextSlide(index);
    });
  });

  function changeDots(dot) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
  }
}

init();
