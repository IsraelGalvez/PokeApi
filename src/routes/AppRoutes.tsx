import { Route, Routes } from "react-router-dom";
import { PokemonRoutes } from "../pokemons/routes/PokemonRoutes";

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/*" element={<PokemonRoutes />} />
      </Routes>
   );
};
