import React, { useState } from 'react'
import { Heading, FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react'
import {CreateNewUser} from "../repo/Auth.ts";

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const resposne = await CreateNewUser(username, password, email)
        console.log(resposne)
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
                        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Submit</Button>
                </form>
            </Flex>
        </>
    )
}