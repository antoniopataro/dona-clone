import React, { useEffect, useState, useRef, useCallback } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import ColorPickerStyles from "./styles";

interface ColorPickerProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  isSelectingColor: boolean;
  setIsSelectingColor: React.Dispatch<React.SetStateAction<boolean>>;
}

function ColorPicker({ setColor, isSelectingColor, setIsSelectingColor }: ColorPickerProps) {
  const [customColor, setCustomColor] = useState("008FFD");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, () => setIsSelectingColor(false));

  function handleSelectColor(color: string, e?: React.FormEvent) {
    e?.preventDefault();

    setColor(color);

    setIsSelectingColor(!isSelectingColor);
  }

  const placeholderColor = useEffect(() => {
    if (customColor === "") setCustomColor("008FFD");
  }, [customColor]);

  return (
    <ColorPickerStyles isSelectingColor={isSelectingColor} ref={wrapperRef}>
      {isSelectingColor && (
        <>
          <h4>Colors</h4>
          <div className="colors">
            <ul>
              <li onClick={() => handleSelectColor("493DF4")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#493DF4" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("9719FA")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#9719FA" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("FA4119")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#FA4119" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("DBBA0D")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#DBBA0D" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("B50C1F")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#B50C1F" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("28C166")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#28C166" strokeWidth="2.5" />
                </svg>
              </li>
              <li onClick={() => handleSelectColor("6D6D6D")}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="4.75" stroke="#6D6D6D" strokeWidth="2.5" />
                </svg>
              </li>
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
