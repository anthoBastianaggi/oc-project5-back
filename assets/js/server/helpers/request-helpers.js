function handleResponse(response) {
    return response.text().then(text => {
        if(response.status >= 200 && response.status <= 299) {
            const data = text && JSON.parse(text);
            return data
        }
    });
}

export const fetchWrapper = {
    handleResponse
};