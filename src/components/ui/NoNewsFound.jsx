import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

const NoNewsFound = () => {
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-167px)] -mt-24 mx-auto w-96 sm:w-[600px] md:w-[700px] lg:w-[800px]">
      <p className="p-8 text-3xl text-center text-black rounded-md bg-teal-50 ">
        No news found for:{' '}
        <span className="text-[#00d991]">{`"${searchTerm}"`}</span>
      </p>
    </div>
  );
};

export default NoNewsFound;
