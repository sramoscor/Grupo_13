import { consultaConcurrente } from './asincronia.js';
import { normalizarPersonajes } from './normalizacion.js';
import {
  personajesVivosHumanos,
  personajesConMuchosEpisodios,
  primerAlienFemale,
  existeAlgunTipoConInfo,
  todosTienenImagenYEpisodio
} from './consultas.js';
import { agrupadoPorEspecie, clasificarPorEpisodios } from './estadisticas.js';

async function ejecutarTaller() {
  console.log("Iniciando peticion concurrente (Promise.all)...");
  
  // 1. Obtener datos (Parte C) - Se exige la estrategia concurrente en la solucion definitiva
  const datosCrudos = await consultaConcurrente();

  console.log("\nNormalizando datos (map)...");
  // 2. Normalizar datos (Parte A)
  const personajes = normalizarPersonajes(datosCrudos);

  console.log("\n--- Parte B: Consultas ---");
  console.log("1. Vivos y Humanos (cantidad):", personajesVivosHumanos(personajes).length);
  console.log("2. 20+ episodios (cantidad):", personajesConMuchosEpisodios(personajes).length);
  console.log("3. Primer Alien Female:", primerAlienFemale(personajes));
  console.log("4. Existe tipo con info?:", existeAlgunTipoConInfo(personajes));
  console.log("5. Todos tienen imagen y episodio?:", todosTienenImagenYEpisodio(personajes));

  console.log("\n--- Parte B: Estadisticas (reduce) ---");
  console.log("6. Agrupado por especie:");
  console.log(agrupadoPorEspecie(personajes));
  
  console.log("\n7. Clasificado por episodios:");
  console.log(clasificarPorEpisodios(personajes));
}

ejecutarTaller();