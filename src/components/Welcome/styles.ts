import styled from "styled-components";

interface Props {
  activeWelcomePage: number;
}

const WelcomeStyles = styled.div<Props>`
  position: absolute;

  z-index: 1;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;

  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  #modal {
    display: flex;
    flex-direction: column;

    width: 500px;
    height: 500px;

    justify-content: space-between;

    padding: 40px;

    border-radius: 20px;

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

    background: ${(props) =>
      props.activeWelcomePage === 1
        ? "linear-gradient(200deg, rgba(171, 218, 254, 1) 0%, rgba(255, 255, 255, 1) 50%)"
        : ""};

    background: ${(props) =>
      props.activeWelcomePage === 2
        ? "linear-gradient(200deg, rgba(184,235,205,1) 0%, rgba(255, 255, 255, 1) 50%)"
        : ""};

    background: ${(props) =>
      props.activeWelcomePage === 3
        ? "linear-gradient(200deg, rgba(221,179,253,1) 0%, rgba(255, 255, 255, 1) 50%)"
        : ""};

    background: ${(props) =>
      props.activeWelcomePage === 4
        ? "linear-gradient(200deg, rgba(180,174,250,1) 0%, rgba(255, 255, 255, 1) 50%)"
        : ""};

    .modal-top-animation {
      animation: welcomeSlideDown 0.5s ease-out forwards;
    }

    #modal-top {
      display: grid;
      place-items: center;

      height: 50%;

      img {
        border-radius: 20px;

        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

        background-color: white;
      }

      .second-image {
        width: 300px;
        padding: 20px;
      }

      .third-image {
        padding: 25px;
        animation: welcomeBounce 0.5s 1.25s ease;
      }

      .fourth-image {
        display: grid;
        place-items: center;

        width: 100px;
        height: 100px;

        border-radius: 20px;

        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);

        background-color: white;

        animation: welcomeBounce 0.5s 1.25s ease;

        svg {
          width: 50px;
          height: 50px;

          path {
            opacity: 0;

            stroke-dasharray: 640;
            stroke-dashoffset: 0;
            animation: welcomeDrawStroke 1s 0.25s forwards;
          }
        }
      }
    }

    #modal-bottom {
      position: relative;

      display: flex;
      flex-direction: column;

      height: 50%;

      justify-content: center;

      gap: 20px;

      .slideLeft {
        animation: welcomeSlideLeft 0.5s ease forwards;
      }

      span {
        display: flex;
        flex-direction: column;

        gap: 4px;

        h2 {
          font-weight: 600;
        }
        h3 {
          width: 60%;
          font-size: 14px;
          color: gray;
        }
        input {
          width: fit-content;

          padding: 4px 0;

          outline: none;
          border: none;

          border-bottom: 1px solid;
          border-color: transparent;

          font-family: "Inter var", sans-serif;
          font-weight: 400;
          font-size: 16px;

          color: #6d6d6d;
          background-color: transparent;

          transition: 0.25s ease;
          transition-property: border-color;

          :active,
          :focus {
            border-color: #d9d9d9;
          }

          ::placeholder {
            color: #d9d9d9;
          }
        }
      }

      .nav-buttons {
        display: flex;
        flex-direction: row;

        gap: 10px;

        button {
          width: fit-content;

          outline: none;
          border: none;

          padding: 12px 24px;

          font-family: "Inter var", sans-serif;

          border-radius: 10px;

          cursor: pointer;

          box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.25);

          color: white;
          background-color: #008ffd;

          transition: 0.25s ease;
          transition-property: background-color;

          :hover {
            background-color: #0072ca;
          }
        }

        a {
          display: flex;
          flex-direction: row;

          width: fit-content;

          gap: 10px;
          padding: 12px 24px;

          outline: none;
          border: none;

          font-family: "Inter var", sans-serif;
          font-size: 14px;
          text-decoration: none;

          border-radius: 10px;

          cursor: pointer;

          color: #008ffd;
          background-color: transparent;

          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

          transition: 0.25s ease;
          transition-property: color background-color;

          :hover {
            color: #0072ca;

            svg {
              fill: #0072ca;
            }
          }

          svg {
            position: relative;

            fill: #008ffd;

            transition: 0.15s ease;
            transition-property: fill;
          }
        }
      }

      svg {
        position: absolute;

        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  @keyframes welcomeBounce {
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

  @keyframes welcomeSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes welcomeSlideLeft {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes welcomeDrawStroke {
    0% {
      stroke-dashoffset: 640;
      opacity: 0;
    }
    10% {
      stroke-dashoffset: 640;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    #modal {
      width: 100vw;
      height: 100vh;

      border-radius: 0;
    }
  }
`;

export default WelcomeStyles;
