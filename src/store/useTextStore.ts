import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TextStore = {
  text: string;
  enteredText: string;
  enterLetter: (letter: string) => void;
  removeLetter: () => void;
  setText: (text: string) => void;
  resetEnteredText: () => void;
};

const TEXT =
  "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might";

export const useTextStore = create<TextStore>()((set) => ({
  text: TEXT,
  enteredText: "",
  setText: (payloadText: string) =>
    set((state) => ({ ...state, text: payloadText })),
  enterLetter: (letter) =>
    set((state) => ({ ...state, enteredText: state.enteredText + letter })),
  removeLetter: () =>
    set((state) => ({
      ...state,
      enteredText: state.enteredText.slice(0, -1),
    })),
  resetEnteredText: () => {
    set((state) => ({ ...state, enteredText: "" }));
  },
}));
