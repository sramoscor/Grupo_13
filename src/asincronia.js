function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerNumeroDePaginas() {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  const datos = await respuesta.json();
  return datos.info.pages;
}

async function consultaSecuencial() {
  console.time("Secuencial");

  const totalPaginas = await obtenerNumeroDePaginas();
  let todosLosPersonajes = [];

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
    let respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);

    while (respuesta.status === 429) {
      console.log(`Página ${pagina} bloqueada temporalmente (429), esperando...`);
      await esperar(1000);
      respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    }

    if (!respuesta.ok) {
      console.log(`Error en página ${pagina}: status ${respuesta.status}`);
      continue;
    }

    const datos = await respuesta.json();
    todosLosPersonajes = todosLosPersonajes.concat(datos.results);
  }

  console.timeEnd("Secuencial");
  console.log("Total personajes (secuencial):", todosLosPersonajes.length);

  return todosLosPersonajes;
}

async function obtenerPaginaConReintento(pagina) {
  let respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);

  while (respuesta.status === 429) {
    await esperar(1000);
    respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
  }

  const datos = await respuesta.json();
  return datos.results;
}

export async function consultaConcurrente() {
  console.time("Concurrente");

  const totalPaginas = await obtenerNumeroDePaginas();

  const promesas = [];
  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
    promesas.push(obtenerPaginaConReintento(pagina));
  }

  const resultados = await Promise.all(promesas);
  const todosLosPersonajes = resultados.flat();

  console.timeEnd("Concurrente");
  console.log("Total personajes (concurrente):", todosLosPersonajes.length);

  return todosLosPersonajes;
}