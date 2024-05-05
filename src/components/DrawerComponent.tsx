import React, { useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  useSelect,
} from "@material-tailwind/react";
import { useState } from "react";
import { getLocalStorage, removeFromLocalStorage } from "./PokegoComponent";
import { Ipokemon } from "../Interfaces/Interfaces";

interface DrawerProps {
  isFav: boolean,
  onPokeSelect: (pokemon: Ipokemon) => void; // Define onPokemonSelect prop
}

export function DrawerComponent({ isFav, onPokeSelect }: DrawerProps) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // call local storage function in here and display it

  const [favPokemon, setFavPokemon] = useState<Ipokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Ipokemon | null>(null);


  useEffect(() => {
    const favorites = getLocalStorage();
    console.log("Favorites", favorites)
    setFavPokemon(favorites);
  }, [isFav])
  

  const handleRemove = (id: number) => {
    removeFromLocalStorage(id);
    const updatedFavPokemon = favPokemon.filter(p => p.id !== id);
    setFavPokemon(updatedFavPokemon);
}

const handlePokemonSelect = (pokemon: Ipokemon) => {
  onPokeSelect(pokemon);
  closeDrawer();
};

  return (
    <>
      <Button className="text-white lowercase font-mainFont bg-favBtn hover:bg-favBtnHover text-3xl font-bold rounded-2xl px-5 py-2.5 m-1" onClick={openDrawer} placeholder={undefined}>favorites</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-favMenu" placeholder={"pokemon"}>
        <div className="mb-6 flex items-center justify-between">
          <Typography className="underline font-mainFont text-5xl text-white" placeholder={"pokemon"} variant="h5" color="blue-gray">
            favorites
          </Typography>
          <IconButton placeholder={"pokemon"} variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div>

          <div>
            {favPokemon && favPokemon.map((pokemon, index) => (
              <div onClick={() => handlePokemonSelect(pokemon)} className="my-2">
              <div className="bg-white font-mainFont text-xl py-2 px-5 rounded-lg drop-shadow-md" key={index}>
                <div className="flex justify-between font-bold">
                  <span className="text-center">#{pokemon ? pokemon.id : 'N/A'}</span>
                  <span className="text-center"> {pokemon ? pokemon.name : 'N/A'}</span>
                  <span>
                    <button onClick={() => handleRemove(pokemon.id)} className="hover:bg-blue-gray-100 rounded-lg w-10">
                      x
                    </button>
                  </span>
                </div>
              </div>
              </div>
            ))}

          </div>

        </div>

      </Drawer>
    </>
  );
}