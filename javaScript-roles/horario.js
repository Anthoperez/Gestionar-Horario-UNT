// Simulación de los horarios para cada combinación de periodo, ciclo y sección
const horarios = {
    "2024-I": {
        "I": {
            "A": [
                { hora: "07:00 am - 09:00 am", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 am - 11:00 am", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" },
                { hora: "11:00 am - 01:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "02:00 pm - 04:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "04:00 am - 06:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "06:00 am - 08:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"}
            ],
            "B": [
                { hora: "07:00 am - 09:00 am", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 am - 11:00 am", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" },
                { hora: "11:00 am - 01:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "02:00 pm - 04:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "04:00 am - 06:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "06:00 am - 08:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"}
            ]
        },

        "III": {
            "A": [
                { hora: "08:00 - 09:00", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" }
            ],
            "B": [
                { hora: "08:00 - 09:00", lunes: "Biología", martes: "Física", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Filosofía", martes: "Historia", miercoles: "Matemáticas", jueves: "Inglés", viernes: "Física" }
            ]
        },

        "V": {
            "A": [
                { hora: "08:00 - 09:00", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" }
            ],
            "B": [
                { hora: "08:00 - 09:00", lunes: "Biología", martes: "Física", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Filosofía", martes: "Historia", miercoles: "Matemáticas", jueves: "Inglés", viernes: "Física" }
            ]
        },
        // Puedes agregar más ciclos y secciones para el periodo 2024-I
    },

    "2024-II": {
        "II": {
            "A": [
                { hora: "07:00 am - 09:00 am", lunes: "CUINPC - A - POOL 12", martes: "ESTADISTICA GENERAL - T - A  - POOL 12", miercoles: "", jueves: "ESTADISTICA GENERAL-P-A-POOL 12", viernes: "" },
                { hora: "09:00 am - 11:00 am", lunes: "CUINPC - A - POOL 12", martes: "SOCUEC - A - POOL 12", miercoles: "ESTDAT - L1  - A - LAB B", jueves: "ESTADISTICA GENERAL-P-A-POOL 12", viernes: "SOCUEC - A - POOL 12" },
                { hora: "11:00 am - 01:00 pm", lunes: "ANAMAT - T - A - POOL 12", martes: "TALLER", miercoles: "ESTDAT - L1  - A - LAB B", jueves: "TALLER", viernes: ""},
                { hora: "02:00 pm - 04:00 pm", lunes: "", martes: "", miercoles: "", jueves: "", viernes: ""},
                { hora: "04:00 am - 06:00 pm", lunes: "ESTDAT - T - A - POOL 12", martes: "ANAMAT - P - A - POOL 12", miercoles: "ETICA - A - T - POOL 12", jueves: "TALLER", viernes: ""},
                { hora: "06:00 am - 08:00 pm", lunes: "ESTDAT - T - A - POOL 12", martes: "ANAMAT - P - A - POOL 12", miercoles: "ETICA - A - T - POOL 12", jueves: "TALLER", viernes: ""}
            ],
            "B": [
                { hora: "07:00 am - 09:00 am", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 am - 11:00 am", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" },
                { hora: "11:00 am - 01:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "02:00 pm - 04:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "04:00 am - 06:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"},
                { hora: "06:00 am - 08:00 pm", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química"}
            ]
        },

        "IV": {
            "A": [
                { hora: "08:00 - 09:00", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" }
            ],
            "B": [
                { hora: "08:00 - 09:00", lunes: "Biología", martes: "Física", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Filosofía", martes: "Historia", miercoles: "Matemáticas", jueves: "Inglés", viernes: "Física" }
            ]
        },

        "VI": {
            "A": [
                { hora: "08:00 - 09:00", lunes: "Matemáticas", martes: "Física", miercoles: "Historia", jueves: "Inglés", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Programación", martes: "Filosofía", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Física" }
            ],
            "B": [
                { hora: "08:00 - 09:00", lunes: "Biología", martes: "Física", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Química" },
                { hora: "09:00 - 10:00", lunes: "Filosofía", martes: "Historia", miercoles: "Matemáticas", jueves: "Inglés", viernes: "Física" }
            ]
        },
        // Puedes agregar más ciclos y secciones para el periodo 2024-I
    },
    // Puedes agregar más periodos (2024-II) aquí
};

// Función para actualizar la tabla de horarios
function actualizarTabla() {
    const periodo = document.getElementById("periodo").value;
    const ciclo = document.getElementById("ciclo").value;
    const seccion = document.getElementById("seccion").value;

    const tablaHorario = document.getElementById("tabla-horario").getElementsByTagName('tbody')[0];
    tablaHorario.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    // Verifica si hay horarios disponibles para la combinación seleccionada
    if (horarios[periodo] && horarios[periodo][ciclo] && horarios[periodo][ciclo][seccion]) {
        const horario = horarios[periodo][ciclo][seccion];

        // Llena la tabla con los horarios
        horario.forEach((clase) => {
            const fila = tablaHorario.insertRow();
            fila.insertCell(0).innerText = clase.hora;
            fila.insertCell(1).innerText = clase.lunes;
            fila.insertCell(2).innerText = clase.martes;
            fila.insertCell(3).innerText = clase.miercoles;
            fila.insertCell(4).innerText = clase.jueves;
            fila.insertCell(5).innerText = clase.viernes;
        });
    }
}

// Agregar event listeners a los dropdowns
document.getElementById("periodo").addEventListener("change", actualizarTabla);
document.getElementById("ciclo").addEventListener("change", actualizarTabla);
document.getElementById("seccion").addEventListener("change", actualizarTabla);

// Inicializar la tabla con los valores predeterminados
actualizarTabla();

// Función para volver a la página anterior
document.getElementById("volver-btn").addEventListener("click", function() {
    window.history.back();  // Regresa a la página anterior
    // O si quieres que regrese al login, usa:
    // window.location.href = "index.html"; // Cambia 'index.html' si la ruta es diferente
});


