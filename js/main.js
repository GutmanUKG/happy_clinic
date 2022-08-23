"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var toggleForm = document.querySelector('#toggle_form');
  var formChild = document.querySelector('.form_child');
  var formAdult = document.querySelector('.form_adult');
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
    });
  }

  closeElement('.btn_close', '.popup'); //stepsForm

  try {
    var popup = document.querySelector('.popup');
    var popupMess = popup.querySelector('.popup_mess');
    var resultMess = popup.querySelector('.result_mess');
    var btnNextStep = popup.querySelector('.form_submit');
    var step = 0;
    var btnToggleBoll = popup.querySelector('.btn_toggle_boll'); //Переменная для проверки вывода всплываши с ошибкой

    var isError = false;
    btnNextStep.addEventListener('click', function (e) {
      e.preventDefault();
      step++;

      if (step > 0) {
        popupMess.style.display = 'none';
        resultMess.style.display = 'block';

        if (isError === true) {
          popup.classList.add('error');
          popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;\n                    ";
        } else {
          popup.classList.remove('error');
          popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;\n                    ";
        }
      }
    });
    btnToggleBoll.addEventListener('click', function () {
      isError = !isError;

      if (isError === true) {
        popup.classList.add('error');
        popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_error.png) right/contain no-repeat;\n                    ";
      } else {
        popup.classList.remove('error');
        popup.style.cssText = "\n                        width: 736px;\n                        height: 334px;\n                        background: #FFF url(../assets/imgs/optimize_imgs/popup_bg_check.png) right/contain no-repeat;\n                    ";
      }
    });
  } catch (e) {
    console.error(e);
  }
});
//# sourceMappingURL=main.js.map
