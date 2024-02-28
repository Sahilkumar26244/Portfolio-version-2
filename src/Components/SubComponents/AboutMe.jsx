import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import AboutMeDetails from './AboutMeDetails'

function AboutMe() {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"} bg={"white"}>
            <Box borderBottom={"1px solid #e2e2e2"} p={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Text textTransform={"uppercase"} fontWeight={900} fontSize={{base:"1rem",lg:"1.5rem"}} letterSpacing={"3px"} color={"#3c3b3b"}  _hover={{
                    textDecoration: "none",
                    color: "rgb(46, 89, 186)",
                }} cursor={"pointer"} textAlign={{base:"center",lg:"left"}}>about me</Text>
                <Text lineHeight={"2.5"} textAlign={{base:"center",lg:"left"}} fontSize={"0.7em"} letterSpacing={"0.25em"} fontWeight={400} color={"#646464"}>(IN ABOUT 1060 WORDS)</Text>
            </Box>
            <Box p={{base:"50px 20px",lg:"50px"}}>
                <AboutMeDetails/>
            </Box>
        </Box>
    </div>
  )
}

export default AboutMe