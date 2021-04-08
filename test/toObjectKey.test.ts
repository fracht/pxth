import { ROOT_PATH, toObjectKey } from '../src';

describe('toObjectKey', () => {
  it('should convert Pxth to string', () => {
    expect(toObjectKey(['hello', 'bye', 'asdf'])).toBe('hello.bye.asdf');
    expect(toObjectKey(['hello', 0, 'as df'])).toBe('hello.0.["as df"]');
  });
  it('should handle hit cases', () => {
    expect(toObjectKey([])).toBe(ROOT_PATH);
    expect(toObjectKey([0])).toBe(0);
    expect(toObjectKey([ROOT_PATH])).toBe(ROOT_PATH);
    expect(toObjectKey(['asdf'])).toBe('asdf');
  });
});
