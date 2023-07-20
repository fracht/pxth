import { Pxth, createPxth, deepSet } from '../src';

describe('Optional path type', () => {
    it('should return correct path to the optional object field', () => {
        type Data = {
            hello?: {
                test: number;
            };
        };

        const path = createPxth<Data>([]);

        const testPath = path.hello;

        // Check whether types infer
        deepSet({}, testPath, undefined);
        deepSet({}, testPath, { test: 42 });

        // @ts-expect-error
        deepSet({}, testPath, 'aaa');
    });

    it('should return correct path to the children of optional object field', () => {
        type Data = {
            hello?: {
                test: number;
            };
        };

        const path = createPxth<Data>([]);

        const testPath = path.hello.test;

        // Check whether types infer
        deepSet({}, testPath, undefined);
        deepSet({}, testPath, 42);

        // @ts-expect-error
        deepSet({}, testPath, 'aaa');
    });

    it('should return correct path to the children of optional object field (with arrays)', () => {
        type Data = {
            hello?: {
                array: number[];
            };
        };

        const path = createPxth<Data>([]);

        const arrayPath = path.hello.array;

        // Check whether types infer
        deepSet({}, arrayPath, undefined);
        deepSet({}, arrayPath, [42]);

        // @ts-expect-error
        deepSet({}, arrayPath, 'aaa');

        const elementPath = path.hello.array[0];

        // Check whether types infer
        deepSet({}, elementPath, undefined);
        deepSet({}, elementPath, 42);

        // @ts-expect-error
        deepSet({}, elementPath, 'aaa');
    });

    it('should return correct path to the children of optional object field nested deeply', () => {
        type Data = {
            hello?: {
                test: {
                    asdf: number;
                };
            };
        };

        const path = createPxth<Data>([]);

        const testPath = path.hello.test.asdf;

        // Check whether types infer
        deepSet({}, testPath, undefined);
        deepSet({}, testPath, 42);

        // @ts-expect-error
        deepSet({}, testPath, 'aaa');
    });

    it('should return correct path to regular field', () => {
        type Data = {
            hello: number;
        };

        const path = createPxth<Data>([]);

        deepSet({}, path, { hello: 42 });

        // FIXME: deepSet infers type as Pxth<Data | undefined> by default
        // @ts-expect-error
        deepSet<Data>({}, path, undefined);
    });

    it('should determine assignable types correctly', () => {
        const func = (path: Pxth<string | undefined>) => {};

        const assignablePath = createPxth<string>([]);
        func(assignablePath);

        const notAssignablePath = createPxth<string | undefined | null>([]);
        // @ts-expect-error
        func(notAssignablePath);
    });
});
