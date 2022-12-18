// export function listingTemplatesA(postData) {
//     return `<div class="listing">${postData.title}</div>`
// }

export function listingTemplatesB(postData) {
    const listing = document.createElement("div");
    listing.classList.add("listing");
    listing.innerText = postData.title;

    if (postData.media) {
        const img = document.createElement("img")
        img.src = postData.media;
        img.alt = postData.title;
        listing.append(img)
    }
    
    return listing;
}



export function renderListingTemplate(postData, parent) {
    // parent.innerHTML = listingTemplatesA(postData);

    parent.append(listingTemplatesB(postData)); 
}

export function renderListingTemplates(listingDataList, parent) {
    parent.append(...listingDataList.map(listingTemplatesB))
}