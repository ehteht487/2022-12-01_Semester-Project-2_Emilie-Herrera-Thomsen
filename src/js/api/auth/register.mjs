import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_AUCTION_URL + action;
    const body = JSON.stringify(profile)
    
    const response = await fetch (registerURL, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method,
        body
    })

    const results = await response.json();
    alert("You are registered");
    return results;
}