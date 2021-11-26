/* CREAR */

function mostrarPassword(){
    var cambio = document.getElementById("Password");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fas fa-eye').addClass('fas fa-eye-slash');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fas fa-eye-slash').addClass('fas fa-eye');
    }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});

function esconderContraseña(){
    var x = document.getElementById("Confirmpassword");
    if(x.type == "password"){
        x.type = "text";
        $('.icono').removeClass('fas fa-eye').addClass('fas fa-eye-slash');
    }else{
        x.type = "password";
        $('.icono').removeClass('fas fa-eye-slash').addClass('fas fa-eye');
    }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#showPassword').click(function () {
    $('#password').attr('type', $(this).is(':checked') ? 'text' : 'Password');
});
});