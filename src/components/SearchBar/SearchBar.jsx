import "./SearchBar.css";

const SearchBar = (props) => {
  const searchForPokemon = (event) => {
    props.search(event.target.value);
  };

  return (
    <>
      <input
        className="searchBar"
        onChange={() => searchForPokemon(event)}
        type="text"
        placeholder="Search for Name or ID"
      />
    </>
  );
};

export default SearchBar;
