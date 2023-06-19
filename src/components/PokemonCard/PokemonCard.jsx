import "./PokemonCard.css";
//import { Link } from 'react-router-dom';


const PokemonCard = ({name, image, idPokemon}) => {
  
  return <>
  <div>
        <img src={image} alt={name} />
        <section className='info-Pokemon'>
          <p>{name}</p>
          <p>{idPokemon < 10 ? '#00' : idPokemon < 100 ? '#0' : '#'}
          {idPokemon}</p>
        </section>
  </div>
      
  </>;
};
export default PokemonCard;