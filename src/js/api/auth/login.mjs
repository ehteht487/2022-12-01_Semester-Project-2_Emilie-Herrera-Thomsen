import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_AUCTION_URL + action;
    const body = JSON.stringify(profile)
    
    const response = await fetch (loginURL, {
        headers: {
            "Content-Type": "application/json"
        }, 
        method,
        body
    })

    const { accessToken, ...user } = await response.json();

    storage.saveItem("token", accessToken)

    storage.saveItem("profile", user)
    alert("You are logged in");    
}

