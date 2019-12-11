var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {

  if (navMain.classList.contains('main-nav--closed')) {

    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }

  else {

    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

try {

  var form = document.querySelector('.form-js');
  var inputNameForm = form.querySelector('#cat-name');
  var inputWeightForm = form.querySelector('#cat-weight');
  var inputMailForm = form.querySelector('#e-mail');
  var inputTelForm = form.querySelector('#tel');
  var isStorageSupport = true;

  form.addEventListener('submit', function (event) {

    if (!inputNameForm.value || !inputWeightForm.value || !inputMailForm.value || !inputTelForm.value) {
      event.preventDefault();
      form.classList.remove('form--error');
      form.offsetWidth = form.offsetWidth;
      form.classList.add('form--error');
    }

    else {
      if (isStorageSupport) {
        form.submit();
      }
    }
  });

} catch (err) {

}


