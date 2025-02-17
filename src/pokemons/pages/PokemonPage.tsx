import { useEffect, useState } from "react";
import { getPokeListNames } from "../helpers/getPokemonListNames";
import { PokeList } from "../components/PokeList";

export interface IPokemonImg {
   front_default: String;
   back_default: String;
}

export interface IPokeData {
   name: String;
   sprites: IPokemonImg;
}

export const PokemonPage = () => {
   const [pokemonData, setPokemonData] = useState<IPokeData[]>([]);

   useEffect(() => {
      const fetchingData = async () => {
         try {
            const pokemonData = await getPokeListNames();
            setPokemonData(pokemonData);
         } catch (error) {
            throw new Error(`Error al obtener la data ${error}`);
         }
      };

      fetchingData();
   }, []);

   console.log({ pokemonData });
   return (
      <div>
         <PokeList pokemonData={pokemonData} />
      </div>
   );
};
