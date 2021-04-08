import { isArrayIndex } from '../src/isArrayIndex';
import { expectTestArray } from './utils';

describe('isArrayIndex', () => {
  it('should be truthy', () => {
    const tests = [0, 15, 1000, '0', '1515', '1000', '0000000', '0000100'];

    expectTestArray(tests).toBeTruthy(isArrayIndex);
  });

  it('should be falsy', () => {
    const tests = [
      -1,
      0.15,
      -1.15,
      '0.11',
      '-0.11',
      'asdf',
      new Date(),
      {},
      [],
    ];

    expectTestArray(tests).toBeFalsy(isArrayIndex);
  });
});
