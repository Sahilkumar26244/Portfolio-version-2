import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function MyInfo() {
  return (
    <div>
        <Box p={"20px"}>
            <Box borderBottom={"1px solid #e2e2e2"} display={"flex"} flexDirection={"column"} gap={"20px"} pb={"45px"}>
                <Box display={"flex"} justifyContent={{base:"center",lg:"flex-start"}}>
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                </Box>
                <Box>
                    <Text textAlign={{base:"center",lg:"left"}} textTransform={"uppercase"} fontWeight={900} fontSize={"1.5rem"} letterSpacing={"3px"} color={"#3c3b3b"}>sahil kumar</Text>
                </Box>
                <Box>
                    <Text textAlign={{base:"center",lg:"left"}} textTransform={"uppercase"} textDecoration={"1px dotted underline"} color={"#646464"} fontSize={"12.8px"}>kumarsahil8981@gmail.com</Text>
                </Box>
            </Box>
            <Box borderBottom={"1px solid #e2e2e2"} display={"flex"} flexDirection={"column"} gap={"20px"} pb={"45px"} pt={"45px"}>
                <Box>
                    <Text textTransform={"uppercase"} fontSize={"0.8em"} color={"#3c3b3b"} fontWeight={800} letterSpacing={"0.25em"}>about</Text>
                </Box>
                <Box>
                    <Text fontSize={"0.8em"} color={"#646464"}>Hi, I'm Michael. I am a Stanford ICME graduate, YC Alumni, and the VP of Engineering at Smile Identity. Previously, I was the co-founder and CTO of Arthena, co-founder of Matroid, and worked at Planet and Facebook.</Text>
                </Box>
                <Box display={"flex"}>
                    <Button color={"#3c3b3b"} bg={"#0000"} fontSize={"9.6px"} borderRadius={"0px"}  boxShadow={"inset 0 0 0 1px #a0a0a04d"} fontWeight={800} letterSpacing={"0.25em"} p={"0 2.5em"}>LEARN MORE</Button>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"20px"} pb={"45px"} pt={"45px"}>
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
                <Box>
                    <Text color={"#aaa"} fontSize={"0.5em"} fontWeight={400} letterSpacing={"0.25em"}>© MICHAEL D'ANGELO MLDANGELO.COM.</Text>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default MyInfo