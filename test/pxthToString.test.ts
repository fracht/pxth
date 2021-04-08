import { Pxth, pxthToString, StringifyError } from '../src';
import { expectTestArray, expectTestMap } from './utils';

describe('pxthToString', () => {
  it('should stringify path', () => {
    const tests: Record<string, Pxth> = {
      'a.b.c': ['a', 'b', 'c'],
      '0.hello': [0, 'hello'],
      'as.0.asd.15': ['as', 0, 'asd', 15],
    };

    expectTestMap(tests).toBeKey(pxthToString);
  });

  it('should escape paths', () => {
    const tests: Record<string, Pxth> = {
      'hello.["\\.hellasd\\\'"].0.as': ['hello', ".hellasd'", 0, 'as'],
      'asdf.["bs\\.\\.\\.\\.\\.\\.\\\'\\""].gf.fff': [
        'asdf',
        'bs......\'"',
        'gf',
        'fff',
      ],
    };

    expectTestMap(tests).toBeKey(pxthToString);
  });

  it('should throw error', () => {
    const tests = [
      [0, Symbol(), 'asdf'],
      [-19, 22, 'hello', {}],
      [111111, new Date()],
      [Symbol.for(''), 11],
    ];

    expectTestArray(tests).apply((testCase) =>
      expect(() => pxthToString((testCase as unknown) as Pxth)).toThrow(
        StringifyError,
      ),
    );
  });
});
