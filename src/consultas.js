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