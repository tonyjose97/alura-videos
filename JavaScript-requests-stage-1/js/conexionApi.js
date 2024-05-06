
//conectar con el archivo json para mostrar lo elementos
async function listarVideos(){ 
    const conexion = await fetch("http://localhost:3001/videos")

    const conexionConvertida = conexion.json()
    
    return conexionConvertida
}

//crear un nuevo video
async function enviarVideos(titulo,descripcion,url,imagen) {
    
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"POST",
        headers:{"conten-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:`${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
            
        })
    })
   
    const conexionConvertida = conexion.json();
    

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video")
    }

    return conexionConvertida;
}

//asociar la barra de busqueda
async function buscarVideo(palabraClave) {
   const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`)
   const conexionConvertida = conexion.json()

    return conexionConvertida
}

export const conexionApi={
    listarVideos,enviarVideos,buscarVideo
}