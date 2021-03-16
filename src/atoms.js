import { atom } from "recoil";

export const pokemonName = atom({
  key: "pokemonName",
  default: "",
});

export const pokemonUrlImg = atom({
  key: "pokemonUrlImg",
  default: "",
});

export const pokemonTypes = atom({
  key: "pokemonTypes",
  default: [],
});
