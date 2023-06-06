import { useRef } from "react";
import { useTextStore } from "store/useTextStore";

import { useHandleResize } from "hooks/useHandleResize";
import { useKeyPress } from "hooks/useKeyPress";
import { calculatePosition, useBeam } from "hooks/useBeam";

import { Letter } from "..";
import cl from "./TextField.module.css";

export const TextField = () => {
  const ASCII_CHARACTERS =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  const letterRefs = useRef<Array<HTMLElement>>([]);
  const viewPortWidth = useHandleResize();
  const beamRef = useRef<HTMLDivElement>(null);
  const { currentText, enteredText, removeLetter, addLetter } = useTextStore(
    (state) => ({
      currentText: state.text,
      enteredText: state.enteredText,
      removeLetter: state.removeLetter,
      addLetter: state.enterLetter,
    })
  );

  useKeyPress(
    (key) => {
      if (currentText.length !== enteredText.length) {
        if (key === "Backspace") {
          removeLetter();
        } else {
          addLetter(key);
        }
      }
    },
    [...ASCII_CHARACTERS.split(""), "Backspace"]
  );

  useBeam(
    enteredText,
    currentText,
    calculatePosition,
    viewPortWidth,
    letterRefs,
    beamRef
  );

  return (
    <div className="h-96 w-full ">
      <div
        ref={beamRef}
        style={{ transitionDuration: "100ms" }}
        className={["absolute bg-yellow-500 transition-all", cl.beam].join(" ")}
      ></div>
      {currentText.split("").map((letter, idx) => {
        return (
          <Letter
            key={idx}
            isEntered={enteredText.length >= idx + 1}
            letter={letter}
            //@eslint-disable-next-line
            //@ts-ignore
            refLink={(el) => (letterRefs.current[idx] = el)}
            isCorrect={
              enteredText.length >= idx + 1 && enteredText[idx] === letter
            }
          />
        );
      })}
    </div>
  );
};
