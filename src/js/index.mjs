import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";
import { createListing } from "./api/posts/create.mjs";




const path = location.pathname;
console.log(path)

if (path === "/profile/login/") {
    setFormLoginListener()
} else if (path === "/profile/register/") {
    setFormRegisterListener()
}

createListing(
    {
        "title": "fififififififi", 
        "description": "strinfifififififiifg", 
        "tags": ["stifififififiring"], 
        "media": ["https://picsum.photos/seed/picsum/200/300"], 
        "endsAt": "2022-12-17T18:00:00.000Z" 
      }
)