import { useEffect, useState } from "react";
import { pokeEvolve, pokeSpecies, pokemonApi } from "../DataServices/DataServices";
import { DrawerComponent } from "./DrawerComponent";
import { Ievolutionchain, Ilocationarea, Ipokemon } from "../Interfaces/Interfaces";
import { pokeLocation } from "../DataServices/DataServices";

export const PokegoComponent = () => {

    const [pokemon, setPokemon] = useState<Ipokemon>();
    const [pokeLoca, setPokeLoca] = useState<Ilocationarea[]>();
    const [pokeEvo, setPokeEvo] = useState<Ievolutionchain[]>([]);
    const [pokeSearch, setPokeSearch] = useState<string>("");
    const [pokeOrig, setPokeOrig] = useState(false);
    const [pokeShiny, setPokeShiny] = useState(false);
    

    const handleData = async (fetchedData: Ipokemon) => {

        if (fetchedData) {
            setPokemon(fetchedData)

            const findHere = await pokeLocation(fetchedData.location_area_encounters);
            setPokeLoca(findHere);

            const species = await pokeSpecies(fetchedData.species.url)
            const evolution = await pokeEvolve(species.evolution_chain.url)
            // console.log(evolution)
            setPokeEvo([evolution])
        } else {
            alert("please enter pokemons generation 1-5 only!")
        }
    }

    const handlePokeSearch = async () => {

        // call the fetch, check if the pokemons id is greater than 650, if so do the alert, else display pokemon

        let numberSearch = parseInt(pokeSearch);

        if (!isNaN(numberSearch) && numberSearch >= 1 && numberSearch <= 650) {
            const fetchedData = await pokemonApi(numberSearch.toString());

            if (fetchedData && fetchedData.id === numberSearch) {
                handleData(fetchedData)
            } else {
                alert("please only enter pokemons 1-5 only!")
            }

        } else {
            const fetchedData = await pokemonApi(pokeSearch.toLowerCase());

            if (fetchedData && fetchedData.name.toLowerCase() === pokeSearch.toLowerCase()) {
                handleData(fetchedData)
            } else {
                alert("please only enter pokemons 1-5 only!")
            }


        }
    }


    const getEvoChain = () => {
        if (pokeEvo.length == 0) {
            return "chain goes here!"
        } else {
            const chain = [pokeEvo[0].chain.species.name, ...pokeEvo[0].chain.evolves_to.map(ev => ev.species.name)].join(", ");

            return chain;
        }
    }

    const handleRandom = async () => {

        const random = Math.floor(Math.random() * 650)

        const fetchedData = await pokemonApi(random.toString());
        setPokemon(fetchedData);

        const findHere = await pokeLocation(fetchedData.location_area_encounters);
        setPokeLoca(findHere);

        const species = await pokeSpecies(fetchedData.species.url)
        const evolution = await pokeEvolve(species.evolution_chain.url)
        // console.log(evolution)
        setPokeEvo([evolution])

    }

    const original = () => {
        setPokeOrig(true);
        setPokeShiny(false);
    }

    const shiny = () => {
        setPokeShiny(true);
        setPokeOrig(false);
    }

    const showPokeImg = () => {

        if (pokeShiny && pokemon?.sprites.other['official-artwork'].front_shiny) {
            return pokemon.sprites.other['official-artwork'].front_shiny
        } else {
            return pokemon?.sprites.other['official-artwork'].front_default;
        }

    }

    const handleFavHeart = (pokemon: Ipokemon) => {
        saveToLocalStorage(pokemon);
    }

    const saveToLocalStorage = (pokemon: Ipokemon) => {
        let favorites = getLocalStorage();

        const pokeName = pokemon;

        if (!favorites.includes(pokeName)) {
            favorites.push(pokeName);
        }

        localStorage.setItem("Favorites", JSON.stringify(favorites));
    }


    return (
        <div className='bgImage'>

            {/* TITLE HEADER */}
            <div>
                <div className='flex justify-center'>
                    <span className='mt-10 font-mainFont font-bold bg-mainColor text-black text-7xl me-2 p-3 rounded-2xl'>
                        POKEGO!!
                    </span>
                </div>
            </div>

            {/* RANDOM, FAVORITES, SEARCH INPUT & SEARCH BTN */}
            <div className="grid lg:grid-cols-6 mt-10 mx-5 md:grid-cols-4 sm:grid-cols-2">
                <button onClick={handleRandom} type="button" className="text-white font-mainFont bg-randomBtn hover:bg-randomBtnHover text-3xl font-bold rounded-2xl px-5 py-2.5 m-1"> random
                </button>

                <DrawerComponent />

                <div className="hidden lg:block"></div>
                <div className="hidden lg:block"></div>


                <input value={pokeSearch} onChange={(e) => setPokeSearch(e.target.value)} type="text" className="font-mainFont text-xl rounded-2xl border-0 h-14 m-1" placeholder="search pokemon" />

                <button onClick={handlePokeSearch} type="button" className="text-white font-mainFont bg-searchBtn hover:bg-searchBtnHover text-3xl font-bold rounded-2xl px-5 py-2.5 m-1"> search
                </button>

            </div>

            {/* POKENAME, INDEX NUMBER, FAV BUTTON, IMAGE, SHINY BTN */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-5 mt-5">
                <div className="bg-mainColor rounded-2xl font-bold p-8 mb-5 m-2">
                    {/* POKEMON INFO */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-rows-1 sm:grid-cols-3">

                        {/* INDEX NUMBER */}
                        <div>
                            <span className="font-mainFont font-bold text-2xl">#</span>
                            <span className="font-mainFont font-bold text-2xl">{pokemon && pokemon.id}</span>
                        </div>

                        {/* POKEMON NAME */}
                        <p className="font-mainFont text-4xl font-bold uppercase flex justify-center">
                            {pokemon && pokemon.name}
                        </p>

                        {/* FAVORITE BUTTON */}
                        <div className="flex justify-end">
                            <button onClick={() => pokemon && handleFavHeart(pokemon)} className="favHeart favHeartBtn">
                            </button>
                        </div>

                        <div></div>



                    </div>

                    {/* POKEMON IMAGE */}
                    <div className="flex justify-center">
                        {/* <img className="pokeImg" src={pokemon && pokemon.sprites.other["official-artwork"].front_default} alt="pokemon image" /> */}
                        <img src={showPokeImg()} alt="pokemon image" />
                    </div>

                    <div className="flex justify-end mt-10">
                        <div>
                            {/* ORIGINAL IMAGE BUTTON */}
                            <button onClick={original} className="text-black font-mainFont bg-origBtn hover:bg-origBtnHover focus:bg-origBtnHover text-2xl font-bold rounded-2xl px-5 py-1 mr-5">
                                original
                            </button>

                            {/* SHINY IMAGE BUTTON */}
                            <button onClick={shiny} className="text-black font-mainFont bg-shinyBtn hover:bg-shinyBtnHover focus:bg-shinyBtnHover text-2xl font-bold rounded-2xl px-5 py-1 ">
                                shiny
                            </button>
                        </div>
                    </div>
                </div>


                {/* POKEMON ELEMENTS, LOCATION, ABILITIES, MOVES */}
                <div className="bg-mainColor rounded-2xl p-8 mb-5 m-2">

                    <div className="font-mainFont text-4xl">
                        <span className="font-bold">elements: </span>
                        <span>{pokemon && pokemon.types.map(element => element.type.name).join(", ")}</span>
                    </div>

                    <br />

                    <div className="font-mainFont text-4xl">
                        <span className="font-bold">find me here: </span>
                        <span>{pokeLoca && pokeLoca.length > 0 ? pokeLoca[0].location_area.name : "no location!"}</span>
                    </div>

                    <br />

                    <div className="font-mainFont text-4xl">
                        <span className="font-bold">abilities: </span>
                        <span>{pokemon && pokemon.abilities.map(element => element.ability.name).join(", ")}</span>
                    </div>

                    <br />

                    <div className="font-mainFont text-4xl overflow-y-scroll h-96">
                        <span className="font-bold">moves: </span>
                        <span>{pokemon && pokemon.moves.map(element => element.move.name).join(", ")}</span>
                    </div>

                </div>
            </div>

            {/* EVOLUTIONARY PATH */}
            <div className="flex justify-center mt-5">
                <div className="bg-mainColor p-8 font-mainFont font-bold text-3xl rounded-2xl w-auto ml-5 mr-5 mb-5">
                    <span>evolutionary path:</span>

                    <div>
                        <span>{getEvoChain()}</span>
                    </div>
                </div>
            </div>



        </div>



    )
}

export const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData)
}

export const removeFromLocalStorage = (pokemon: Ipokemon) => {
    let favorites = getLocalStorage();

    const pokeName = pokemon;


    let namedIndex = favorites.indexOf(pokeName);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

export default PokegoComponent;


