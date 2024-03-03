
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button-crt");

let sizePassword = document.querySelector("#valor-tamanho");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM!@#$%¨&*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput= function(){
    sizePassword.innerHTML=this.value;
}


function generationPass(){
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value ; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyClickPass(){
    alert("Senha Copiada!");
    navigator.clipboard.writeText(novaSenha);
}


//@gilderlanio_alves