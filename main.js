const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const saveInput = localStorage.getItem('textinput')

if (storageInput) {
  text.textContent = saveInput
}

storageInput.addEventListener('input', letter => {
  console.log(letter);
  text.textContent = letter.target.value
});

const storedInput = () => {
  //                      key     :  value  
  localStorage.setItem('textinput', text.textContent)
};

button.addEventListener('click', storedInput)