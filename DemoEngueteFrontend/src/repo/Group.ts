import {ResponseError} from "../types/General.ts";

const baseUrl = import.meta.env.VITE_API_URL

type RequestCreateNewGroup = {
    groupName: string,
}

export type ResponseCreateGroup = {
    groupId: string
}


export async function CreateNewGroup(groupName: string): Promise<ResponseCreateGroup> {
    const url = baseUrl + 'groups'
    const data: RequestCreateNewGroup = {
        groupName: groupName
    }
    const jwtToken = localStorage.getItem("token") ?? "";
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken
        },
        body: JSON.stringify(data)
    })
    const resData: ResponseCreateGroup | ResponseError = await res.json()
    if (!res.ok) {
        throw new Error(resData['error'])
    }
    return resData;
}

export async function GetGroupData(groupId: string): Promise<Group> {
    const url = baseUrl + 'groups/' + groupId
    const jwtToken = localStorage.getItem("token") ?? "";
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken,
        }
    })
    const resData = await res.json()
    if (!res.ok) {
        throw new Error(resData['error'])
    }
    return resData;
}

export async function GetGroupMembers(groupId: string): Promise<Member> {
    const url = baseUrl + 'groups/' + groupId + '/members'
    const jwtToken = localStorage.getItem("token") ?? "";
    console.log(url)
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwtToken,
        }
    })
    console.log(res)
    const resData = await res.json()
    if (!res.ok) {
        throw new Error(resData['error'])
    }
    return resData;
}