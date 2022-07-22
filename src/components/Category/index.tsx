import React, { useContext, useState } from "react";

import { CategoriesContext, CategoryProps } from "@contexts/CategoriesContext";
import { PathContext } from "@contexts/PathContext";
import { TasksContext } from "@contexts/TasksContext";

import ColorPicker from "../ColorPicker";

interface CategoryComponentProps {
  category: CategoryProps;
}

import removeIcon from "@assets/removeIcon.svg";

import CategoryStyles from "./styles";

import { lightTheme } from "../../App";

function Category({ category }: CategoryComponentProps) {
  const { removeCategory, updateCategoryColor } = useContext(CategoriesContext);
  const { path, changePath } = useContext(PathContext);
  const { tasks, removeTask, updateTaskColor } = useContext(TasksContext);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [slugBeingUpdated, setSlugBeingUpdated] = useState("");
  const [isSelectingColor, setIsSelectingColor] = useState(false);
  const [clickPosition, setClickPosition] = useState({ top: 0, left: 0 });

  function handleRemoveCategory(slug: string, e: React.MouseEvent) {
    e.stopPropagation();

    if (slug === "/") return;

    waitForAnimationAndRemove(slug);

    changePath("/");
  }

  const waitForAnimationAndRemove = (slug: string) => {
    setBeingRemoved(slug);

    setTimeout(() => {
      removeCategory(slug);
      removeTasks(slug);
    }, 250);
  };

  const removeTasks = (slug: string) => {
    tasks.forEach((task) => (task.category.slug === slug ? removeTask(task.id) : ""));
  };

  function handleUpdateColor(slug: string, e: React.MouseEvent) {
    e.stopPropagation();

    const top = e.clientY;
    const left = e.clientX;

    setClickPosition({ top: top, left: left });

    setIsSelectingColor(!isSelectingColor);
    setSlugBeingUpdated(slug);
  }

  const updateColor = (color: string) => {
    setIsSelectingColor(false);
    updateCategoryColor(slugBeingUpdated, color);
    updateTaskColor(slugBeingUpdated, color);
  };

  const taskAmount = tasks.filter((task) => task.category.slug === category.slug).length;

  return (
    <CategoryStyles
      theme={lightTheme}
      beingRemoved={beingRemoved === category.slug}
      activeCategory={category.slug === path}
      onClick={() => changePath(category.slug)}
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
        {isSelectingColor && (
          <ColorPicker
            clickPosition={clickPosition}
            updateColor={updateColor}
            isSelectingColor={isSelectingColor}
            setIsSelectingColor={setIsSelectingColor}
          />
        )}
      </div>
      <span className="task-amout">
        <h4>{taskAmount}</h4>
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
