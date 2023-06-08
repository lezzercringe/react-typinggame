export type FBfetchedData<T> = {
  [key: string]: T;
};

export const unpackFBresults = <T>(data: FBfetchedData<T>): T[] => {
  const exitArr: T[] = [];
  for (const key in data) {
    exitArr.push(data[key]);
  }
  return exitArr;
};
