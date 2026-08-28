const URL_BASE = "https://rickandmortyapi.com/api/character";


export async function obtenerPersonajesSecuencial() {

    let personajes = [];

    const inicio = performance.now();

    const primeraRespuesta = await fetch(URL_BASE);
    const primeraData = await primeraRespuesta.json();

    const totalPaginas = primeraData.info.pages;

    for(let pagina = 1; pagina <= totalPaginas; pagina++){

        const respuesta = await fetch(`${URL_BASE}?page=${pagina}`);
        const data = await respuesta.json();

        personajes.push(...data.results);
    }

    const fin = performance.now();

    return {
        personajes,
        tiempo: fin - inicio
    };
}



export async function obtenerPersonajesConcurrente(){

    const inicio = performance.now();

    const primeraRespuesta = await fetch(URL_BASE);
    const primeraData = await primeraRespuesta.json();

    const totalPaginas = primeraData.info.pages;


    const peticiones = [];

    for(let pagina = 1; pagina <= totalPaginas; pagina++){

        peticiones.push(
            fetch(`${URL_BASE}?page=${pagina}`)
            .then(res => res.json())
        );

    }


    const respuestas = await Promise.all(peticiones);


    const personajes = respuestas.flatMap(
        data => data.results
    );


    const fin = performance.now();


    return {
        personajes,
        tiempo: fin - inicio
    };

}