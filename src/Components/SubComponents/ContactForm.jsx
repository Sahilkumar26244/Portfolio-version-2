import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

function ContactForm() {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"} >
            <Box borderBottom={"1px solid #e2e2e2"} p={"20px"}>
                <Text fontSize={"0.9em"} color={"#646464"} fontWeight={700}>Send message!</Text>
            </Box>
            <Box p={"20px"} borderBottom={"1px solid #e2e2e2"}>
                <Input variant={"unstyled"} placeholder='Full name' />
            </Box>
            <Box p={"20px"} borderBottom={"1px solid #e2e2e2"}>
                <Input variant={"unstyled"} placeholder='Email address' />
            </Box>
            <Box p={"20px"} borderBottom={"1px solid #e2e2e2"}>
                <Input variant={"unstyled"} placeholder='Phone number' />
            </Box>
            <Flex p={"20px"} borderBottom={"1px solid #e2e2e2"}>
                <Box>
                    <Input variant={"unstyled"} placeholder='Message' />
                </Box>

            </Flex>
            <Box p={"20px"}>
                <Button color={"#3c3b3b"} bg={"#0000"} fontSize={"9.6px"} borderRadius={"0px"}  boxShadow={"inset 0 0 0 1px #a0a0a04d"} fontWeight={800} letterSpacing={"0.25em"} p={"0 2.5em"}>SEND</Button>
            </Box>
        </Box>
    </div>
  )
}

export default ContactForm