const inputRef = document.querySelector('#validation-input');

const onInputFocus = (event) => {
    console.log(event.target);
    event.target.classList.add('#validation-input');
}

const onInputBlur = (event) => {
    const { dataset, value } = event.target;
    const requiredLength = Number(dataset.length);
    

    if (requiredLength === value.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid')
    }
};

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);

