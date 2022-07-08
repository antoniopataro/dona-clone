import React, { useRef, useContext, useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import { Context } from "../../context/ContextProvider";

import Task, { TaskProps } from "../Task";

import donaBlue from "../../assets/donaBlue.svg";
import donaGray from "../../assets/donaGray.svg";

import MainStyles from "./styles";

function Main() {
  const { tasks, setTasks, categories, path } = useContext(Context);

  const [content, setContent] = useState("");
  const [checked, setChecked] = useState(false);

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
      category: path,
      checked: checked,
      content: content,
      date: date.toString(),
      id: uuid(),
    };

    setTasks([...tasks, newTask]);
  };

  const handleChecked = useEffect(() => {
    inputRef.current?.focus();
  }, [checked]);

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

  const filteredTasks = tasks.filter((task) => {
    if (task.category === path) {
      return task;
    }
    return;
  });

  return (
    <MainStyles checked={checked}>
      <div id="tasks-area-wrapper">
        {path === "/" && (
          <header>
            <img src={donaBlue} alt="Dona Logo" width={35} />
            <h1>Good {getTimeOfTheDay()}</h1>
            <h2>
              It's {getDayOfTheWeek()}, {date.toString().split(" ")[1]} {date.toString().split(" ")[2]}
            </h2>
          </header>
        )}
        <h1 className="category-indicator">{categories.filter((category) => category.slug === path)[0]?.title}</h1>
        <div id="task-writter">
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
          <div className="right">
            <img src={donaGray} alt="" width={15} />
            <h4>No list</h4>
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
