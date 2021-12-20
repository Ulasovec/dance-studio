import axios from "axios";

export default async function getUsers() {
    try { const admins = await axios('localhost:8080/user');
        return admins;
    }
    catch (e) {
        console.log(e);
    }
};