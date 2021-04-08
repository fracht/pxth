import { isObject } from '../src/isObject';
import { expectTestArray } from './utils';

describe('isObject', () => {
  it('should be truthy', () => {
    const tests = [{}, [], new Date(), { a: {} }, Object.create(null)];

    expectTestArray(tests).toBeTruthy(isObject);
  });

  it('should be falsy', () => {
    const fn = () => {};
    const fn2 = function () {};
    function fn3() {}

    const tests = [0, 'asdf', NaN, null, undefined, 'bbbbb', fn, fn2, fn3];

    expectTestArray(tests).toBeFalsy(isObject);
  });
});
