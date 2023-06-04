import { useCallback, useState } from "react";

export const useToggle = (initial: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initial);
  return [value, useCallback(() => setValue((v) => !v), [])];
};
