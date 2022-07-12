import React, { useContext, useEffect, useState, useRef } from "react";

import Calendar from "react-calendar";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import { TasksContext } from "../../contexts/TasksContext";

import { TaskProps } from "../../contexts/TasksContext";

interface TaskComponentProps {
  task: TaskProps;
}

import removeIcon from "../../assets/removeIcon.svg";

import TaskStyles from "./styles";

import { lightTheme } from "../../App";

function Task({ task }: TaskComponentProps) {
  const { removeTask, updateCheckedStatus, updateDate } = useContext(TasksContext);

  const [beingRemoved, setBeingRemoved] = useState("");
  const [checked, setChecked] = useState(task.checked);
  const [isSelectingDate, setIsSelectingDate] = useState(false);

  function handleRemoveTask(id: string) {
    setBeingRemoved(id);
    waitForAnimationAndRemove(id);
  }

  const waitForAnimationAndRemove = (id: string) => {
    setTimeout(() => {
      removeTask(id);
    }, 250);
  };

  const handleUpdateDate = (task: TaskProps, date: Date) => {
    setIsSelectingDate(false);
    updateDate(task, date.toString());
  };

  useEffect(() => {
    updateCheckedStatus(task, checked);
  }, [checked]);

  return (
    <TaskStyles
      isSelectingDate={isSelectingDate}
      theme={lightTheme}
      beingRemoved={beingRemoved === task.id}
      checked={task.checked}
    >
      <div className="left">
        <label>
          <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
          <div className="checkbox-div" />
        </label>
        <h3>{task.content}</h3>
      </div>

      <div className="right">
        <h4 className="date" onClick={() => setIsSelectingDate(!isSelectingDate)}>{`${task.date.split(" ")[1]} ${
          task.date.split(" ")[2]
        }`}</h4>
        <Calendar onClickDay={(e) => handleUpdateDate(task, e)} />
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1.25"
            y="1.25"
            width="12.5"
            height="12.5"
            rx="4.75"
            stroke={`#${task.category.color}`}
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
