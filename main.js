// NOTE - Memanggil class dengan query selector
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');


if (storageInput) {
  text.textContent = storedInput
}


// NOTE - addEventListener, Setiap kata yang diketik di input maka text akan mengikuti
/*
storageInput  --memicu--> event input --> kirim objek event (letter) ke callback
callback menerima parameter letter --> kita pakai letter.target (storageInput) dan letter.target.value (isi input)
*/
storageInput.addEventListener('input', letter => {
  text.textContent = letter.target.value
})

// NOTE - Kode ini akan menyimpan konten text ke local storage 
const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text.textContent);

}

//NOTE - Button save untuk konten agar tersave 
button.addEventListener('click', saveToLocalStorage)