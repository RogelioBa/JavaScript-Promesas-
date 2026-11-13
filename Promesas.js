function obtenerDatosDelServidor(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = true;

            if(exito){
                let usuario = {
                    nombre: "Roger",
                    edad: 21
                }
                resolve(usuario)
            } else{
                reject("Ocurrio un error al obtener los datos")
            }
            
        }, 2000);
    })
}

obtenerDatosDelServidor()
    .then(resp=>{
        return resp.nombre.toUpperCase();
    })
    .then(nombreEnMayusculas=>{
        console.log("Nombre en mayusculas: ", nombreEnMayusculas)
    })
    .catch(err=>{
        console.log("entro en el .catch: ", err);
    })
    .finally(()=>{
        console.log("Fin de la tarea");
    })


async function obtenerPosts(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response)
    }catch(error){
        
    } finally{

    }
}

obtenerPosts();

    

