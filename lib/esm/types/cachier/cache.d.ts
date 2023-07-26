export default class Cache<T> {
    object: T | undefined;
    ttl: number | undefined;
    createTime: number;
    constructor(object: T, ttl?: number);
    modifyCache(object: T | undefined): void;
    modifyTTL(ttl: number): void;
}
//# sourceMappingURL=cache.d.ts.map