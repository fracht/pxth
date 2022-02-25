import { createPxth, isInnerPxth } from '../src';

describe('isInnerPxth', () => {
    it('isInnerPxth false', () => {
        expect(isInnerPxth(createPxth(['hello']), createPxth(['b']))).toBe(
            false,
        );
        expect(isInnerPxth(createPxth(['hello']), createPxth(['helloa']))).toBe(
            false,
        );
        expect(isInnerPxth(createPxth(['hello']), createPxth(['chello']))).toBe(
            false,
        );
        expect(
            isInnerPxth(
                createPxth(['hello', 'asdf']),
                createPxth(['hello', 'a']),
            ),
        ).toBe(false);
        expect(
            isInnerPxth(createPxth(['hello', 'asdf']), createPxth(['helloa'])),
        ).toBe(false);

        // same paths
        expect(isInnerPxth(createPxth([]), createPxth([]))).toBe(false);
        expect(isInnerPxth(createPxth(['a']), createPxth(['a']))).toBe(false);
    });
    it('isInnerPxth simple cases', () => {
        expect(
            isInnerPxth(createPxth(['hello']), createPxth(['hello', 'asdf'])),
        ).toBe(true);
        expect(
            isInnerPxth(
                createPxth(['hello']),
                createPxth(['hello', 'asdf', 'asdf']),
            ),
        ).toBe(true);
        expect(
            isInnerPxth(
                createPxth(['hello']),
                createPxth(['hello', 'hello', 'hello']),
            ),
        ).toBe(true);
    });
    it('isInnerPxth complex cases', () => {
        expect(
            isInnerPxth(
                createPxth(['hello', 'asdf', 'bsdf']),
                createPxth(['hello', 'asdf', 'bsdf', 'lol', 'k', 'w']),
            ),
        ).toBe(true);
        expect(
            isInnerPxth(
                createPxth(['hello', '0', 'bsdf']),
                createPxth(['hello', '0', 'bsdf', 'lol', 'k', 'w']),
            ),
        ).toBe(true);
    });
});
