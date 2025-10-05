// /Login/java.js

document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("changePasswordForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("password_confirm");
const message = document.getElementById("message");

  // Cargar usuarios desde localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Mostrar usuario actual (puedes obtenerlo de otra página o sesión)
  // Por ejemplo: localStorage.setItem("usuarioActual", "jcarbono");
const usuarioActual = localStorage.getItem("usuarioActual") || "";
usernameInput.value = usuarioActual;

  // Mostrar/ocultar contraseña
document.querySelectorAll(".toggle-visibility").forEach(btn => {
    btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    target.type = target.type === "password" ? "text" : "password";
    });
});

  // Manejar envío del formulario
form.addEventListener("submit", e => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const newPassword = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();

    if (!username || !newPassword || !confirmPassword) {
    message.textContent = "Por favor completa todos los campos.";
    message.style.color = "red";
    return;
    }

    if (newPassword !== confirmPassword) {
    message.textContent = "Las contraseñas no coinciden.";
    message.style.color = "red";
    return;
    }

    // Buscar y actualizar usuario
    const usuario = usuarios.find(u => u.usuario === username);
    if (!usuario) {
    message.textContent = "Usuario no encontrado.";
    message.style.color = "red";
    return;
    }

    usuario.contraseña = newPassword;

    // Guardar cambios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    message.textContent = "Contraseña actualizada correctamente ✅";
    message.style.color = "green";

    // Limpia los campos
    passwordInput.value = "";
    confirmInput.value = "";
});
});
