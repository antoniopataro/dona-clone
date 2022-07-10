import React, { createContext, useState } from "react";

export const PathContext = createContext({} as PathContextProps);

interface PathContextProps {
  path: string;
  changePath: (path: string) => void;
}

interface Props {
  children?: React.ReactNode;
}

function CategoriesProvider({ children }: Props) {
  const initialPath = "/";

  const [path, setPath] = useState(initialPath);

  const changePath = (path: string) => {
    setPath(path);
  };

  return <PathContext.Provider value={{ path, changePath }}>{children}</PathContext.Provider>;
}

export default CategoriesProvider;
