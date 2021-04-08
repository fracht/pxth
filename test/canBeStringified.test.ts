import { canBeStringified, Pxth } from '../src';
import { expectTestArray } from './utils';

describe('canBeStringified', () => {
  it('should success', () => {
    const tests = [
      ['asdf', 0, 15, 'hello-world'],
      [],
      [0, 0, 15, 0.123, 1111, 15, -11],
      [0, 11, 'asdf', -15, '"\'.....as ././. Symbol()', '.', '..'],
    ];

    expectTestArray(tests).toBeTruthy(canBeStringified);
  });
  it('should fail', () => {
    const tests = [
      [Symbol()],
      ['asdf', 0, Symbol(), '111', -1],
      [{}, new Date(), Symbol.for('asd'), -11],
    ];

    expectTestArray(tests as Array<Pxth>).toBeFalsy(canBeStringified);
  });
});
