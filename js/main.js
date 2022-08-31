"use strict";

document.addEventListener('DOMContentLoaded', function () {
  //Адаптив
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  var headerMenu = document.querySelector('.header_menu');
  var cloneHeaderMenu = headerMenu.cloneNode(true);
  var mobileMenu = document.createElement('div');
  var mobileMenuContainer = document.createElement('div');
  mobileMenuContainer.classList.add('container');
  mobileMenu.classList.add('mobile_menu');
  mobileMenuContainer.appendChild(cloneHeaderMenu);
  mobileMenu.appendChild(mobileMenuContainer);
  document.body.appendChild(mobileMenu);
  var burgerBtn = document.querySelector('.burger_btn');
  burgerBtn.addEventListener('click', function (e) {
    burgerBtn.classList.toggle('active_menu');

    if (burgerBtn.classList.contains('active_menu')) {
      mobileMenu.style.left = '0';
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'block';
    } else {
      mobileMenu.style.cssText = "left: -400%;\n            transition: 0.3s all;\n            transition-duration: 0.5s;";
      document.body.style.overflow = '';
      overlay.style.display = '';
    }
  });
  var liList = mobileMenu.querySelectorAll('li');
  liList.forEach(function (item) {
    if (item.children.length > 1) {
      item.classList.add('toggle_sub_menu');
      item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        item.classList.toggle('show_submenu');
      });
      var subLi = item.querySelectorAll('li');
      subLi.forEach(function (i) {
        if (i.children.length > 1) {
          i.classList.add('toggle_sub_menu');
          i.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            i.classList.toggle('show_submenu_2');
          });
        }
      });
    }
  });
  var toggleForm = document.querySelector('#toggle_form');
  var formChild = document.querySelector('.form_child');
  var formAdult = document.querySelector('.form_adult');
  var step = 0; //Переменная для проверки вывода всплываши с ошибкой

  var isError = false;
  toggleForm.addEventListener('click', function () {
    toggleForm.classList.toggle('adult');

    if (toggleForm.classList.contains('adult')) {
      formAdult.style.display = 'block';
      formChild.style.display = 'none';
    } else {
      formAdult.style.display = 'none';
      formChild.style.display = 'block';
    }
  });

  function closeElement(btnClass, elementClass) {
    var element = document.querySelector(elementClass);
    var btn = element.querySelector(btnClass);
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      element.classList.remove('active');
      document.body.style.overflow = '';
      element.style.cssText = "";
      step = 0;
      var popup_mess = element.querySelector('.popup_mess').style.display = 'block';
      var mess = element.querySelector('.result_mess');
      mess.style.display = 'none';
    });
  }

  closeElement('.btn_close', '.popup'); //stepsForm

  try {
    var popup = document.querySelector('.popup');
    var popupMess = popup.querySelector('.popup_mess');
    var resultMess = popup.querySelector('.result_mess');
    var btnNextStep = popup.querySelector('.next_step');
    btnNextStep.addEventListener('click', function (e) {
      e.preventDefault();
      step++;

      if (step > 0) {
        popupMess.style.display = 'none';
        resultMess.style.display = 'block';

        if (isError === true) {
          popup.classList.add('error');
          popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        display: block;\n                        background: #FFF url(./assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;\n                    ";
        } else {
          popup.classList.remove('error');
          popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        display: block;\n                        background: #FFF url(./assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;\n                    ";
        }
      }
    });
    var toggleFormWrapper = document.querySelector('.toggle_form');
    var btnsFormsTrigger = toggleFormWrapper.querySelectorAll('.form_submit');
    console.log(btnsFormsTrigger);
    btnsFormsTrigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        popup.style.display = 'block';
      });
    });
  } catch (e) {
    console.error(e);
  }
});
//# sourceMappingURL=main.js.map
