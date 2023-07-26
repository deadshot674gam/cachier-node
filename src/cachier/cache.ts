

export default class Cache<T> {
    object: T | undefined
    ttl: number | undefined
    createTime: number

    constructor(object: T, ttl?: number) {
        this.object = object
        this.ttl = ttl
        this.createTime = Date.now()
        if(ttl !== undefined){
            setTimeout(this.modifyCache, ttl, undefined)
        }
    }

    modifyCache(object: T | undefined) {
        this.object = object
    }

    modifyTTL(ttl: number) {
        this.ttl = ttl
    }


}