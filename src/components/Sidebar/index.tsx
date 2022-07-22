import React, { useContext, useRef } from "react";

import { Droppable, Draggable, DragDropContext, DropResult } from "react-beautiful-dnd";

import Category from "../Category";

import useShortcut from "../../hooks/useShortcut";

import { PathContext } from "@contexts/PathContext";
import { CategoriesContext } from "@contexts/CategoriesContext";

import addIcon from "@assets/addIcon.svg";

import SidebarStyles from "./styles";

import { lightTheme } from "../../App";

function Sidebar() {
  const { categories, addCategory, changeCategoriesOrder } = useContext(CategoriesContext);
  const { changePath } = useContext(PathContext);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddCategory(e: React.FormEvent) {
    e.preventDefault();

    const title = inputRef.current?.value;

    if (!title) return;
    if (categories.map((category) => category.title).includes(title)) return;

    const slug = "/" + title.toLowerCase().replace(" ", "-");

    const category = {
      title: title,
      slug: slug,
      color: "6D6D6D",
    };

    addCategory(category);
    formRef.current?.reset();
    changePath(slug);
  }

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

  function handleChangeCategoriesOrder(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    changeCategoriesOrder(items);
  }

  return (
    <SidebarStyles theme={lightTheme}>
      <DragDropContext onDragEnd={handleChangeCategoriesOrder}>
        <Droppable droppableId="droppable-categories">
          {(provided) => (
            <nav {...provided.droppableProps} ref={provided.innerRef}>
              {categories.map((category, index) => (
                <Draggable key={category.slug} draggableId={category.slug} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      id="category-outer-div"
                    >
                      <Category
                        category={{
                          title: category.title,
                          slug: category.slug,
                          color: category.color,
                        }}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </nav>
          )}
        </Droppable>
      </DragDropContext>
      <form id="add-category-form" onSubmit={handleAddCategory} noValidate ref={formRef}>
        <span>
          <img src={addIcon} alt="Choose Icon" width={15} />
        </span>
        <input type="text" placeholder="Create new category..." ref={inputRef} />
      </form>
    </SidebarStyles>
  );
}

export default Sidebar;
