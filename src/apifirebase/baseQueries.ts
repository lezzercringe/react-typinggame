import { DatabaseReference, child, get } from "firebase/database";

export const fetchUserResults = (uid: string, db: DatabaseReference) =>
  get(child(db, `results/${uid}`));

export const fetchTexts = (db: DatabaseReference) => get(child(db, "texts/"));
