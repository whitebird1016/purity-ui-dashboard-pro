/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "assets/svg/logo.svg";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  // for react-to-print to work, it must be called from a class based component
  render() {
    const { textColor } = this.props;

    return (
      <Card
        w={{ sm: "330px", md: "500px", lg: "900px" }}
        justifySelf="center"
        alignSelf="center"
        mt="50px"
        p={{ sm: "24px", md: "44px" }}
      >
        <CardHeader mb={{ sm: "60px", md: "95px" }}>
          <Flex direction="column" w="100%">
            <Image src={logo} w="115px" h="30px" mb="28px" />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
            >
              <Flex
                direction="column"
                maxW={{ sm: "100%", md: "150px", lg: "300px" }}
                mb={{ sm: "48px", md: "0px" }}
              >
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="lg"
                  mb="12px"
                >
                  St. Independence Embankment, 050105 Bucharest, Romania
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  tel: +4 (074) 1090873
                </Text>
              </Flex>
              <Flex
                direction="column"
                textAlign={{ sm: "start", md: "end" }}
                maxW={{ sm: "100%", md: "170px" }}
              >
                <Text
                  color="gray.500"
                  fontWeight="bold"
                  fontSize="lg"
                  mb="12px"
                >
                  Billed to: John Doe
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  4006 Locust View Drive San Francisco CA California
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex direction="column" w="100%">
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
              mb="60px"
            >
              <Flex direction="column" mb={{ sm: "16px", md: "0px" }}>
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mb="8px"
                >
                  Invoice no
                </Text>
                <Text color="gray.500" fontWeight="bold" fontSize="lg">
                  #0453119
                </Text>
              </Flex>
              <Flex direction="column">
                <Stack direction="row" mb="8px" justify={{ md: "end" }}>
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Invoice date:{" "}
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="lg">
                    06/03/2021
                  </Text>
                </Stack>
                <Stack direction="row" justify={{ md: "end" }}>
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Due date:{" "}
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="lg">
                    29/07/2021
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            <Box overflowX={{ sm: "scroll", lg: "hidden" }}>
              <Table mb="85px" overflowX={{ sm: "scroll", lg: "hidden" }}>
                <Thead>
                  <Tr>
                    <Th
                      color="gray.400"
                      fontSize="sm"
                      fontWeight="normal"
                      ps="0px"
                    >
                      Item
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Quantity
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Rate
                    </Th>
                    <Th color="gray.400" fontSize="sm" fontWeight="normal">
                      Amount
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Premium Support
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        1
                      </Text>
                    </Td>
                    <Td minW="125px" boxSizing="border-box">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 9.00
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Chakra UI - Dashboard PRO
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        3
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 99.00
                      </Text>
                    </Td>
                    <Td>
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 297.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }} border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        Parts for Service
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        1
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 89.00
                      </Text>
                    </Td>
                    <Td border="none">
                      <Text color="gray.500" fontWeight="normal" fontSize="md">
                        $ 89.00
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td ps="0px" minW={{ sm: "300px" }}></Td>
                    <Td></Td>
                    <Td>
                      <Text color={textColor} fontWeight="bold" fontSize="xl">
                        Total
                      </Text>
                    </Td>
                    <Td>
                      <Text color={textColor} fontWeight="bold" fontSize="xl">
                        $ 9.00
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
            >
              <Flex direction="column" maxW="270px">
                <Text color="gray.500" fontWeight="bold" fontSize="xl">
                  Thank You!
                </Text>
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mt="6px"
                  mb="30px"
                >
                  If you encounter any issues related to the invoice you can
                  contact us at:
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  email:{" "}
                  <Text as="span" color="gray.500" fontWeight="bold">
                    support@creative-tim.com
                  </Text>
                </Text>
              </Flex>
              <Button
                onClick={() => this.props.handlePrint()}
                variant="no-hover"
                bg="teal.300"
                w="100px"
                h="35px"
                fontSize="xs"
                color="#fff"
                fontWeight="bold"
                alignSelf={{ sm: "flex-start", md: "flex-end" }}
                mt={{ sm: "16px", md: "0px" }}
              >
                PRINT
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    );
  }
}

function Invoice() {
  const textColor = useColorModeValue("gray.700", "white");

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Flex direction="column" pt={{ sm: "100px", lg: "50px" }}>
      <ComponentToPrint
        ref={componentRef}
        handlePrint={handlePrint}
        textColor={textColor}
      />
    </Flex>
  );
}

export default Invoice;
