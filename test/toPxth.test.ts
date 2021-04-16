import { Pxth, ROOT_PATH, toPxth } from '../src';

describe('toPxth', () => {
  it('should convert everything to pxth', () => {
    expect(toPxth('hello.a.s')).toStrictEqual(['hello', 'a', 's']);
    expect(toPxth(15)).toStrictEqual([15]);
    expect(toPxth(ROOT_PATH)).toStrictEqual([]);
  });
  it("should return first argument, if it's already Pxth", () => {
    const pxth1 = ['hello', 'b', 'c'];
    expect(toPxth(pxth1)).toBe(pxth1);
    const pxth2: Pxth = [];
    expect(toPxth(pxth2)).toBe(pxth2);
  });
});
