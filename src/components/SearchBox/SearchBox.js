import {useState} from 'react';
  
const SearchBox = () =>  {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    alert(`You searched for: ${query}`);
  };
return (
  <>
  <div>
      <input
        type="text"
        placeholder='search'
        value={query}
        onChange={handleInputChange}
        style={{ padding: '4px', fontSize: '16px', width: '232px', marginBottom: '5px', borderRadius:"0.5rem" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '3px', fontSize: '12px', marginLeft: '2px',borderRadius:"0.4rem"  }}
      >
        Search
      </button>
    </div>
  </>
);
}

export default SearchBox;
