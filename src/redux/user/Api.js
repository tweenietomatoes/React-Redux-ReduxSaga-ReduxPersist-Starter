const authUserFetch = (action) => {
    return fetch('API_URL/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: action.payload.email, password: action.payload.password })
    }) 
}

const Api = {
    authUserFetch
}

export default Api
