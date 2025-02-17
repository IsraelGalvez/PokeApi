import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonPage } from "../pages/PokemonPage";
import { Hola } from "../pages/Hola";

export const PokemonRoutes = () => {
   return (
      <Routes>
         <Route path="pokemon" element={<PokemonPage />} />
         <Route path="pokemon/:id" element={<Hola />} />

         <Route path="/" element={<Navigate to="pokemon" />} />
      </Routes>
   );
};
