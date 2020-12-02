const findTheTwoThatSumTo2020 = (data: number[]): number => {
  const myReducer = (
    accumulator: number,
    value: number,
    index: number,
    array: number[],
  ) => {
    if (accumulator > 0) {
      return accumulator;
    }

    const otherNumber = 2020 - value;
    const isTheOtherNumberInThere = array.find(
      number => number === otherNumber,
    );

    if (isTheOtherNumberInThere) {
      return value * isTheOtherNumberInThere;
    }

    return 0;
  };

  return data.reduce(myReducer, 0);
};

export { findTheTwoThatSumTo2020 };
