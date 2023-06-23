import { useCallback, useEffect } from "react";

interface HotkeyProps {
  ctrlKey?: boolean;
  key: string;
  handler: () => void;
  shiftKey?: boolean;
}

interface Props {
  element: HTMLElement | null;
  hotkeys: HotkeyProps[];
}

function useHotkeys({ element, hotkeys }: Props) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey;
      const shift = e.shiftKey;

      hotkeys.forEach((hotkey) => {
        if (hotkey.key.toLowerCase() !== key) return;

        if (hotkey.ctrlKey && !ctrl) return;
        if (hotkey.shiftKey && !shift) return;

        if (hotkey.ctrlKey && !hotkey.shiftKey && !(ctrl && !shift)) return;
        if (!hotkey.ctrlKey && hotkey.shiftKey && !(!ctrl && shift)) return;

        if (hotkey.ctrlKey || hotkey.shiftKey) {
          e.preventDefault();
        }

        hotkey.handler();
      });
    },
    [hotkeys]
  );

  useEffect(() => {
    if (!element) return;

    element.addEventListener("keydown", handler);

    return () => {
      element.removeEventListener("keydown", handler);
    };
  }, [handler, element]);
}

export default useHotkeys;
