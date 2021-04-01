const emailInputEl = document.getElementById('email');
const passwordOutputEl = document.getElementById('password');
emailInputEl.addEventListener('change', () => {
    const email = emailInputEl.value;
    const password = email.replace('@', '_AT_').replace(/\./g, '-DOT-');
    passwordOutputEl.innerHTML = password;
});
