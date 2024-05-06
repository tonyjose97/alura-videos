import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo,imagen,descripcion,url) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
    <img src="${imagen}">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>`

    return video
    
}

//mostrar videos con los datos de la base de datos
async function listarVideos(){
    try{
        const listaApi = await conexionApi.listarVideos();
        
        listaApi.forEach(video=>lista.appendChild(crearCard(video.titulo,video.imagen,video.descripcion,video.url)));
    }catch{
        lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema en la conexion</h2>`
    }
    

}
listarVideos()


export const mostrarVideo ={
    crearCard
}