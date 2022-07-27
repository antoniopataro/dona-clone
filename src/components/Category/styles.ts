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

  padding: 0 20px;
  margin-top: 10px;

  border-radius: 20px;

  cursor: pointer;

  background-color: ${(props) => (props.activeCategory ? props.theme.bg : "white")};

  transition: 0.25s ease;
  transition-property: background-color transform opacity;

  animation: ${(props) => (props.beingRemoved ? "categorySlideUp" : "categorySlideDown")} 0.25s ease;

  :hover {
    background-color: ${(props) => props.theme.bg};
  }

  .left {
    display: flex;
    flex-direction: row;

    width: 100%;

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
      }
    }
  }

  .task-amout {
    position: relative;

    display: grid;
    place-items: center;

    min-width: 30px;
    min-height: 30px;

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
        pointer-events: none;

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

  @keyframes categorySlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes categorySlideUp {
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

export default CategoryStyles;
