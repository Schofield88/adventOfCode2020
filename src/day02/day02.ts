const validatePasswordInformation = (passwords: string[]): number => {
  const passwordReducer = (
    accumulator: number,
    passwordThingy: string,
  ): number => {
    const [range, letterWithColon, password] = passwordThingy.split(' ');

    const [lower, upper] = range.split('-');
    const letter = letterWithColon.slice(0, 1);

    const breakUpThePassword = password.split('');
    const justTheLetter = breakUpThePassword.filter(
      singleLetter => singleLetter === letter,
    );

    if (
      justTheLetter.length >= parseInt(lower) &&
      justTheLetter.length <= parseInt(upper)
    ) {
      return accumulator + 1;
    }

    return accumulator;
  };

  return passwords.reduce(passwordReducer, 0);
};

export { validatePasswordInformation };
