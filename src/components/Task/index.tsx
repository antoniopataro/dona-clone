import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../context/ContextProvider";

export interface TaskProps {
  category: string;
  checked: boolean;
  content: string;
  date: string;
  id: string;
}

interface TaskComponentProps {
  task: TaskProps;
}

import removeIcon from "../../assets/removeIcon.svg";

import TaskStyles from "./styles";

function Task({ task }: TaskComponentProps) {
  const { categories, tasks, setTasks } = useContext(Context);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [checked, setChecked] = useState(task.checked);

  function handleRemoveTask(id: string) {
    const removedTaskArray = tasks.filter((task) => task.id !== id);

    setBeingRemoved(id);

    waitForAnimationAndRemove(removedTaskArray);
  }

  const waitForAnimationAndRemove = (removedTaskArray: TaskProps[]) => {
    setTimeout(() => {
      setTasks(removedTaskArray);
    }, 150);
  };

  const updateCheckedStatus = useEffect(() => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...task, checked: checked };
        }
        return item;
      }),
    );
  }, [checked]);

  return (
    <TaskStyles beingRemoved={beingRemoved === task.id} checked={task.checked}>
      <div className="left">
        <label>
          <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
          <div className="checkbox-div" />
        </label>
        <h3>{task.content}</h3>
      </div>

      <div className="right">
        <h4 className="date">{`${task.date.split(" ")[1]} ${task.date.split(" ")[2]}`}</h4>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1.25"
            y="1.25"
            width="12.5"
            height="12.5"
            rx="4.75"
            stroke={`#${categories.filter((category) => category.slug === task.category)[0].color}`}
            strokeWidth="2.5"
          />
        </svg>

        <button onClick={() => handleRemoveTask(task.id)}>
          <img src={removeIcon} alt="" width={15} />
        </button>
      </div>
    </TaskStyles>
  );
}

export default Task;
