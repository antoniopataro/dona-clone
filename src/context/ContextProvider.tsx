import React, { useState, useEffect, createContext } from "react";

export const Context = createContext({} as ContextProps);

import { TaskProps } from "../components/Task";
import { CategoryProps } from "../components/Category";

interface ContextProps {
  categories: CategoryProps[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

interface ChildrenProps {
  children?: React.ReactNode;
}

const defaultCategory = [
  {
    taskAmout: 0,
    title: "Home",
    slug: "/",
  },
];

function ContextProvider({ children }: ChildrenProps) {
  const initialPath = "/";
  const initialCategories = JSON.parse(localStorage.getItem("userCategories") || JSON.stringify(defaultCategory));
  const initialTasks = JSON.parse(localStorage.getItem("userTasks") || "[]");

  const [path, setPath] = useState(initialPath);
  const [categories, setCategories] = useState<CategoryProps[]>(initialCategories);
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const updateCategories = useEffect(() => {
    localStorage.setItem("userCategories", JSON.stringify(categories));
  }, [categories]);

  const updateTasks = useEffect(() => {
    localStorage.setItem("userTasks", JSON.stringify(tasks));
  }, [tasks]);

  const updateNumberOfTasks = useEffect(() => {
    const quantity = tasks.filter((task) => task.category === path).length;

    const newArray = categories.map((category) => {
      if (category.slug === path) {
        return { ...category, taskAmout: quantity };
      }
      return category;
    });

    setCategories(newArray);
  }, [tasks]);

  return (
    <Context.Provider value={{ tasks, setTasks, categories, setCategories, path, setPath }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
