import { createPxthProxy } from '../src/createPxthProxy';
import {
    GuardedPathToken,
    GuardToken,
    SegmentsToken,
} from '../src/getPxthSegments';

describe('createPxthProxy', () => {
    it('should create PxthProxy and assign necessary values', () => {
        const guard = (value: unknown): value is number =>
            typeof value === 'number';

        const proxy = createPxthProxy(['hello', 'bye'], guard);

        expect(proxy[GuardToken]).toBe(guard);
        expect(proxy[SegmentsToken]).toStrictEqual(['hello', 'bye']);
        expect(proxy[GuardedPathToken]).toStrictEqual(['hello', 'bye']);
    });

    it('should create PxthProxy and assign necessary values (custom guarded path)', () => {
        const guard = (value: unknown): value is number =>
            typeof value === 'number';

        const proxy = createPxthProxy(['hello', 'bye'], guard, [
            'custom',
            'guarded',
            'path',
        ]);

        expect(proxy[GuardToken]).toBe(guard);
        expect(proxy[SegmentsToken]).toStrictEqual(['hello', 'bye']);
        expect(proxy[GuardedPathToken]).toStrictEqual([
            'custom',
            'guarded',
            'path',
        ]);
    });
});

describe('PxthProxy', () => {
    it('should modify segments array', () => {
        const guard = (value: unknown): value is { hello: { world: string } } =>
            typeof value === 'number';

        const proxy = createPxthProxy<{ hello: { world: string } }>(
            ['hello', 'bye'],
            guard,
        );

        expect(proxy.hello.world[SegmentsToken]).toStrictEqual([
            'hello',
            'bye',
            'hello',
            'world',
        ]);
    });
});
