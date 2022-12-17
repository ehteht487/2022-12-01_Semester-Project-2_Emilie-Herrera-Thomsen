import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";


const path = location.pathname;
console.log(path)

if (path === "/profile/login/") {
    setFormLoginListener()
} else if (path === "/profile/register/") {
    setFormRegisterListener()
}
