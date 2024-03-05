import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PdfComp from "./PdfComp";
import SkillsTabs from "./SkillsTabs";

function ResumeSection() {
  return (
    <div>
      <Box border={"1px solid #e2e2e2"} bg={"white"}>
        <Box
          borderBottom={"1px solid #e2e2e2"}
          p={"50px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Text
            textTransform={"uppercase"}
            fontWeight={900}
            fontSize={{ base: "1rem", lg: "1.5rem" }}
            letterSpacing={"3px"}
            color={"#3c3b3b"}
            _hover={{
              textDecoration: "none",
              color: "rgb(46, 89, 186)",
            }}
            cursor={"pointer"}
            textAlign={{ base: "center", lg: "left" }}
          >
            resume
          </Text>
        </Box>
        <Box>
          <PdfComp />
        </Box>
        <Box p={"0px 50px 50px 50px"}>
          <Box pb={"20px"}>
            <Text
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{ base: "0.8em", lg: "0.8em", xl: "1.0em" }}
              color={"#3c3b3b"}
              fontWeight={800}
              letterSpacing={"0.25em"}
            >
              Skills
            </Text>
          </Box>
          <SkillsTabs />
        </Box>
      </Box>
    </div>
  );
}

export default ResumeSection;
