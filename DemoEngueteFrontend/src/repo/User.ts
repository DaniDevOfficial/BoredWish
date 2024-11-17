// @ts-ignore
const baseUrl = import.meta.env.VITE_API_URL

export interface User {
    userId: string;
    username: string;
    profileImageUrl?: string;
    groups: Group[];
}

export interface Group {
    groupId: string;
    groupName: string;
    amountOfPeopleInGroup: bigint;
    nextMealDate: string;
}


export async function GetUserInformation(authToken: string): Promise<User> {
    const payload = decodeJwt(authToken);
    if (!payload) {
        throw new Error("Failed to decode JWT.");
    }

    console.log(payload);
    const url = baseUrl + 'users/' + payload['UserId']
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken,
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch user data.");
    }
    return await res.json();
}

type JWTPayload = {
    UserId: string;
    Username: string;
    Exp: number;
};


function decodeJwt(token: string): JWTPayload {
    try {
        const parts = token.split(".");

        if (parts.length !== 3) {
            throw new Error("Invalid JWT token format.");
        }

        const payload = parts[1];
        return JSON.parse(atob(payload));
    } catch (error) {
        console.error("Failed to decode JWT:", error);
        return null;
    }
}
