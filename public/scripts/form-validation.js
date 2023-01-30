const form_El = document.getElementById('form');
const name_El = document.getElementById('name');
const email_El = document.getElementById('email');
const date_El = document.getElementById('date');
const submitBtn = document.getElementById('form-submit-btn');
const serverMessage = document.getElementById('server-message');
const dialog = document.querySelector('.form-message');

form.addEventListener('change', (e) => {
  e.preventDefault();
  let name = removeWhiteSpace(name_El.value);
  let email = removeWhiteSpace(email_El.value);
  let date = removeWhiteSpace(date_El.value);

  function removeWhiteSpace(value) {
    return value.trim();
  }

  function passTest() {
    if (!validateName(name)) {
      return;
    }
    if (!validateEmail(email)) {
      return;
    }
    if (date === '') {
      return;
    }

    function validateName(value) {
      return (regex = /^[a-zA-Z\s]+$/.test(value));
    }

    function validateEmail(value) {
      return (regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ));
    }

    return true;
  }

  if (passTest()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

submitBtn.addEventListener('click', () => {
  serverMessage.textContent = 'Message Received';
  dialog.showModal();
});
