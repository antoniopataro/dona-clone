import React, { useContext } from "react";

import { UserContext } from "./contexts/UserContext";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import Welcome from "./components/Welcome";

import styled from "styled-components";

export const lightTheme = {
  bg: "#EAEDEE",
  fg: "#FFF",
  bold: "#d9d9d9",
  bolder: "#6d6d6d",
  text: "#000",
  shadow: "rgba(0,0,0,0.5)",
  shadowInverted: "rgba(255,255,255,1)",
  white: "#FFF",
  black: "#000",
};

const AppStyles = styled.main`
  display: flex;
  flex-direction: row;

  max-width: 100vw;
  max-height: 100vh;

  align-items: center;
  justify-content: space-between;

  padding: 40px;

  background-color: ${(props) => props.theme.bg};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

import "./App.css";

function App() {
  const { user } = useContext(UserContext);

  return (
    <AppStyles theme={lightTheme}>
      <Sidebar />
      <Main />
      {!user.name && <Welcome />}
    </AppStyles>
  );
}

export default App;
