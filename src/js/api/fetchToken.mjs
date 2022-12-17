import { loadItem } from "../storage/index.mjs"

export function headers() {
    const token = loadItem("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function authFetch(url, options) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}