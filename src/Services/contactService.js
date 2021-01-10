import { apicall } from './baseapi';

export const contactusapi = async (data) => {
    return await apicall('contactus', 'post', data)
}