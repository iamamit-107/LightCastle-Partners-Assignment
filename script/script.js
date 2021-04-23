$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
        },
      },
    ],
  });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });

  $(".client-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinity: true,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  });

  $("#service-btn").click(function () {
    $("html, body").animate({
      scrollTop: $("#service").offset().top,
    });
  });
  $("#featured-btn").click(function () {
    $("html, body").animate({
      scrollTop: $("#feature").offset().top,
    });
  });
  $("#client-btn").click(function () {
    $("html, body").animate({
      scrollTop: $("#client").offset().top,
    });
  });

  //
});

window.addEventListener("scroll", function () {
  let v = document.querySelector(".navbar-container");
  v.classList.toggle("container", window.scrollY < 200);
  v.classList.toggle("hide-class", window.scrollY > 200);
  // v.classList.add("container", window.scrollY < 100);
});
