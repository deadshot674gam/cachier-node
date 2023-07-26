import Cache from "./cache";
export default class ListCachier<T> {
    caches: Cache<T>[];
    globalTTL: number;
    constructor(globalTTL?: number);
    addToCache(object: T, ttl?: number): void;
    removeFromCache(object: T): void;
    removeCachePostTTL(): void;
}
//# sourceMappingURL=listcachier.d.ts.map