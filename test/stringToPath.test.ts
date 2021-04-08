import { Pxth, stringToPxth } from '../src';
import { expectTestMap } from './utils';

describe('stringToPxth', () => {
  it('should handle simple paths', () => {
    const tests: Record<string, Pxth> = {
      'a.b.c': ['a', 'b', 'c'],
      'hello.d.f': ['hello', 'd', 'f'],
      'asdfasdf[0].hello': ['asdfasdf', '0', 'hello'],
      'hello["world"]': ['hello', 'world'],
    };

    expectTestMap(tests).toBeValue(stringToPxth);
  });

  it('should handle hit cases', () => {
    const tests: Record<string, Pxth> = {
      '': [''],
      '...': ['', '', '', ''],
      'hello..bb': ['hello', '', 'bb'],
      '[][][]': ['', '', ''],
      'hello[][]': ['hello', '', ''],
    };

    expectTestMap(tests).toBeValue(stringToPxth);
  });

  it('should handle complex paths', () => {
    const tests: Record<string, Pxth> = {
      'a[-1.23]["[\\"b\\"]"].c[\'[\\\'d\\\']\'][\ne\n][f].g': [
        'a',
        '-1.23',
        '["b"]',
        'c',
        "['d']",
        '\ne\n',
        'f',
        'g',
      ],
    };

    expectTestMap(tests).toBeValue(stringToPxth);
  });
});
