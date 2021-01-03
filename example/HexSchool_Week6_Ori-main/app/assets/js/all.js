console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

(function () {
  $(document).ready(function () {
    // header menu Mobile
    $(".header .box").on("click", function () {
      $(".header .menu").slideToggle();
    });
    // alert message
    $(".collection").on("click", function (e) {
      e.preventDefault();
      $(this).addClass("active");
      $(".collect-added").fadeIn();
    });
    $(".collect-added").on("click", function () {
      $(this).fadeOut();
    });
    $(".submition").on("click", function (e) {
      e.preventDefault();
      $(".cart-added").fadeIn();
    });
    $(".cart-added").on("click", function () {
      $(this).fadeOut();
    });
  });
})();
