import { fetchWrapper } from "../../helpers/request-helpers";
import { auth } from "../../helpers/auth";

export const projectsSection = {
    getProjects,
    showProject,
    postProject,
    updateProject,
    deleteProject
};

let response = fetchWrapper.handleResponse;

async function getProjects() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio', requestOptions).then(response);
}

async function showProject(id) {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio/' + id, requestOptions).then(response);
}

async function postProject(name, description, image, alt, link, category) {
    const requestOptions = {
        method: 'POST',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, description, image, alt, link, category })
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio', requestOptions).then(response);
}

async function updateProject(id, name, description, category, image, alt, link) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, description, category, image, alt, link })
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio/' + id, requestOptions).then(response);
}

async function deleteProject(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: auth({'Content-Type': 'application/json'})
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio/' + id, requestOptions).then(response);
}