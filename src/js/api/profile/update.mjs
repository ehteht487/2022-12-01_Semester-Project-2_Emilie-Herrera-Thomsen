
import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../fetchToken.mjs";

const action = "/profiles";
const method = "put"

export async function updateProfile(profileData) {
    const updateProfileUrl = `${API_AUCTION_URL}${action}/${profileData.name}/media`;
    
    const response = await authFetch(updateProfileUrl, {        
        method,
        body: JSON.stringify(profileData) 
    })

        
    return await response.json()
}

