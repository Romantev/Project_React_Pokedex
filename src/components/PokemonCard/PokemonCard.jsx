import "./PokemonCard.css";
import { Link } from 'react-router-dom';


const PokemonCard = ({name, image, idPokemon}) => {
  
  return <>
  <section className="wrapperHome">
    <Link to={"./detail-site"} className="link">
      <div className="pokemonCardHome">
        <img src={image} alt={name} />
        <section className='info-Pokemon'>
          <p>{name}</p>
          <p>{idPokemon < 10 ? '#00' : idPokemon < 100 ? '#0' : '#'}
          {idPokemon}</p>
          <p>{name}</p>
        </section>
        </div>
        </Link>  
  </section>
  </>;
};
export default PokemonCard;