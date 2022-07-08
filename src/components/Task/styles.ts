import styled from "styled-components";

interface Props {
  beingRemoved?: boolean;
  checked?: boolean;
}

const TaskStyles = styled.li<Props>`
  list-style: none;

  display: flex;
  flex-direction: row;

  width: 100%;
  min-height: 70px;

  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  padding-left: 20px;
  padding-right: 32px;

  border-radius: 20px;

  opacity: ${(props) => (props.beingRemoved ? "0" : "1")};
  transform: ${(props) => (props.beingRemoved ? "translateY(-10px)" : "")};

  background-color: var(--fg);

  transition: 0.15s ease;
  transition-property: opacity transform;

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

  .left {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    padding-right: 20px;

    label {
      display: grid;
      place-items: center;

      width: 30px;
      height: 30px;

      cursor: pointer;

      input {
        display: none;

        :checked + .checkbox-div {
          background-color: black;

          animation: bounce 0.25s ease forwards;

          @keyframes bounce {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
            }
          }
        }
      }

      .checkbox-div {
        display: grid;
        place-items: center;

        width: 30px;
        height: 30px;

        border-radius: 10px;

        background-color: var(--gray);

        transition: 0.15s ease;
        transition-property: transform background-color;

        ::before {
          content: "";

          display: inline-block;

          height: 3px;
          width: 6px;

          border-radius: 2px;

          border-bottom: 4px solid white;
          border-left: 4px solid white;

          opacity: ${(props) => (props.checked ? "1" : "0")};
          transform: ${(props) => (props.checked ? "rotate(-45deg) scale(1)" : "rotate(-45deg) scale(0)")};

          transition: 0.15s ease;
          transition-property: transform opacity;
        }
      }
    }

    h3 {
      position: relative;

      display: grid;
      place-items: center;

      max-width: 300px;
      height: fit-content;

      word-break: break-word;
      white-space: normal;

      ::before {
        content: "";

        position: absolute;

        left: 0;

        width: ${(props) => (props.checked ? "100%" : "0%")};
        height: 2px;

        border-radius: 1px;

        background-color: black;

        transition: 0.15s ease 0.15s;
        transition-property: width;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 27px;

    .date {
      display: grid;
      place-items: center;

      height: 30px;

      padding: 0 16px;

      border-radius: 10px;

      color: var(--darkGray);
      background-color: var(--gray);
    }

    button {
      display: grid;
      place-items: center;

      width: 35px;
      height: 35px;

      border: none;
      outline: none;

      cursor: pointer;

      border-radius: 50%;
      background-color: transparent;

      transition: 0.15s ease;
      transition-property: background-color;

      :hover {
        background-color: var(--gray);
      }

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 1024px) {
    min-height: 50px;

    border-radius: 15px;

    .right {
      gap: 5px;

      .date {
        display: none;
      }
    }

    .left label {
      width: 20px;
      height: 20px;

      .checkbox-div {
        width: 20px;
        height: 20px;

        border-radius: 5px;
      }
    }
  }
`;

export default TaskStyles;
