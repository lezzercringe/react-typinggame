import { fetchTexts } from "apifirebase/baseQueries";
import { getDatabase, ref } from "firebase/database";
import { useEffect } from "react";
import { useTextStore } from "store/useTextStore";
import { unpackFBresults } from "utils/unpackFBresults";

export const useFetchTexts = () => {
  const db = ref(getDatabase());
  const setLoadedTexts = useTextStore((state) => state.setLoadedTexts);

  useEffect(() => {
    fetchTexts(db).then((res) =>
      setLoadedTexts(unpackFBresults<string>(res.val()))
    );
  });
};
