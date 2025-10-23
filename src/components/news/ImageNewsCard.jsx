import { useContext } from 'react';
import placeholderImage from '../../assets/placeholder-image.svg';
import { SearchContext } from '../../contexts/SearchContext';
import { getFormattedDate } from '../../utils/date-time-utils';

const ImageNewsCard = ({ news }) => {
  const { title, description, publishedAt, urlToImage } = news || {};
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="grid grid-cols-12 col-span-12 gap-4 lg:col-span-8">
      {/* info  */}
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
            {/* Apply color to matched searchTerm */}
            {searchTerm
              ? title.split(new RegExp(`(${searchTerm})`, 'i')).map((char, i) =>
                  char.toLowerCase() === searchTerm.toLowerCase() ? (
                    <span key={i} className="text-[#00d991]">
                      {char}
                    </span>
                  ) : (
                    <span key={i}>{char}</span>
                  )
                )
              : title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {description?.length > 80
            ? `${description?.slice(0, 80)}...`
            : description}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
      {/* thumb  */}
      <div className="col-span-12 md:col-span-6">
        <img
          className="w-full lg:h-44"
          src={urlToImage ? urlToImage : placeholderImage}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default ImageNewsCard;
