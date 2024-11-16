import React, {useState} from 'react'
import {Button, Flex, FormControl, FormLabel, Heading, Input, useToast} from '@chakra-ui/react'
import {SignIntoAccount} from "../repo/Auth.ts";
import {useNavigate} from "react-router-dom";

export function SignUp() {
    const [username, setUsername] = useState('Dani1-123')
    const [password, setPassword] = useState('Dani1-123')

    const toast = useToast()
    const navigate = useNavigate()
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const response = await SignIntoAccount(username, password)
            toast({
                title: 'Success.',
                description: 'Successfully logged in.',
                status: 'success',
            })
            localStorage.setItem('token', response['token'])
            navigate('/user')
        } catch (e) {
            console.log(e.message)
            // @ts-ignore
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
                <Heading>Login</Heading>

                <form onSubmit={handleSubmit}>
                    <FormControl id="username" mb={4}>
                        <FormLabel>Username</FormLabel>
                        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </form>
            </Flex>
        </>
    )
}