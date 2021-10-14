$(function(){
    
// Slick Slider Part

$('.purchase-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fa fa-arrow-circle-right next"></i>',
  });

//   Venubox Part

  $('.venobox').venobox();

});