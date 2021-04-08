import { isNestedPath } from '../src/isNestedPath';

describe('isNestedPath', () => {
  it('should return false', () => {
    expect(isNestedPath(['hello'], ['b'])).toBeFalsy();
    expect(isNestedPath(['hello'], ['helloa'])).toBeFalsy();
    expect(isNestedPath(['hello'], ['chello'])).toBeFalsy();
    expect(isNestedPath(['hello', 'asdf'], ['hello', 'a'])).toBeFalsy();
    expect(isNestedPath(['hello', 'asdf'], ['hello', 'a'])).toBeFalsy();
    expect(isNestedPath(['hello', 'asdf', 'b'], ['hello'])).toBeFalsy();
  });

  it('should return true', () => {
    expect(isNestedPath(['hello'], ['hello', 'asdf'])).toBeTruthy();
    expect(isNestedPath(['hello'], ['hello', 'asdf', 'asdf'])).toBeTruthy();
    expect(isNestedPath(['hello'], ['hello', 'hello', 'hello'])).toBeTruthy();
  });

  it('should handle symbols', () => {
    const s = Symbol();
    expect(isNestedPath(['hello', s], ['hello', s, 'b'])).toBeTruthy();
    expect(
      isNestedPath(['hello', Symbol.for('a')], ['hello', Symbol.for('a'), 'b']),
    ).toBeTruthy();
    expect(isNestedPath(['hello', s], ['hello', Symbol(), 'b'])).toBeFalsy();
  });

  it('shoud handle complex cases', () => {
    expect(
      isNestedPath(
        ['hello', 'asdf', 'bsdf'],
        ['hello', 'asdf', 'bsdf', 'lol', 'k', 'w'],
      ),
    ).toBeTruthy();
    expect(
      isNestedPath(['hello', 0, 'bsdf'], ['hello', 0, 'bsdf', 'lol', 'k', 'w']),
    ).toBeTruthy();
  });
});
