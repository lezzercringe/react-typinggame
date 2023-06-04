import { User } from "firebase/auth";
import { create } from "zustand";

type UserStoreState = {
  user: User | null;
  isAuth: boolean;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserStoreState>()((set) => ({
  user: null,
  isAuth: false,
  setUser: (user: User | null) =>
    set((state) => ({ ...state, user, isAuth: !!user })),
}));
