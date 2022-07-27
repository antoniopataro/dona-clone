import styled from "styled-components";

const SidebarStyles = styled.aside`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: calc(100vh - 80px);

  align-items: center;

  gap: 10px;
  padding: 40px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  border-radius: 20px;

  background-color: ${(props) => props.theme.fg};

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  nav {
    display: flex;
    flex-direction: column;

    width: 100%;

    align-items: center;

    #category-outer-div {
      width: 100%;

      h3 {
        width: calc(30vw - 220px);
        overflow: hidden;

        color: ${(props) => props.theme.text};
      }
    }
  }

  #add-category-form {
    display: flex;
    flex-direction: row;

    width: 100%;
    min-height: 70px;

    align-items: center;

    gap: 20px;
    padding: 0 20px;

    span {
      display: grid;
      place-items: center;

      min-width: 33px;
      min-height: 33px;

      img {
        aspect-ratio: 1;
      }
    }

    input {
      outline: none;
      border: none;

      width: 100%;

      font-family: "Inter var", sans-serif;
      font-size: 14px;
      font-weight: 400;

      color: ${(props) => props.theme.text};
      background-color: transparent;
    }
  }

  @media (max-width: 1024px) {
    display: none;

    /* position: absolute;

    z-index: 1;

    bottom: 40px;

    flex-direction: row;

    width: calc(100vw - 80px);
    height: fit-content;

    justify-content: space-between;

    gap: 0px;
    padding: 20px;

    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);

    border-radius: 15px;

    nav {
      display: flex;
      flex-direction: row;

      min-width: 70px;
      width: fit-content;

      overflow: scroll;

      ::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }

    form {
      width: 100%;

      padding: 10px;
    } */
  }

  /* @media (max-width: 768px) {
    padding: 0px;

    nav {
      padding: 10px;
    }

    form {
      gap: 10px;
    }
  } */
`;

export default SidebarStyles;
