document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let password = document.getElementById('password');
  let confirmPassword = document.getElementById('confirmPassword');
  if (password.value !== confirmPassword.value) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
  } else {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
});
