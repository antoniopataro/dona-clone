import React, { useCallback, useEffect } from "react";

interface ShortcutProps {
  ctrlKey: boolean;
  key: string;
  handler: Function;
}

function useShortcut(shortcuts: ShortcutProps[]) {
  const functionHandler = useCallback((e: any) => {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey;

    shortcuts.forEach((shortcut: ShortcutProps) => {
      if (ctrl === shortcut.ctrlKey && key === shortcut.key.toLowerCase()) {
        e.preventDefault();
        shortcut.handler();
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => functionHandler(e));

    return () => {
      document.removeEventListener("keydown", (e) => functionHandler(e));
    };
  }, [functionHandler]);
}

export default useShortcut;
