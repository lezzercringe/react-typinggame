type Returntype = {
  positions: number[];
  count: number;
};

// {
//   positions: [3,4,5,6],
//   count: 4
// }

export const countMistakes = (
  enteredText: string,
  neededText: string
): Returntype => {
  let count = 0;
  const positions: number[] = [];

  enteredText.split("").forEach((letter, pos) => {
    if (neededText[pos] !== letter) {
      count += 1;
      positions.push(pos);
    }
  });

  return { count, positions };
};
