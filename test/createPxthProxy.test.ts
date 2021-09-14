import { createPxthProxy } from '../src/createPxthProxy';
import { SegmentsToken } from '../src/getPxthSegments';

describe('createPxthProxy', () => {
    it('should create PxthProxy and assign necessary values', () => {
        const proxy = createPxthProxy(['hello', 'bye']);

        expect(proxy[SegmentsToken]).toStrictEqual(['hello', 'bye']);
    });
});

describe('PxthProxy', () => {
    it('should modify segments array', () => {
        const proxy = createPxthProxy<{ hello: { world: string } }>([
            'hello',
            'bye',
        ]);

        expect(proxy.hello.world[SegmentsToken]).toStrictEqual([
            'hello',
            'bye',
            'hello',
            'world',
        ]);
    });
});
