import { validatePasswordInformation } from './day02';
import { puzzle02Input } from './puzzle02Input';

const onlyThreeValidPasswords = [
  '6-8 s: svsssszslpsp',
  '3-4 n: gncn',
  '4-8 v: vkvmvdmvhttvvrgvvwv',
  '16-18 j: jjjjjjjjjjjjjjjjjf',
  '13-15 p: pppppppvppppxxppp',
];

describe('day02', () => {
  it('validates a short array containing 3 valid passwords', () => {
    expect(validatePasswordInformation(onlyThreeValidPasswords)).toEqual(3);
  });

  it('works on the actual solution', () => {
    expect(validatePasswordInformation(puzzle02Input)).toEqual(515);
  });
});
