
/* Loading animation */
$(window).on("load", function () {
  $(".loading").fadeOut(2000)
  $(".main-page").fadeIn(2000)
})
/* Scroll */
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
  if ($(this).scrollTop() > 0) {
    $(".navbar-link").removeClass("active");
    $(".navbar-link:nth-child(1)").addClass("active");
  }
  if ($(this).scrollTop() > 350) {
    $(".navbar-link").removeClass("active");
    $(".navbar-link:nth-child(2)").addClass("active");
  }
  if ($(this).scrollTop() > 1000) {
    $(".navbar-link").removeClass("active");
    $(".navbar-link:nth-child(3)").addClass("active");
  }
  if ($(this).scrollTop() > 1900) {
    $(".navbar-link").removeClass("active");
    $(".navbar-link:nth-child(4)").addClass("active");
  }
  if ($(this).scrollTop() > 2600) {
    $(".navbar-link").removeClass("active");
    $(".navbar-link:nth-child(5)").addClass("active");
  }
});

/* Open in mobile */
$(".navbar-menu_open-btn").on("click", function() {
  $(".navbar-menu").toggleClass("active")
  $(".navbar-menu_open-btn").toggleClass("active")
  $(".navbar-menu_open-btn > i").toggleClass("fa-times")
  $(".main-container").toggleClass("filter")
})
$(".navbar-link > a").on("click", function() {
  $(".navbar-menu").removeClass("active")
  $(".navbar-menu_open-btn").removeClass("active")
  $(".navbar-menu_open-btn > i").removeClass("fa-times")
  $(".main-container").removeClass("filter")
})
/* Scroll to Top */
$(document).scroll(function () {
  if($(window).scrollTop() > 50) {
    $(".scroll_top-btn").addClass("active");
  } else {
    $(".scroll_top-btn").removeClass("active");
  }
})
$(".scroll_top-btn").on("click", function() {
  $(".navbar-menu").removeClass("active")
  $(".navbar-menu_open-btn").removeClass("active")
  $(".navbar-menu_open-btn > i").removeClass("fa-times")
  $(".main-container").removeClass("filter")
})
