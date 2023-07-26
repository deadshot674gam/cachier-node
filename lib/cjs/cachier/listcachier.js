"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = __importDefault(require("./cache"));
class ListCachier {
    constructor(globalTTL) {
        this.caches = new Array();
        this.globalTTL = globalTTL ? globalTTL : -1;
        setInterval(this.removeCachePostTTL, this.globalTTL > 0 ? this.globalTTL : 60 * 60 * 1000);
    }
    addToCache(object, ttl) {
        this.caches.push(new cache_1.default(object, (this.globalTTL ? this.globalTTL : ttl)));
    }
    removeFromCache(object) {
        this.caches = this.caches.filter((cache) => !cache.object === object);
    }
    removeCachePostTTL() {
        if (this.globalTTL > 0) {
            let indexesToDelete = [];
            this.caches.forEach((cache, index) => {
                if ((Date.now() - cache.createTime) > this.globalTTL) {
                    indexesToDelete.push(index);
                }
            });
            this.caches = this.caches.filter((cache, index) => indexesToDelete.includes(index));
        }
        else {
            this.caches = this.caches.filter((cache) => cache.object !== undefined);
        }
    }
}
exports.default = ListCachier;
