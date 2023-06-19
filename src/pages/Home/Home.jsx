import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const Home = () => {
  
  const [workData, setWorkData] = useState();
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    .then((response) => response.json())
    .then((data) => {
      setWorkData(data.results)
      //console.log(data.results);
      //console.log(workData);
      
/*       workData.map((element, index) => {
        fetch(element.url)
        .then((response) => response.json())
        .then((dataImg) => {
          //console.log(dataImg);

        })
        .catch((error) => {
          console.log("Fehler", error);
        })
      }) */
    })
  }, [])

  return (
    <>
      <section>
        <Header/> 
        <div className='wrapperHome'>
          {workData?.map((onePokemon, index) => {
            return (
              <PokemonCard key={index} name={onePokemon.name} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
