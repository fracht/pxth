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

export type ObjectPxth<V extends object> = {
    [K in keyof V]: Pxth<V[K]>;
} & {
    [BrandKey]: typeof ObjectPxthBrand;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ArrayPxth<V extends Array<any>> = Array<Pxth<V[number]>> & {
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
