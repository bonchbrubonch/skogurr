$(function () {
    $(".accordeon dd")
      .hide()
      .prev()
      .click(function () {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active"), $(this).next().not(":visible").slideDown().prev().addClass("active"), $("dl").removeClass("open"), $(this).parent().toggleClass("open");
      }),
      $(".header__btn").on("click", function () {
        $(".menu").addClass("active"), $("body").addClass("lock");
      }),
      $(".menu__close").on("click", function () {
        $(".menu").removeClass("active"), $("body").removeClass("lock");
      }),
      $(".place__dot-btn").on("click", function () {
        $(".place__dot").removeClass("active"), $(this).parent().addClass("active");
      }),
      $(".place__item-close").on("click", function () {
        $(".place__dot").removeClass("active");
      }),
      $(window).width() <= 1200 &&
      ($(".place__dot-btn").on("click", function () {
          $("body").addClass("lock");
        }),
        $(".place__item-close").on("click", function () {
          $("body").removeClass("lock");
        }));
  }),
  window.addEventListener("scroll", function () {
    var e = document.querySelector("header"),
      n = e.offsetTop;
    (window.scrollY || window.pageYOffset) > n + 100 ? e.classList.add("sticky") : e.classList.remove("sticky");
  });
var swiper = new Swiper(".about__swiper", {
  slidesPerView: 1.6,
  spaceBetween: 15,
  centeredSlides: !0,
  loop: !0,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});
swiper = new Swiper(".events__swiper", {
  slidesPerView: 1,
  centeredSlides: !0,
  loop: !0,
  effect: "fade",
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
// window.addEventListener("scroll", function () {
//   var e = document.querySelectorAll('[data-theme="dark"]'),
//     n = window.scrollY;
//   e.forEach(function (e) {
//     var t = e.getBoundingClientRect().top + window.scrollY,
//       r = t + e.offsetHeight;
//     n >= t - 200 && n <= r ? document.body.setAttribute("data-current-theme", "dark") : document.body.removeAttribute("data-current-theme");
//   });
// });
// var number1 = document.querySelector(".num1"),
//   number1Top = number1.getBoundingClientRect().top,
//   start = +number1.innerHTML,
//   end = +number1.dataset.max;
// window.addEventListener("scroll", function e() {
//   if (window.pageYOffset > number1Top - window.innerHeight / 1.2) {
//     this.removeEventListener("scroll", e);
//     var n = setInterval(function () {
//       (number1.innerHTML = ++start), start == end && clearInterval(n);
//     }, 5);
//   }
// });
// var number2 = document.querySelector(".num2"),
//   number2Top = number2.getBoundingClientRect().top,
//   start2 = +number2.innerHTML,
//   end2 = +number2.dataset.max;
// window.addEventListener("scroll", function e() {
//   if (window.pageYOffset > number2Top - window.innerHeight / 1.2) {
//     this.removeEventListener("scroll", e);
//     var n = setInterval(function () {
//       (number2.innerHTML = ++start2), start2 == end2 && clearInterval(n);
//     }, 5);
//   }
// });
// var number3 = document.querySelector(".num3"),
//   number3Top = number3.getBoundingClientRect().top,
//   start3 = +number3.innerHTML,
//   end3 = +number3.dataset.max;
// window.addEventListener("scroll", function e() {
//   if (window.pageYOffset > number3Top - window.innerHeight / 1.2) {
//     this.removeEventListener("scroll", e);
//     var n = setInterval(function () {
//       (number3.innerHTML = ++start3), start3 == end3 && clearInterval(n);
//     }, 5);
//   }
// });
// var number4 = document.querySelector(".num4"),
//   number4Top = number4.getBoundingClientRect().top,
//   start4 = +number4.innerHTML,
//   end4 = +number4.dataset.max;

function onEntry(e) {
  e.forEach((e) => {
    e.isIntersecting ? e.target.classList.add("element-show") : e.target.classList.remove("element-show");
  });
}
window.addEventListener("scroll", function e() {
  if (window.pageYOffset > number4Top - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", e);
    var n = setInterval(function () {
      (number4.innerHTML = ++start4), start4 == end4 && clearInterval(n);
    }, 5);
  }
});
let options = {
    threshold: [0.5]
  },
  observer = new IntersectionObserver(onEntry, options),
  elements = document.querySelectorAll(".element-animation");
for (let e of elements) observer.observe(e);




$(function () {

  $('body').on('click', function (event) {
    if (!$(event.target).closest('.place__item-box').length) {
      $('.place__dot').removeClass('active');
      $('body').removeClass('lock');
    }
  });

  // Клік на блок place__dot-btn
  $('.place__dot-btn').on('click', function (event) {
    event.stopPropagation(); // Зупиняємо подальше поширення події
    $('.place__dot').removeClass('active'); // Прибираємо клас active у всіх блоків place__dot
    $(this).closest('.place__dot').addClass('active'); // Додаємо клас active батькові блоку place__dot-btn
    // $('body').addClass('lock');
  });
});


var swiper = new Swiper(".datte__slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: !0,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {

    767: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".ttime__slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: !0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {

    767: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1.4,
    },
  }
});

swiper = new Swiper(".gallerry__swiper", {
  slidesPerView: 1,
  centeredSlides: !0,
  loop: !0,
  effect: "fade",
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});