import { auth } from "../helpers/auth";
import { fetchWrapper } from "../helpers/request-helpers";

export const aboutSection = {
    getAbout,
    updateAbout
};

let response = fetchWrapper.handleResponse;

async function getAbout() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/users', requestOptions).then(response);
}

async function updateAbout(
    firstname, 
    lastname, 
    birthdate, 
    profile, 
    status, 
    description, 
    address, 
    postalCode, 
    city, 
    country, 
    email, 
    image, 
    alt,
    visual_cv, 
    download_cv
    ) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ 
            firstname, 
            lastname, 
            birthdate, 
            profile, 
            status, 
            description, 
            address, 
            postalCode, 
            city, 
            country, 
            email, 
            image, 
            alt,
            visual_cv, 
            download_cv
        })
    };
    return await fetch('http://127.0.0.1:8001/api/users/11', requestOptions).then(response);
}