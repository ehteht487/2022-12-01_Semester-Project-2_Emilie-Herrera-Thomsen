import { updateListing, viewListing } from "../api/listings/index.mjs";

export async function setUpdateListingListener () {
    const form = document.querySelector("#editListing");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button")
        button.disabled = true

        const listing = await viewListing(id)

        form.title.value = listing.title        
        form.body.value = listing.body
        form.tags.value = listing.tags
        form.media.value = listing.media
        
        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
        
            const form = event.target;
            const formData = new FormData(form);  
            const listing = Object.fromEntries(formData.entries());
            listing.id = id;
        
            updateListing(listing)
            });
    }   
} 

