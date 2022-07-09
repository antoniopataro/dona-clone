import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../context/ContextProvider";

import ColorPicker from "../ColorPicker";

export interface CategoryProps {
  taskAmout: number;
  title: string;
  slug: string;
  color: string;
}

interface CategoryComponentProps {
  category: CategoryProps;
}

import removeIcon from "../../assets/removeIcon.svg";

import CategoryStyles from "./styles";

function Category({ category }: CategoryComponentProps) {
  const { categories, setCategories, setPath, tasks, setTasks, path } = useContext(Context);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [color, setColor] = useState("008FFD");
  const [isSelectingColor, setIsSelectingColor] = useState(false);
  const [isHavingColorUpdated, setIsHavingColorUpdated] = useState("");

  function handleChangePath(slug: string) {
    setPath(slug);
  }

  function handleRemoveCategory(slug: string, e: React.MouseEvent) {
    e.stopPropagation();

    if (slug === "/") return;

    setBeingRemoved(slug);

    setTimeout(() => {
      removeCategory(slug);
      removeTasks(slug);
    }, 250);

    setPath("/");
  }

  const removeCategory = (slug: string) => {
    const categoryRemovedArray = categories.filter((category) => category.slug !== slug);

    setCategories(categoryRemovedArray);
  };

  const removeTasks = (slug: string) => {
    const taskRemovedArray = tasks.filter((task) => task.category !== slug);

    setTasks(taskRemovedArray);
  };

  function handleUpdateColor(slug: string, e: React.MouseEvent) {
    e.stopPropagation();

    setIsSelectingColor(!isSelectingColor);

    setIsHavingColorUpdated(slug);
  }

  const updateCategoryColor = useEffect(() => {
    setCategories(
      categories.map((category) => {
        if (category.slug === isHavingColorUpdated) {
          return { ...category, color: color };
        }
        return category;
      }),
    );
  }, [color]);

  return (
    <CategoryStyles
      beingRemoved={beingRemoved === category.slug}
      activeCategory={category.slug === path}
      onClick={() => handleChangePath(category.slug)}
    >
      <div className="left">
        <span onClick={(e) => handleUpdateColor(category.slug, e)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="1.25"
              y="1.25"
              width="12.5"
              height="12.5"
              rx="4.75"
              stroke={`#${category.color}`}
              strokeWidth="2.5"
            />
          </svg>
        </span>
        <h3>{category.title}</h3>
        <ColorPicker
          setColor={setColor}
          isSelectingColor={isSelectingColor}
          setIsSelectingColor={setIsSelectingColor}
        />
      </div>
      <span className="task-amout">
        <h4>{category.taskAmout}</h4>
        {category.slug !== "/" && (
          <button className="remove-category" onClick={(e) => handleRemoveCategory(category.slug, e)}>
            <img src={removeIcon} alt="Remove Category" width={12} />
          </button>
        )}
      </span>
    </CategoryStyles>
  );
}

export default Category;
