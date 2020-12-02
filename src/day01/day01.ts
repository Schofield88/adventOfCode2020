const reduceTheTwoUsing = (yourTotal: number) => (
  accumulator: number[],
  value: number,
  index: number,
  array: number[],
) => {
  if (accumulator.length === 2) {
    return accumulator;
  }

  const otherNumber = yourTotal - value;
  const isTheOtherNumberInThere = array.find(number => number === otherNumber);

  if (isTheOtherNumberInThere) {
    return [value, isTheOtherNumberInThere];
  }

  return [0];
};

const reduceTheTwo = reduceTheTwoUsing(2020);

const findTheTwo = (data: number[]): number => {
  const [one, two] = data.reduce(reduceTheTwo, [0]);

  return one * two;
};

const reduceTheThree = (
  accumulator: number[],
  value: number,
  index: number,
  array: number[],
) => {
  if (accumulator.length === 3) {
    return accumulator;
  }

  const whatsLeftFrom2020WhenYouSubtractTheValue = 2020 - value;
  const onlyKeepTheNumbersThatDoNotExceedOtherNumber = array.filter(
    number => number <= whatsLeftFrom2020WhenYouSubtractTheValue,
  );

  if (onlyKeepTheNumbersThatDoNotExceedOtherNumber.length === 0) {
    return [0];
  }

  const filterOutTheValueWereWorkingOn = onlyKeepTheNumbersThatDoNotExceedOtherNumber.filter(
    number => number !== value,
  );

  const willThisEvenWork = reduceTheTwoUsing(
    whatsLeftFrom2020WhenYouSubtractTheValue,
  );
  const hereWeGo = filterOutTheValueWereWorkingOn.reduce(willThisEvenWork, [0]);

  if (hereWeGo.length === 2) {
    const [one, two] = hereWeGo;
    return [value, one, two];
  }

  return [0];
};

const findTheThree = (data: number[]): number => {
  const [one, two, three] = data.reduce(reduceTheThree, [0]);
  return one * two * three;
};

export { findTheTwo, findTheThree };
