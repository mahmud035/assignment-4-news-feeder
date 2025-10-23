import { useContext } from 'react';
import placeholderImage from '../../assets/placeholder-image.svg';
import { SearchContext } from '../../contexts/SearchContext';
import { getFormattedDate } from '../../utils/date-time-utils';

const TopNewsCard = ({ news }) => {
  const { title, description, publishedAt, urlToImage, author } = news || {};
  const { searchTerm } = useContext(SearchContext);

  return (
    <div className="grid grid-cols-12 col-span-12 gap-4">
      {/* info  */}
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
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
        <p className="text-base text-[#5C5955]">{description}</p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
      {/* thumb  */}
      <div className="col-span-12 lg:col-span-8">
        <img
          className="w-full lg:h-96 md:h-80"
          src={urlToImage ? urlToImage : placeholderImage}
          alt="Image"
        />
        <p className="mt-5 text-base text-[#5C5955]">
          Illustration: {author ? author : 'Anonymous'}
        </p>
      </div>
    </div>
  );
};

export default TopNewsCard;
