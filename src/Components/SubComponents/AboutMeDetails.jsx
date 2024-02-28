import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import {history} from "../../data/MyHistory";
import { iLike } from '../../data/MyHistory';

function AboutMeDetails() {
    console.log(history)
    console.log(iLike)

    const myself = "I am the VP of Engineering at Smile Identity, where I work on tools that have helped over 90 million people in Africa gain access to financial services. Before Smile, I was the co-founder & CTO of Arthena and a co-founder of Matroid. In my spare time, I enjoy investing in people and ideas through a small venture fund. I am particularly interested in projects with high social impact. If you think I can be helpful to you or your cause and would like to meet, please feel free to get in touch."
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
                <Box>
                    <Text textTransform={"uppercase"} fontSize={"0.8em"} color={"#3c3b3b"} fontWeight={800} letterSpacing={"0.25em"}>intro</Text>
                </Box>
                <Box>
                    <Text fontSize={"0.9em"} color={"#646464"} textAlign={"justify"}>{myself}</Text>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
                <Box textTransform={"uppercase"} fontSize={"0.8em"} color={"#3c3b3b"} fontWeight={800} letterSpacing={"0.25em"}>some history</Box>
                <Box>
                    <UnorderedList spacing={3} color={"#646464"} fontSize={"0.9em"} textAlign={"justify"}>
                    {history.map((e,i) => (
                        <>
                            <ListItem>{e.text}</ListItem>
                        </>
                    ))}
                    </UnorderedList>
                </Box>
                <Box>
                    <Text color={"#646464"} fontSize={"0.9em"}>Ask me in person for other stories that I'm afraid to share with the internet.</Text>
                </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
                <Box textTransform={"uppercase"} fontSize={"0.8em"} color={"#3c3b3b"} fontWeight={800} letterSpacing={"0.25em"}>i like</Box>
                <Box>
                        <UnorderedList spacing={3} color={"#646464"} fontSize={"0.9em"}>
                            {iLike.map((e,i) => (
                                <>
                                    <ListItem>{e.like}</ListItem>
                                </>
                            ))}
                        </UnorderedList>
                </Box>
            </Box>
            
        </Box>
    </div>
  )
}

export default AboutMeDetails