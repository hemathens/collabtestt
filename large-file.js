// Large file with many functions for complex conflicts
const utils = {
    version: '1.0.0',
    
    formatDate: function(date) {
        return date.toISOString();
    },
    
    parseJSON: function(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    },
    
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    generateId: function() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    deepClone: function(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    
    isEmpty: function(obj) {
        return Object.keys(obj).length === 0;
    },
    
    merge: function(obj1, obj2) {
        return { ...obj1, ...obj2 };
    }
};

module.exports = utils;
