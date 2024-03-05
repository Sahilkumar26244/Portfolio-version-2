import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import PdfComp from './PdfComp'

function ResumeSection() {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"} bg={"white"}>
            <Box borderBottom={"1px solid #e2e2e2"} p={"50px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Text textTransform={"uppercase"} fontWeight={900} fontSize={{base:"1rem",lg:"1.5rem"}} letterSpacing={"3px"} color={"#3c3b3b"}  _hover={{
                    textDecoration: "none",
                    color: "rgb(46, 89, 186)",
                }} cursor={"pointer"} textAlign={{base:"center",lg:"left"}}>resume</Text>
            </Box>
            <Box>
                <PdfComp/>
            </Box>
        </Box>
    </div>
  )
}

export default ResumeSection