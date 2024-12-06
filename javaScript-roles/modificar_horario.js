// Referencias a los elementos HTML
const tablaHorario = document.getElementById('tabla-horario').querySelector('tbody');
const guardarHorarioBtn = document.getElementById('guardar-horario');
const volverBtn = document.getElementById('volver-btn');

// Cursos disponibles
const cursos = [
    "Matemáticas",
    "Física",
    "Química",
    "Historia",
    "Lenguaje",
    "Inglés",
    "Computación"
];

// Horas de clases
const horasClases = ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00"];

// Función para generar la tabla
function generarTabla() {
    horasClases.forEach(hora => {
        const fila = document.createElement('tr');

        // Columna de hora
        const celdaHora = document.createElement('td');
        celdaHora.textContent = hora;
        fila.appendChild(celdaHora);

        // Columnas de días (con dropdown)
        for (let i = 0; i < 5; i++) {
            const celdaDia = document.createElement('td');
            const selectCurso = document.createElement('select');
            
            const opcionVacia = document.createElement('option');
            opcionVacia.value = "";
            opcionVacia.textContent = "Seleccionar";
            selectCurso.appendChild(opcionVacia);

            cursos.forEach(curso => {
                const opcion = document.createElement('option');
                opcion.value = curso.toLowerCase();
                opcion.textContent = curso;
                selectCurso.appendChild(opcion);
            });

            celdaDia.appendChild(selectCurso);
            fila.appendChild(celdaDia);
        }

        tablaHorario.appendChild(fila);
    });
}

// Función para guardar el horario
function guardarHorario() {
    const filas = tablaHorario.querySelectorAll('tr');
    const horario = [];

    filas.forEach((fila, index) => {
        const celdas = fila.querySelectorAll('td');
        const hora = horasClases[index];

        const diaCursos = {
            hora,
            lunes: celdas[1].querySelector('select').value || "N/A",
            martes: celdas[2].querySelector('select').value || "N/A",
            miercoles: celdas[3].querySelector('select').value || "N/A",
            jueves: celdas[4].querySelector('select').value || "N/A",
            viernes: celdas[5].querySelector('select').value || "N/A"
        };

        horario.push(diaCursos);
    });

    console.log('Horario guardado:', horario);
    alert('Horario guardado exitosamente.');
}

// Inicializar tabla
generarTabla();

// Eventos
guardarHorarioBtn.addEventListener('click', guardarHorario);
volverBtn.addEventListener('click', () => {
    window.history.back(); // Regresar al menú anterior
});
