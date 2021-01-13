import { apicall } from './baseapi';

export const loginapi = async (data) => {
    return await apicall('login', 'post', data)
}

export const registerapi = async (data) => {
    return await apicall('register', 'post', data)
}

export const forgotpasswordapi = async (data) => {
    return await apicall('forgotpassword', 'post', data)
}
