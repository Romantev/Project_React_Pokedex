import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
 const [workData, setWorkData] = useState([]);
 const [filterType, setFilterType] = useState([]);
 
  useEffect(() => {
    let ignore = false
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
    .then((response) => response.json())
    .then((data) => {
      if (!ignore) {
      data.results.map((item, i) => {
          fetch(item.url)
          .then((res) => res.json())
          .then((pokeData) => setWorkData((prev) => [...prev, pokeData]))
      })}
    })
    .catch((error) => {
      console.log("Fehler", error);
    })
    return () => {
      ignore = true;
    };
  }, [])

  const filterMe = (item) => {
    return item.types.includes(filterType)?item:null
  }

  const sortMe = (a,b) => a.id - b.id;

  return (
    <>
      <section>
        <Header setFilterType={setFilterType} /> 
        <article className='wrapperHome'>
          {workData?.sort(sortMe).filter(filterType.length !== 0?filterMe:() => workData).map((onePokemon, index) => {
            return (
              <PokemonCard key={index} image={onePokemon.sprites.other.home.front_default?onePokemon.sprites.other.home.front_default:onePokemon.sprites.front_default} idPokemon={onePokemon.id} name={onePokemon.name} />
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Home;
