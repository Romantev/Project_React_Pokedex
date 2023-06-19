import "./PokemonCard.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


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
  <section className="wrapperHome">
    <Link to={"./detail-site"} className="link">
      <div className="pokemonCardHome">
        <img src={images} alt={props.name} className="img-Pokemon"/>
        <section className='info-Pokemon'>
          <p>{idPokemon < 10 ? '#00' : idPokemon < 100 ? '#0' : '#'}
          {idPokemon}</p>
          <p>{props.name}</p>
        </section>
      </div>
    </Link>  
  </section>    
  </>;
};
export default PokemonCard;