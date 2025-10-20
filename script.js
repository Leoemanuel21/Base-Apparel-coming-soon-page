const btn = document.querySelector('.img-btn');
const error= document.querySelector('.error');
const iconError= document.querySelector('.error-icon');
const input = document.querySelector('.email');

let valueEmail;
let validarEmail;
let verificarEmail;

function verificar(){
    valueEmail = input.value;
    validarEmail = /^[a-z0-9.]+@[a-z0-9]+\.(com)$/i;
    verificarEmail = validarEmail.test(valueEmail);
    
    if(verificarEmail){
        iconError.style.display = "none";
        error.style.display = "none";
    }else{
        iconError.style.display = "block";
        error.style.display = "block";
    }
}