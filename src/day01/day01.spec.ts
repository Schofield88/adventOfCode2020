import { findTheTwoThatSumTo2020 } from './day01';
import { puzzleInput } from './puzzleInput';

describe('day01', () => {
  describe('whatsTheAnswer', () => {
    it('should return 40000', () => {
      expect(findTheTwoThatSumTo2020([1000, 888, 6, 20, 98, 2000])).toEqual(
        40000,
      );
    });

    it('does the thing on the massive array', () => {
      expect(findTheTwoThatSumTo2020(puzzleInput)).toEqual(972576);
    });
  });
});
