import styled from "styled-components";

interface Props {
  beingRemoved?: boolean;
  isSelectingDate?: boolean;
  checked?: boolean;
}

const TaskStyles = styled.li<Props>`
  list-style: none;

  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
  padding-left: 20px;
  padding-right: 32px;

  margin-top: 10px;

  border-radius: 20px;

  background-color: ${(props) => props.theme.fg};

  transition: 0.25s ease;
  transition-property: background-color opacity transform;

  animation: ${(props) => (props.beingRemoved ? "taskSlideUp" : "taskSlideDown")} 0.25s ease;

  .left {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;

    align-items: center;

    gap: 20px;
    padding: 10px 0;

    label {
      width: 30px;
      height: 30px;

      cursor: pointer;

      input {
        display: none;
      }

      .checkbox-div {
        display: grid;
        place-items: center;

        width: 30px;
        height: 30px;

        border-radius: 10px;

        background-color: ${(props) => (props.checked ? props.theme.black : props.theme.bold)};

        transition: 0.25s ease;
        transition-property: transform background-color;

        animation: ${(props) => (props.checked ? "taskBounce .25s ease forwards" : "")};

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

          transition: 0.25s ease;
          transition-property: transform opacity;
        }
      }
    }

    h3 {
      position: relative;

      width: 100%;
      height: fit-content;

      word-break: break-word;
      white-space: normal;

      color: ${(props) => props.theme.text};

      ::before {
        content: "";

        position: absolute;

        top: 50%;
        left: 0;

        width: ${(props) => (props.checked ? "100%" : "0%")};
        height: 2px;

        border-radius: 1px;

        background-color: ${(props) => props.theme.text};

        transition: 0.25s ease 0.25s;
        transition-property: width;
      }
    }
  }

  .right {
    position: relative;

    display: flex;
    flex-direction: row;

    width: fit-content;

    white-space: nowrap;

    align-items: center;

    gap: 27px;
    padding-left: 27px;

    .date {
      display: grid;
      place-items: center;

      height: 30px;

      padding: 0 16px;

      border-radius: 10px;

      cursor: pointer;

      color: ${(props) => props.theme.bolder};
      background-color: ${(props) => props.theme.bg};

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${(props) => props.theme.bold};
      }
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

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: ${(props) => props.theme.bold};
      }

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 768px) {
    border-radius: 15px;

    padding-left: 15px;

    .left {
      gap: 15px;
      padding: 5px;

      label {
        width: 20px;
        height: 20px;

        .checkbox-div {
          width: 20px;
          height: 20px;

          border-radius: 5px;

          ::before {
            height: 2px;
            width: 4px;

            border-bottom: 3px solid white;
            border-left: 3px solid white;
          }
        }
      }
    }

    .right {
      padding-left: 10px;

      .date {
        display: none;
      }

      button {
        width: 25px;
        height: 25px;

        img {
          width: 15px;
          height: 15px;
        }
      }

      gap: 10px;
    }
  }

  @keyframes taskSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes taskSlideUp {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  @keyframes taskBounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  .react-calendar {
    position: absolute;

    z-index: 1;

    top: 20px;
    right: 0px;

    display: flex;
    flex-direction: column;

    width: 320px;

    padding: 20px;

    opacity: ${(props) => (props.isSelectingDate ? "1" : "0")};
    transform: ${(props) => (props.isSelectingDate ? "translateY(0px)" : "translateY(-10px)")};

    border: 1px solid ${(props) => props.theme.bold};
    border-radius: 20px;

    box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.1);

    cursor: default;

    background-color: white;

    animation: ${(props) => (props.isSelectingDate ? "taskSlideDown" : "taskSlideUp")} 0.25s ease;

    transition: 0.25s ease;
    transition-property: opacity transform;

    abbr {
      text-decoration: none;
    }

    button {
      flex: unset !important;

      width: 30px;
      height: 30px;

      border: none;
      outline: none;

      border-radius: 10px;

      font-family: "Inter var", sans-serif;
      font-size: 14px;
      font-weight: 500;

      transition: 0.25s ease;
      transition-property: background-color;

      :enabled {
        cursor: pointer;
      }

      :hover {
        ${(props) => props.theme.bold};
      }
    }
  }

  .react-calendar__navigation {
    display: flex;

    width: 100%;
    height: 30px;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    button {
      :first-of-type,
      :last-of-type {
        display: none;
      }

      :nth-of-type(3) {
        width: 100%;

        text-transform: capitalize;
      }

      display: grid;
      place-items: center;

      min-width: 30px;
      min-height: 30px;

      border: none;
      outline: none;

      padding: 0;

      border-radius: 10px;

      background-color: transparent;

      :disabled {
        background-color: ${(props) => props.theme.bold};
      }

      :hover {
        background-color: ${(props) => props.theme.bold};
      }
    }
  }

  .react-calendar__viewContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 400px));
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;

    padding: 10px 0;

    color: ${(props) => props.theme.bolder};
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;

    padding: 10px 0;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days {
    width: fit-content;

    gap: 10px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${(props) => props.theme.bold};
  }

  .react-calendar__year-view {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__decade-view__years {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__century-view__decades {
    padding: 20px 0 !important;

    button {
      display: grid !important;
      place-items: center;

      width: 100%;
      text-transform: capitalize;

      padding: 0px;
      place-items: center;
    }
  }

  .react-calendar__tile {
    text-align: center;

    background: transparent;

    :disabled {
      background-color: #f0f0f0;
    }

    :hover,
    :focus {
      background-color: #e6e6e6;
    }
  }

  .react-calendar__tile--now {
    color: #008ffd;

    border: 2px solid #008ffd !important;

    :hover,
    :focus {
      background-color: transparent;
    }
  }

  .react-calendar__tile--hasActive {
    background: #76baff;

    :hover,
    :focus {
      background-color: #a9d4ff;
    }
  }

  .react-calendar__tile--active {
    background: #008ffd !important;
    color: white;

    :hover,
    :focus {
      background-color: #008ffd;
    }
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

export default TaskStyles;
