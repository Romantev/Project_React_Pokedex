import "./DetailSite.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Header from "../../components/Header/Header";

const DetailSite = () => {
  const [pokemonData, setPokemonData] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log("Fehlermeldung: ", error));
  }, []);

  console.log(pokemonData);

  return (
    <>
      <Header />
      <main className="details-site">
        <DetailsCard item={pokemonData} />
      </main>
    </>
  );
};

export default DetailSite;
