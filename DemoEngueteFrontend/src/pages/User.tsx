import React, {useEffect, useState} from "react";
import {Flex, Heading, IconButton, Input, Spinner, Text, useToast} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {GetUserInformation, User as UserType} from "../repo/User.ts";
import {GroupCard} from "../components/GroupCard.tsx";
import {FaPlus} from "react-icons/fa";

export function User() {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState<UserType | undefined>();
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const toast = useToast();
    useEffect(() => {
        loadUserData();

        async function loadUserData() {
            try {
                const tmpToken = localStorage.getItem('token');
                if (!tmpToken) {
                    throw new Error('No token found');
                    return;
                }
                setToken(tmpToken)
                const res = await GetUserInformation(tmpToken)
                setUserData(res);
                setIsLoading(false);
            } catch (e) {
                toast({
                    title: 'Error',
                    description: e.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                })
                navigate('/login');
            }
        }
    }, [navigate, toast]);

    if (isLoading || !userData) {
        return (
            <Flex justifyContent={"center"} alignItems={"center"} height={"80vh"}>
                <Spinner/>
            </Flex>
        );
    }

    return (
        <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
            <Heading>{userData.username}</Heading>
            <Text>{userData.userId}</Text>
            <Input value={token}></Input>
            <IconButton aria-label="Logout" icon={<FaPlus/>} onClick={() => {
                navigate('/createGroup')
            }}/>
            <Flex
                mt={"10px"}
                flexDir={"column"}
                gap={"10px"}
            >

                {userData.groups && userData.groups.map((group) => (
                    <GroupCard key={group.groupId} group={group}/>
                ))}
            </Flex>
        </Flex>
    );
}

