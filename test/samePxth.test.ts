import { createPxth, samePxth } from '../src';

describe('samePxth', () => {
    it('should compare 2 paths correctly', () => {
        expect(samePxth(createPxth([]), createPxth([]))).toBeTruthy();
        expect(
            samePxth(createPxth(['a', 'b']), createPxth(['a', 'b'])),
        ).toBeTruthy();
        expect(
            samePxth(createPxth(['a', 'b']), createPxth(['b', 'a'])),
        ).toBeFalsy();
    });
});
