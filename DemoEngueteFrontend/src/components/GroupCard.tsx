import {Group} from "../repo/User.ts";


type GroupCardProps = {
    group: Group;
};

export function GroupCard({ group }: GroupCardProps) {
    return (
        <div>
            <h1>{group.groupName}</h1>
            <p>{group.amountOfPeopleInGroup.toString()}</p>
            <p>{group.nextMealDate}</p>
        </div>
    );
}
