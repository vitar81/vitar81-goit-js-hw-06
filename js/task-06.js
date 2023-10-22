const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const length = input.getAttribute('data-length');
    const value = input.value.trim();

    if (value.length === Number(length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
    }
});