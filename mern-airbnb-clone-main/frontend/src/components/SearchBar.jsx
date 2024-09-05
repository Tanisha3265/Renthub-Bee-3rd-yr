import { useState } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ setPlaces }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?query=${query}`);
      setPlaces(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch()
        }}
        placeholder="Search for places..."
        className="flex-grow outline-none text-sm py-1 px-2 border border-gray-300 rounded-full"
      />
      <button onClick={handleSearch} className='bg-primary text-white px-2 rounded-full'>
        <MagnifyingGlassIcon className='w-4 h-4'/>
      </button>
    </div>
  );
};

export default SearchBar;
