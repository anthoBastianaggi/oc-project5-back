export const userService = {
    login
};

async function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return await fetch('http://127.0.0.1:8001/api/login_check', requestOptions)
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
    if (response.status === 401 || response.status === 500) {
        return;
    }
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        window.location.href = '/home';
        return data;
    });
}