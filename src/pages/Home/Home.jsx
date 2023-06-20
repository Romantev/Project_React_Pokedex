import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
  const [workData, setWorkData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((data) => {
        setWorkData(data.results);
      });
  }, []);

  return (
    <>
      <section>
        <Header />
        <div className="wrapperHome">
          {workData?.map((onePokemon, index) => {
            return <PokemonCard key={index} name={onePokemon.name} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
