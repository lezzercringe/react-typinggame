import { RefObject } from "react";

type Props = {
  letter: string;
  isCorrect: boolean;
  refLink: RefObject<HTMLElement>;
  isEntered: boolean;
};

export const Letter = ({ letter, isCorrect, isEntered, refLink }: Props) => {
  return (
    <span
      ref={refLink}
      style={{ marginInline: "0.2px" }}
      className={[
        "text-xl",
        isCorrect && isEntered && "opacity-100",
        !isCorrect && isEntered && "text-red-500 opacity-100",
        !isEntered && " opacity-70",
      ].join(" ")}
    >
      {letter}
    </span>
  );
};
