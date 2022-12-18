
import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/listings";
const method = "delete"

export async function removeListing(id) {
    const removeListingUrl = `${API_AUCTION_URL}${action}/${id}`;
    
    const response = await authFetch(removeListingUrl, {        
        method, 
    })

        
    return await response.json()
}

