import React, { useState, useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

interface ColorPickerProps {
  updateColor: (color: string) => void;
  isSelectingColor: boolean;
  setIsSelectingColor: React.Dispatch<React.SetStateAction<boolean>>;
  clickPosition: {
    top: number;
    left: number;
  };
}

import ColorPickerStyles from "./styles";

import { lightTheme } from "../../App";

const colors = [
  "0564A4",
  "0C8FF1",
  "0ABAFA",
  "0BB8AA",
  "00B873",
  "DDBC10",
  "FCF7BD",
  "FF705D",
  "F8003C",
  "BE0A19",
  "B90F8B",
  "F56ED8",
  "7E45F7",
  "4A40EE",
  "94959F",
  "7B7168",
];

function ColorPicker({ updateColor, isSelectingColor, setIsSelectingColor, clickPosition }: ColorPickerProps) {
  const [customColor, setCustomColor] = useState("008FFD");

  const [animation, setAnimation] = useState<React.CSSProperties>();

  const handleCloseCategoryPicker = () => {
    if (!isSelectingColor) {
      setAnimation({
        animation: "colorPickerSlideDown .25s ease forwards",
      });
      return;
    }

    waitForAnimationAndClose();
  };

  const waitForAnimationAndClose = () => {
    setAnimation({
      animation: "colorPickerSlideUp .25s ease forwards",
    });

    setTimeout(() => {
      setIsSelectingColor(false);
    }, 250);
  };

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, handleCloseCategoryPicker);

  function handleSelectColor(color: string, e?: React.FormEvent) {
    e?.preventDefault();

    setCustomColor(color);

    updateColor(color);
    handleCloseCategoryPicker();
  }

  return (
    <ColorPickerStyles
      clickPosition={clickPosition}
      theme={lightTheme}
      isSelectingColor={isSelectingColor}
      ref={wrapperRef}
      style={{ ...animation }}
    >
      {isSelectingColor && (
        <>
          <h4>Colors</h4>
          <div className="colors">
            <ul>
              {colors.map((color) => (
                <li key={color} onClick={() => handleSelectColor(color)}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="1.25"
                      y="1.25"
                      width="12.5"
                      height="12.5"
                      rx="4.75"
                      stroke={`#${color}`}
                      fill={`#${color}`}
                      strokeWidth="2.5"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
          <div id="custom-color-wrapper">
            <h4>Custom color</h4>
            <div id="custom-color">
              <form noValidate onSubmit={(e) => handleSelectColor(customColor, e)}>
                <span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="1.25"
                      y="1.25"
                      width="12.5"
                      height="12.5"
                      rx="4.75"
                      stroke={customColor ? `#${customColor}` : "#008FFD"}
                      fill={customColor ? `#${customColor}` : "#008FFD"}
                      strokeWidth="2.5"
                    />
                  </svg>
                </span>
                <input type="text" placeholder={"008FFD"} onChange={(e) => setCustomColor(e.target.value)} />
              </form>
            </div>
          </div>
        </>
      )}
    </ColorPickerStyles>
  );
}

export default ColorPicker;
