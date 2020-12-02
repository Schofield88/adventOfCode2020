import { reduceTheThree, reduceTheTwoUsing } from './reducers/reducers';

interface FindTheThings {
  (data: number[]): number;
}

const findTheTwo: FindTheThings = data => {
  const reduceTheTwo = reduceTheTwoUsing(2020);
  const [one, two] = data.reduce(reduceTheTwo, [0]);

  return one * two;
};

const findTheThree: FindTheThings = data => {
  const [one, two, three] = data.reduce(reduceTheThree, [0]);

  return one * two * three;
};

export { findTheTwo, findTheThree };
