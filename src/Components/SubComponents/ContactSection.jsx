import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"} bg={"white"}>
            <Box borderBottom={"1px solid #e2e2e2"} p={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Text textTransform={"uppercase"} fontWeight={900} fontSize={{base:"1rem",lg:"1.5rem"}} letterSpacing={"3px"} color={"#3c3b3b"}  _hover={{
                    textDecoration: "none",
                    color: "rgb(46, 89, 186)",
                }} cursor={"pointer"} textAlign={{base:"center",lg:"left"}}>contact</Text>
            </Box>
            <Box p={{base:"20px 30px",lg:"50px"}} display={"flex"} flexDirection={"column"} gap={"50px"}>
                <Box>
                    <Text fontSize={"0.9em"} color={"#646464"}>Feel free to get in touch. You can email me at:</Text>
                    <Text fontSize={"0.9em"} color={"#646464"}>kumarsahil8981@gmail.com</Text>
                </Box>
                <Box>
                    <ContactForm/>
                </Box>
                <Box>
                    <Flex gap={"20px"} alignItems={"center"}>
                        <Box>
                            <FaGithub style={{color:"#aaaaaa",cursor:"pointer"}}/>
                        </Box>
                        <Box>
                            <FaFacebookF style={{color:"#aaaaaa",cursor:"pointer"}}/>
                        </Box>
                        <Box>
                            <FaInstagram style={{color:"#aaaaaa",cursor:"pointer"}}/>
                        </Box>
                        <Box>
                            <FaLinkedinIn style={{color:"#aaaaaa",cursor:"pointer"}}/>
                        </Box>
                        <Box>
                            <FaSquareXTwitter style={{color:"#aaaaaa",cursor:"pointer"}}/>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default ContactSection