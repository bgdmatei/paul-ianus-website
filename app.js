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

  const menu = document.querySelector(".menu");
  const menuLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const contact = document.querySelector(".contact");
  const social = document.querySelector(".social");
  const logo = document.querySelector(".logo");

  const tl = new TimelineMax({ paused: true, reversed: true });

  tl.to(navOpen, 1, { y: 0 })
    .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.3")
    .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.5")
    .fromTo(logo, 0.2, { color: "white" }, { fill: "black" }, "-=1.2")
    .fromTo(menuLines, 0.2, { stroke: "white" }, { stroke: "black" }, "-=1.2");

  menu.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
}

init();
