// import { loadItem } from "../../storage/index.mjs";
// import { API_AUCTION_URL } from "../constants.mjs";
// import { authFetch } from "../fetchToken.mjs";

// const action = "/listings";
// const method = "post"

// export async function createListing(postData) {
//     const createListingUrl = API_AUCTION_URL + action;
//     const token = loadItem("token")
    
//     const response = await fetch(createListingUrl, {        
//         method: "POST",
//         body: JSON.stringify(postData),
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },         
//     });

        
//     return await response.json()
// }

