// esta funcione es para crear los videos nuevos quew se van a subir a la pagina

import { conexionApi } from "./conexionApi.js"; //importamos para usar la funcion de enviar videos

const formulario = document.querySelector("[data-formulario]")

async function crearVideos(evento) {

    evento.preventDefault()

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagen]").value;
    

    const descripcion = Math.floor(Math.random * 10).toString();

    try{
        await conexionApi.enviarVideos(titulo,descripcion,url,imagem);

        window.location.href="../pages/envio-concluido.html";
    }catch(e){
        alert(e)
    }
    
}

formulario.addEventListener("submit",evento=>crearVideos(evento));