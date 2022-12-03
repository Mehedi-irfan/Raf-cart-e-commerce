// swiper js slider script
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// New arrival slider
var swiper = new Swiper(".new_arrival", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1136: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// small pop up slider
var swiper = new Swiper(".smallSlider", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// pop up
const viewBtn = document.querySelector(".quick_view");
const viewBtn2 = document.querySelector(".quick_view2");
const viewBtn3 = document.querySelector(".quick_view3");
const viewBtn4 = document.querySelector(".quick_view4");
const viewBtn5 = document.querySelector(".quick_view5");
const viewBtn6 = document.querySelector(".quick_view6");
const viewBtn7 = document.querySelector(".quick_view7");
const viewBtn9 = document.querySelector(".quick_view9");
const viewBtn10 = document.querySelector(".quick_view10");
const viewBtn11 = document.querySelector(".quick_view11");
const viewBtn12 = document.querySelector(".quick_view12");
const viewBtn13 = document.querySelector(".quick_view13");
const viewBtn14 = document.querySelector(".quick_view14");
const viewBtn15 = document.querySelector(".quick_view15");
const viewBtn16 = document.querySelector(".quick_view16");
const popUp = document.getElementById("pop_up");
const closeBtn = document.getElementById("close");
viewBtn.onclick = () => {
  popUp.classList.remove("hidden");
  console.log("object");
};
closeBtn.onclick = () => {
  popUp.classList.add("hidden");
};
viewBtn2.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn3.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn4.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn5.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn6.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn7.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn8.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn9.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn10.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn11.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn12.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn13.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn14.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn15.onclick = () => {
  popUp.classList.remove("hidden");
};
viewBtn16.onclick = () => {
  popUp.classList.remove("hidden");
};
