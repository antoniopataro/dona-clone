import styled from "styled-components";

interface Props {
  activeCategory: boolean;
  beingRemoved: boolean;
}

const CategoryStyles = styled.a<Props>`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 20px;

  opacity: ${(props) => (props.beingRemoved ? "0" : "1")};
  transform: ${(props) => (props.beingRemoved ? "translateY(-10px)" : "")};

  cursor: pointer;

  background-color: ${(props) => (props.activeCategory ? props.theme.bg : "")};

  transition: 0.25s ease;
  transition-property: background-color transform opacity;

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  :hover {
    background-color: ${(props) => props.theme.bg};
  }

  .left {
    position: relative;

    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    span {
      display: grid;
      place-items: center;

      width: 33px;
      height: 33px;

      border-radius: 10px;

      outline: 2px solid transparent;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${(props) => props.theme.bold};

        ::before {
          content: " ";
          position: absolute;

          top: 12px;
          left: 30px;

          border-width: 5px;
          border-style: solid;
          border-color: transparent black transparent transparent;

          opacity: 0;

          animation: fadeIn 0.25s 0.5s ease forwards;
        }

        ::after {
          content: "Change color";

          position: absolute;

          left: 40px;

          width: fit-content;

          padding: 8px 16px;

          border-radius: 4px;

          box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.25);

          opacity: 0;

          font-family: "Inter var", sans-serif;
          font-size: 12px;
          font-weight: 500;

          color: ${(props) => props.theme.white};
          background-color: ${(props) => props.theme.black};

          animation: fadeIn 0.25s 0.5s ease forwards;
        }
      }
    }
  }

  .task-amout {
    position: relative;

    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    border-radius: 10px;

    color: ${(props) => props.theme.bolder};
    background-color: ${(props) => props.theme.bold};

    :hover {
      .remove-category {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .remove-category {
      position: absolute;

      display: grid;
      place-items: center;

      border: none;
      outline: none;

      opacity: 0;
      pointer-events: none;

      cursor: pointer;

      background-color: ${(props) => props.theme.bold};

      transition: 0.25s ease;
      transition-property: opacity;

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 1024px) {
    width: fit-content;

    padding: 20px;

    .left {
      h3 {
        display: none;
      }

      span {
        :hover {
          background-color: transparent;
        }
      }
    }

    .task-amout {
      display: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 50px;
    height: 50px;

    padding: 7.5px;

    border-radius: 10px;
  }
`;

export default CategoryStyles;
