const emailInputEl = document.getElementById('email');
const passwordOutputEl = document.getElementById('password');
const passwordFeedbackEl = document.getElementById('feedback');
emailInputEl.addEventListener('keyup', () => {
    const email = emailInputEl.value;
    const password = email.replace('@', '_AT_').replace(/\./g, '-DOT-');
    passwordOutputEl.innerHTML = password;
    const checkResult = zxcvbn(password);
    const output = Object.keys(checkResult.crack_times_display).reduce((acc, c) => {
        return acc + `${c}: <strong>${checkResult.crack_times_display[c]}</strong><br/>`;
    }, 'Crack Time Estimation:<br/>\n');
    passwordFeedbackEl.innerHTML = output;
});
