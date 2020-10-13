  'use strict';
    const       showText = "Показать все";
    const       hideText = "Скрыть";
    const       showHide = document.querySelector('.showhide');
    const       brandsContainer = document.querySelector('.brands__container');
    
    showHide.onclick = function () {
        if (showHide.classList.contains('showhide__opened')) {
            console.log(showHide.classList);
            showHide.textContent = showText;
            brandsContainer.classList.remove('brands__container--maximized');
            showHide.classList.remove('showhide__opened');
        } else {
            console.log(showHide.classList);
            showHide.textContent = hideText;
            brandsContainer.classList.add('brands__container--maximized');
            showHide.classList.add('showhide__opened');
        }
    };
    
