import { createContext } from 'react';
import useNewsQuery from '../hooks/useNewsQuery';

export const NewsContext = createContext('');

const NewsProvider = ({ children }) => {
  const { newsData, isLoading, isError } = useNewsQuery();

  const newsInfo = {
    newsData,
    isLoading,
    isError,
  };

  return (
    <NewsContext.Provider value={newsInfo}>{children}</NewsContext.Provider>
  );
};

export default NewsProvider;
