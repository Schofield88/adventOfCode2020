const crunchPassword = (passwordThingy: string) => {
  const [range, letterWithColon, password] = passwordThingy.split(' ');

  const [stringLower, stringUpper] = range.split('-');
  const lower = parseInt(stringLower);
  const upper = parseInt(stringUpper);

  const letter = letterWithColon.slice(0, 1);

  const breakUpThePassword = password.split('');

  return { lower, upper, letter, breakUpThePassword };
};

export { crunchPassword };
