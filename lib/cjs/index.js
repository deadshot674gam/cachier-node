"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachier = void 0;
const cache_1 = __importDefault(require("./cachier/cache"));
const hashcachier_1 = __importDefault(require("./cachier/hashcachier"));
const listcachier_1 = __importDefault(require("./cachier/listcachier"));
exports.Cachier = {
    ListCachier: listcachier_1.default,
    HashCachier: hashcachier_1.default,
    Cache: cache_1.default
};
