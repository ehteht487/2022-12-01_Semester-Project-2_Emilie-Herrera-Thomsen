
export function saveItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadItem(key) {
    try {
        const value = localStorage.getItem(key)
        return JSON.parse(value); 
    } catch {
        return null
    }
    
}

export function removeItem(key) {
    localStorage.removeItem(key)
}