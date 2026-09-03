const personajePrueba = [
  { especie: "Human", estado: "Alive", cantidadEpisodios: 10 },
  { especie: "Human", estado: "Dead", cantidadEpisodios: 20 },
  { especie: "Alien", estado: "Alive", cantidadEpisodios: 5 },
  { especie: "Human", estado: "Dead", cantidadEpisodios: 15 },
];

function agrupadoPorEspecie(personajes) {
  const resultado = personajes.reduce((acc, personaje) => {
    const especie = personaje.especie;

    if (!acc[especie]) {
      acc[especie] = {
        cantidad: 0,
        totalEpisodios: 0,
        vivos: 0
      };
    }

    acc[especie].cantidad += 1;
    acc[especie].totalEpisodios += personaje.cantidadEpisodios;
    if (personaje.estado === "Alive") {
      acc[especie].vivos += 1;
    }

    return acc;
  }, {});

  for (const especie in resultado) {
  resultado[especie].promedioEpisodios =
    resultado[especie].totalEpisodios / resultado[especie].cantidad;

  delete resultado[especie].totalEpisodios;
  }

  return resultado;
}
console.log(agrupadoPorEspecie(personajePrueba));