import { createPxth, pxthToString } from '../src';

describe('pxthToString', () => {
    it('should convert pxth to string', () => {
        expect(pxthToString(createPxth(['hello', 'this', 'is', 'path']))).toBe(
            'hello.this.is.path',
        );
    });
});
