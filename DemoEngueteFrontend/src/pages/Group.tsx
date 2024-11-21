import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Flex, Spinner, useToast} from "@chakra-ui/react";
import {GetGroupData} from "../repo/Group.ts";
import {GroupHeader} from "../components/GroupHeader.tsx";

export function Group() {
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

                const data = await GetGroupData(groupId)
                console.log(data)
                setGroupData(data)
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

    if (groupId === '' || isLoading || !groupData) {
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
        <>
            <GroupHeader group={groupData.groupInfo}/>
        </>
    );
}

