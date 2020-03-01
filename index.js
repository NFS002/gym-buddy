
const email = document.getElementById('email');
const inputs = document.querySelectorAll("input[type='checkbox']");

email.addEventListener('blur', valEmail);

/* Get a life */

function valEmail() {
  const re = /^[a-zA-Z0-9]{2,6}$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}
