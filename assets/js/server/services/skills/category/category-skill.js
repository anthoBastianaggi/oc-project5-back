import { auth } from "../../../helpers/auth";
import { fetchWrapper } from "../../../helpers/request-helpers";

export const categorySkillService = {
    getCategorySkill,
    showCategorySkill,
    postCategorySkill,
    updateCategorySkill,
    deleteCategorySkill
};

let response = fetchWrapper.handleResponse;

async function getCategorySkill() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills', requestOptions).then(response);
}

async function showCategorySkill(id) {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills/' + id, requestOptions).then(response);
}

async function postCategorySkill(name, slug) {
    const requestOptions = {
        method: 'POST',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, slug })
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills', requestOptions).then(response);
}

async function updateCategorySkill(id, name, slug) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, slug })
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills/' + id, requestOptions).then(response);
}

async function deleteCategorySkill(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: auth({'Content-Type': 'application/json'})
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills/' + id, requestOptions).then(response);
}