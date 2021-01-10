import { apicall } from './baseapi';

export const baseapi = process.env.BASE_BACKEND_URL



export const addqueryparams = async (data) => {
    const queryparams = []
    for (const key in data) {
        queryparams.push(key + "=" + data[key])
    }
    return queryparams > 0 ? queryparams.join("&") : ""
}

export const makeapi = (endurl, queryparam = "") => {
    const url = baseapi + endurl
    return queryparam == "" ? url : (url + "?" + queryparam)
}

export const contactusapi = async (data) => {
    return await apicall('contactus', 'post', data)
}

export const loginapi = (data, cb, error) => {
    apicall(makeapi('login'), 'post', data, cb, error)
}

export const registerapi = async (data) => {
    return await apicall(makeapi('register'), 'post', data).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(response);
        }
    })
}