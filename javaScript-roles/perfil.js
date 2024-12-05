// Datos simulados para cada tipo de usuario
const datosUsuarios = {
    administrador: {
      nombres: "Juan",
      apellidos: "Pérez",
      dni: "12345678",
      celular: "987654321",
      correo: "admin@unt.edu.pe",
      contraseña: "admin123"
    },
    docente: {
      nombres: "María",
      apellidos: "González",
      dni: "87654321",
      celular: "987654322",
      correo: "docente@unt.edu.pe",
      contraseña: "docente123"
    },
    estudiante: {
      nombres: "Carlos",
      apellidos: "López",
      dni: "56781234",
      celular: "987654323",
      correo: "estudiante@unt.edu.pe",
      contraseña: "estudiante123"
    }
  };
  
  // Obtén el tipo de usuario desde sessionStorage
  const tipoUsuario = sessionStorage.getItem("tipoUsuario");
  
  // Función para cargar los datos del perfil
  function cargarPerfil() {
    const usuario = datosUsuarios[tipoUsuario];
  
    if (usuario) {
      document.getElementById("nombres").innerText = usuario.nombres;
      document.getElementById("apellidos").innerText = usuario.apellidos;
      document.getElementById("dni").innerText = usuario.dni;
      document.getElementById("celular").innerText = usuario.celular;
      document.getElementById("correo").innerText = usuario.correo;
      document.getElementById("contraseña").innerText = usuario.contraseña;
    } else {
      alert("No se encontraron datos para este usuario.");
    }
  }
  
  // Función para regresar al dashboard correspondiente
  function volver() {
    switch (tipoUsuario) {
      case "administrador":
        window.location.href = "../roles-html/admin.html";
        break;
      case "docente":
        window.location.href = "../roles-html/docente.html";
        break;
      case "estudiante":
        window.location.href = "../roles-html/estudiante.html";
        break;
      default:
        window.location.href = "../index.html";
    }
  }
  
  // Ejecuta la función al cargar la página
  window.onload = cargarPerfil;
  