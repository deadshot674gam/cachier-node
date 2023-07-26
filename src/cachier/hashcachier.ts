

export class HashCachier<K, V> {
    map: Map<K, V>
    ttlMap: Map<K, number>
    createTimeMap: Map<K, number>
    globalTTL: number
    creatTime: number
    constructor(globalTTL: number | undefined) {
        this.map = new Map<K, V>()
        this.ttlMap = new Map<K, number>()
        this.createTimeMap = new Map<K, number>()
        this.creatTime = Date.now()
        this.globalTTL = globalTTL ? globalTTL : -1
    }

    set(key: K, value: V, ttl: number | undefined) {
        this.map.set(key, value)
        if (ttl) this.ttlMap.set(key, ttl)

        this.createTimeMap.set(key, Date.now())
    }

    get(key: K): V | undefined {
        return this.map.get(key)
    }

    removeEntries() {
        let keysTobeRemove: K[] = []
        if (this.globalTTL > 0) {
            for (const [key, value] of this.map) {
                let creatTime = this.createTimeMap.get(key)
                let ttl = this.ttlMap.get(key) ? this.ttlMap.get(key) : this.globalTTL
                if (creatTime && ttl && (Date.now() - creatTime) > ttl) {
                    keysTobeRemove.push(key)
                }
            }

            for (const k of keysTobeRemove) {
                this.map.delete(k)
                this.createTimeMap.delete(k)
                this.ttlMap.delete(k)
            }
        } else {
            if (Date.now() - this.creatTime > this.globalTTL) {
                this.map.clear()
                this.ttlMap.clear()
                this.createTimeMap.clear()
            }
        }
    }
}