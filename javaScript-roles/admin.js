document.querySelector("#crear-usuario").addEventListener("click", () => {
    alert("Crear usuario.");
  });
  document.querySelector("#modificar-horario").addEventListener("click", () => {
    alert("Modificar horario.");
  });
  
  // Redirigir al login
  function logout() {
    window.location.href = "../index.html"; // Cambia la ruta si el login tiene otro nombre
  }