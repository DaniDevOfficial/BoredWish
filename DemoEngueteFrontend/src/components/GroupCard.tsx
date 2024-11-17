import {Group} from "../repo/User.ts";
import {Link} from "react-router-dom";
import {Flex, Text} from "@chakra-ui/react";


type GroupCardProps = {
    group: Group;
};

export function GroupCard({group}: GroupCardProps) {
    return (
        <Link to={"/group/" + group.groupId}>
            <Flex flexDir={"column"} gap={"10px"} padding={"10px"} backgroundColor={"gray.200"} width={"200px"} borderRadius={"10px"}>
                <Text>{group.groupName}</Text>
                <Flex justifyContent={"space-between"} gap={"30px"}>
                    <Text>{group.amountOfPeopleInGroup.toString()}</Text>
                    <Text>{group.nextMealDate}</Text>
                </Flex>
            </Flex>
        </Link>
    );
}
