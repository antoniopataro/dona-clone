import React, { useState, useContext, useRef } from "react";

import { Context } from "../../context/ContextProvider";

import Category from "../Category";

import useShortcut from "../../hooks/useShortcut";

import addIcon from "../../assets/addIcon.svg";

import SidebarStyles from "./styles";

import { lightTheme } from "../../App";

function Sidebar() {
  const { categories, setCategories, setPath, user } = useContext(Context);

  const [title, setTitle] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddCategory(e: React.FormEvent) {
    e.preventDefault();

    if (!title) return;
    if (categories.map((category) => category.title).includes(title)) return;

    addCategory();

    setTitle("");
    switchToNewCategory();
  }

  const addCategory = () => {
    const slug = "/" + title.toLowerCase().replace(" ", "-");

    const category = {
      taskAmout: 0,
      title: title,
      slug: slug,
      color: "6D6D6D",
    };

    setCategories([...categories, category]);
  };

  const switchToNewCategory = () => {
    const slug = "/" + title.toLowerCase().replace(" ", "-");
    setPath(slug);
  };

  const shortcuts = [
    {
      ctrlKey: true,
      key: "D",
      handler: () => inputRef.current?.focus(),
    },
    {
      ctrlKey: false,
      key: "Escape",
      handler: () => inputRef.current?.blur(),
    },
  ];

  useShortcut(shortcuts);

  return (
    <SidebarStyles theme={lightTheme}>
      <nav>
        {categories.map((category) => (
          <Category
            key={category.slug}
            category={{
              taskAmout: category.taskAmout,
              title: category.title,
              slug: category.slug,
              color: category.color,
            }}
          />
        ))}
      </nav>
      <form onSubmit={handleAddCategory} noValidate>
        <img src={addIcon} alt="Choose Icon" width={15} />
        <input
          type="text"
          placeholder="Create new category..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={inputRef}
        />
      </form>
    </SidebarStyles>
  );
}

export default Sidebar;
