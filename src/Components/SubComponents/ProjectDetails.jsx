import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from "../../data/MyProjects"

function ProjectDetails() {
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
            <Box p={"50px"} display={"flex"} flexDirection={"column"} gap={"50px"}>
                {projects.map((e,i) => (
                    <>
                        <ProjectCard title={e.title} date={e.date} image={e.image} desc={e.desc} />
                    </>
                ))}
            </Box>
        </Box>
    </div>
  )
}

export default ProjectDetails