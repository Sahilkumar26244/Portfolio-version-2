import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import JavascriptProgress from "../SkillProgress/JavascriptProgress";
import LanguagesProgress from "../SkillProgress/LanguagesProgress";
import WebDevelopmentProgress from "../SkillProgress/WebDevelopmentProgress";
import ToolsProgress from "../SkillProgress/ToolsProgress";
import SkillsTabs from "./SkillsTabs";

function SkillsDetails() {
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
            skills
          </Text>
          <Text
            lineHeight={"2.5"}
            textAlign={{ base: "center", lg: "left" }}
            fontSize={"0.7em"}
            letterSpacing={"0.25em"}
            fontWeight={400}
            color={"#646464"}
          >
            Note: I think these sections are silly, but everyone seems to have
            one. Here is a *mostly* honest overview of my skills.
          </Text>
        </Box>
        <Box p={"50px"}>
          <SkillsTabs/>
        </Box>
      </Box>
    </div>
  );
}

export default SkillsDetails;
