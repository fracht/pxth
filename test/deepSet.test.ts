import { deepSet, unsafe_createPxth } from '../src';

describe('deepSet', () => {
    it('should deeply set value', () => {
        expect(
            deepSet({}, unsafe_createPxth(['hello', 'world']), 'a'),
        ).toStrictEqual({
            hello: {
                world: 'a',
            },
        });
    });

    it('should return value', () => {
        expect(
            deepSet({}, unsafe_createPxth([]), { obj: 'asdf' }),
        ).toStrictEqual({
            obj: 'asdf',
        });
    });
});
