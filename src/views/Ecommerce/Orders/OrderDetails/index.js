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
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import productImage1 from "assets/img/product-page-1.png";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon } from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator";
import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { FaPencilAlt } from "react-icons/fa";

function OrderDetails() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");

  return (
    <Flex pt={{ sm: "125px", lg: "75px" }} justify="center" mx="auto">
      <Card maxW={{ lg: "800px" }}>
        <CardHeader>
          <Flex direction="column" w="100%">
            <Text color={textColor} fontSize="lg" fontWeight="bold" mb="22px">
              Order Details
            </Text>
            <Flex justify="space-between" w="100%">
              <Flex direction="column">
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Order no.{" "}
                  <Text as="span" color="teal.300" fontWeight="bold">
                    241342
                  </Text>{" "}
                  from{" "}
                  <Text as="span" color={textColor} fontWeight="bold">
                    23.02.2021
                  </Text>
                </Text>
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  Code:{" "}
                  <Text as="span" color={textColor} fontWeight="bold">
                    KF332
                  </Text>
                </Text>
              </Flex>
              <Button
                variant="no-hover"
                bg="#fff"
                w="125px"
                h="35px"
                color="gray.700"
                fontSize="xs"
                border="1px solid #E2E8F0"
                fontWeight="bold"
              >
                INVOICE
              </Button>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex direction="column" w="100%">
            <HSeparator my="22px" />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
              align="center"
            >
              <Flex align="center">
                <Box
                  minW="110px"
                  h="110px"
                  me="30px"
                  alignSelf={{ sm: "flex-start", md: "auto" }}
                >
                  <Image
                    src={productImage1}
                    w="100%"
                    h="100%"
                    borderRadius="12px"
                  />
                </Box>
                <Flex direction="column">
                  <Text
                    color={textColor}
                    fontSize="lg"
                    fontWeight="bold"
                    mb="6px"
                  >
                    Modern Luxury Sofa
                  </Text>
                  <Text
                    color="gray.400"
                    fontSize="sm"
                    fontWeight="normal"
                    mb="16px"
                  >
                    Order was delivered 2 days ago.
                  </Text>
                  <Badge
                    colorScheme="green"
                    w="95px"
                    h="28px"
                    borderRadius="15px"
                    display="flex"
                    alignItems="center"
                    alignSelf={{ sm: "center", md: "auto" }}
                    justifyContent="center"
                    mb={{ sm: "6px", md: "0px" }}
                  >
                    DELIVERED
                  </Badge>
                </Flex>
              </Flex>
              <Flex direction="column" align="flex-end">
                <Button
                  variant="no-hover"
                  bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                  w="125px"
                  h="35px"
                  color="#fff"
                  fontSize="xs"
                  fontWeight="bold"
                  mb={{ sm: "12px", md: "36px" }}
                >
                  CONTACT US
                </Button>
                <Text color="gray.400" fontSize="xs" fontWeight="normal">
                  Do you like the product? Leave us a review here.
                </Text>
              </Flex>
            </Flex>
            <HSeparator my="22px" />
            <Grid
              templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1.7fr 1fr",
              }}
              gap={{ sm: "24px", lg: "54px" }}
            >
              <Flex direction="column">
                <Text color={textColor} fontWeight="bold" mb="22px">
                  Track Order
                </Text>
                <Flex
                  alignItems="center"
                  minH="70px"
                  justifyContent="start"
                  //   mb="5px"
                >
                  <Flex direction="column" align="center" h="100%" me="20px">
                    <Icon
                      as={CgShapeCircle}
                      color="teal.300"
                      h={"30px"}
                      w={"30px"}
                      zIndex="1"
                      position="relative"
                    />
                    <Box w="2px" bg="gray.200" h="100%"></Box>
                  </Flex>
                  <Flex direction="column" justifyContent="flex-start" h="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Order received
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="normal"
                      mb="14px"
                    >
                      22 DEC 7:20 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems="center" minH="70px" justifyContent="start">
                  <Flex direction="column" align="center" h="100%" me="20px">
                    <Icon
                      as={CgShapeCircle}
                      color="teal.300"
                      h={"30px"}
                      w={"30px"}
                      zIndex="1"
                      position="relative"
                    />
                    <Box w="2px" bg="gray.200" h="100%"></Box>
                  </Flex>
                  <Flex direction="column" justifyContent="flex-start" h="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Generate order id #1832412
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="normal"
                      mb="14px"
                    >
                      22 DEC 7:21 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems="center" minH="70px" justifyContent="start">
                  <Flex direction="column" align="center" h="100%" me="20px">
                    <Icon
                      as={CgShapeCircle}
                      color="blue.400"
                      h={"30px"}
                      w={"30px"}
                      zIndex="1"
                      position="relative"
                    />
                    <Box w="2px" bg="gray.200" h="100%"></Box>
                  </Flex>
                  <Flex direction="column" justifyContent="flex-start" h="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Order transmited to courier
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="normal"
                      mb="14px"
                    >
                      22 DEC 8:10 AM
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems="center" minH="70px" justifyContent="start">
                  <Flex direction="column" align="center" h="100%" me="20px">
                    <Icon
                      as={CgShapeCircle}
                      color="blue.400"
                      h={"30px"}
                      w={"30px"}
                      zIndex="1"
                      position="relative"
                    />
                    <Box w="2px" bg="gray.200" h="100%"></Box>
                  </Flex>
                  <Flex direction="column" justifyContent="flex-start" h="100%">
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      Order delivered
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="normal"
                      mb="14px"
                    >
                      22 DEC 4:54 PM
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Flex direction="column" mb="32px">
                  <Text
                    color={textColor}
                    fontSize="md"
                    fontWeight="bold"
                    mb="22px"
                  >
                    Payment Details
                  </Text>
                  <Flex
                    p="16px"
                    bg="transparent"
                    borderRadius="15px"
                    width="100%"
                    border="1px solid"
                    borderColor={borderColor}
                    align="center"
                  >
                    <IconBox me="10px" w="25px" h="22px">
                      <MastercardIcon w="100%" h="100%" />
                    </IconBox>
                    <Text color="gray.400" fontSize="sm" fontWeight="normal">
                      7812 2139 0823 XXXX
                    </Text>
                    <Spacer />
                    <Button
                      p="0px"
                      bg="transparent"
                      w="16px"
                      h="16px"
                      variant="no-hover"
                    >
                      <Icon as={FaPencilAlt} />
                    </Button>
                  </Flex>
                </Flex>
                <Flex direction="column">
                  <Text
                    color={textColor}
                    fontSize="md"
                    fontWeight="bold"
                    mb="22px"
                  >
                    Billing Information
                  </Text>
                  <Box p="24px" bg={bgColor} borderRadius="12px">
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text
                          color={nameColor}
                          fontSize="md"
                          fontWeight="bold"
                          mb="10px"
                        >
                          Oliver Liam
                        </Text>
                        <Text
                          color="gray.400"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          Company Name:{" "}
                          <Text as="span" color="gray.500" fontWeight="bold">
                            Viking Burrito
                          </Text>
                        </Text>
                        <Text
                          color="gray.400"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          Email Address:{" "}
                          <Text as="span" color="gray.500" fontWeight="bold">
                            oliver@burrito.com
                          </Text>
                        </Text>
                        <Text
                          color="gray.400"
                          fontSize="sm"
                          fontWeight="normal"
                        >
                          VAT Number:{" "}
                          <Text as="span" color="gray.500" fontWeight="bold">
                            FRB1235476
                          </Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
              <Flex direction="column" gridColumn={{ md: "1 / 3", lg: "auto" }}>
                <Text
                  color={textColor}
                  fontSize="md"
                  fontWeight="bold"
                  mb="22px"
                >
                  Order Summary
                </Text>
                <Stack direction="column" spacing="12px">
                  <Flex align="center" justify="space-between">
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                      Product Price:
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      $90
                    </Text>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                      Delivery:
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      $15
                    </Text>
                  </Flex>
                  <Flex align="center" justify="space-between">
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                      Taxes:
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="bold">
                      $1.95
                    </Text>
                  </Flex>
                </Stack>
                <Flex align="center" justify="space-between" mt="24px">
                  <Text fontSize="md" color="gray.400" fontWeight="normal">
                    Total:
                  </Text>
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    $105.95
                  </Text>
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default OrderDetails;
