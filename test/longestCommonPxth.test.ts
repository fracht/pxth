import { shuffle } from 'lodash';
import { createPxth, getPxthSegments, longestCommonPath } from '../src';

describe('longestCommonPxth', () => {
    it('hit cases', () => {
        expect(getPxthSegments(longestCommonPath([]))).toStrictEqual([]);
        expect(
            getPxthSegments(longestCommonPath([createPxth([])])),
        ).toStrictEqual([]);
        expect(
            getPxthSegments(longestCommonPath([createPxth(['asdf'])])),
        ).toStrictEqual(['asdf']);
    });
    it('should return longest common path', () => {
        expect(
            getPxthSegments(
                longestCommonPath([
                    createPxth(['asdf']),
                    createPxth(['asdf', 'hello']),
                    createPxth(['asdf', 'bye']),
                    createPxth(['asdf', 'hello', 'bye']),
                ]),
            ),
        ).toStrictEqual(['asdf']);
        expect(
            getPxthSegments(
                longestCommonPath([
                    createPxth(['hello', 'this', 'is', 'world']),
                    createPxth(['hello', 'this', 'is', 'bye']),
                    createPxth(['hello', 'this', 'is']),
                ]),
            ),
        ).toStrictEqual(['hello', 'this', 'is']);
    });
    it('no common paths', () => {
        expect(
            getPxthSegments(
                longestCommonPath(
                    shuffle([
                        createPxth(['asdf']),
                        createPxth(['asdf', 'hello']),
                        createPxth(['asdf', 'bye']),
                        createPxth(['asdf', 'hello', 'bye']),
                        createPxth(['b']),
                    ]),
                ),
            ),
        ).toStrictEqual([]);
        expect(
            getPxthSegments(
                longestCommonPath(
                    shuffle([
                        createPxth(['hello', 'this', 'is', 'world']),
                        createPxth(['hello', 'this', 'is', 'bye']),
                        createPxth(['hello', 'this', 'is']),
                        createPxth(['ahello']),
                    ]),
                ),
            ),
        ).toStrictEqual([]);
    });
});
