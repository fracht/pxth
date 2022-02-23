import { isPxth, createPxth } from '../src';

describe('isPxth', () => {
    it('should check if an object is Pxth', () => {
        expect(isPxth(createPxth([]))).toBeTruthy();
        expect(isPxth({})).toBeFalsy();
        expect(
            isPxth({
                hello: 42,
            }),
        ).toBeFalsy();
    });
});
