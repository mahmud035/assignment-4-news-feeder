import { useContext } from 'react';
import placeholderImage from '../../assets/placeholder-image.svg';
import { SearchContext } from '../../contexts/SearchContext';
import { getFormattedDate } from '../../utils/date-time-utils';

const RelatedNewsCard = ({ news, index }) => {
  const { title, description, publishedAt, urlToImage } = news || {};
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {index === 0 && (
        <img
          className="w-full lg:h-[270px]"
          src={urlToImage ? urlToImage : placeholderImage}
          alt="Image"
        />
      )}
      {/* info  */}
      <div
        className={`col-span-12 md:col-span-4 ${index === 0 ? 'mt-6' : 'mt-1'}`}
      >
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
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
          {description?.length > 45
            ? `${description?.slice(0, 45)}...`
            : description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
