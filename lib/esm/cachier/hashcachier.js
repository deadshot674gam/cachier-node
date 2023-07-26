export default class HashCachier {
    map;
    ttlMap;
    createTimeMap;
    globalTTL;
    creatTime;
    constructor(globalTTL) {
        this.map = new Map();
        this.ttlMap = new Map();
        this.createTimeMap = new Map();
        this.creatTime = Date.now();
        this.globalTTL = globalTTL ? globalTTL : -1;
        setInterval(this.removeEntries, this.globalTTL > 0 ? this.globalTTL : 60 * 60 * 1000);
    }
    set(key, value, ttl) {
        this.map.set(key, value);
        if (ttl)
            this.ttlMap.set(key, ttl);
        this.createTimeMap.set(key, Date.now());
    }
    get(key) {
        return this.map.get(key);
    }
    removeEntries() {
        let keysTobeRemove = [];
        if (this.globalTTL > 0) {
            for (const [key, value] of this.map) {
                let creatTime = this.createTimeMap.get(key);
                let ttl = this.ttlMap.get(key) ? this.ttlMap.get(key) : this.globalTTL;
                if (creatTime && ttl && (Date.now() - creatTime) >= ttl) {
                    keysTobeRemove.push(key);
                }
            }
            for (const k of keysTobeRemove) {
                this.map.delete(k);
                this.createTimeMap.delete(k);
                this.ttlMap.delete(k);
            }
        }
        else {
            if (Date.now() - this.creatTime >= this.globalTTL) {
                this.map.clear();
                this.ttlMap.clear();
                this.createTimeMap.clear();
            }
        }
    }
}
