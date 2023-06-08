import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TextStore = {
  loadedTexts: { name: string; id: string }[];
  text: string;
  enteredText: string;
  setLoadedTexts: (data: string[]) => void;
  enterLetter: (letter: string) => void;
  removeLetter: () => void;
  setText: (text: string) => void;
  resetEnteredText: () => void;
  setTextById: (id: string) => void;
};

const TEXT =
  "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might";

export const useTextStore = create<TextStore>()(
  devtools((set) => ({
    text: TEXT,
    enteredText: "",
    loadedTexts: [],
    setLoadedTexts: (data: string[]) =>
      set((state) => ({
        ...state,
        loadedTexts: data.map((text, index) => ({
          name: text,
          id: index.toString(),
        })),
      })),
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
    setTextById: (id: string) => {
      set((state) => {
        const foundText = state.loadedTexts.find((el) => el.id === id) || {
          name: "Random text",
          id: "0",
        };
        return { ...state, text: foundText.name };
      });
    },
  }))
);
