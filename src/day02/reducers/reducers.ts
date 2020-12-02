import { crunchPassword } from './crunchPassword';

interface PasswordReducer {
  (accumulator: number, passwordThingy: string): number;
}

const passwordReducer: PasswordReducer = (accumulator, passwordThingy) => {
  const { lower, upper, letter, breakUpThePassword } = crunchPassword(
    passwordThingy,
  );

  const justTheLetter = breakUpThePassword.filter(
    singleLetter => singleLetter === letter,
  );

  if (justTheLetter.length >= lower && justTheLetter.length <= upper) {
    return accumulator + 1;
  }

  return accumulator;
};

const updatedPasswordReducer: PasswordReducer = (
  accumulator,
  passwordThingy,
) => {
  const { lower, upper, letter, breakUpThePassword } = crunchPassword(
    passwordThingy,
  );
  const actualLower = lower - 1;
  const actualUpper = upper - 1;

  const isBothOrNah = (): boolean =>
    breakUpThePassword[actualLower] === letter &&
    breakUpThePassword[actualUpper] === letter;

  if (isBothOrNah()) {
    return accumulator;
  }

  if (
    breakUpThePassword[actualLower] === letter ||
    breakUpThePassword[actualUpper] === letter
  ) {
    return accumulator + 1;
  }

  return accumulator;
};

export { passwordReducer, PasswordReducer, updatedPasswordReducer };
