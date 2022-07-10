import React, { useState, useContext } from "react";

import { Context } from "../../context/ContextProvider";

import donaBlue from "../../assets/donaBlue.svg";
import macCommand from "../../assets/welcome-icons/macCommand.png";
import donaLists from "../../assets/welcome-icons/donaLists.png";

import WelcomeStyles from "./styles";

interface WelcomeProps {
  title: string;
  subtitle: string;
  image: string;
}

function Welcome() {
  const { user, setUser } = useContext(Context);

  const [activeWelcomePage, setActiveWelcomePage] = useState(1);
  const [userName, setUserName] = useState("");
  const [animating, setAnimating] = useState(true);

  function handleContinue() {
    if (userName) {
      setUser({ ...user, name: userName });
      return;
    }

    if (activeWelcomePage >= 4) return;

    setActiveWelcomePage((prev) => prev + 1);
    setAnimating(true);
  }

  const handleData = (): WelcomeProps => {
    switch (activeWelcomePage) {
      case 1:
        return {
          title: "Welcome to Dona Clone",
          subtitle: "Dona is a back to-do list focused on fast and delightful user experience.",
          image: donaBlue,
        };
      case 2:
        return {
          title: "We have shortcuts",
          subtitle: "Dona offers a lot of shortcuts. Test them out.",
          image: macCommand,
        };
      case 3:
        return {
          title: "Powerful lists",
          subtitle: "Organize your tasks into fully customizable lists.",
          image: donaLists,
        };
      case 4:
        return {
          title: "What's your name?",
          subtitle: "",
          image: "",
        };
      default:
        return {
          title: "",
          subtitle: "",
          image: "",
        };
    }
  };

  return (
    <WelcomeStyles activeWelcomePage={activeWelcomePage} onAnimationEnd={() => setAnimating(false)}>
      <div id="modal">
        <div id="modal-top" className={animating ? "modal-top-animation" : ""}>
          {activeWelcomePage !== 4 && (
            <img
              src={handleData().image}
              alt="Dona"
              width={100}
              className={activeWelcomePage === 3 ? "third-image" : ""}
            />
          )}
        </div>
        <div id="modal-bottom">
          <span className={animating ? "span-animation " : ""}>
            <h2>{handleData().title}</h2>
            <h3>{handleData().subtitle}</h3>
            {activeWelcomePage === 4 && (
              <input type="text" placeholder="Type it here..." onChange={(e) => setUserName(e.target.value)} />
            )}
          </span>
          <button onClick={handleContinue}>Continue</button>
          <svg viewBox="0 0 70 10" width="70" height="10">
            <circle cx="5" cy="5" r="5" fill={activeWelcomePage === 1 ? "#008FFD" : "#d9d9d9"} />
            <circle cx="25" cy="5" r="5" fill={activeWelcomePage === 2 ? "#008FFD" : "#d9d9d9"} />
            <circle cx="45" cy="5" r="5" fill={activeWelcomePage === 3 ? "#008FFD" : "#d9d9d9"} />
            <circle cx="65" cy="5" r="5" fill={activeWelcomePage === 4 ? "#008FFD" : "#d9d9d9"} />
          </svg>
        </div>
      </div>
    </WelcomeStyles>
  );
}

export default Welcome;
