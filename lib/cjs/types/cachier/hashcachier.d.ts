export default class HashCachier<K, V> {
    map: Map<K, V>;
    ttlMap: Map<K, number>;
    createTimeMap: Map<K, number>;
    globalTTL: number;
    creatTime: number;
    constructor(globalTTL: number | undefined);
    set(key: K, value: V, ttl: number | undefined): void;
    get(key: K): V | undefined;
    removeEntries(): void;
}
//# sourceMappingURL=hashcachier.d.ts.map