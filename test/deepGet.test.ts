import { createPxth, deepGet, unsafe_createPxth } from '../src';

describe('deep get', () => {
    it('should deeply get value', () => {
        expect(
            deepGet(
                { value: { a: 'hello' } },
                createPxth(
                    ['value', 'a'],
                    (value: unknown): value is string =>
                        typeof value === 'string',
                ),
            ),
        ).toBe('hello');
    });

    it('should return all values', () => {
        expect(
            deepGet({ value: { a: 'hello' } }, unsafe_createPxth([])),
        ).toStrictEqual({
            value: {
                a: 'hello',
            },
        });
    });
});
