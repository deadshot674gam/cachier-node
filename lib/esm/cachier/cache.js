export default class Cache {
    object;
    ttl;
    createTime;
    constructor(object, ttl) {
        this.object = object;
        this.ttl = ttl;
        this.createTime = Date.now();
        if (ttl !== undefined) {
            setTimeout(this.modifyCache, ttl, undefined);
        }
    }
    modifyCache(object) {
        this.object = object;
    }
    modifyTTL(ttl) {
        this.ttl = ttl;
    }
}
