import styled from "styled-components";

const CategoryStyles = styled.a`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: space-between;

  padding-left: 33px;
  padding-right: 20px;

  border-radius: 20px;

  cursor: pointer;

  transition: 0.15s ease;
  transition-property: background-color transform opacity;

  animation: fadeIn 0.15s ease;

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
    background-color: var(--bg);
  }

  .left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;
  }

  .task-amout {
    position: relative;

    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    border-radius: 10px;

    color: var(--darkGray);
    background-color: var(--gray);

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

      background-color: var(--gray);

      transition: 0.15s ease;
      transition-property: opacity;

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0px;
    padding-left: 20px;

    .task-amout {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    justify-content: center;

    border-radius: 15px;

    padding: 0px;

    .left {
      h3 {
        display: none;
      }
    }
  }
`;

export default CategoryStyles;
