  'use strict';
    const       showText = "Показать все";
    const       hideText = "Скрыть";
    const       showHide = document.querySelector('.button__showhide');
    const       brandsContainer = document.querySelector('.brands__container');
    
    showHide.onclick = function () {
        brandsContainer.classList.toggle('brands__container--maximized');
        showHide.textContent = showHide.classList.toggle('showhide__opened')
                                ? showHide.textContent = hideText 
                                : showHide.textContent = showText;
    };
    
