import React, { useRef, useContext, useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import { Context } from "../../context/ContextProvider";

import Task, { TaskProps } from "../Task";
import { CategoryProps } from "../Category";
import Select from "../Select";

import donaBlue from "../../assets/donaBlue.svg";

import MainStyles from "./styles";

function Main() {
  const { tasks, setTasks, categories, path } = useContext(Context);

  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState<CategoryProps>(categories[0]);
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const date = new Date();

  function handleAddTask(e: React.FormEvent) {
    e.preventDefault();

    if (!content) return;

    addTask();

    setContent("");
  }

  const addTask = () => {
    const newTask: TaskProps = {
      category: category.slug,
      checked: checked,
      content: content,
      date: date.toString(),
      id: uuid(),
    };

    setTasks([...tasks, newTask]);
  };

  const maintainFocusOnTaskWriterInteraction = useEffect(() => {
    inputRef.current?.focus();
  }, [checked, category, isSelectingCategory]);

  const preventFocusOnLoad = useEffect(() => {
    inputRef.current?.blur();
  }, []);

  const getDayOfTheWeek = () => {
    switch (date.getDay()) {
      case 1:
        return "Monday";
      case 2:
        return "Thuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
    }
  };

  const getTimeOfTheDay = () => {
    const hours = date.getHours();

    if (hours < 12) {
      return "morning";
    } else if (hours < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  const filteredTasks = tasks.filter((task) => task.category === path);
  const currentMonth = date.toString().split(" ")[1];
  const currentDay = date.toString().split(" ")[2];

  return (
    <MainStyles checked={checked}>
      <div id="tasks-area-wrapper">
        {path === "/" && (
          <header>
            <img src={donaBlue} alt="Dona Logo" width={35} />
            <h1>Good {getTimeOfTheDay()}</h1>
            <h2>
              It's {getDayOfTheWeek()}, {currentMonth} {currentDay}
            </h2>
          </header>
        )}
        <h1 className="category-indicator">{categories.filter((category) => category.slug === path)[0]?.title}</h1>
        <div id="task-writter" onClick={() => inputRef.current?.focus()}>
          <div className="left">
            <label>
              <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
              <div className="checkbox-div" />
            </label>
            <form noValidate onSubmit={handleAddTask}>
              <input
                type="text"
                placeholder="Write a new task..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
                ref={inputRef}
              />
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
        <ul>
          {filteredTasks.reverse().map((task) => (
            <Task
              task={{
                category: task.category,
                checked: task.checked,
                content: task.content,
                date: task.date,
                id: task.id,
              }}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </MainStyles>
  );
}

export default Main;
