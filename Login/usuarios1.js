// /Login/usuarios.js

// Lista de usuarios (igual a tu JSON original)
const usuarios = [
{
    nombre: "José Carbono",
    usuario: "jcarbono",
    correo: "jcarbono@dyasystemsgroup.com.co",
    contraseña: "123456"
},
{
    nombre: "Angie Gamba",
    usuario: "akgamba",
    correo: "akgamba@dyasystemsgroup.com.co",
    contraseña: "abcdef"
},
{
    nombre: "David Carbono",
    usuario: "dcarbono",
    correo: "dcarbono@dyasystemsgroup.com.co",
    contraseña: "qwerty"
},
{
    nombre: "Katerine Sarmiento",
    usuario: "ksarmiento",
    correo: "ksarmiento@dyasystemsgroup.com.co",
    contraseña: "987654"
},
{
    nombre: "Katerine Sarmiento",
    usuario: "ksarmiento",
    correo: "ksarmiento@dyasystemsgroup.com.co",
    contraseña: "987654"
},
{
    nombre: "Katerine Sarmiento",
    usuario: "ksarmiento",
    correo: "ksarmiento@dyasystemsgroup.com.co",
    contraseña: "987654"
},
{
    nombre: "Katerine Sarmiento",
    usuario: "ksarmiento",
    correo: "ksarmiento@dyasystemsgroup.com.co",
    contraseña: "987654"
},
{
    nombre: "Katerine Sarmiento",
    usuario: "ksarmiento",
    correo: "ksarmiento@dyasystemsgroup.com.co",
    contraseña: "987654"
}
];

// Verificar si ya hay datos guardados en localStorage
const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

// Si no existen, guardamos los del JSON original
if (!usuariosGuardados || usuariosGuardados.length === 0) {
localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
