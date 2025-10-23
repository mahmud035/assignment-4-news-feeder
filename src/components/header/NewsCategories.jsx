import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import { SearchContext } from '../../contexts/SearchContext';
import { categoryNames } from '../../data/category-name';

const NewsCategories = ({ setKeyword }) => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSelectCategory = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      setSearchTerm('');
      setKeyword('');
    }
    setSelectedCategory(e.target.innerText.toLowerCase());
  };

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        {categoryNames.map((category) => (
          <li key={category}>
            <a
              onClick={(e) => handleSelectCategory(e)}
              href="#"
              className={`capitalize ${
                !searchTerm && selectedCategory === category
                  ? 'text-[#00d991]'
                  : null
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategories;
