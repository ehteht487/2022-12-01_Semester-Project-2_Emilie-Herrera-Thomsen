import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/listings";
const method = "post"

export async function createListing(postData) {
    const createListingUrl = API_AUCTION_URL + action;
    
    const response = await authFetch(createListingUrl, {        
        method,
        body: JSON.stringify(postData) 
    })

     const result = await response.json()   
        return result
     
     console.log(result)
    
}

