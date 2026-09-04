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
function clasificarPorEpisodios(personajes) {
  const resultado = personajes.reduce((acc, personaje) => {
    const episodios = personaje.cantidadEpisodios;
    let rango;

    if (episodios >= 1 && episodios <= 5) {
      rango = "1-5";
    } else if (episodios >= 6 && episodios <= 15) {
      rango = "6-15";
    } else if (episodios >= 16 && episodios <= 30) {
      rango = "16-30";
    } else if (episodios > 30) {
      rango = "30+";
    }

    acc[rango] = (acc[rango] || 0) + 1;

    return acc;
  }, {});

  return resultado;
}
console.log(agrupadoPorEspecie(personajePrueba));
console.log(clasificarPorEpisodios(personajePrueba));