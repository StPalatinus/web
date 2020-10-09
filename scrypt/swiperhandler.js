var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    paginationClickable : true,
        loop : true,
        effect : 'fade',
        autoplay : 3500,
        autoplayDisableOnInteraction : false
  },
});

