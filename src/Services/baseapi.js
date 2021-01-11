export const baseURL = process.env.BASE_BACKEND_URL

export const apicall = (url, method, body, query = "") => {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL + url}${query !== "" ? '?' + addqueryparams(query) : ''}`, {
            method: method,
            body: body ? JSON.stringify(body) : '',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        })
    });
}

export const addqueryparams = async (data) => {
    const queryparams = []
    for (const key in data) {
        queryparams.push(key + "=" + data[key])
    }
    return queryparams > 0 ? queryparams.join("&") : ""
}