import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const Home = () => {
  const [workData, setWorkData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState();
 const [filterType, setFilterType] = useState([]);
 
  useEffect(() => {
    let ignore = false;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          data.results.map((item, i) => {
            fetch(item.url)
              .then((res) => res.json())
              .then((pokeData) => setWorkData((prev) => [...prev, pokeData]));
          });
        }
      })
      .catch((error) => {
        console.log("Fehler", error);
      });
    return () => {
      ignore = true;
    };
  }, []);

  const searchForPokemon = (elm) => {
    return elm.name.includes(searchPokemon)
      ? elm
      : elm.id.toString().includes(searchPokemon)
      ? elm
      : null;
  };

  const filterMe = (item) => {
    const var1 =filterType.some((filter) => item.types[0].type.name.includes(filter))

    if (item.types.length === 2) {
      const var2 = filterType.some((filter) => item.types[1].type.name.includes(filter))

      return var1&&var2&&filterType.length===2?item:null
    }
    return var1&&filterType.length===1?item:null
  }
/*     return filterType.some((filter) => item.types.some((type) => type.type.name.includes(filter)?true:false)?true:false)?item:null}; */
  

  const sortMe = (a,b) => a.id - b.id;


  return (
    <>
      <section>
        <Header data={workData} setFilterType={setFilterType} search={setSearchPokemon} />
        <article className="wrapperHome">
          {workData
            ?.sort(sortMe)
            .filter(searchPokemon ? searchForPokemon : () => workData).filter(filterType.length !== 0?filterMe:() => workData)
            .map((onePokemon, index) => {
              return (
                <PokemonCard
                  key={index}
                  image={
                    onePokemon.sprites.other.home.front_default
                      ? onePokemon.sprites.other.home.front_default
                      : onePokemon.sprites.front_default
                  }
                  idPokemon={onePokemon.id}
                  name={onePokemon.name}
                />
              );
            })}
        </article>
      </section>
    </>
  );
};

export default Home;
