import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  Image,
  Tfoot,
} from "@chakra-ui/react";
import logo from "../../logo.jpg";
const ResultDemo = () => { 
  return (
    <>
      <VStack>
        <VStack
          mt={10}
          width={["100%", "70%"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <TableContainer
            width={"100%"}
            padding={["3", "5"]}
            display={"flex"}
            justifyContent={"center"}
            mb={4}
          >
            <Table
              variant="simple"
              colorScheme="black"
              width={["95%", "100%"]}
              size={"md"}
              border={"1px solid black"}
              textAlign={"center"}
            >
              <TableCaption placement="top" fontSize={"20px"}>
                Result 2023-2024
              </TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    Name
                  </Th>
                  <Td textAlign={"center"}>Shani Yadav</Td>
                  <Td rowSpan={2} justifyContent={"center"}>
                    <Image display={"flex"} src={logo} boxSize={20} />
                  </Td>
                </Tr>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    ROLL No
                  </Th>
                  <Td textAlign={"center"}>6</Td>
                </Tr>
                <Tr>
                  <Th color={"black"} textAlign={"center"}>
                    Subject
                  </Th>
                  <Th color={"black"} textAlign={"center"}>
                    Max
                  </Th>
                  <Th color={"black"} textAlign={"center"}>
                    Obtained
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Hindi
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    English
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Math
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Science
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Social Studies
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Sanskrit
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Computer
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    G.K.
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    Drawing
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr> 
                <Tr>
                  <Td color={"black"} textAlign={"center"} fontWeight={400}>
                    P.T.
                  </Td>
                  <Td textAlign={"center"}>50 </Td>
                  <Td textAlign={"center"}>25</Td>
                </Tr>
              </Tbody>

              <Tfoot>
                <Tr>
                  <Th textAlign={"center"} color={"black"}>
                    Total
                  </Th>
                  <Th textAlign={"center"} color={"black"}>
                    500
                  </Th>
                  <Th textAlign={"center"} color={"black"}>
                    400
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </VStack>
      </VStack>
    </>
  );
};

export default ResultDemo;
