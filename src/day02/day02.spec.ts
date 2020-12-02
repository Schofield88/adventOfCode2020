import {
  updatedValidatePasswordPolicy,
  validatePasswordInformation,
} from './day02';
import { puzzle02Input } from './puzzle02Input';

const somePasswords = [
  '6-8 s: svsssszslpsp',
  '3-4 n: gncn',
  '4-8 v: vkvmvdmvhttvvrgvvwv',
  '16-18 j: jjjjjjjjjjjjjjjjjf',
  '13-15 p: pppppppvppppxxppp',
];

const justOne = ['3-4 n: gncn'];

describe('day02', () => {
  describe('validatePasswordInformation', () => {
    it('validates a short array containing 3 valid passwords', () => {
      expect(validatePasswordInformation(somePasswords)).toEqual(3);
    });

    it('works on the actual solution', () => {
      expect(validatePasswordInformation(puzzle02Input)).toEqual(515);
    });
  });

  describe('updatedValidatePasswordInformation', () => {
    it('uses the new positional policy', () => {
      expect(updatedValidatePasswordPolicy(justOne)).toEqual(1);
    });

    it('works out the solution to part 2', () => {
      expect(updatedValidatePasswordPolicy(puzzle02Input)).toEqual(711);
    });
  });
});
