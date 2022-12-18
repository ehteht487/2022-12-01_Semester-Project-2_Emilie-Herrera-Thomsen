import { createListing } from "../api/listings/index.mjs";

export function setCreateListingListener () {
    const form = document.querySelector("#createListing");

    form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("hello")

    const form = event.target;
    const formData = new FormData(form);  
    const listing = Object.fromEntries(formData.entries());

    createListing(listing)
});
} 

