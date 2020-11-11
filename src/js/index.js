'use strict';
import Swiper, { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Keyboard]);
import '../scss/style.scss';
import './buttons_and_modals/buttons_and_modals.js'

window.onload = function() {

const breakpoint500 = window.matchMedia( '(min-width:500px)' );
const breakpoint768 = window.matchMedia( '(min-width:768px)' );

let   brandsSwiper;
let   repairSwiper;
let   pricesSwiper;

const breakpointChecker500 = function() {
   
   if ( breakpoint500 .matches === true ) {
      
      if ( brandsSwiper !== undefined ) brandsSwiper.destroy( true, true );
      if ( repairSwiper !== undefined ) repairSwiper.destroy( true, true );
      
      return;
   
   } else if ( breakpoint500 .matches === false ) {
      
      return enableSwiper(true, true, false);
   }
};

const breakpointChecker768 = function() {
   
    if ( breakpoint768 .matches === true ) {
       
       if ( pricesSwiper !== undefined ) pricesSwiper.destroy( true, true );
       
       return;
    
    } else if ( breakpoint768 .matches === false ) {
       
       return enableSwiper(false, false, true);
    }
 };

const enableSwiper = function(brands, repair, prices) {
    if ( brands === true ) {
        brandsSwiper = new Swiper('.brands__swiper-container', {
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: "auto",
        updateOnWindowResize: true,
        preventClicksPropagation: true,
        loop: true,
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            paginationClickable : true,
            effect : 'fade',
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
    }
    if ( repair === true ) {
        repairSwiper = new Swiper ('.repairable-devices__swiper-container',  {
        direction: 'horizontal',
        effect: 'slide',
        slidesPerView: "auto",
        updateOnWindowResize: true,
        preventClicksPropagation: true,
        loop: true,
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            paginationClickable : true,
            effect : 'fade',
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
    }
    if ( prices === true ) {   
        pricesSwiper = new Swiper('.prices__swiper-container', {
            direction: 'horizontal',
            effect: 'slide',
            slidesPerView: "auto",
            updateOnWindowResize: true,
            preventClicksPropagation: true,
            loop: true,
            initialSlide: 0,
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                paginationClickable : true,
                effect : 'fade',
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
        };
    }

breakpoint500.addListener(breakpointChecker500);
breakpoint768.addListener(breakpointChecker768);

breakpointChecker500();
breakpointChecker768();

};