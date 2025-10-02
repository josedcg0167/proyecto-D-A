// Ejecutar cuando el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  // ----- Mostrar / Ocultar contraseña (funciona para todos los inputs) -----
const toggleButtons = document.querySelectorAll(".toggle-visibility");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const input = document.getElementById(targetId);

      // Busca si hay iconos de ojo abierto/cerrado dentro del botón
    const eyeOpen = button.querySelector("#eyeOpen");
    const eyeClosed = button.querySelector("#eyeClosed");

    if (input.type === "password") {
        input.type = "text";
        if (eyeOpen && eyeClosed) {
        eyeOpen.classList.add("hidden");
        eyeClosed.classList.remove("hidden");
        }
    } else {
        input.type = "password";
        if (eyeOpen && eyeClosed) {
        eyeOpen.classList.remove("hidden");
        eyeClosed.classList.add("hidden");
        }
    }
    });
});

// ----- Login -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("/Login/usuarios.json")
        .then(response => response.json())
        .then(usuarios => {
            const user = usuarios.find(u => u.usuario === usuario && u.password === password);

        if (user) {
            alert(`✅ Bienvenido ${user.usuario} (${user.rol})`);
            if (user.rol === "admin") {
                window.location.href = "/Menu/menu_admin.html";
        } else {
            window.location.href = "/inicio/index.html";
        }
        } else {
        alert("❌ Usuario o contraseña incorrectos");
        }
    })
    .catch(err => {
        console.error("Error cargando usuarios.json", err);
        alert("Error al cargar la base de datos de usuarios");
    });
});
}

  // ----- Cambio de contraseña -----
const changePasswordForm = document.getElementById("changePasswordForm");
if (changePasswordForm) {
    changePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const pass1 = document.getElementById("password").value.trim();
    const pass2 = document.getElementById("password_confirm").value.trim();
    const message = document.getElementById("message");

    if (pass1.length < 6) {
        message.textContent = "La contraseña debe tener al menos 6 caracteres.";
        message.className = "message error";
    } else if (pass1 !== pass2) {
        message.textContent = "Las contraseñas no coinciden.";
        message.className = "message error";
    } else {
        message.textContent = "Contraseña cambiada con éxito ✅";
        message.className = "message success";

        // Aquí puedes redirigir a login.html si quieres
        // window.location.href = "login.html";
    }
    });
}
});
