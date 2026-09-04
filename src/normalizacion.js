export function normalizarPersonajes(personajes){
    return personajes.map(personaje=>({
        id:personaje.id,
        nombre:personaje.name,
        estado:personaje.status,
        especie:personaje.species,
        tipo:personaje.type,
        genero:personaje.gender,
        origen:personaje.origin.name,
        ubiActual:personaje.location.name,
        cantidadEpisodios:personaje.episode.length,
        imagen:personaje.image
    }));
}