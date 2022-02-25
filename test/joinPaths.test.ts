import { createPxth, getPxthSegments, joinPaths, pxthToString } from '../src';

describe('joinPaths', () => {
    it('should join paths', () => {
        expect(
            pxthToString(
                joinPaths(createPxth(['hello']), createPxth(['world'])),
            ),
        ).toBe('hello.world');
        expect(
            pxthToString(joinPaths(createPxth([]), createPxth(['hello']))),
        ).toBe('hello');
        expect(
            pxthToString(
                joinPaths(
                    createPxth([]),
                    createPxth(['hello']),
                    createPxth(['world']),
                ),
            ),
        ).toBe('hello.world');
        expect(
            getPxthSegments(
                joinPaths(
                    createPxth(['hello.world', 'path']),
                    createPxth(['another']),
                ),
            ),
        ).toStrictEqual(['hello.world', 'path', 'another']);
        expect(
            getPxthSegments(
                joinPaths(createPxth(['..a.b.c...']), createPxth(['...'])),
            ),
        ).toStrictEqual(['..a.b.c...', '...']);
    });
});
