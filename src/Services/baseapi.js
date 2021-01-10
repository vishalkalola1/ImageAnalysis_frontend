
export const apicall = async (url, method, body, cb, errorcb) => {

    await fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        const res = response.json()
        if (response.ok){
            return res;
        }else{
            throw Error(res.message);
        }
    }).then(data => {
        debugger;
        cb(data)
    }).catch(error => {
        debugger;
        errorcb(error.response)
    })
}