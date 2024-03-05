import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

function LanguagesProgress() {
  const data = [
    {
      tech: "Javascript",
      progress: 90,
      progressValue: 4,
    },
    {
      tech: "HTML + SASS/SCSS/CSS",
      progress: 40,
      progressValue: 3,
    },
  ];
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        {data.map((e, i) => (
          <>
            <Box
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text
                position={"absolute"}
                zIndex={1000}
                left={{base:"2%",lg:"1%"}}
                fontSize={{base:"0.5em",lg:"0.7em"}}
                letterSpacing={"0.05em"}
                fontWeight={700}
                color={"white"}
              >
                {e.tech}
              </Text>
              <Progress
                borderRadius={"2px"}
                colorScheme="red"
                height="32px"
                value={e.progress}
              />
              <Text
                position={"absolute"}
                zIndex={1000}
                right={"1%"}
                fontSize={"0.7em"}
                letterSpacing={"0.05em"}
                fontWeight={400}
                color={"#aaaaaa"}
              >
                {e.progressValue}/5
              </Text>
            </Box>
          </>
        ))}
      </Box>
    </div>
  );
}

export default LanguagesProgress;
