import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../helpers/getPokemonInfo";
import { useEffect, useState } from "react";
import { IPokeData } from "./PokemonPage";

export const Hola = () => {
   const initialState = {
      name: "",
      sprites: {
         front_default: "",
         back_default: "",
      },
   };
   const [pokemonData, setPokemonData] = useState<IPokeData>(initialState);
   const params = useParams();
   const pokemonName = params.id;
   useEffect(() => {
      const fetchingData = async () => {
         const pokemonInfo = await getPokemonInfo(`${pokemonName}`);
         setPokemonData(pokemonInfo);
      };

      fetchingData();
   }, []);

   const { name, sprites } = pokemonData;
   return (
      <div>
         <img src={`${sprites.front_default}`} alt={`Imagen del pokemon ${name}`} />
         <h1>{name}</h1>
      </div>
   );
};
