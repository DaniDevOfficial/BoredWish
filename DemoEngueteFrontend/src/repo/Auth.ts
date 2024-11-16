// @ts-ignore
const baseUrl = import.meta.env.VITE_API_URL

type RequestCreateNewUser = {
    username: string,
    email: string,
    password: string,
}

export async function CreateNewUser(username: string, email: string, password: string) {
    const url = baseUrl + 'signup'
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
    const resData = await res.json()
    console.log(resData)
    if (!res.ok) {
        throw new Error(resData)

    }
    return resData;

}