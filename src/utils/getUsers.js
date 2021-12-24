import axios from "axios";

export default async function getUsers() {
    try {
        const response = await axios.get('http://localhost:8080/user');
        return response.data;
    }
    catch (e) {
        console.log('GetUsers ERROR:', {e});
    }
};