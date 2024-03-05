import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

function AboutThisSite() {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"} bg={"white"}>
            <Box borderBottom={"1px solid #e2e2e2"} p={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Text textTransform={"uppercase"} fontWeight={900} fontSize={{base:"1rem",lg:"1.5rem"}} letterSpacing={"3px"} color={"#3c3b3b"}  _hover={{
                    textDecoration: "none",
                    color: "rgb(46, 89, 186)",
                  }} cursor={"pointer"} textAlign={{base:"center",lg:"left"}}>about this site</Text>
                <Text lineHeight={"2.5"} textAlign={{base:"center",lg:"left"}} fontSize={"0.7em"} letterSpacing={"0.25em"} fontWeight={400} color={"#646464"}>A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT.</Text>
            </Box>
            <Box p={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Text lineHeight={"2"} color={"#646464"} fontSize={"15px"} fontWeight={400}>Welcome to my website. Please feel free to read more about me, or you can check out my resume, projects, view site statistics, or contact me.</Text>
                <Text color={"#646464"} fontSize={"15px"} fontWeight={400}>Source available <Link href='https://github.com/Sahilkumar26244/Portfolio-version-2'>here</Link>.</Text>
            </Box>
        </Box>
    </div>
  )
}

export default AboutThisSite