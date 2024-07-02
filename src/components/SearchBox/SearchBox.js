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
          value={query}
          onChange={handleInputChange}
          style={{ padding: '4px', fontSize: '16px', width: '232px' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '0px', fontSize: '12px', marginLeft: '2px' }}
        >
          Search
        </button>
      </div>
	  </>
	);
  }
  
  export default SearchBox;
  