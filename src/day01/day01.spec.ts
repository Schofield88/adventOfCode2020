import { findTheThree, findTheTwo } from './day01';
import { puzzleInput } from './puzzleInput';

describe('day01', () => {
  describe('findTheTwo', () => {
    it('should return 40000', () => {
      expect(findTheTwo([1000, 888, 6, 20, 98, 2000])).toEqual(40000);
    });

    it('does the thing on the massive array', () => {
      expect(findTheTwo(puzzleInput)).toEqual(972576);
    });
  });

  describe('findTheThree', () => {
    it('should return 241861950', () => {
      expect(
        findTheThree([
          979,
          1684,
          1857,
          1257,
          1718,
          1969,
          1968,
          366,
          675,
          123,
          465,
          798,
        ]),
      ).toEqual(241861950);
    });

    it('gives me the answer AdventOfCode is looking for', () => {
      expect(findTheThree(puzzleInput)).toEqual(199300880);
    });
  });
});
