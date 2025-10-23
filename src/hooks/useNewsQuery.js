import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import { SearchContext } from '../contexts/SearchContext';

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);

  const url = searchTerm
    ? `http://localhost:8000/v2/search?q=${searchTerm}`
    : `http://localhost:8000/v2/top-headlines?category=${selectedCategory}`;

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorMessage = `Failed to fetch news data: ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();

        if (!ignore) {
          setNewsData(data?.articles || data?.result);
        }
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();

    // cleanup
    return () => {
      ignore = true;
    };
  }, [url]);

  return {
    newsData,
    isLoading,
    isError,
  };
};

export default useNewsQuery;
