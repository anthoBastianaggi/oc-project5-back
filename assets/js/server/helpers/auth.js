import jwtDecode from "jwt-decode";

export function auth() {
    let user = JSON.parse(sessionStorage.getItem('login'));

    if (user && user.token) {
        const now = Date.now().valueOf() / 1000;

        if(jwtDecode(user.token).exp < now) {
            refreshToken(user)
        } else {
            return { 'Authorization': 'Bearer ' + user.token };
        }
    } else {
        return {};
    }
}

function refreshToken(param) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: param.refresh_token })
    };
    return fetch('http://127.0.0.1:8001/api/token/refresh', requestOptions)
    .then(handleResponse)
    .then(user => {
        if (user) {
            sessionStorage.setItem('login', JSON.stringify(user));
        }

        return user;
    })
    .catch(e => console.error(e));
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        window.location.href = '/home';
        return data;
    });
}
