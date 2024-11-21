import {Button, Flex, Heading, Icon,Text} from "@chakra-ui/react";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom";

type GroupHeaderProps = {
    group: GroupInfo;
};

export function GroupHeader({group}: GroupHeaderProps) {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
        >
            <Heading>{group.groupName}</Heading>
            <Button as={Link} to={"/group/" + group.groupId + "/members"} >
                <Flex>
                    <Icon as={FaUser}/>
                    <Text>{group.userCount.toString()}</Text>
                </Flex>
            </Button>
        </Flex>
    );
}