$(function () {
  $(".accordeon dd").hide().prev().click(function () {
    $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $("dl").removeClass("open");
    $(this).parent().toggleClass("open");
  });

  $(".header__btn").on("click", function () {
    $(".menu").addClass("active");
    $("body").addClass("lock");
  });

  $(".menu__close").on("click", function () {
    $(".menu").removeClass("active");
    $("body").removeClass("lock");
  });

});

//header
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var headerOffset = header.offsetTop;
  var scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > headerOffset + 100) {
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});

var swiper = new Swiper(".about__swiper", {
  slidesPerView: 1.6,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

var swiper = new Swiper(".events__swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener('scroll', function() {
  var darkSections = document.querySelectorAll('[data-theme="dark"]');
  var scrollPosition = window.scrollY;

  darkSections.forEach(function(darkSection) {
      var sectionTop = darkSection.getBoundingClientRect().top + window.scrollY;
      var sectionBottom = sectionTop + darkSection.offsetHeight;
      var triggerPositionTop = sectionTop - 200; // Початкова позиція тригера
      var triggerPositionBottom = sectionBottom; // Кінцева позиція тригера

      if (scrollPosition >= triggerPositionTop && scrollPosition <= triggerPositionBottom) {
          document.body.setAttribute('data-current-theme', 'dark');
      } else {
          document.body.removeAttribute('data-current-theme');
      }
  });
});

var number1 = document.querySelector('.num1'),
  number1Top = number1.getBoundingClientRect().top,
  start = +number1.innerHTML,
  end = +number1.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number1Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number1.innerHTML = ++start;
      if (start == end) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number2 = document.querySelector('.num2'),
  number2Top = number2.getBoundingClientRect().top,
  start2 = +number2.innerHTML,
  end2 = +number2.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number2Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number3 = document.querySelector('.num3'),
  number3Top = number3.getBoundingClientRect().top,
  start3 = +number3.innerHTML,
  end3 = +number3.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number3Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number3.innerHTML = ++start3;
      if (start3 == end3) {
        clearInterval(interval);
      }
    }, 5);
  }
});

var number4 = document.querySelector('.num4'),
  number4Top = number4.getBoundingClientRect().top,
  start4 = +number4.innerHTML,
  end4 = +number4.dataset.max;

window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > number4Top - window.innerHeight / 1.2) {
    this.removeEventListener('scroll', onScroll);
    var interval = setInterval(function () {
      number4.innerHTML = ++start4;
      if (start4 == end4) {
        clearInterval(interval);
      }
    }, 5);
  }
});