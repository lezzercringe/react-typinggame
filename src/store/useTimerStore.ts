import { create } from "zustand";

type TimerStore = {
  timer: number;
  setTime: (time: number) => void;
};

export const useTimerStore = create<TimerStore>()((set) => ({
  timer: 5,
  setTime: (time) => set((state) => ({ ...state, timer: time })),
}));
