import { relativePath } from '../src';

describe('relativePath', () => {
  it('should handle hit cases', () => {
    expect(relativePath([], ['hello', 'world', 'this'])).toStrictEqual([
      'hello',
      'world',
      'this',
    ]);
    expect(() =>
      relativePath(
        ['hello', 'world', 'this', 'is', 'not', 'parent', 'path'],
        ['hello', 'world', 'this', 'is', 'not', 'nested', 'path'],
      ),
    ).toThrow();
    expect(
      relativePath(
        ['hello', 'world', '0', 'same'],
        ['hello', 'world', '0', 'same'],
      ),
    ).toStrictEqual([]);
  });
  it('should handle simple cases', () => {
    expect(
      relativePath(['hello', 'world'], ['hello', 'world', 'nested', 'path']),
    ).toStrictEqual(['nested', 'path']);
    expect(
      relativePath(
        ['yes', 'this', 'is', 0, 'some', 'path'],
        ['yes', 'this', 'is', 0, 'some', 'path', 'asdf', 'lol'],
      ),
    ).toStrictEqual(['asdf', 'lol']);
  });
});
