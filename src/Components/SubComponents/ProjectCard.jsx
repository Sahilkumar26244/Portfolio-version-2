import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function ProjectCard({title,date,image,desc}) {
  return (
    <div>
        <Box border={"1px solid #e2e2e2"}>
            <Box p={"20px"} >
                <Box>
                    <Text textTransform={"uppercase"} fontSize={{base:"0.7em",lg:"0.8em"}} color={"#3c3b3b"} fontWeight={800} letterSpacing={"0.25em"}>{title}</Text>
                </Box>
                <Box>
                    <Text lineHeight={"2.5"} fontSize={{base:"0.6em",lg:"0.7em"}} letterSpacing={"0.25em"} fontWeight={400} color={"#646464"}>{date}</Text>
                </Box>
            </Box>
            <Box w={"100%"}>
                <Image w={"100%"} h={"100%"} src={image} />
            </Box>
            <Box p={"20px"} bg={"#f4f4f4"}>
                <Text lineHeight={"2"} fontSize={"0.7em"} letterSpacing={{base:"",lg:"0.25em"}} fontWeight={400} color={"#646464"}>{desc}</Text>
            </Box>
        </Box>
    </div>
  )
}

export default ProjectCard