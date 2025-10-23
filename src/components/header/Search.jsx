import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import useDebounce from '../../hooks/useDebounce';
import CloseIcon from '../ui/CloseIcon';
import SearchIcon from '../ui/SearchIcon';

const Search = ({ keyword, setKeyword }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearchInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchInput]);

  const handleIconClick = () => {
    setShowSearchInput(!showSearchInput);
    if (searchTerm.length > 0 || keyword.length > 0) {
      setSearchTerm('');
      setKeyword('');
    }
  };

  //* Use Debounce for Searching
  const handleSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    handleSearch(value);
  };

  return (
    <div className="flex items-center h-10 gap-[1px]">
      {showSearchInput ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full transition duration-1000 ease-in-out lg:w-56"
        >
          <input
            ref={inputRef}
            value={keyword}
            onChange={handleChange}
            type="search"
            className={`z-20 block w-full px-4 py-2 text-white bg-[#00D991] rounded-full duration-[2000ms] placeholder:text-white transition ease-in-out focus:outline-none`}
            placeholder="Search News"
          />
        </form>
      ) : (
        <div className="w-full h-10 lg:w-56"></div>
      )}
      <button
        onClick={handleIconClick}
        className="h-full p-1 text-white transition duration-[2000ms] ease-in-out rounded-e-lg"
      >
        {showSearchInput ? <CloseIcon /> : <SearchIcon />}
      </button>
    </div>
  );
};

export default Search;
