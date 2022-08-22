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
});
//# sourceMappingURL=main.js.map
