        // Obtener el parámetro ID de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const docenteId = urlParams.get('id');

        // Aquí deberías hacer una llamada a la base de datos o un sistema para obtener los datos del docente por ID
        // A continuación se simula la visualización de los datos:

        if (docenteId === "1") {
            document.getElementById("nombre").innerText = "Juan Pérez";
            document.getElementById("tipo").innerText = "Tipo de Docente: Nombrado";
            document.getElementById("horas").innerText = "Horas Disponibles: 16 horas";
        } else if (docenteId === "2") {
            document.getElementById("nombre").innerText = "María González";
            document.getElementById("tipo").innerText = "Tipo de Docente: Contratado";
            document.getElementById("horas").innerText = "Horas Disponibles: 10 horas";
        }
