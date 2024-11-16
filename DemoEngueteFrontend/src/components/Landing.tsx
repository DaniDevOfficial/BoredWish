import { Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function Landing() {

    return (
        <>

            <Flex
                align={"center"}
                justify={"center"}
                direction={"column"}
            >
                <Heading>Log in or sign up</Heading>
                <Link to={'login'}>Login</Link>
                <Link to={'signup'}>Sign-up</Link>
            </Flex>
        </>
    )
}