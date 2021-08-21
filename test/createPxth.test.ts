import { createPxth } from '../src/createPxth';
import {
    GuardedPathToken,
    GuardToken,
    SegmentsToken,
} from '../src/getPxthSegments';

describe('createPxth', () => {
    it('should create new Pxth and assign guard', () => {
        const guard = (value: unknown): value is number =>
            typeof value === 'number';

        expect(createPxth([], guard)[GuardToken]).toBe(guard);
    });

    it('should create new Pxth and assign segments', () => {
        expect(
            createPxth(['hello'], (v: unknown): v is number => true)[
                SegmentsToken
            ],
        ).toStrictEqual(['hello']);
    });

    it('should create new Pxth and guarded path', () => {
        expect(
            createPxth(['hello'], (v: unknown): v is number => true)[
                GuardedPathToken
            ],
        ).toStrictEqual(['hello']);
    });
});
