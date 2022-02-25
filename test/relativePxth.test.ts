import { relativePxth, createPxth, pxthToString } from '../src';

describe('relativePxth', () => {
    it('hit cases', () => {
        expect(() =>
            relativePxth(
                createPxth(['      ']),
                createPxth(['hello', 'world', 'this']),
            ),
        ).toThrow();
        expect(() =>
            relativePxth(
                createPxth([
                    'hello',
                    'world',
                    'this',
                    'is',
                    'not',
                    'parent',
                    'path',
                ]),
                createPxth([
                    'hello',
                    'world',
                    'this',
                    'is',
                    'not',
                    'nested',
                    'path',
                ]),
            ),
        ).toThrow();
        expect(
            pxthToString(
                relativePxth(
                    createPxth(['hello', 'world', '0', 'same']),
                    createPxth(['hello', 'world', '0', 'same']),
                ),
            ),
        ).toBe(pxthToString(createPxth([])));
        expect(pxthToString(relativePxth(createPxth([]), createPxth([])))).toBe(
            pxthToString(createPxth([])),
        );
        expect(
            pxthToString(
                relativePxth(createPxth([]), createPxth(['nested', 'path'])),
            ),
        ).toBe(pxthToString(createPxth(['nested', 'path'])));
        expect(() =>
            relativePxth(createPxth(['helo']), createPxth([])),
        ).toThrow();
        expect(
            pxthToString(
                relativePxth(
                    createPxth(['', '', 'asdf']),
                    createPxth(['', '', 'asdf', 'lol']),
                ),
            ),
        ).toBe(pxthToString(createPxth(['lol'])));
    });
    it('simple cases', () => {
        expect(
            pxthToString(
                relativePxth(
                    createPxth(['hello', 'world']),
                    createPxth(['hello', 'world', 'nested', 'path']),
                ),
            ),
        ).toBe(pxthToString(createPxth(['nested', 'path'])));
        expect(
            pxthToString(
                relativePxth(
                    createPxth(['yes', 'this', 'is', '0', 'some', 'path']),
                    createPxth([
                        'yes',
                        'this',
                        'is',
                        '0',
                        'some',
                        'path',
                        'asdf',
                        'lol',
                    ]),
                ),
            ),
        ).toBe(pxthToString(createPxth(['asdf', 'lol'])));
    });
});
