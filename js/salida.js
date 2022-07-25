// PAGINA DE SALIDA con DOM//´

let nombreIngresado = '';
let telIngresado = '';
let emailIngresado = '';

let boton = document.getElementById('btnPrincipal');
let inputNombre = document.getElementById('input-nombre');
let inputTel = document.getElementById('input-tel');
let inputEmail = document.getElementById('input-email');

inputNombre.addEventListener('input', () => {
    nombreIngresado = inputNombre.value;
});

inputTel.addEventListener('input', () => {
    telIngresado = inputTel.value;
});

inputEmail.addEventListener('input', () => {
    emailIngresado = inputEmail.value;
});

boton.addEventListener('click', () => {
    localStorage.setItem("personalData", inputNombre.value + ' ' + inputTel.value + ' ' + inputEmail.value);


    inputNombre.value = '';
    inputTel.value = '';
    inputEmail.value = '';
});