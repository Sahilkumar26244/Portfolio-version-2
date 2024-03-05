import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { education } from "../../data/ResumeData";
import { experience } from "../../data/ResumeData";

function PdfComp() {
  return (
    <div>
      <Box p={{base:"20px",lg:"50px"}}>
        <Box>
          <Text
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={{base:"0.8em", lg: "0.8em", xl: "1.0em" }}
            color={"#3c3b3b"}
            fontWeight={800}
            letterSpacing={"0.25em"}
          >
            Education
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          pt={"20px"}
          pb={"20px"}
        >
          {education.map((e, i) => (
            <>
              <Box>
                <Text fontSize={"12.8px"}>{e.techStack}</Text>
                <Flex fontSize={"11.2px"} gap={"10px"}>
                  <Text>{e.school}</Text>|<Text>{e.location}</Text>
                </Flex>
                <Text fontSize={"11.2px"}>{e.duration}</Text>
              </Box>
            </>
          ))}
        </Box>
        <Box>
          <Box>
            <Text
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{base:"0.8em", lg: "0.8em", xl: "1.0em" }}
              color={"#3c3b3b"}
              fontWeight={800}
              letterSpacing={"0.25em"}
            >
              experience
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
            pt={"20px"}
           
          >
            {experience.map((e, i) => (
              <>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                    <Flex
                      textTransform={"uppercase"}
                      fontSize={{base:"0.6em", lg: "0.7em", xl: "1.0em" }}
                      color={"#3c3b3b"}
                      fontWeight={800}
                      letterSpacing={{base:"0.1em",lg:"0.30em"}}
                    >
                      <Text>{e.role}</Text>-<Text>{e.company}</Text>
                    </Flex>
                    <Text fontSize={{base:"10.8px",lg:"12.8px"}}>{e.duration}</Text>
                  </Box>
                  <Text
                    fontSize={{base:"0.8em", lg: "0.8em", xl: "1.0em" }}
                    color={"#646464"}
                  >
                    {e.descriptions}
                  </Text>
                  <Box
                    fontSize={{base:"0.8em", lg: "0.8em", xl: "1.0em" }}
                    color={"#646464"}
                  >
                    <UnorderedList spacing={2}>
                      {e.performance.map((item, i) => (
                        <>
                          <ListItem>{item}</ListItem>
                        </>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default PdfComp;
