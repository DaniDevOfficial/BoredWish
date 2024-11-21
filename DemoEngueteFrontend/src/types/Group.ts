type Group = {
    groupInfo: GroupInfo;
    meals: Meal[]
}

type Member = {
    userId: string;
    username: string;
    userRoles: string[];
}

type GroupInfo = {
    groupId: string,
    groupName: string,
    userCount: bigint,
    userRoles: string[],
}

type Meal = {
    mealName: string;
    mealId: string;
    userStatus: string;
    userIsCook: string;
    date: string;
    userPreference: string;
    amountOfParticipants: string;
}