import { auth } from "../../../helpers/auth";
import { fetchWrapper } from "../../../helpers/request-helpers";

export const categoryProjectService = {
    getCategoryProject,
    showCategoryProject,
    postCategoryProject,
    updateCategoryProject,
    deleteCategoryProject
};

let response = fetchWrapper.handleResponse;

async function getCategoryProject() {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio', requestOptions).then(response);
}

async function showCategoryProject(id) {
    const requestOptions = {
        method: 'GET',
        headers: auth()
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio/' + id, requestOptions).then(response);
}

async function postCategoryProject(name, slug) {
    const requestOptions = {
        method: 'POST',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, slug })
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio', requestOptions).then(response);
}

async function updateCategoryProject(id, name, slug) {
    const requestOptions = {
        method: 'PUT',
        headers: auth({'Content-Type': 'application/json'}),
        body: JSON.stringify({ name, slug })
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio/' + id, requestOptions).then(response);
}

async function deleteCategoryProject(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: auth({'Content-Type': 'application/json'})
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio/' + id, requestOptions).then(response);
}