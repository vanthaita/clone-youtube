export const getLocalStorageSafe = (key: string, defaultValue: boolean): boolean => {
    if (typeof window === 'undefined') {
        return defaultValue;
    }
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
        console.error(error);
        return defaultValue;
    }
};