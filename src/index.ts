import Cache from "./cachier/cache";
import HashCachier from "./cachier/hashcachier";
import ListCachier from "./cachier/listcachier";

export const  Cachier =  {
    ListCachier: ListCachier,
    HashCachier: HashCachier,
    Cache: Cache
}