// Función para volver a la página anterior
document.getElementById("volver-btn").addEventListener("click", function() {
    window.history.back();  // Regresa a la página anterior
    // O si quieres que regrese al login, usa:
    // window.location.href = "index.html"; // Cambia 'index.html' si la ruta es diferente
});