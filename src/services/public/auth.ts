import { publicApi } from "../api.config"

const login = ({ username, password }: { username: string, password: string }) => {
    const res = publicApi.post('/api/v1/auth/login', {
        username: username,
        password: password
    })
    return res
}

const register = ({ name, username, password }: { name:string,username: string, password: string }) => {
    const res = publicApi.post('/api/v1/auth/register', {
        name:name,
        username: username,
        password: password
    })
    return res
}


export { login, register }