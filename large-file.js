// REFACTORED: Modular utility library with ES6 syntax
export const VERSION = '2.0.0';

export const dateUtils = {
    format: (date) => date.toISOString().split('T')[0],
    parse: (str) => new Date(str),
    isValid: (date) => date instanceof Date && !isNaN(date)
};

export const stringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    truncate: (str, length) => str.length > length ? str.slice(0, length) + '...' : str,
    slugify: (str) => str.toLowerCase().replace(/\s+/g, '-')
};

export const validators = {
    email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    url: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },
    phone: (phone) => /^\+?[\d\s-()]+$/.test(phone)
};

export const objectUtils = {
    deepClone: (obj) => structuredClone(obj),
    isEmpty: (obj) => Object.keys(obj).length === 0,
    merge: (...objects) => Object.assign({}, ...objects),
    pick: (obj, keys) => keys.reduce((acc, key) => {
        if (key in obj) acc[key] = obj[key];
        return acc;
    }, {})
};

export const functionUtils = {
    debounce: (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    memoize: (func) => {
        const cache = new Map();
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache.has(key)) return cache.get(key);
            const result = func(...args);
            cache.set(key, result);
            return result;
        };
    }
};

export const generateId = () => crypto.randomUUID();

export default {
    VERSION,
    dateUtils,
    stringUtils,
    validators,
    objectUtils,
    functionUtils,
    generateId
};
