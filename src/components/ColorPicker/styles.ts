import styled from "styled-components";

interface Props {
  isSelectingColor: boolean;
  clickPosition: {
    top: number;
    left: number;
  };
}

const ColorPickerStyles = styled.div<Props>`
  position: absolute;

  display: flex;
  flex-direction: column;

  top: ${(props) => props.clickPosition.top}px;
  left: ${(props) => props.clickPosition.left}px;

  z-index: 2;

  width: 375px;
  height: fit-content;

  gap: 20px;
  padding: ${(props) => (props.isSelectingColor ? "20px" : "")};

  border-radius: 15px;

  border: ${(props) => (props.isSelectingColor ? `1px solid ${props.theme.bold}` : "")};
  box-shadow: ${(props) => (props.isSelectingColor ? "0px 0px 16px 4px rgba(0, 0, 0, 0.1)" : "")};

  cursor: default;

  background-color: ${(props) => props.theme.fg};

  animation: ${(props) => (props.isSelectingColor ? "colorPickerSlideDown" : "colorPickerSlideUp")} 0.25s ease;

  h4 {
    color: ${(props) => props.theme.text};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));

    list-style: none;

    li {
      display: grid;
      place-items: center;

      width: 40px;
      height: 40px;

      outline: 2px solid transparent;

      border-radius: 10px;

      cursor: pointer;

      transition: 0.25s ease;
      transition-property: outline-color;

      :hover {
        outline-color: ${(props) => props.theme.bold};
      }
    }
  }

  #custom-color-wrapper {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;

    align-items: center;
    justify-content: space-between;

    h4 {
      height: fit-content;
    }

    #custom-color {
      display: flex;
      flex-direction: row;

      width: fit-content;
      height: fit-content;

      align-items: center;

      gap: 10px;
      padding: 10px;

      border-radius: 10px;

      box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.25), inset -1px -1px 1px rgba(0, 0, 0, 0.25);

      background-color: ${(props) => props.theme.bold};

      form {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: fit-content;

        align-items: center;

        gap: 10px;
        padding: 0;

        input {
          width: 60px;
          height: fit-content;

          outline: none;
          border: none;

          font-family: "Inter var", sans-serif;
          font-size: clamp(12px, 1.65vw, 14px);

          color: ${(props) => props.theme.text};
          background-color: transparent;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @keyframes colorPickerSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(20px);
      transform: translateY(0px);
    }
  }

  @keyframes colorPickerSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;

export default ColorPickerStyles;
