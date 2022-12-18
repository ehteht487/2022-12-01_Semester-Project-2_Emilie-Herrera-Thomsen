import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/listings";

export async function viewListings() {
    const viewListingURL = `${API_AUCTION_URL}${action}`;

    const response = await authFetch(viewListingURL)

    const results = await response.json()
    
    return results;
}

export async function viewListing(id) {
    const viewListingURL = `${API_AUCTION_URL}${action}/${id}`;

    const response = await authFetch(viewListingURL)

    const results = await response.json()
    
    return results;
}