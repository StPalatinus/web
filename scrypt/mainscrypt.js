  'use strict';
    const       showText = "Показать все";
    const       hideText = "Скрыть";
    const       showHide = document.querySelector('.button__showhide');
    const       brandsContainer = document.querySelector('.brands__container');
    
    showHide.onclick = function () {
        if (showHide.classList.contains('showhide__opened')) {
            showHide.textContent = showText;
            brandsContainer.classList.remove('brands__container--maximized');
            showHide.classList.remove('showhide__opened');
        } else {
            showHide.textContent = hideText;
            brandsContainer.classList.add('brands__container--maximized');
            showHide.classList.add('showhide__opened');
        }
    };
    
