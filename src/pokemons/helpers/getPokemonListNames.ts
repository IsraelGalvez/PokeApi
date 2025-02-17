import { getPokemonInfo } from "./getPokemonInfo";

export const getPokeListNames = async (numPokemon: number = 20) => {
   try {
      const promises = [];
      for (let i = 1; i <= numPokemon; i++) {
         const pokemon = getPokemonInfo(`${i}`);
         promises.push(pokemon);
      }
      const pokemonData = await Promise.all(promises);
      return pokemonData;
   } catch (error) {
      throw new Error(`Error al obtener la información de la api: ${error}`);
   }
};
