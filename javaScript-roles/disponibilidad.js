// Referencias a los elementos HTML
const formDisponibilidad = document.getElementById('disponibilidad-form');
const volverBtn = document.getElementById('volver-btn');
const tipoDocenteSelect = document.getElementById('tipo-docente');
const limiteHorasText = document.getElementById('limite-horas');

// Obtener todos los checkboxes y campos de horas
const diasDisponibles = document.querySelectorAll('.dia-disponible');
const horasDisponibles = document.querySelectorAll('.horas');

// Variables para las horas totales disponibles
let horasTotales = 0;
let limiteHoras = 16; // 16 horas para nombrado por defecto
let excedeLimite = false; // Variable para controlar si excede el límite

// Cambiar el límite de horas dependiendo del tipo de docente seleccionado
tipoDocenteSelect.addEventListener('change', () => {
    if (tipoDocenteSelect.value === 'contratado') {
        limiteHoras = 10;
    } else {
        limiteHoras = 16;
    }
    limiteHorasText.textContent = `Límite de horas: ${limiteHoras}`;
    horasTotales = 0; // Reiniciar las horas totales al cambiar el tipo de docente
    excedeLimite = false; // Reiniciar el estado de "excede límite"
    actualizarHorasDisponibles(); // Actualizar las horas disponibles
});

// Activar/desactivar los campos de horas cuando se marca un checkbox
diasDisponibles.forEach(dia => {
    dia.addEventListener('change', () => {
        const idDia = dia.id;
        const horasInput = document.getElementById(`horas-${idDia}`);
        if (dia.checked) {
            horasInput.disabled = false;  // Habilitar el campo de horas
        } else {
            horasInput.disabled = true;  // Deshabilitar el campo de horas
            horasInput.value = '';  // Limpiar el campo de horas
            horasTotales -= parseInt(horasInput.value) || 0;  // Restar las horas seleccionadas
        }
        actualizarHorasDisponibles(); // Actualizar las horas disponibles cada vez que se modifique un campo
    });
});

// Actualizar las horas disponibles al cambiar el valor de las horas en la tabla
horasDisponibles.forEach(input => {
    input.addEventListener('input', () => {
        const horasInput = input;
        const diaId = horasInput.id.replace('horas-', '');
        if (horasInput.disabled === false) {
            // Si el valor de horas es vacio o 0, entonces restar de las horas totales
            let horas = parseInt(horasInput.value) || 0;

            // Si el campo está vacío, restar las horas previas
            if (horasInput.value === '') {
                horasTotales -= parseInt(horasInput.getAttribute('data-prev-value')) || 0;
            } else {
                // Si hay un valor nuevo, añadirlo y actualizar el total
                horasTotales += horas;
            }

            // Verificar si la suma de horas no supera el límite
            if (horasTotales <= limiteHoras) {
                horasInput.setAttribute('data-prev-value', horasInput.value || 0); // Guardar el valor de las horas previas
                excedeLimite = false; // Restablecer el estado de "excede límite"
            } else {
                horasInput.value = '';  // Limpiar el campo si excede el límite
                horasTotales -= horas;  // Restar las horas agregadas
                excedeLimite = true; // Marcar que se excedió el límite
            }
        }

        actualizarHorasDisponibles(); // Actualizar las horas disponibles
    });
});

// Actualizar las horas disponibles y mostrar la advertencia si es necesario
function actualizarHorasDisponibles() {
    const horasRestantes = limiteHoras - horasTotales;
    if (excedeLimite) {
        limiteHorasText.textContent = `¡Has excedido el límite de ${limiteHoras} horas!`;
    } else {
        limiteHorasText.textContent = `Límite de horas: ${limiteHoras}`;
    }
}

// Guardar disponibilidad
formDisponibilidad.addEventListener('submit', (e) => {
    e.preventDefault();

    if (excedeLimite) {
        alert(`No puedes superar el límite de ${limiteHoras} horas.`);
        return;  // Si excede el límite, no permitir guardar
    }

    // Crear un objeto con los días y las horas disponibles
    const disponibilidad = {};

    diasDisponibles.forEach(dia => {
        const diaId = dia.id;
        const horasInput = document.getElementById(`horas-${diaId}`);
        if (dia.checked) {
            disponibilidad[diaId] = horasInput.value || 0;
        } else {
            disponibilidad[diaId] = 0;
        }
    });

    // Guardar en localStorage o enviarlo al servidor
    localStorage.setItem('disponibilidad', JSON.stringify(disponibilidad));

    alert('Disponibilidad guardada correctamente.');
});

// Volver al menú anterior
volverBtn.addEventListener('click', () => {
    window.history.back();  // Regresar a la página anterior
});

// Funcionalidad para el botón Reiniciar
document.getElementById('reiniciar-btn').addEventListener('click', function() {
    location.reload(); // Recarga la página para reiniciar el formulario
});

// Captura el evento del botón "Guardar"
document.getElementById('guardar-btn').addEventListener('click', function() {
    // Captura los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const tipoContrato = document.getElementById('tipo-contrato').value;
    const disponibilidad = document.getElementById('disponibilidad').value;

    // Almacena los datos en el almacenamiento local (localStorage)
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('tipoContrato', tipoContrato);
    localStorage.setItem('disponibilidad', disponibilidad);

    // Oculta el formulario y muestra la página de resultados
    document.getElementById('formulario-disponibilidad').style.display = 'none';
    document.getElementById('resultado-disponibilidad').style.display = 'block';

    // Muestra la información del docente en la nueva interfaz
    document.getElementById('nombre-docente').innerText = nombre;
    document.getElementById('tipo-contrato-docente').innerText = tipoContrato;
    document.getElementById('horas-disponibles').innerText = disponibilidad;
    document.getElementById('dias-disponibles').innerText = disponibilidad; // Si tienes los días, ajusta esta parte
});

