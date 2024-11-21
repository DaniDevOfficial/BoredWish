import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Flex, Spinner, useToast} from "@chakra-ui/react";
import {GetGroupMembers} from "../repo/Group.ts";

export function GroupMembers(props) {
    const [memberList, setMemberList] = useState<Member[]|undefined>()
    const [groupId, setGroupId] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [groupData, setGroupData] = useState<Group | undefined>()

    const params = useParams()
    const toast = useToast()

    useEffect(() => {
        setGroupId(params['groupId'] ?? '')
    }, [params]);

    useEffect(() => {
        loadData()

        async function loadData() {
            try {
                if (groupId === '') {
                    return;
                }

                const data = await GetGroupMembers(groupId)
                console.log(data)
                setMemberList(data)
                setIsLoading(false)
            } catch (e) {
                toast({
                    title: 'Error Happened.',
                    description: e.message,
                    status: 'error',
                })
            }
        }
    }, [groupId, toast]);

    if (groupId === '' || isLoading || !memberList) {
        return (
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                height={"100vh"}
            >
                <Spinner/>
            </Flex>
        )
    }

    return (
        <div>
            {memberList.map((member) => {
                return (
                    <div>
                        <p>{member.userId}</p>
                        <p>{member.username}</p>
                    </div>
                )
            })}
        </div>
    );
}

