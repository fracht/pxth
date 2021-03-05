import { Pxth, pxthToString, StringifyError } from '../src';

describe('pxthToString', () => {
  it('should stringify path', () => {
    const tests: Record<string, Pxth> = {
      'a.b.c': ['a', 'b', 'c'],
      '0.hello': [0, 'hello'],
      'as.0.asd.15': ['as', 0, 'asd', 15],
    };

    for (const expectedPath in tests) {
      expect(pxthToString(tests[expectedPath])).toBe(expectedPath);
    }
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

    for (const expectedPath in tests) {
      expect(pxthToString(tests[expectedPath])).toBe(expectedPath);
    }
  });

  it('should throw error', () => {
    const tests = [
      [0, Symbol(), 'asdf'],
      [-19, 22, 'hello', {}],
      [111111, new Date()],
      [Symbol.for(''), 11],
    ];

    for (const testCase of tests) {
      expect(() => pxthToString((testCase as unknown) as Pxth)).toThrow(
        StringifyError,
      );
    }
  });
});
