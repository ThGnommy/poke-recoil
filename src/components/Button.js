import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import wretch from "wretch";
import { pokemonName, pokemonTypes, pokemonUrlImg } from "../atoms";

export const Button = () => {
  // eslint-disable-next-line
  const [name, setName] = useRecoilState(pokemonName);
  // eslint-disable-next-line
  const [url, setUrl] = useRecoilState(pokemonUrlImg);
  // eslint-disable-next-line
  const [types, setTypes] = useRecoilState(pokemonTypes);

  const getRandomPokemon = useCallback(async () => {
    let randomId = Math.floor(Math.random() * 151) + 1;
    const pokemon = await wretch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    )
      .get()
      .json((json) => {
        return json;
      })
      .catch((error) => {
        console.log(error);
      });
    setName(pokemon.name);
    setUrl(pokemon.sprites.front_default);
    setTypes(pokemon.types);
  }, [setName, setUrl, setTypes]);

  useEffect(() => {
    getRandomPokemon();
  }, [getRandomPokemon]);

  return <button onClick={getRandomPokemon}>Random Pokemon</button>;
};
