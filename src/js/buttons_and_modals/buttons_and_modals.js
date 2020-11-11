  'use strict';
  
    const       showText = "Показать все";
    const       hideText = "Скрыть";
    const       readMore = "Читать далее";
    const       hide = "Скрыть";
    const       mobileMenu = document.querySelector('.mobile-menu');
    const       openMenu = document.querySelector('.button--burger');
    const       closeMenu = document.querySelector('.mobile-menu__button--close');
    const       topMenuFeedback = document.querySelector('.header__feedback-button');
    const       mobileMenuFeedback = document.querySelector('.feedback-list__button--chat');
    const       feedbackModal = document.querySelector('.modal__feedback');
    const       feedbackModalClose = document.querySelector('.modal__feedback--close-button');
    const       topMenuCall = document.querySelector('.feedback-list__button--call');
    const       mobileMenuCall = document.querySelector('.mobile-menu__button--call');
    const       callModal = document.querySelector('.modal__call');
    const       callModalClose = document.querySelector('.modal__call--close-button');
    const       body = document.body;
    
    
    function toggleSize (clickedButton, container, toggleClass, toggleText) {
      
      
      if (clickedButton.classList.contains('button__showhide')) {
        container.classList.toggle(toggleClass);
        clickedButton.textContent = clickedButton.classList.toggle(toggleText)
                              ? clickedButton.textContent = hideText 
                              : clickedButton.textContent = showText;
      } if (clickedButton.classList.contains('article__read-more')) {
      container.classList.toggle(toggleClass);
      clickedButton.textContent = clickedButton.classList.toggle(toggleText)
                            ? clickedButton.textContent = hide 
                            : clickedButton.textContent = readMore;
      }
    }

    
    onclick = function (e) {
      
        let clickedButton = e.target;
 
          if (clickedButton.parentNode.classList.contains('brands') && 
          clickedButton.classList.contains('button__showhide')){
              const       container = document.querySelector('.brands__container');
              toggleSize (clickedButton, container, 'brands__container--maximized','showhide__opened');
          } 
          if (clickedButton.parentNode.classList.contains('repairable-devices') && 
          clickedButton.classList.contains('button__showhide')) {
              const       container = document.querySelector('.repairable-devices__wrapper');
              toggleSize (clickedButton, container, 'repairable-devices__wrapper--maximized', 'showhide__opened');
          }
          if (clickedButton.parentNode.classList.contains('article__text') && 
          clickedButton.classList.contains('article__read-more')) {
            const       container = document.querySelector('.article__text--inner');
            toggleSize (clickedButton, container, 'article__text--inner--maximized', 'showhide__opened');
          }
    };

    
    openMenu.onclick = function() {
      mobileMenu.classList.toggle('mobile-menu--visible');
      body.style.position = "fixed";
    }

    closeMenu.onclick = function() {
      mobileMenu.classList.toggle('mobile-menu--visible');
      feedbackModal.classList.remove('modal__feedback--visible');
      callModal.classList.remove('modal__call--visible');
      body.style.position = "initial";
    }



    mobileMenuFeedback.onclick = function () {
      feedbackModal.classList.toggle('modal__feedback--visible');
      callModal.classList.remove('modal__call--visible');
      body.style.position = "fixed";
    }
    
    topMenuFeedback.onclick = function () {
      feedbackModal.classList.toggle('modal__feedback--visible');
      body.style.position = "fixed";
    }

    feedbackModalClose.onclick = function () {
      feedbackModal.classList.toggle('modal__feedback--visible');
      body.style.position = "initial";
    }



    mobileMenuCall.onclick = function () {
      callModal.classList.toggle('modal__call--visible');
      feedbackModal.classList.remove('modal__feedback--visible');
      body.style.position = "fixed";
    }

    topMenuCall.onclick = function () {
      callModal.classList.toggle('modal__call--visible');
      body.style.position = "fixed";
    }

    callModalClose.onclick = function () {
      callModal.classList.toggle('modal__call--visible');
      body.style.position = "initial";
    }