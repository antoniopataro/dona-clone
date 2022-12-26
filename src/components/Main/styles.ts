import styled from "styled-components";

interface Props {
  checked?: boolean;
}

const MainStyles = styled.main<Props>`
  display: flex;
  flex-direction: column;

  width: calc(70vw - 120px);
  height: calc(100vh - 80px);

  align-items: center;

  #tasks-area-wrapper {
    display: flex;
    flex-direction: column;

    width: 80%;
    height: 100%;

    gap: 10px;
    padding: 40px;
    padding-bottom: 0;

    header {
      position: relative;

      display: flex;
      flex-direction: column;

      width: fit-content;
      height: fit-content;

      justify-content: center;

      margin-bottom: 30px;

      transform: translateX(60px) translateY(0px);

      animation: mainHeaderSlideDown 0.25s ease;

      img {
        position: absolute;

        left: -60px;
      }

      h1 {
        color: ${(props) => props.theme.text};
      }

      h2 {
        color: ${(props) => props.theme.bolder};
      }
    }

    #task-writer {
      display: flex;
      flex-direction: row;

      width: 100%;

      align-items: center;

      padding: 10px;
      padding-left: 20px;
      padding-right: 15px;

      border-radius: 20px;

      background-color: ${(props) => props.theme.bold};

      transition: 0.25s ease;
      transition-property: background-color box-shadow;

      animation: mainSlideDown 0.25s ease;

      .left {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 100%;

        align-items: center;

        gap: 20px;
        padding: 10px 0;

        label {
          display: grid;
          place-items: center;

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

            transform: translateX(-35px) scale(0);

            transition: 0.25s ease;
            transition-property: opacity transform background-color;

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

        form {
          width: 100%;
          height: 100%;

          overflow: hidden;

          transition: 0.25s ease;
          transition-property: transform;

          input {
            width: 100%;
            height: 100%;

            border: none;
            outline: none;

            font-family: "Inter var", sans-serif;
            font-size: clamp(12px, 1.65vw, 16px);
            font-weight: 400;

            color: ${(props) => props.theme.text};
            background-color: transparent;
          }
        }
      }

  

      .right {
        position: relative;

        display: flex;
        flex-direction: row;

        height: 40px;
        width: fit-content;

        align-items: center;

        gap: 12px;
        padding: 0px 12px;
        padding-right: 40px;
        margin-left: 12px;

        border-radius: 10px;

        cursor: pointer;

        color: ${(props) => props.theme.bolder};
        background-color: ${(props) => props.theme.bg};

        opacity: 0;
        pointer-events: none;

        transition: 0.25s ease;
        transition-property: opacity;

        h4 {
          overflow: hidden;
          white-space: nowrap;

          color: ${(props) => props.theme.text};
        }

        img {
          pointer-events: none;
        }

        ::after {
          content: "";

          position: absolute;

          right: 20px;

          width: 4px;
          height: 4px;

          border-bottom: 2px solid ${(props) => props.theme.darkGray};
          border-left: 2px solid ${(props) => props.theme.darkGray};

          border-radius: 1px;

          transform: rotate(-45deg);

          outline: 10px solid ${(props) => props.theme.bg};
        }
      }

      :focus-within,
      :active {
        background-color: ${(props) => props.theme.fg};

        .left {
          label {
            pointer-events: auto;

            .checkbox-div {
              transform: translateX(0px) scale(1);
              opacity: 1;

              animation: ${(props) => (props.checked ? "mainBounce 0.25s ease forwards" : "")};
            }
          }

          form {
            transform: translateX(0px);
          }
        }

        .right {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }

    .category-indicator {
      display: none;

      padding-left: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      overflow: scroll;
      white-space: nowrap;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    #tasks-area-wrapper {
      width: 100%;

      padding: 0;

      header {
        padding-left: 0;

        transform: translateX(50px) translateY(0px);

        img {
          left: -50px;

          width: 30px;
          height: 30px;
        }
      }

     
      :focus,
      :active {
        .left {
          label {
            .checkbox-div {
              transform: translateX(0px) scale(1);
              opacity: 1;

              animation: ${(props) => (props.checked ? "mainBounce 0.25s ease forwards" : "")};
            }
          }
        }
      }

      ul {
        overflow: scroll;
       
        white-space: normal;
      }
    }
  }

  @media (min-width: 768px){
    #task-writer-mobile-wrapper {
      display: none;  
    } 
    #task-writer-desktop-wrapper{
      #task-writer{
        form {
          transform: translateX(-50px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    #task-writer-desktop-wrapper{
      #task-writer{
        display: none;
        form {
          transform: translateX(-50px);
        }
      }
    }

    #task-writer-mobile-wrapper{
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 40px;
      left: 0px;
      right: 0px;
      margin: auto;
      width: 100vw;
      padding: 5px;
      #task-writer-inner-div{
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: center;
      }
      #task-writer{
        border-radius: 25px;
        width: 75%;
        
      }
      #hamburger-wrapper{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: none;
        background-color: #fff;
        align-items: center;
        justify-content: center;

      }
    }

    #category-select-wrapper{
      margin-left: -30px;
      margin-right: -30px;
    }

    #tasks-area-wrapper {
      header {
        transform: translateX(40px) translateY(0px);

        img {
          left: -40px;

          width: 25px;
          height: 25px;
        }
      }

      #task-writer {

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

              transform: translateX(-15px) scale(0);
            }
          }

         
        }
      }

      ul {
        overflow: scroll;
        white-space: normal;
      }
    }
  }

  @keyframes mainSlideDown {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes mainHeaderSlideDown {
    0% {
      transform: translateX(60px) translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateX(60px) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes mainBounce {
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
`;

export default MainStyles;
