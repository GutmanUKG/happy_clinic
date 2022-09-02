"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var owlItem = /*#__PURE__*/function () {
    function owlItem() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, owlItem);

      this.element = document.querySelector(element);
      this.options = options;
    }

    _createClass(owlItem, [{
      key: "init",
      value: function init() {
        this.element.classList.add('owl-carousel');
        this.element.classList.add('owl-theme');
        $(this.element).owlCarousel(_objectSpread({}, this.options));
      }
    }]);

    return owlItem;
  }();

  var sliceText = /*#__PURE__*/function () {
    function sliceText() {
      var elementWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

      _classCallCheck(this, sliceText);

      this.elementWrapper = document.querySelector(elementWrapper);
      this.text = this.elementWrapper.querySelectorAll(text);
      this.size = size;
    }

    _createClass(sliceText, [{
      key: "slice",
      value: function slice() {
        var _this = this;

        this.text.forEach(function (item) {
          if (item.textContent.length > _this.size) {
            item.textContent = item.textContent.slice(0, _this.size) + '...';
          }
        });
      }
    }]);

    return sliceText;
  }(); //adv_list_item


  var advListItem = new owlItem('.adv_list_item', {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1.3
      },
      600: {
        items: 1.5
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  advListItem.init(); //Наша команда

  var teamList = new owlItem('.team_list', {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1.3
      },
      600: {
        items: 1.5
      },
      768: {
        items: 2
      },
      1024: {
        items: 4
      }
    }
  });
  teamList.init();
  var teamItem = new sliceText('.team_list', '.text', 90);
  teamItem.slice(); //
  //список услуг

  var servicesList = new owlItem('.services_list', {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1.2
      },
      600: {
        items: 1.5
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }); //Адаптив

  if (document.body.clientWidth < 1024) {
    servicesList.init();
    var servicesListItemText = new sliceText('.services_list', '.descr', 90);
    servicesListItemText.slice();
  } else {
    var _servicesListItemText = new sliceText('.services_list', '.descr', 150);

    _servicesListItemText.slice();
  } //
  //Бургер подложка


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
  }); //
  //Форма

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
