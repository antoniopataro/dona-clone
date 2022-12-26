import React, { createContext, useState, useEffect, useContext } from "react";

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
  changeCategoriesOrder: (result: CategoryProps[]) => void;
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
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
  {
    taskAmout: 1,
    title: "Friends & Family",
    slug: "/friends",
    color: "000000",
  },
];

function CategoriesProvider({ children }: Props) {
  const initialCategories = JSON.parse(
    localStorage.getItem("userCategoriesDonaClone") || JSON.stringify(defaultCategory),
  );

  const [sidebarOpened, setSidebarOpened] = useState(false);

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

  const changeCategoriesOrder = (result: CategoryProps[]) => {
    setCategories(result);
  };

  const updateCategories = useEffect(() => {
    localStorage.setItem("userCategoriesDonaClone", JSON.stringify(categories));
  }, [categories]);

  return (
    <CategoriesContext.Provider
      value={{ categories, addCategory, removeCategory, updateCategoryColor, changeCategoriesOrder, sidebarOpened, setSidebarOpened}}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
