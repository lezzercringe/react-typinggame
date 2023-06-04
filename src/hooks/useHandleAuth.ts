import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useUserStore } from "store/useUserStore";

export const useHandleAuth = () => {
  const auth = getAuth();
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user || null);
    });

    return () => unsubscribe();
  }, [auth, setUser]);
};
