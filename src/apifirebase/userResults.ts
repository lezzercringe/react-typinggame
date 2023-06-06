import { DatabaseReference, child, get } from "firebase/database";
import { Result } from "types/ResultsData";

export const fetchUserResults = (uid: string, db: DatabaseReference) =>
  get(child(db, `results/${uid}`));

type unpackResultsData = {
  [key: string]: Result;
};

export const unpackResults = (data: unpackResultsData): Result[] => {
  const exitArr: Result[] = [];

  for (const key in data) {
    exitArr.push({
      wpm: data[key].wpm,
      date: data[key].date,
      mistakesCount: data[key].mistakesCount,
      id: key,
    });
  }

  return exitArr;
};
