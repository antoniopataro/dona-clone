import styled from "styled-components";

interface Props {
  isSelectingCategory: boolean;
}

const SelectStyles = styled.div<Props>`
  visibility: ${(props) => (props.isSelectingCategory ? "" : "hidden")};

  position: absolute;

  z-index: 1;

  top: 50px;
  left: 0;

  width: 225px;
  max-height: 400px;

  border-radius: 15px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  border: 1px solid ${(props) => props.theme.bold};
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

  background-color: ${(props) => props.theme.fg};

  animation: ${(props) => (props.isSelectingCategory ? "selectFadeIn " : "")} 0.25s ease;

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 10px;
    padding-top: 20px;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;

      width: 100%;
      height: 50px;

      align-items: center;

      gap: 20px;
      padding: 16px 20px;

      border-radius: 15px;

      cursor: pointer;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${(props) => props.theme.bold};
      }

      img {
        pointer-events: none;
      }

      h4 {
        width: calc(100% - 60px);

        color: ${(props) => props.theme.text};
      }

      #checkmark {
        position: absolute;

        right: 30px;
      }
    }
  }

  @keyframes selectFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) {
    left: -100px;
  }
`;

export default SelectStyles;
