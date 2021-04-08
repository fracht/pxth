import { expectTestArray } from './utils';
import { isNil } from '../src/isNil';

describe('isNil', () => {
  it('should be truthy', () => {
    const tests = [undefined, null, NaN];

    expectTestArray(tests).toBeTruthy(isNil);
  });

  it('should be falsy', () => {
    const tests = ['asdf', '', false, 0, [], {}, Number.MAX_SAFE_INTEGER];

    expectTestArray(tests).toBeFalsy(isNil);
  });
});
