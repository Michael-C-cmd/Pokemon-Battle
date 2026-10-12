const fetchRndPokemon = async (rndNum, retries = 0, delay = 1000) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${rndNum}`;
  const controller = new AbortController();
  const abortTimeout = setTimeout(() => {
    controller.abort();
  }, delay);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(abortTimeout);
    if (!response.ok) {
      throw new Error(`Error while loading the data!`);
    }
    const result = await response.json();
    return {
      id: result.id,
      name: result.name,
      hp: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
    };
  } catch (error) {
    clearTimeout(abortTimeout);
    if (retries <= 3) {
      return fetchRndPokemon(rndNum, retries + 1, delay * 2);
    }
    throw new Error(error.message);
  }
};

export const fetchFighters = async (numArr) => {
  const results = await Promise.all(numArr.map((num) => fetchRndPokemon(num)));
  return results;
};
