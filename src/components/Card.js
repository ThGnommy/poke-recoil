import React from "react";
import { useRecoilValue } from "recoil";
import { pokemonName, pokemonTypes, pokemonUrlImg } from "../atoms";

export const Card = () => {
  const name = useRecoilValue(pokemonName);
  const urlImg = useRecoilValue(pokemonUrlImg);
  const types = useRecoilValue(pokemonTypes);

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={urlImg} alt={name} />
      <div className="types">
        {types.map(({ type }) => (
          <p key={type.name}>{type.name}</p>
        ))}
      </div>
    </div>
  );
};
