import { Box, Progress, Text } from "@chakra-ui/react";
import React from "react";

function JavascriptProgress() {
  const data = [
    {
      tech: "Node.JS",
      progress: 100,
      progressValue: 5,
    },
    {
      tech: "Javascript",
      progress: 90,
      progressValue: 4,
    },
    {
      tech: "Express.JS",
      progress: 90,
      progressValue: 4,
    },
    {
      tech: "React",
      progress: 80,
      progressValue: 4,
    },
    {
      tech: "Next.JS",
      progress: 10,
      progressValue: 1,
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
                color="#515dd4"
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

export default JavascriptProgress;
