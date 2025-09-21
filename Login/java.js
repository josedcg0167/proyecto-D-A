// ----- Mostrar / Ocultar contraseña -----
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

togglePassword.addEventListener("click", () => {
if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeOpen.classList.add("hidden");
    eyeClosed.classList.remove("hidden");
} else {
    passwordInput.type = "password";
    eyeOpen.classList.remove("hidden");
    eyeClosed.classList.add("hidden");
}
});

// ----- Redirigir solo si user=admin y pass=1234 -----
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita recarga

const usuario = document.getElementById("usuario").value.trim();
const password = document.getElementById("password").value.trim();

if (usuario === "admin" && password === "1234") {
    window.location.href = "/Menu/menu_admin.html";
} else {
    alert("Usuario o contraseña incorrectos");
}
});
