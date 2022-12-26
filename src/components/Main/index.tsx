import React, { useRef, useContext, useState, useEffect } from "react";

import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { v4 as uuid } from "uuid";

import Task from "../Task";
import Select from "../Select";

import useShortcut from "../../hooks/useShortcut";

import { CategoriesContext, CategoryProps } from "@contexts/CategoriesContext";
import { PathContext } from "@contexts/PathContext";
import { TasksContext, TaskProps } from "@contexts/TasksContext";
import { UserContext } from "@contexts/UserContext";

import donaBlue from "@assets/donaBlue.svg";

import MainStyles from "./styles";

import { lightTheme } from "../../App";

import { getTimeOfDay, getCurrentDay, getCurrentWeekDay, getCurrentMonth } from "../../functions/getDate";

function Main() {
  const { categories, setSidebarOpened } = useContext(CategoriesContext);
  const { path, changePath} = useContext(PathContext);
  const { tasks, addTask, changeTasksOrder } = useContext(TasksContext);
  const { user } = useContext(UserContext);

  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState<CategoryProps>(categories[0]);
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();

    const content = inputRef.current?.value;
    console.log('content - '+content)

    if (!content) return;

    const date = new Date();

    const newTask: TaskProps = {
      category: category,
      checked: checked,
      content: content,
      date: date.toString(),
      id: uuid(),
    };
    console.log(newTask)

    addTask(newTask);

    formRef.current?.reset();
  }

  const handleAddTaskClick = () => {
    inputRef.current?.focus();
  }

  
  const handleHamburgerMenu = () => {
    setSidebarOpened(true)
  }

  useEffect(()=>{
    console.log('isFocused - '+isFocused)
  }, [isFocused])

  useEffect(() => {
    inputRef.current?.focus();
    console.log('isSelectingCategory - '+isSelectingCategory)
  }, [checked, isSelectingCategory]);

  useEffect(() => {
    inputRef.current?.blur();
  }, []);

  const filteredTasks = tasks.filter((task) => task.category.slug === path);
  console.log(filteredTasks)
  console.log('path - '+path)

  const shortcuts = [
    {
      ctrlKey: true,
      key: "S",
      handler: () => inputRef.current?.focus(),
    },
    {
      ctrlKey: false,
      key: "Escape",
      handler: () => inputRef.current?.blur(),
    },
  ];

  useShortcut(shortcuts);

  useEffect(() => {
    const categoryBasedOnCurrentPath = categories.filter((category) => category.slug === path)[0];

    setCategory(categoryBasedOnCurrentPath);
  }, [path, categories]);

  useEffect(()=>{
    console.log(category)
    changePath(category.slug)
    setIsSelectingCategory(false)
  }, [category])

  function handleChangeTasksOrder(result: DropResult) {
    if (!result.destination) return;

    const currentListTasks = tasks.filter((task) => task.category.slug === path);

    const items = Array.from(currentListTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination!.index, 0, reorderedItem);

    changeTasksOrder(items);
  }

  return (
    <MainStyles theme={lightTheme} checked={checked}>
      <div id="tasks-area-wrapper">
        {path === "/" && (
          <header>
            <img src={donaBlue} alt="Dona Logo" width={35} />
            <h1>
              Good {getTimeOfDay()}, {user.name}
            </h1>
            <h2>
              It's {getCurrentWeekDay()}, {getCurrentMonth()} {getCurrentDay()}
            </h2>
          </header>
        )}
        <h1 className="category-indicator">{categories.filter((category) => category.slug === path)[0]?.title}</h1>
        <div id="task-writer-desktop-wrapper">
          <div id="task-writer" onClick={() => inputRef.current?.focus()}>
            <div className="left">
              <label>
                <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                <div className="checkbox-div" />
              </label>
              <form noValidate onSubmit={handleAddTask} ref={formRef}>
                <input type="text" placeholder="Write a new task..." ref={inputRef} />
              </form>
            </div>
            <div className="right" onClick={() => setIsSelectingCategory(!isSelectingCategory)}>
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

              <h4>{category.title}</h4>
             
                <Select
                  category={category}
                  setCategory={setCategory}
                  isSelectingCategory={isSelectingCategory}
                  setIsSelectingCategory={setIsSelectingCategory}
                />
              
            </div>
          </div>
        </div>
        
        
        <DragDropContext onDragEnd={handleChangeTasksOrder}>
          <Droppable droppableId="droppable-tasks">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                        <Task
                          task={{
                            category: task.category,
                            checked: task.checked,
                            content: task.content,
                            date: task.date,
                            id: task.id,
                          }}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        {
          !isSelectingCategory && 
           <div id="task-writer-mobile-wrapper" >
          <div id="task-writer-inner-div" >
            <div id="task-writer" style={isFocused?{width:"100%"}:{}} onClick={handleAddTaskClick}>
              <div className="left">
                <form noValidate onSubmit={handleAddTask} ref={formRef}>
                  <input type="text" placeholder="Write a new task..." onBlur={()=>setIsFocused(false)} onFocus={()=>setIsFocused(true)} ref={inputRef} />
                </form>
              </div>
              <div id="calendar"></div>
              <div className="right" onClick={() => {
                  setIsSelectingCategory(!isSelectingCategory)
                  
                }}>
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

                <h4>{category.title}</h4>
              
              </div>
            </div>
            <button id="hamburger-wrapper" style={isFocused?{display:"none"}:{display:"flex"}} onClick={handleHamburgerMenu}>
              <div id="hamburger-icon">
                    <h2>+</h2>  
              </div>
            </button>
          </div>
        </div>
        }
       
        <div id="category-select-wrapper">      
          <Select
                category={category}
                setCategory={setCategory}
                isSelectingCategory={isSelectingCategory}
                setIsSelectingCategory={setIsSelectingCategory}
              />
        </div>
      </div>
    </MainStyles>
  );
}

export default Main;
