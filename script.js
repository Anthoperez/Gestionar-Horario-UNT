// Función para manejar el inicio de sesión
function iniciarSesion(email, password) {
  // Verifica las credenciales de los usuarios según su rol
  if (email === "admin@unt.edu.pe" && password === "admin123") {
    sessionStorage.setItem("tipoUsuario", "administrador");
    window.location.href = "./roles-html/admin.html"; // Redirige al dashboard del administrador
  } else if (email === "docente@unt.edu.pe" && password === "docente123") {
    sessionStorage.setItem("tipoUsuario", "docente");
    window.location.href = "./roles-html/docente.html"; // Redirige al dashboard del docente
  } else if (email === "estudiante@unt.edu.pe" && password === "estudiante123") {
    sessionStorage.setItem("tipoUsuario", "estudiante");
    window.location.href = "./roles-html/estudiante.html"; // Redirige al dashboard del estudiante
  } else {
    // Muestra un mensaje de alerta si las credenciales son incorrectas
    alert("Credenciales inválidas. Por favor, verifica tu correo y contraseña.");
  }
}

// Captura el evento del formulario de inicio de sesión
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que la página se recargue

  // Obtén los valores ingresados en los campos del formulario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Llama a la función para manejar el inicio de sesión
  iniciarSesion(email, password);
});
