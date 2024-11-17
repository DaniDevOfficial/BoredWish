import React, {useState} from 'react'
import {Button, Flex, FormControl, FormLabel, Heading, Input, useToast} from '@chakra-ui/react'
import {CreateNewUser} from "../repo/Auth.ts";
import {useNavigate} from "react-router-dom";
import {CreateNewGroup} from "../repo/Group.ts";

export function CreateGroup() {
    const [groupName, setGroupName] = useState('')

    const toast = useToast()
    const navigate = useNavigate()
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const response = await CreateNewGroup(groupName)
            toast({
                title: 'Success.',
                description: 'User created successfully.',
                status: 'success',
            })
            navigate("/group/" + response.groupId)
        } catch (e) {
            toast({
                title: 'Error Happened.',
                description: e.message,
                status: 'error',
            })
        }
    }



    return (
        <>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}

            >
                <Heading>Create new Group</Heading>

                <form onSubmit={handleSubmit}>
                    <FormControl id="groupName" mb={4}>
                        <FormLabel>Group name</FormLabel>
                        <Input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </form>
            </Flex>
        </>
    )
}