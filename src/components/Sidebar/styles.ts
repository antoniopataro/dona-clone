import styled from "styled-components";

const SidebarStyles = styled.aside`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: calc(100vh - 80px);

  align-items: center;

  gap: 10px;
  padding: 40px;

  border-radius: 20px;

  background-color: var(--fg);

  nav {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    gap: 10px;
  }

  form {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 70px;

    align-items: center;

    gap: 20px;
    padding: 0 33px;

    img {
      aspect-ratio: 1;
    }

    input {
      outline: none;
      border: none;

      width: 100%;

      font-family: "Inter var", sans-serif;
      font-size: 14px;
      font-weight: 400;

      background-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    form {
      padding: 0px;
      padding-left: 20px;
    }
  }

  @media (max-width: 768px) {
    width: fit-content;
    height: fit-content;

    gap: 20px;
    padding: 20px;

    border-radius: 15px;

    nav {
      display: flex;
      flex-direction: row;

      justify-content: center;
    }

    form {
      width: fit-content;

      bottom: 40px;
      right: 40px;

      padding: 0 20px;

      justify-content: center;

      border-radius: 15px;
      background-color: var(--fg);
    }
  }
`;

export default SidebarStyles;
