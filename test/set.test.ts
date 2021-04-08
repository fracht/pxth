import { set } from '../src/set';

describe('set', () => {
  it('should set value', () => {
    expect(set({}, ['hello'], 'value')).toStrictEqual({
      hello: 'value',
    });
  });

  it('should set deep value', () => {
    expect(set({}, ['hello', 'asdf', 'b'], 'value')).toStrictEqual({
      hello: {
        asdf: {
          b: 'value',
        },
      },
    });
  });

  it('should create array', () => {
    expect(set({}, ['hello', 0, 'b'], 'value')).toStrictEqual({
      hello: [
        {
          b: 'value',
        },
      ],
    });
    expect(set({ hello: { b: '' } }, ['hello', 'arr', '2'], 15)).toStrictEqual({
      hello: {
        b: '',
        arr: [, , 15],
      },
    });
    expect(
      set({ hello: { b: '' } }, ['hello', 'arr', '2.15'], 15),
    ).toStrictEqual({
      hello: {
        b: '',
        arr: {
          ['2.15']: 15,
        },
      },
    });
    expect(set({ hello: { b: '' } }, ['hello', 'arr', 2.15], 15)).toStrictEqual(
      {
        hello: {
          b: '',
          arr: {
            [2.15]: 15,
          },
        },
      },
    );
    expect(set({ hello: { b: '' } }, ['hello', 'arr', -1], 15)).toStrictEqual({
      hello: {
        b: '',
        arr: {
          [-1]: 15,
        },
      },
    });
  });

  it('should overwrite props', () => {
    expect(
      set({ b: { c: 'a' } }, ['b', 'c', 'e', 0], { d: { f: 'a' } }),
    ).toStrictEqual({
      b: {
        c: {
          e: [
            {
              d: {
                f: 'a',
              },
            },
          ],
        },
      },
    });
  });

  it('should do nothing', () => {
    expect(set(null, ['a', 'b'], 'value')).toBe(null);
    expect(set(undefined, ['a', 'b'], 'value')).toBe(undefined);
    expect(set('', ['a', 'b'], 'value')).toBe('');
    expect(set(0, ['a', 'b'], 'value')).toBe(0);
  });
});
