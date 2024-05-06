import { conexionApi } from "./conexionApi.js";
import  crearCard  from "./mostrarVideos.js";

async function filtrarVideo(evento) {
    const dataBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionApi.buscarVideo(dataBusqueda);
    

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video=>lista.appendChild(crearCard(video.titulo,video.imagen,video.descripcion,video.url)));


    if (busqueda.length == 0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${dataBusqueda}</h2>`
    }
}

const botonBusqueda = document.querySelector("[data-boton-busqueda]");
const botonBusquedaEnter = document.getElementById("buscar");

botonBusqueda.addEventListener("click",evento=>filtrarVideo(evento));//buscar con click


botonBusquedaEnter.addEventListener("keydown", function(event) { // buscar con la tecla enter
    if (event.key === "Enter" || event.KeyCode === 13) {
      event.preventDefault();
      const terminoBusqueda =botonBusquedaEnter.value;
      filtrarVideo(terminoBusqueda);
    }
  });
  