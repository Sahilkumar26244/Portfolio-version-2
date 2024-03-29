import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MyInfo from '../Components/MyInfo'
import ProjectDetails from '../Components/SubComponents/ProjectDetails'

function Projects() {
  return (
    <Box pt={"100px"} pb={"100px"} bg={"#f4f4f4"}>
        <Flex w={{lg:"1400px",xl:"1500px"}} m={"auto"} gap={"10px"} direction={{base:"column-reverse",lg:"row"}}>
            <Box w={{base:"100%",lg:"30%"}}>
                <MyInfo/>
            </Box>
            <Box w={{base:"100%",lg:"70%"}} p={{base:"0px",lg:"20px"}}>
                <ProjectDetails/>
            </Box>
        </Flex>
    </Box>
  )
}

export default Projects