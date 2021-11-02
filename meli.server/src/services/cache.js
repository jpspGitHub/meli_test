
const CACHE = {};

const CacheService = () => {
    const setCache = (group, key, value) => {
        CACHE[`${group}_${key}`] = value;
    }

    const getCache = (group, key) => {
        return CACHE[`${group}_${key}`];
    }

    return { setCache, getCache }
}

module.exports = CacheService;