import { Ipokemon } from '../Interfaces/Interfaces';
import { getLocalStorage } from '../components/PokegoComponent';

// Define the types
interface FavoritePokemon {
  id: number;
  name: string;
}

// Overloaded function signatures
export function removeFromLocalStorage(pokemon: FavoritePokemon): void;
export function removeFromLocalStorage(pokemon: Ipokemon): void;

// Actual implementation
export function removeFromLocalStorage(pokemon: FavoritePokemon | Ipokemon): void {
  let favorites = getLocalStorage();

  const pokeId = typeof pokemon === "number" ? pokemon : pokemon.id;
  const namedIndex = favorites.findIndex((fav: FavoritePokemon | Ipokemon) => {
    return (fav as FavoritePokemon).id === pokeId || (fav as Ipokemon).id === pokeId;
  });

  if (namedIndex !== -1) {
    favorites.splice(namedIndex, 1);
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }
}
