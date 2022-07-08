import React, { useContext, useState } from "react";

import { Context } from "../../context/ContextProvider";

export interface CategoryProps {
  taskAmout: number;
  title: string;
  slug: string;
}

interface CategoryComponentProps {
  category: CategoryProps;
}

import removeIcon from "../../assets/removeIcon.svg";
import donaBlue from "../../assets/donaBlue.svg";
import donaOrange from "../../assets/donaOrange.svg";
import donaGreen from "../../assets/donaGreen.svg";
import donaGray from "../../assets/donaGray.svg";

import CategoryStyles from "./styles";

function Category({ category }: CategoryComponentProps) {
  const { categories, setCategories, setPath, tasks, setTasks } = useContext(Context);

  const [beingRemoved, setBeingRemoved] = useState("");

  function handleRemoveCategory(slug: string) {
    if (slug === "/") return;

    setBeingRemoved(slug);

    setTimeout(() => {
      removeCategory(slug);
    }, 150);

    removeTasks(slug);
  }

  const removeCategory = (slug: string) => {
    setCategories(
      categories.filter((category) => {
        if (category.slug === slug) {
          return;
        }
        return category;
      }),
    );
  };

  const removeTasks = (slug: string) => {
    setTasks(
      tasks.filter((task) => {
        if (task.category === slug) {
          return;
        }
        return task;
      }),
    );
  };

  const handleIcon = () => {
    switch (category.slug) {
      case "/":
        return donaBlue;
      case "/work":
        return donaOrange;
      case "/studies":
        return donaGreen;
      default:
        return donaGray;
    }
  };

  return (
    <CategoryStyles
      onClick={() => setPath(category.slug)}
      style={beingRemoved === category.slug ? { opacity: "0", transform: "translateY(-10px)" } : {}}
    >
      <div className="left">
        <img src={handleIcon()} alt="" width={15} />
        <h3>{category.title}</h3>
      </div>
      <span className="task-amout">
        <h4>{category.taskAmout}</h4>
        {category.slug !== "/" && (
          <button className="remove-category" onClick={() => handleRemoveCategory(category.slug)}>
            <img src={removeIcon} alt="Remove Category" width={12} />
          </button>
        )}
      </span>
    </CategoryStyles>
  );
}

export default Category;
