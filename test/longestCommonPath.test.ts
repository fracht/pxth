import { longestCommonPath } from '../src';

describe('longestCommonPath', () => {
  it('hit cases', () => {
    expect(longestCommonPath([])).toStrictEqual([]);
    expect(longestCommonPath([[]])).toStrictEqual([]);
    expect(longestCommonPath([['asdf']])).toStrictEqual(['asdf']);
  });
  it('should return longest common path', () => {
    expect(
      longestCommonPath([
        ['asdf'],
        ['asdf', 'hello'],
        ['asdf', 'bye'],
        ['asdf', 'hello', 'bye'],
      ]),
    ).toStrictEqual(['asdf']);
    expect(
      longestCommonPath([
        ['hello', 'this', 'is', 'world'],
        ['hello', 'this', 'is', 'bye'],
        ['hello', 'this', 'is'],
      ]),
    ).toStrictEqual(['hello', 'this', 'is']);
  });
  it('no common paths', () => {
    expect(
      longestCommonPath([
        ['asdf'],
        ['b'],
        ['asdf', 'hello', 'bye'],
        ['asdf', 'hello'],
        ['asdf', 'bye'],
      ]),
    ).toStrictEqual([]);
    expect(
      longestCommonPath([
        ['hello', 'this', 'is', 'world'],
        ['hello', 'this', 'is', 'bye'],
        ['ahello'],
        ['hello', 'this', 'is'],
      ]),
    ).toStrictEqual([]);
    expect(
      longestCommonPath([
        ['undefined'],
        ['undefined'],
        ['undefined', 'undefined', 'undefinedb'],
        ['undefineda', 'hello'],
        ['undefined', 'undefined'],
      ]),
    ).toStrictEqual([]);
  });
});
