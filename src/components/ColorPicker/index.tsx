import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import Logo from "@components/Logo";

import {
  blue,
  red,
  green,
  orange,
  yellow,
  amber,
  cyan,
  gray,
} from "tailwindcss/colors";

import useOnClickOutside from "@hooks/useOnClickOutside";

interface Props {
  color?: string;
  changeColor: (color: string) => void;
  closeColorPicker: (e?: MouseEvent | TouchEvent) => void;
  parentRef: React.RefObject<HTMLDivElement>;
}

function ColorPicker({
  color,
  changeColor,
  closeColorPicker,
  parentRef,
}: Props) {
  const [customColor, setCustomColor] = useState(color ?? "");

  const colorPickerRef = useRef<HTMLDivElement>(null);

  const colors = [
    blue[500],
    red[500],
    green[500],
    orange[500],
    yellow[500],
    amber[500],
    cyan[500],
    gray[500],
  ];

  useEffect(() => {
    if (!colorPickerRef.current || !parentRef.current) return;

    colorPickerRef.current.focus();

    const parentRect = parentRef.current!.getBoundingClientRect();

    colorPickerRef.current.style.width = `${parentRect.width}px`;
    colorPickerRef.current.style.top = `${parentRect.top}px`;
    colorPickerRef.current.style.left = `${parentRect.left}px`;

    if (
      colorPickerRef.current.getBoundingClientRect().top >
      window.innerHeight / 2 + colorPickerRef.current.offsetHeight
    ) {
      colorPickerRef.current.style.transform = `translateY(-${
        colorPickerRef.current.offsetHeight + 8 + 8 + 24
      }px)`;
      return;
    }
  }, []);

  useOnClickOutside(colorPickerRef, closeColorPicker);

  return createPortal(
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      ref={colorPickerRef}
      className="absolute z-10 flex h-fit w-full flex-col divide-y divide-background rounded-lg bg-white p-1 ring-1 ring-background"
    >
      <span className="w-fit p-2 text-xs text-text/50">Colors</span>
      <ul className="flex flex-wrap gap-2 px-2 py-3">
        {colors.map((color) => (
          <span
            key={color}
            onClick={() => changeColor(color)}
            role="button"
            tabIndex={0}
            className="grid aspect-square h-8 w-8 cursor-default place-items-center rounded-lg transition-all hover:bg-black/5"
          >
            <Logo color={color} size={16} />
          </span>
        ))}
      </ul>
      <div className="flex w-full items-center gap-4 p-2">
        <span className="whitespace-nowrap text-xs text-text/50">
          Custom Color:{" "}
        </span>
        <div className="flex h-8 w-full items-center gap-2 overflow-hidden rounded-lg bg-black/5 px-3">
          <Logo color={customColor} size={12} />
          <input
            onChange={(e) => setCustomColor(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                changeColor(customColor);
              }
            }}
            placeholder="#1992FA"
            type="text"
            value={customColor}
            className="w-full truncate bg-transparent py-2 text-sm text-text outline-none"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ColorPicker;
