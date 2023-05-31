import { RefObject, useEffect } from "react";

export const calculatePosition = (
  letterElement: HTMLElement
): { x: number; y: number } => {
  const { x, y } = letterElement.getBoundingClientRect();
  return { x, y };
};

export const useBeam = (
  enteredText: string,
  currentText: string,
  calculatePosition: (refs: HTMLElement) => {
    x: number;
    y: number;
  },
  viewportWidth: number,
  letterRefs: RefObject<HTMLElement[]>,
  beamRef: RefObject<HTMLElement>
) => {
  useEffect(() => {
    console.log(enteredText);

    if (
      beamRef &&
      beamRef?.current &&
      letterRefs &&
      letterRefs.current &&
      currentText.length !== enteredText.length
    ) {
      const coords = calculatePosition(letterRefs.current[enteredText.length]);
      if (enteredText.length === 0) {
        beamRef.current.style.left = `${coords.x - 2}px`;
        beamRef.current.style.top = `${coords.y + 3}px`;
      } else {
        beamRef.current.style.left = `${coords.x + 1}px`;
        beamRef.current.style.top = `${coords.y + 3}px`;
      }
    }
  }, [enteredText, beamRef, calculatePosition, letterRefs, viewportWidth]);
};
