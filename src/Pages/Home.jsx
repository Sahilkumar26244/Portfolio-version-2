import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MyInfo from "../Components/MyInfo";

function Home() {
  return (
    <Box mt={"60px"}>
      <Flex w={"1500px"} border={"1px solid black"} m={"auto"}>
        <Box>
          <MyInfo />
        </Box>
        <Box>something</Box>
      </Flex>
    </Box>
  );
}

export default Home;
