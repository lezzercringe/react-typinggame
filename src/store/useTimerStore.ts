import { create } from "zustand";

type TimerStore = {
  timer: number;
  isStopped: boolean;
  setIsStopped: (isStopped: boolean) => void;
  setTime: (time: number) => void;
};

export const useTimerStore = create<TimerStore>()((set) => ({
  timer: 5,
  setTime: (time) => set((state) => ({ ...state, timer: time })),
  isStopped: false,
  setIsStopped: (isStopped: boolean) =>
    set((state) => ({ ...state, isStopped })),
}));
