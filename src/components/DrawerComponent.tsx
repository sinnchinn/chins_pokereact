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


export function DrawerComponent() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // call local storage function in here and display it

  const [favPokemon, setFavPokemon] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    const favorites = getLocalStorage();
    console.log("Favorites", favorites)
    setFavPokemon(favorites);
  }, [])


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
            {favPokemon.map((pokemon, index) => (
              <div className="bg-white font-mainFont text-lg" key={index}>
                <div className="flex justify-evenly font-bold">
                  <span>{pokemon.id}</span>
                  <span>{pokemon.name}</span>
                  {/* <button onClick={() => removeFromLocalStorage(pokemon)}> - </button> */}
                </div>

              </div>
            ))}

          </div>

        </div>

      </Drawer>
    </>
  );
}