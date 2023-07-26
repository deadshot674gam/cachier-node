import Cache from "./cache";

export default class ListCachier<T> {
    caches: Cache<T>[]
    globalTTL: number

    constructor(globalTTL?: number) {
        this.caches = new Array<Cache<T>>()
        this.globalTTL = globalTTL ? globalTTL : -1

        setInterval(this.removeCachePostTTL,this.globalTTL>0? this.globalTTL : 60 * 60 * 1000) 
    }

    addToCache(object: T, ttl?: number) {
        this.caches.push(new Cache<T>(object, (this.globalTTL ? this.globalTTL : ttl)))
    }

    removeFromCache(object: T) {
        this.caches = this.caches.filter((cache) => !cache.object === object)
    }

    removeCachePostTTL() {
        if (this.globalTTL > 0) {
            let indexesToDelete: Array<number> = []
            this.caches.forEach((cache, index) => {
                if ((Date.now() - cache.createTime) > this.globalTTL) {
                    indexesToDelete.push(index)
                }

            })

            this.caches = this.caches.filter((cache, index) => indexesToDelete.includes(index))
        }else {
            this.caches = this.caches.filter((cache) => cache.object!== undefined)
        }
    }
}