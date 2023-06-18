let tiempo = 30;

// Función para mostrar la alerta
function alerta() {
  alert("¡Tu tiempo se terminó!");
}

// Función para actualizar el contador
function actualizarContador() {
  tiempo--;
  
  if (tiempo <= 0) {
    alerta();
    clearInterval(intervalID);
  }
  
  document.getElementById("temporizador").innerHTML = tiempo;
}

// Inicia el temporizador
let intervalID = setInterval(actualizarContador, 1000);