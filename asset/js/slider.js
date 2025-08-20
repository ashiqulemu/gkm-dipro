$('.Client_testimonials_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<div class="pre_arrows"><iconify-icon icon="icon-park-outline:left"></iconify-icon></div>',
  nextArrow:'<div class="next_arrows"><iconify-icon icon="icon-park-outline:right"></iconify-icon></div>',
});




$('.minislider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  dots:false,
  autoplay:true,
  speed: 300,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


});