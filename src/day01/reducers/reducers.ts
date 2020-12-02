const reduceTheTwoUsing = (yourTotal: number) => (
  accumulator: number[],
  value: number,
  _: number,
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

const reduceTheThree = (
  accumulator: number[],
  value: number,
  _: number,
  array: number[],
) => {
  if (accumulator.length === 3) {
    return accumulator;
  }

  const theRemainderFrom2020 = 2020 - value;
  const theNumbersThatDontExceedTheRemainder = array.filter(
    number => number <= theRemainderFrom2020,
  );

  if (theNumbersThatDontExceedTheRemainder.length === 0) {
    return [0];
  }

  const filterOutTheCurrentValue = theNumbersThatDontExceedTheRemainder.filter(
    number => number !== value,
  );

  const reduceTheTwo = reduceTheTwoUsing(theRemainderFrom2020);
  const theTwoNumbersThatSumToTheRemainder = filterOutTheCurrentValue.reduce(
    reduceTheTwo,
    [0],
  );

  if (theTwoNumbersThatSumToTheRemainder.length === 2) {
    const [one, two] = theTwoNumbersThatSumToTheRemainder;
    return [value, one, two];
  }

  return [0];
};

export { reduceTheTwoUsing, reduceTheThree };
