import { auth } from "../helpers/auth";
import { fetchWrapper } from "../helpers/request-helpers";

export const homeSection = {
    getHome,
    updateHome
};

let response = fetchWrapper.handleResponse;

async function getHome() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/home', requestOptions).then(response);
}

async function updateHome(title, description, image, alt) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ title, description, image, alt })
    };
    return await fetch('http://127.0.0.1:8001/api/home/1', requestOptions).then(response);
}