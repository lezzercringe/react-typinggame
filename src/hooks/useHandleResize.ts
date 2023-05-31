import { useEffect, useState } from "react";

export const useHandleResize = (): number => {
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth;
};
