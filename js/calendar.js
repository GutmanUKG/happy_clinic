"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var days_list = document.querySelector('.days_list');
  var colums = days_list.querySelectorAll('.day_date');
  var days = [];
  var loader = document.querySelector('#loader');
  var isLoad = true;
  var url = "/days.json";
  fetch("".concat(url)).then(function (res) {
    return res.json();
  }).then(function (data) {
    //Функция формирует журнал времени и отлючает лоадер
    renderTime(data);
    isLoad = false;

    if (isLoad == false) {
      loader.style.display = 'none';
    }
  }); //Текущая дата

  var curDate = new Date().getDate();
  var curMonth = new Date().getMonth();

  var date = function () {
    if (curMonth + 1 < 10) {
      curMonth = "0".concat(curMonth + 1);
    } else {
      curMonth = "".concat(curMonth + 1);
    }

    return "".concat(curDate, ".").concat(curMonth);
  }();

  function renderTime(data) {
    for (var i = 0; i < data.length; i++) {
      var dateWrapper = colums[i].querySelector('.date').querySelector('span');

      if (dateWrapper.textContent == data[i].date) {
        //Поиск текущей даты в таблице и добавление к ней класса
        if (dateWrapper.textContent == date) {
          dateWrapper.parentNode.parentNode.classList.add('cur_date');
        } //Обертка для списка времени примема


        var time_wrapper = document.createElement('div');
        time_wrapper.classList.add('time_wrapper');

        for (var c = 0; c < data[i].time.length; c++) {
          //Формирование елемента времени приема
          var time = document.createElement('div');
          time.classList.add('time_item');
          time.innerHTML = "<span>".concat(data[i].time[c].clock, "</span>");
          time_wrapper.appendChild(time); //Выделение свободных часов

          if (data[i].time[c].active == true) {
            time.innerHTML = "<span class=\"active\">".concat(data[i].time[c].clock, "</span>");
            time_wrapper.appendChild(time);
          } //Сортировка по колонкам


          colums[i].appendChild(time_wrapper);
        }
      }
    }
  }

  function selectDay() {
    var dayDays = document.querySelectorAll('.day_date');
    dayDays.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        if (target.classList.contains('date')) {
          clearClass(dayDays, 'cur_date');
          target.parentNode.classList.add('cur_date');
        }
      });
    });
  }

  selectDay();

  function clearClass(elements, activeClass) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove(activeClass);
    }
  }
});
//# sourceMappingURL=calendar.js.map
