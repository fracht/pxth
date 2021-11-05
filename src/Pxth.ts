declare const NumberPxthBrand: unique symbol;
declare const StringPxthBrand: unique symbol;
declare const BooleanPxthBrand: unique symbol;
declare const BigIntPxthBrand: unique symbol;
declare const UnknownPxthBrand: unique symbol;
declare const ObjectPxthBrand: unique symbol;
declare const ArrayPxthBrand: unique symbol;

declare const ObjectBrandKey: unique symbol;
declare const BrandKey: unique symbol;

export type PrimitivePxth<V> = {
    [BrandKey]: V extends string
        ? typeof StringPxthBrand
        : V extends number
        ? typeof NumberPxthBrand
        : V extends boolean
        ? typeof BooleanPxthBrand
        : V extends bigint
        ? typeof BigIntPxthBrand
        : typeof UnknownPxthBrand;
};

type WithoutMethodsKeys<V extends object> = {
    [K in keyof V]: V[K] extends Function ? never : K;
}[keyof V];

type RecordOfPxth<V extends object> = {
    [K in WithoutMethodsKeys<V>]: Pxth<V[K]>;
};

export type ObjectPxth<V extends object> = RecordOfPxth<V> & {
    [BrandKey]: typeof ObjectPxthBrand;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArrayPxth<V extends Array<any>> = {
    [K in number]: Pxth<V[number]>;
} &
    RecordOfPxth<Omit<Array<V[number]>, number>> & {
        [BrandKey]: typeof ArrayPxthBrand;
    };

export type Pxth<V> = {
    [ObjectBrandKey]: 'brand';
} & (V extends object
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      V extends Array<any>
        ? ArrayPxth<V>
        : ObjectPxth<V>
    : PrimitivePxth<V>);
