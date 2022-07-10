import React, { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext({} as CategoriesContextProps);

export interface CategoryProps {
  title: string;
  slug: string;
  color: string;
}

interface CategoriesContextProps {
  categories: CategoryProps[];
  addCategory: (category: CategoryProps) => void;
  removeCategory: (slug: string) => void;
  updateCategoryColor: (slugBeingUpdated: string, color: string) => void;
}

interface Props {
  children?: React.ReactNode;
}

const defaultCategory = [
  {
    taskAmout: 0,
    title: "Home",
    slug: "/",
    color: "008FFD",
  },
];

function CategoriesProvider({ children }: Props) {
  const initialCategories = JSON.parse(localStorage.getItem("userCategories") || JSON.stringify(defaultCategory));

  const [categories, setCategories] = useState<CategoryProps[]>(initialCategories);

  const addCategory = (category: CategoryProps) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const removeCategory = (slug: string) => {
    setCategories((prevCategories) => prevCategories.filter((category) => category.slug !== slug));
  };

  const updateCategoryColor = (slugBeingUpdated: string, color: string) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.slug === slugBeingUpdated) {
          return { ...category, color: color };
        }
        return category;
      }),
    );
  };

  const updateCategories = useEffect(() => {
    localStorage.setItem("userCategories", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoriesContext.Provider value={{ categories, addCategory, removeCategory, updateCategoryColor }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
