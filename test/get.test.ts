import { get } from '../src/get';

describe('get', () => {
  it('should get value', () => {
    expect(get({ a: 'helo' }, ['a'])).toBe('helo');
    expect(get({ 0: 'helo' }, [0])).toBe('helo');
    expect(get(['helo'], [0])).toBe('helo');
    expect(get(['helo'], ['0'])).toBe('helo');
    const s = Symbol();
    expect(get({ [s]: 'helo' }, [s])).toBe('helo');
  });

  it('should get deep value', () => {
    const s = Symbol();
    expect(
      get(
        {
          a: {
            hello: [
              'a',
              {
                [s]: 'a',
                [Symbol()]: 'b',
              },
            ],
          },
        },
        ['a', 'hello', 1, s],
      ),
    ).toBe('a');
    const value = {
      lol: 'a',
      b: new Date(),
    };
    expect(
      get(
        {
          g: {
            f: value,
          },
        },
        ['g', 'f'],
      ),
    ).toStrictEqual(value);
  });

  it('should return default value', () => {
    expect(get({}, ['lol'], 0)).toBe(0);
    expect(get({ b: '' }, ['ba'], 'this is default value')).toBe(
      'this is default value',
    );
    expect(get({ d: { e: '' } }, ['d', 'f'], '0')).toBe('0');
    expect(get({ d: { e: '', [Symbol()]: 'a' } }, ['d', Symbol()], '0')).toBe(
      '0',
    );
  });

  it('should not return default value', () => {
    expect(get({ b: undefined }, ['b'], 'default')).toBe(undefined);
    expect(get({ b: null }, ['b'], 'default')).toBe(null);
  });

  it('should handle hit cases', () => {
    const obj = {
      hello: ['a'],
    };
    expect(get(obj, [])).toStrictEqual(obj);
    expect(get('asd', ['length'])).toBe(3);
    expect(get(null, ['a', 'b'])).toBe(undefined);
    expect(get(null, [])).toBe(null);
    expect(get(null, ['a', 'b'], 'a')).toBe('a');
  });
});
