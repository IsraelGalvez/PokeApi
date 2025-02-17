import { IPokeData, IPokemonImg } from "../pages/PokemonPage";
import { PokeCard } from "./PokeCard";

interface IPokemonList {
   pokemonData: IPokeData[];
}

export const PokeList: React.FC<IPokemonList> = ({ pokemonData }) => {
   return (
      <>
         {pokemonData.map((pokemon) => {
            const name = pokemon.name;
            const images: IPokemonImg = {
               front_default: pokemon.sprites.front_default,
               back_default: pokemon.sprites.back_default,
            };
            return <PokeCard name={name} images={images} key={`${name}`} />;
         })}
      </>
   );
};
