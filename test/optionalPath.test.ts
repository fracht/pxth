import { Pxth, createPxth } from '../src';
import { ExpectExtends, Equal, Expect, ExpectFalse } from './utils';

describe('Optional path type', () => {
    it('should return correct path to the optional object field', () => {
        type Data = {
            hello?: {
                test: number;
            };
        };

        const path = createPxth<Data>([]);

        type tests = [
            Expect<
                Equal<typeof path.hello, Pxth<{ test: number } | undefined>>
            >,
            Expect<Equal<typeof path.hello.test, Pxth<number | undefined>>>,
        ];
    });

    it('should return correct path to the children of optional object field (with arrays)', () => {
        type Data = {
            hello?: {
                array: number[];
            };
        };

        const path = createPxth<Data>([]);

        type tests = [
            Expect<Equal<typeof path.hello.array, Pxth<number[] | undefined>>>,
            Expect<Equal<typeof path.hello.array[0], Pxth<number | undefined>>>,
        ];
    });

    it('should return correct path to regular field', () => {
        type Data = {
            hello: number;
        };

        const path = createPxth<Data>([]);

        type tests = [Expect<Equal<typeof path.hello, Pxth<number>>>];
    });

    it('should determine assignable types correctly', () => {
        const path = createPxth<string | undefined>([]);
        const assignablePath = createPxth<string>([]);
        const notAssignablePath = createPxth<string | undefined | null>([]);

        type tests = [
            Expect<ExpectExtends<typeof path, typeof assignablePath>>,
            ExpectFalse<ExpectExtends<typeof assignablePath, typeof path>>,
            Expect<ExpectExtends<typeof notAssignablePath, typeof path>>,
            ExpectFalse<ExpectExtends<typeof path, typeof notAssignablePath>>,
        ];
    });
});
