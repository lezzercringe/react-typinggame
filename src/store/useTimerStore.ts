import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TimerStore = {
  timer: number;
  setTime: (time: number) => void;
};

export const useTimerStore = create<TimerStore>()(
  devtools((set) => ({
    timer: 5,
    setTime: (time) => set((state) => ({ ...state, timer: time })),
  }))
);
