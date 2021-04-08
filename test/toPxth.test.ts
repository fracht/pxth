import { ROOT_PATH, toPxth } from '../src';

describe('toPxth', () => {
  it('should convert everything to pxth', () => {
    expect(toPxth('hello.a.s')).toStrictEqual(['hello', 'a', 's']);
    expect(toPxth(15)).toStrictEqual([15]);
    expect(toPxth(ROOT_PATH)).toStrictEqual([]);
  });
});
