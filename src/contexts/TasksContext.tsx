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
  updateDate: (updatedTask: TaskProps, date: string) => void;
  updateTaskColor: (slugBeingUpdated: string, color: string) => void;
}

interface Props {
  children?: React.ReactNode;
}

function TasksProvider({ children }: Props) {
  const initialTasks = JSON.parse(localStorage.getItem("userTasksDonaClone") || "[]");

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

  const updateDate = (updatedTask: TaskProps, date: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === updatedTask.id) {
          return { ...updatedTask, date: date };
        }
        return task;
      }),
    );
  };

  const updateTaskColor = (slugBeingUpdated: string, color: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.category.slug === slugBeingUpdated) {
          return { ...task, category: { ...task.category, color: color } };
        }
        return task;
      }),
    );
  };

  const updateTasks = useEffect(() => {
    localStorage.setItem("userTasksDonaClone", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, updateCheckedStatus, updateDate, updateTaskColor }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
