import { removeItem } from "../storage/index.mjs";

export function setLogOutListener() {
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", () => {

        removeItem(key)
        location.href = "./index.html";
        
    })  
}