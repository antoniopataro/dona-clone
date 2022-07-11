import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({} as UserContextProps);

interface UserContextProps {
  user: UserProps;
  registerUser: (name: string) => void;
}

interface UserProps {
  name: string;
}

interface Props {
  children?: React.ReactNode;
}

const defaultUser = {
  name: "",
};

function UserProvider({ children }: Props) {
  const initialUser = JSON.parse(localStorage.getItem("userPreferencesDonaClone") || JSON.stringify(defaultUser));

  const [user, setUser] = useState<UserProps>(initialUser);

  const registerUser = (name: string) => {
    setUser((prevUser) => ({ ...prevUser, name: name }));
  };

  const udpateUser = useEffect(() => {
    localStorage.setItem("userPreferencesDonaClone", JSON.stringify(user));
  }, [user]);

  return <UserContext.Provider value={{ user, registerUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;
