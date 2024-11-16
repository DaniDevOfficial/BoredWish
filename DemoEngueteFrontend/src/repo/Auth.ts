// @ts-ignore
const baseUrl = import.meta.env.VITE_API_URL

type RequestCreateNewUser = {
    username: string,
    email: string,
    password: string,
}

type ResponseAuth = [
    token: string
]
type ResponseError = [
    error: string
]

export async function CreateNewUser(username: string, email: string, password: string): Promise<ResponseAuth> {
    const url = baseUrl + 'auth/signup'
    const data: RequestCreateNewUser = {
        username: username,
        email: email,
        password: password
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const resData: ResponseAuth|ResponseError = await res.json()
    if (!res.ok) {
        throw new Error(resData['error'])
    }
    return resData;
}

export async function SignIntoAccount(username: string, password: string): Promise<ResponseAuth> {
    const url = baseUrl + 'auth/signin'
    const data = {
        username: username,
        password: password
    }
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const resData = await res.json()
    console.log(resData)
    if (!res.ok) {
        throw new Error(resData['error'])
    }
    return resData;
}