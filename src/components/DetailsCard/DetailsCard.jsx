import "./DetailsCard.css";
import { useEffect, useState } from "react";

import BtnType from "../BtnType/BtnType";

const DetailsCard = () => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  console.log(pokemonData);

  return (
    <>
      {pokemonData ? (
        <main className="details-card">
          <img src={pokemonData.sprites.other.home.front_default} alt="" />
          <div className="details-card-name">
            <h2>#{pokemonData.id}</h2>
            <h2>{pokemonData.name}</h2>
          </div>
          <div className="details-card-characteristics">
            <h3>Höhe: {pokemonData.height / 10}m</h3>
            <h3>Gewicht: {pokemonData.weight / 10}kg</h3>
          </div>
          <div className="details-card-types">
            {pokemonData.types.map((elm, index) => {
              <BtnType item={elm} key={index} />;
            })}
          </div>
        </main>
      ) : (
        "Seite muss geladen werden"
      )}
    </>
  );
};

export default DetailsCard;
