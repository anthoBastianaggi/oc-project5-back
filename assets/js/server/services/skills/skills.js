import { fetchWrapper } from "../../helpers/request-helpers";
import { auth } from "../../helpers/auth";

export const skillsSection = {
    getSkills,
    showSkill,
    postSkill,
    updateSkill,
    deleteSkill
};

let response = fetchWrapper.handleResponse;

async function getSkills() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/skills', requestOptions).then(response);
}

async function showSkill(id) {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/skills/' + id, requestOptions).then(response);
}

async function postSkill(name, percentage, category) {
    const requestOptions = {
        method: 'POST',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, percentage, category })
    };
    return await fetch('http://127.0.0.1:8001/api/skills', requestOptions).then(response);
}

async function updateSkill(id, name, percentage, category) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, percentage, category })
    };
    return await fetch('http://127.0.0.1:8001/api/skills/' + id, requestOptions).then(response);
}

async function deleteSkill(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: auth({'Content-Type': 'application/json'})
    };
    return await fetch('http://127.0.0.1:8001/api/skills/' + id, requestOptions).then(response);
}