import React, { useEffect, useState, useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

interface ColorPickerProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  isSelectingColor: boolean;
  setIsSelectingColor: React.Dispatch<React.SetStateAction<boolean>>;
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

function ColorPicker({ setColor, isSelectingColor, setIsSelectingColor }: ColorPickerProps) {
  const [customColor, setCustomColor] = useState("008FFD");

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setIsSelectingColor(false));

  function handleSelectColor(color: string, e?: React.FormEvent) {
    e?.preventDefault();

    setColor(color);
    setIsSelectingColor(!isSelectingColor);
  }

  useEffect(() => {
    if (customColor === "") setCustomColor("008FFD");
  }, [customColor]);

  return (
    <ColorPickerStyles theme={lightTheme} isSelectingColor={isSelectingColor} ref={wrapperRef}>
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
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.25"
                  y="1.25"
                  width="12.5"
                  height="12.5"
                  rx="4.75"
                  stroke={`#${customColor}`}
                  fill={`#${customColor}`}
                  strokeWidth="2.5"
                />
              </svg>
              <form noValidate onSubmit={(e) => handleSelectColor(customColor, e)}>
                <input type="text" placeholder={customColor} onChange={(e) => setCustomColor(e.target.value)} />
              </form>
            </div>
          </div>
        </>
      )}
    </ColorPickerStyles>
  );
}

export default ColorPicker;
