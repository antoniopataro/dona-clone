import React, { useContext, useEffect, useState } from "react";

import { Context } from "../../context/ContextProvider";

export interface TaskProps {
  category: string;
  checked: boolean;
  content: string;
  date: string;
  id: string;
  // category: string;
}

interface TaskComponentProps {
  task: TaskProps;
}

import removeIcon from "../../assets/removeIcon.svg";
import donaBlue from "../../assets/donaBlue.svg";
import donaOrange from "../../assets/donaOrange.svg";
import donaGreen from "../../assets/donaGreen.svg";
import donaGray from "../../assets/donaGray.svg";

import TaskStyles from "./styles";

function Task({ task }: TaskComponentProps) {
  const { tasks, setTasks } = useContext(Context);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [checked, setChecked] = useState(task.checked);

  function handleRemoveTask(id: string) {
    const removedTaskArray = tasks.filter((task) => {
      if (task.id === id) {
        return;
      }
      return task;
    });

    setBeingRemoved(id);

    setTimeout(() => {
      setTasks(removedTaskArray);
    }, 150);
  }

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

  const handleIcon = () => {
    switch (task.category) {
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
        <img src={handleIcon()} alt={task.category} width={15} />
        <button onClick={() => handleRemoveTask(task.id)}>
          <img src={removeIcon} alt="" width={15} />
        </button>
      </div>
    </TaskStyles>
  );
}

export default Task;
