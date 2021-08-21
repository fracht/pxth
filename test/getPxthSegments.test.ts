import { createPxth, getPxthSegments, unsafe_createPxth } from '../src';

type TypePredicate<T> = (value: unknown) => value is T;

describe('getPxthSegments', () => {
    it('should return all segments', () => {
        expect(
            getPxthSegments(unsafe_createPxth(['hello', 'world']), {}),
        ).toStrictEqual(['hello', 'world']);
        expect(getPxthSegments(unsafe_createPxth([]), {})).toStrictEqual([]);
    });

    it('should run guard', () => {
        const guard = jest.fn(() => true);

        getPxthSegments(
            createPxth(
                ['asdf', 'b'],
                (guard as unknown) as TypePredicate<number>,
            ),
            {},
        );

        expect(guard).toBeCalled();

        guard.mockClear();

        getPxthSegments(
            createPxth(
                ['asdf', 'b'],
                (guard as unknown) as TypePredicate<number>,
            ),
            { asdf: { b: 15 } },
        );

        expect(guard).toBeCalledWith(15);
    });

    it('should throw error, if guard fails', () => {
        const guard = jest.fn(() => false);

        expect(() =>
            getPxthSegments(
                createPxth([], (guard as unknown) as TypePredicate<number>),
                {},
            ),
        ).toThrow();
    });
});
