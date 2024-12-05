// Lógica para regresar a la página anterior (docente.html)
document.getElementById('regresar-btn').addEventListener('click', function() {
    window.history.back();  // Vuelve a la página anterior
});

// Lógica para manejar el formulario de disponibilidad
document.getElementById('disponibilidad-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Captura los datos del formulario
    const diasSeleccionados = document.getElementById('dias').selectedOptions;
    const horasDisponibles = document.getElementById('horas').value;

    // Convertir las opciones seleccionadas a un array de días
    let dias = [];
    for (let i = 0; i < diasSeleccionados.length; i++) {
        dias.push(diasSeleccionados[i].value);
    }

    // Guardar los datos (esto podría ir a una base de datos o a un almacenamiento local)
    console.log('Días seleccionados: ', dias);
    console.log('Horas disponibles: ', horasDisponibles);

    // Mostrar un mensaje de éxito o hacer lo necesario
    alert('Disponibilidad guardada exitosamente.');
});
