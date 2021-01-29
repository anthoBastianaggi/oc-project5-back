import { auth } from "../helpers/auth";
import { fetchWrapper } from "../helpers/request-helpers";

export const servicesSection = {
    getServices,
    showService,
    postService,
    updateService,
    deleteService
};

let response = fetchWrapper.handleResponse;

async function getServices() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/services', requestOptions).then(response);
}

async function showService(id) {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/services/' + id, requestOptions).then(response);
}

async function postService(name, description, icon) {
    const requestOptions = {
        method: 'POST',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, description, icon })
    };
    return await fetch('http://127.0.0.1:8001/api/services', requestOptions).then(response);
}

async function updateService(id, name, description, icon) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, description, icon })
    };
    return await fetch('http://127.0.0.1:8001/api/services/' + id, requestOptions).then(response);
}

async function deleteService(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: auth({'Content-Type': 'application/json'})
    };
    return await fetch('http://127.0.0.1:8001/api/services/' + id, requestOptions).then(response);
}