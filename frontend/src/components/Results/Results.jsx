import React from "react";
import { VStack, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Results = () => {
  return (
    <>
      <VStack>
        <VStack
          mt={78}
          width={["100%", "60%"]}
          justifyContent={"center"}
          height={"80vh"}
        >
          <Box width={"30%"} mb={5}>
            <Link to={"quaterlyresult"}>
              <Button width={"100%"}>Quaterly Result</Button>
            </Link>
          </Box>
          <Box width={"30%"} mb={5}>
            <Link to={"halfyearlyresult"}>
              <Button width={"100%"}>Halfyearly Result</Button>
            </Link>
          </Box>
          <Box width={"30%"} mb={5}>
            <Link to={"annuallyresult"}>
              <Button width={"100%"}>Annual Result</Button>
            </Link>
          </Box>
          <Box width={"30%"} mb={5}>
            <Link to={"finalresult"}>
              <Button width={"100%"}>Final Result</Button>
            </Link>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};

export default Results;
