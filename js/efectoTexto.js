let contenedor = document.getElementById("texto-bienvenida");
let text = contenedor.innerHTML;

contenedor.innerHTML = "";

let speed = 90;
let i = 0;

function writer() {
  if (i < text.length) {
    contenedor.innerHTML += text.charAt(i);
    i++;
    setTimeout(writer, speed);
  }
}

setTimeout(writer, speed);
