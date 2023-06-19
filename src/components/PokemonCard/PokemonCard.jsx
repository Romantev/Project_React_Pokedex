import "./PokemonCard.css";
import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';


const PokemonCard = (props) => {
  
  const [idPokemon, setIdPokemon] = useState([])
  const [images, setImages] = useState([])
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
    .then((response) => response.json())
    .then((dataPokemon) => {
      setIdPokemon(dataPokemon.id)
      console.log(dataPokemon);
      setImages(dataPokemon.sprites.other.home.front_default)
    })
  }, [props.name])

  

  return <>
      <div>
        <img src={images} alt={props.name} />
        <section className='info-Pokemon'>
          <p>{props.name}</p>
          <p>{idPokemon < 10 ? '#00' : idPokemon < 100 ? '#0' : '#'}
          {idPokemon}</p>
        </section>
      </div>
  </>;
};
export default PokemonCard;