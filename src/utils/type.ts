export declare type Modify<T, R> = Omit<T, keyof R> & R
export declare type HandleEvent<T> = (param: T) => unknown
