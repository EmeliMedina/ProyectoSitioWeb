// PARA ABRIR LA PRIMER VENTANA DE GUIAS...................................................................

const abrirVentana = document.querySelector('#TOCAR1');
const ventana = document.querySelector('.ventana');
const ventanaCerrar = document.querySelector('.ventanaCerrar');

abrirVentana.addEventListener('click', (e)=>{
    // alert('USTED CLICKEO ACÁ');
    e.preventDefault();
    ventana.classList.add('ventana--mostrar');
});

ventanaCerrar.addEventListener('click', (e)=>{
    e.preventDefault();
    ventana.classList.remove('ventana--mostrar');
});

// PARA ABRIR LA 2DA VENTANA DE ALOJAMIENTO...................................................................
const abrirVentana2 = document.querySelector('#TOCAR2');
const ventana2 = document.querySelector('.ventana2');
const ventanaCerrar2 = document.querySelector('.ventanaCerrar');

abrirVentana2.addEventListener('click', (e)=>{
    e.preventDefault();
    ventana2.classList.add('ventana--mostrar');
});

ventanaCerrar2.addEventListener('click', (e)=>{
    e.preventDefault();
    ventana2.classList.remove('ventana--mostrar');
});

// PARA ABRIR LA 3RA VENTANA DE EXCURSIONES...................................................................
const abrirVentana3 = document.querySelector('#TOCAR3');
const ventana3 = document.querySelector('.ventana3');
const ventanaCerrar3 = document.querySelector('.ventanaCerrar');

abrirVentana3.addEventListener('click', (e)=>{
 e.preventDefault();
    ventana3.classList.add('ventana--mostrar');
});
ventanaCerrar3.addEventListener('click', (e)=>{
    e.preventDefault();
    ventana3.classList.remove('ventana--mostrar');
});


// PARA ABRIR LA 4TA VENTANA DE TRANSPORTE...................................................................
const abrirVentana4 = document.querySelector('#TOCAR4');
const ventana4 = document.querySelector('.ventana4');
const ventanaCerrar4 = document.querySelector('.ventanaCerrar');

abrirVentana4.addEventListener('click', (e)=>{
 e.preventDefault();
    ventana4.classList.add('ventana--mostrar');
});
ventanaCerrar4.addEventListener('click', (e)=>{
    e.preventDefault();
    ventana4.classList.remove('ventana--mostrar');
});

// FINAL DE VENTANAS PARA LOS ITEMS CIRCULARES DE SERVICIOS DE LA PÁGINA.......................................


function mostrarSeccion() {
    var seccion = document.getElementById('seccionOculta');
    // Cambia el estilo de display para mostrar la sección
    seccion.style.display = 'block';
}

document.getElementById('mostrarBoton').addEventListener('click', function() {
    var seccionOculta = document.getElementById('seccionOculta');
    if (seccionOculta.style.display === 'none' || seccionOculta.style.display === '') {
      seccionOculta.style.display = 'block';
    } else {
      seccionOculta.style.display = 'none';
    }
});

function ocultarFormularioContacto() {
    // Oculta el título y formulario de contacto
    document.getElementById("contactoTitle").style.display = "none";
    document.getElementById("formularioContacto").style.display = "none";

    // Muestra el título y formulario de reserva
    document.getElementById("reservaTitle").style.display = "block";
    document.getElementById("formularioReserva").style.display = "block";
}

function guardarDatosContacto(event) {
    event.preventDefault(); // Evita que el formulario de contacto se envíe automáticamente

    // Obtiene los valores de los campos de contacto
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var domicilio = document.getElementById("domicilio").value;
    var correo = document.getElementById("correo").value;

    // Muestra los datos de contacto en una alerta
    var mensaje = "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nDomicilio: " + domicilio + "\nCorreo: " + correo;
    alert(mensaje);

    // Llama a la función para ocultar el formulario de contacto
    ocultarFormularioContacto();
}

function guardarDatosReserva(event) {
    event.preventDefault(); // Evita que el formulario de reserva se envíe automáticamente

    // Obtiene los valores de los campos de reserva
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var pasajeros = document.getElementById("pasajeros").value;
    var fecha = document.getElementById("fecha").value;
    var fecha2 = document.getElementById("fecha2").value;

    // Muestra los datos de reserva en una alerta
    var mensaje = "Origen: " + origen + "\nDestino: " + destino + "\nPasajeros: " + pasajeros + "\nFecha Ida: " + fecha + "\nFecha Vuelta: " + fecha2;
    alert(mensaje);
}
