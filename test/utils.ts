type ArrayTestHandler<T> = {
  toBeTruthy: (func: (value: T) => any) => void;
  toBeFalsy: (func: (value: T) => any) => void;
  toBe: <K>(func: (value: T) => K, expectedValue: K) => void;
  apply: (func: (value: T) => any) => void;
};

export const expectTestArray = <T>(tests: Array<T>): ArrayTestHandler<T> => {
  const apply: ArrayTestHandler<T>['apply'] = (func) => {
    for (const testCase of tests) {
      func(testCase);
    }
  };

  const toBe: ArrayTestHandler<T>['toBe'] = (func, expectedValue) =>
    apply((value) => {
      expect(func(value)).toBe(expectedValue);
    });

  return {
    toBeTruthy: (func) => toBe(func, true),
    toBeFalsy: (func) => toBe(func, false),
    toBe,
    apply,
  };
};

type MapTestHandler<T, K> = {
  toBeKey: (func: (value: T) => K) => void;
  toBeValue: (func: (key: K) => T) => void;
  toBe: <E>(func: (key: K, value: T) => E, expectedValue: E) => void;
  apply: (func: (key: K, value: T) => any) => void;
};

export const expectTestMap = <K extends string | number, T>(
  tests: Record<K, T>,
): MapTestHandler<T, K> => {
  const apply: MapTestHandler<T, K>['apply'] = (func) => {
    for (const testKey in tests) {
      func(testKey, tests[testKey]);
    }
  };

  const toBe: MapTestHandler<T, K>['toBe'] = (func, expectedValue) =>
    apply((key, value) => {
      expect(func(key, value)).toBe(expectedValue);
    });

  return {
    toBeKey: (func) => apply((key, value) => expect(func(value)).toBe(key)),
    toBeValue: (func) =>
      apply((key, value) => expect(func(key)).toStrictEqual(value)),
    toBe,
    apply,
  };
};
