import React, {useState} from 'react'
import {Button, Flex, FormControl, FormLabel, Heading, Input, useToast} from '@chakra-ui/react'
import {CreateNewUser} from "../repo/Auth.ts";
import {useNavigate} from "react-router-dom";

export function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const toast = useToast()
    const navigate = useNavigate()
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const resposne = await CreateNewUser(username, email, password)
            toast({
                title: 'Success.',
                description: 'User created successfully.',
                status: 'success',
            })
            localStorage.setItem('token', resposne['token'])
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
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </form>
            </Flex>
        </>
    )
}