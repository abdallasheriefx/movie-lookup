import searchIcon from '../assets/search.svg';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className='search-bar'>
        <img
          src={searchIcon}
          alt='Search Icon'
        />
        <input
          type='text'
          placeholder='Search Through 1000+ Movies Online'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p>{searchTerm}</p>
      </div>
    </>
  );
};

export default SearchBar;
