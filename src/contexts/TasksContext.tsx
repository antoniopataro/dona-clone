import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({} as TasksContextProps);

import { CategoryProps } from "./CategoriesContext";

export interface TaskProps {
  category: CategoryProps;
  checked: boolean;
  content: string;
  date: string;
  id: string;
}

interface TasksContextProps {
  tasks: TaskProps[];
  addTask: (newTask: TaskProps) => void;
  removeTask: (id: string) => void;
  updateCheckedStatus: (updatedTask: TaskProps, checked: boolean) => void;
}

interface Props {
  children?: React.ReactNode;
}

function TasksProvider({ children }: Props) {
  const initialTasks = JSON.parse(localStorage.getItem("userTasks") || "[]");

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (newTask: TaskProps) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateCheckedStatus = (updatedTask: TaskProps, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...updatedTask, checked: checked };
        }
        return task;
      }),
    );
  };

  const updateLocalStorage = useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, updateCheckedStatus }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
