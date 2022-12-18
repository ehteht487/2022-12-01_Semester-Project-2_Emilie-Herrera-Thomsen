import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/profiles";

export async function viewProfiles() {
    const viewProfileURL = `${API_AUCTION_URL}${action}`;

    const response = await authFetch(viewProfileURL)

    const results = await response.json()
    
    return results;
}

export async function viewProfile(name) {
    const viewProfileURL = `${API_AUCTION_URL}${action}/${name}`;

    const response = await authFetch(viewProfileURL)

    const results = await response.json()
    
    return results;
}