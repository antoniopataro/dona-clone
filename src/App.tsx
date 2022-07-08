import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import styled from "styled-components";

const AppStyles = styled.main`
  display: flex;
  flex-direction: row;

  max-width: 100vw;
  max-height: 100vh;

  align-items: center;
  justify-content: space-between;

  padding: 40px;

  background-color: var(--bg);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

import "./App.css";

function App() {
  return (
    <AppStyles>
      <Sidebar />
      <Main />
    </AppStyles>
  );
}

export default App;
