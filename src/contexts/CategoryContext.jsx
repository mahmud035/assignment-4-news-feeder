import { createContext, useState } from 'react';

export const CategoryContext = createContext('');

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categoryInfo = {
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <CategoryContext.Provider value={categoryInfo}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
