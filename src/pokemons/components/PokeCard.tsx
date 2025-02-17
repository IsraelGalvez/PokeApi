import { useNavigate } from "react-router-dom";
import { IPokemonImg } from "../pages/PokemonPage";

interface IPokeCard {
   name: String;
   images: IPokemonImg;
}

export const PokeCard: React.FC<IPokeCard> = ({ name, images }) => {
   const navigate = useNavigate();
   return (
      <div
         onClick={() => {
            navigate(`../pokemon/${name}`);
         }}
      >
         <h1>{name}</h1>
         <img src={`${images?.front_default}`} alt={`Es una imagen del pokemon ${name}`} />
      </div>
   );
};
