$((function () {
    $(".accordeon dd").hide().prev().click((function () {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active"), $(this).next().not(":visible").slideDown().prev().addClass("active"), $("dl").removeClass("open"), $(this).parent().toggleClass("open")
      })), $(".header__btn").on("click", (function () {
        $(".menu").addClass("active"), $("body").addClass("lock")
      })), $(".menu__close").on("click", (function () {
        $(".menu").removeClass("active"), $("body").removeClass("lock")
      })), $(".place__dot-btn").on("click", (function () {
        $(".place__dot").removeClass("active"), $(this).parent().addClass("active")
      })), $(".place__item-close").on("click", (function () {
        $(".place__dot").removeClass("active")
      })), $(window).width() <= 1200 && ($(".place__dot-btn").on("click", (function () {
        $("body").addClass("lock")
      })), $(".place__item-close").on("click", (function () {
        $("body").removeClass("lock")
      }))),


      // Клік за межами блоку place__item-box
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

    /*start play video===========*/
    $(".video__inner").on("click", function () {
      $(this).addClass("play");
    });

    $(".video__inner").click(function () {
      var videoIframe = $(this).find(".video__bg");
      var videoSrc = videoIframe.attr("src");
      videoIframe.attr("src", videoSrc + "?autoplay=1");
    });

    /*end play video===========*/

    $('.infrastructure__inner').each(function () {
      let ths = $(this);
      ths.find('.infrastructure__item').not(':first').hide();
      ths.find('.infrastructure__tab').click(function () {
        ths.find('.infrastructure__tab').removeClass('active').eq($(this).index()).addClass('active');
        ths.find('.infrastructure__item').hide().eq($(this).index()).fadeIn()
      }).eq(0).addClass('active');
    });


  })),



  window.addEventListener("scroll", (function () {
    var e = document.querySelector("header"),
      n = e.offsetTop;
    (window.scrollY || window.pageYOffset) > n + 100 ? e.classList.add("sticky") : e.classList.remove("sticky")
  }));
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
  }
});
window.addEventListener("scroll", (function () {
  var e = document.querySelectorAll('[data-theme="dark"]'),
    n = window.scrollY;
  e.forEach((function (e) {
    var t = e.getBoundingClientRect().top + window.scrollY,
      r = t + e.offsetHeight;
    n >= t - 200 && n <= r ? document.body.setAttribute("data-current-theme", "dark") : document.body.removeAttribute("data-current-theme")
  }))
}));


/*start animation========*/
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
/*end animation========*/

swiper = new Swiper(".datte__slider", {
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
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});
swiper = new Swiper(".ttime__slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: !0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    },
    1200: {
      slidesPerView: 1.4
    }
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
  }
});

var swiper = new Swiper(".plan__slider-side", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",

});
var swiper2 = new Swiper(".plan__slider", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

var swiper = new Swiper(".plan__slider-side2", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",

});
var swiper2 = new Swiper(".plan__slider2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});
var swiper = new Swiper(".plan__slider-side3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",

});
var swiper2 = new Swiper(".plan__slider3", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
});

swiper = new Swiper(".infrastructure__swiper", {
  slidesPerView: 1,
  centeredSlides: !0,
  loop: !0,
  effect: "fade",
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

swiper = new Swiper(".project__slider", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: !0,
  autoplay: {
    delay: 5e3,
    disableOnInteraction: !1
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 5
    }
  }
});

window.addEventListener('DOMContentLoaded', function () {
  var swiper;

  function initSwiper() {
    if (window.innerWidth < 992 && !swiper) {
      swiper = new Swiper('.resident__swiper', {
        loop: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else if (window.innerWidth >= 992 && swiper) {
      swiper.destroy();
      swiper = undefined;
    }
  }

  initSwiper(); // Ініціалізуємо слайдер при завантаженні сторінки

  window.addEventListener('resize', function () {
    initSwiper(); // Перевіряємо розмір вікна під час зміни розміру
  });
});




// var swiper = new Swiper(".resident__swiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });