const inputItem = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onClickInput = (event) => {
    console.log(event.currentTarget.value);
    nameLabel.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === '') {
        nameLabel.textContent = 'Anonymous'
    }
}

inputItem.addEventListener('input', onClickInput);



