export const getPokemonInfo = async (id: string) => {
   const url = "https://pokeapi.co/api/v2/pokemon/";
   try {
      const response = await fetch(`${url}${id}`);
      if (!response.ok) throw new Error("Fallo la llamada al url");
      const data = response.json();
      return data;
   } catch (error) {
      throw new Error(`No se pudo compoletar la petición de la api ${error}`);
   }
};
