import { Ievolutionchain, Ilocationarea, Ipokemon, Ispecies } from "../Interfaces/Interfaces";

export const pokemonApi = async (pokemon: string) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data: Ipokemon = await promise.json();
    console.log(data)
    return data;
}


export const pokeSpecies = async (species: string) => {
    const promise = await fetch(species);
    const data: Ispecies = await promise.json();
    return data;
}

export const pokeEvolve = async (evolution: string) => {
    const promise = await fetch(evolution);
    const data: Ievolutionchain = await promise.json();
    return data;
}

export const pokeLocation = async (pokemonArea: string) => {
    const promise = await fetch(pokemonArea);
    const data: Ilocationarea[] = await promise.json()
    return data;
}
