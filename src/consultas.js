/**
 * 1. filter
 * Obtener todos los personajes que:
 * - estén vivos (Alive)
 * - pertenezcan a la especie Human
 */
export function personajesVivosHumanos(personajes) {
  return personajes.filter(
    (p) => p.estado === "Alive" && p.especie === "Human"
  );
}

/**
 * 2. filter
 * Obtener todos los personajes que aparezcan en 20 o más episodios.
 */
export function personajesConMuchosEpisodios(personajes) {
  return personajes.filter((p) => p.cantidadEpisodios >= 20);
}

/**
 * 3. find
 * Encontrar el primer personaje que:
 * - sea de la especie Alien
 * - tenga género Female
 */
export function primerAlienFemale(personajes) {
  return personajes.find(
    (p) => p.especie === "Alien" && p.genero === "Female"
  );
}

/**
 * 4. some
 * Determinar si existe al menos un personaje cuyo campo type tenga información.
 */
export function existeAlgunTipoConInfo(personajes) {
  return personajes.some((p) => p.tipo !== "" && p.tipo != null);
}

/**
 * 5. every
 * Verificar que todos los personajes:
 * - tengan imagen
 * - aparezcan al menos en un episodio
 */
export function todosTienenImagenYEpisodio(personajes) {
  return personajes.every(
    (p) => Boolean(p.imagen) && p.cantidadEpisodios >= 1
  );
}