import * as listeners from "./handlers/index.mjs";

import * as templates from "./templates/index.mjs";
import * as listingMethods from "./api/listings/index.mjs";
import { renderListingTemplate, renderListingTemplates } from "./templates/index.mjs";

import * as listings from "./api/listings/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
    listeners.setFormLoginListener()
} else if (path === "/profile/register/") {
    listeners.setFormRegisterListener()
} else if (path === "/listing/create/index.html") {
    listeners.setCreateListingListener()
} else if (path === "/listing/edit") {
    listeners.setUpdateListingListener()
} else if (path === "profile/edit/") {
    listeners.setUpdateProfileListener()
}






async function testTemplate() {
    const listings = await listingMethods.viewListings()
    console.log(listings)
    const container = document.querySelector("#listing")
    renderListingTemplates(listings, container)
}

testTemplate()



async function testTemplate() {
    const listings = await listingMethods.viewListings()
    const listing = listings.pop()
    console.log(listing)
    const container = document.querySelector("#listing")
    renderListingTemplate(listing, container)
}

testTemplate()


