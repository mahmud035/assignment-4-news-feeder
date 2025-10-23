import { createContext, useState } from 'react';

export const SearchContext = createContext('');

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchInfo = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchContext.Provider value={searchInfo}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
