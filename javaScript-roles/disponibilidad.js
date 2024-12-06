// Referencias a los elementos HTML
const tabla = document.getElementById('tabla-disponibilidad').querySelector('tbody');
const agregarDiaBtn = document.getElementById('agregar-dia');
const guardarDisponibilidadBtn = document.getElementById('guardar-disponibilidad');
const volverBtn = document.getElementById('volver-btn');

// Lista de días disponibles para seleccionar
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Función para agregar una nueva fila a la tabla
function agregarFila() {
    const fila = document.createElement('tr');

    // Columna para seleccionar un día
    const celdaDia = document.createElement('td');
    const selectDia = document.createElement('select');
    diasSemana.forEach(dia => {
        const opcion = document.createElement('option');
        opcion.value = dia.toLowerCase();
        opcion.textContent = dia;
        selectDia.appendChild(opcion);
    });
    celdaDia.appendChild(selectDia);

    // Columna para ingresar las horas disponibles
    const celdaHoras = document.createElement('td');
    const inputHoras = document.createElement('input');
    inputHoras.type = 'number';
    inputHoras.min = 1;
    inputHoras.max = 8;
    inputHoras.placeholder = 'Horas';
    celdaHoras.appendChild(inputHoras);

    // Columna para eliminar la fila
    const celdaAccion = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.backgroundColor = '#f44336';
    botonEliminar.style.color = 'white';
    botonEliminar.addEventListener('click', () => fila.remove());
    celdaAccion.appendChild(botonEliminar);

    // Agregar celdas a la fila
    fila.appendChild(celdaDia);
    fila.appendChild(celdaHoras);
    fila.appendChild(celdaAccion);

    // Agregar la fila a la tabla
    tabla.appendChild(fila);
}

// Función para guardar la disponibilidad
function guardarDisponibilidad() {
    const filas = tabla.querySelectorAll('tr');
    const disponibilidad = [];

    filas.forEach(fila => {
        const dia = fila.querySelector('select').value;
        const horas = fila.querySelector('input').value;

        if (dia && horas) {
            disponibilidad.push({ dia, horas });
        }
    });

    console.log('Disponibilidad guardada:', disponibilidad);
    alert('Disponibilidad guardada exitosamente.');
}

// Eventos
agregarDiaBtn.addEventListener('click', agregarFila);
guardarDisponibilidadBtn.addEventListener('click', guardarDisponibilidad);
volverBtn.addEventListener('click', () => {
    window.history.back(); // Regresar a la página anterior
});
