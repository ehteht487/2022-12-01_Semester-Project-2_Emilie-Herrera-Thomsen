
import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/listings";
const method = "put"

export async function updateListing(postData) {
    const updateListingUrl = `${API_AUCTION_URL}${action}/${postData.id}`;
    
    const response = await authFetch(updateListingUrl, {        
        method,
        body: JSON.stringify(postData) 
    })

        
    return await response.json()
}

