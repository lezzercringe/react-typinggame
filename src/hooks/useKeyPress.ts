import { useCallback, useEffect } from "react";

export const useKeyPress = (
  callback: (key: string) => unknown,
  neededKeys?: string[]
): void => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (neededKeys) {
        neededKeys.includes(e.key) && callback(e.key);
      } else {
        callback(e.key);
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};
