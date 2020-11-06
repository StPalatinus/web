  'use strict';
     window.onload = function() {

    // remove swiper classes on higher resolutions
        
      function toggleSwiperClasses(action) {
          const brandsSwiperContainer = document.querySelector('.brands__swiper-container');
          const brandsContainer = document.querySelector('.brands__container');
          const brands = brandsContainer.querySelectorAll('.brands__thumbnail');
          const brandsPaginatopn = document.querySelector('.brands__pagination');
          
          if(action === ("remove") && brandsSwiperContainer.classList.contains('swiper-container')){
              brandsSwiperContainer.classList.remove('swiper-container');
              brandsContainer.classList.remove('swiper-wrapper');
              for(let i = 0; i < brands.length; i++) {
                  brands[i].classList.remove('swiper-slide');
              }
              brandsPaginatopn.style.display = "none";
          } else if (action === ("add") ) {
              brandsSwiperContainer.classList.add('swiper-container');
              brandsContainer.classList.add('swiper-wrapper');
              for(let i = 0; i < brands.length; i++) {
                  brands[i].classList.add('swiper-slide');
              }
              brandsPaginatopn.style.display = "block";
          }
      }

    //  'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    

    // keep track of swiper instances to destroy later
    let mySwiper;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function() {
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
          
        // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
            toggleSwiperClasses('remove');
      // or/and do nothing
      return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
            
          // fire small viewport version of swiper
          toggleSwiperClasses('add');
          enableSwiper();
          return;
        }

    };
    
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const enableSwiper = function() {

      mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      effect: 'slide',
      updateOnWindowResize: true,
      preventClicksPropagation: true,
      loop: true,
      initialSlide: 0,
      spaceBetween: 16,
    //        centeredSlides: true,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      slidesPerView: 'auto',
      
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

      autoplay: {
          delay: 5500,
        },

      pagination: {
          el: '.swiper-pagination',
      //    dynamicBullets: true,
          paginationClickable : true,
          effect : 'fade',
      //    hideOnClick: true,
          clickable: true,
      },

      keyboard: {
          enabled: true,
          onlyInViewport: false,
          },
          
      mousewheel: {
          invert: true,
      },
    });

    //    mySwiper.slideNext();
      mySwiper.autoplay.start();

    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    //  toggleSwiperClasses();
    breakpointChecker();

  };