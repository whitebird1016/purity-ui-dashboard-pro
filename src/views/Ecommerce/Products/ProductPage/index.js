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
  FormControl,
  FormLabel,
  Icon,
  Image,
  ListItem,
  Progress,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import productPage1 from "assets/img/product-page-1.png";
import productPage2 from "assets/img/product-page-2.png";
import productPage3 from "assets/img/product-page-3.png";
import productPage4 from "assets/img/product-page-4.png";
import productPage5 from "assets/img/product-page-5.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function ProductPage() {
  const [currentImage, setCurrentImage] = useState(productPage1);
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card mt={{ sm: "125px", md: "75px" }}>
      <CardHeader mb="42px">
        <Text color={textColor} fontSize="lg" fontWeight="bold">
          Product Details
        </Text>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Flex
            direction={{ sm: "column", lg: "row" }}
            mb={{ sm: "42px", lg: "84px" }}
          >
            <Flex
              direction="column"
              me={{ lg: "70px", xl: "120px" }}
              mb={{ sm: "24px", lg: "0px" }}
            >
              <Box
                w={{ sm: "275px", md: "670px", lg: "450px", xl: "600px" }}
                h={{ sm: "200px", md: "500px", lg: "330px", xl: "500px" }}
                mb="26px"
                mx={{ sm: "auto", lg: "0px" }}
              >
                <Image
                  src={currentImage}
                  w="100%"
                  h="100%"
                  borderRadius="15px"
                />
              </Box>
              <Stack
                direction="row"
                spacing={{ sm: "20px", md: "35px", lg: "20px" }}
                mx="auto"
                mb={{ sm: "24px", lg: "0px" }}
              >
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}
                >
                  <Image
                    src={productPage1}
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    cursor="pointer"
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}
                >
                  <Image
                    src={productPage2}
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    cursor="pointer"
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}
                >
                  <Image
                    src={productPage3}
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    cursor="pointer"
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}
                >
                  <Image
                    src={productPage4}
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    cursor="pointer"
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
                <Box
                  w={{ sm: "36px", md: "90px", lg: "60px" }}
                  h={{ sm: "36px", md: "90px", lg: "60px" }}
                >
                  <Image
                    src={productPage5}
                    w="100%"
                    h="100%"
                    borderRadius="15px"
                    cursor="pointer"
                    onClick={(e) => setCurrentImage(e.target.src)}
                  />
                </Box>
              </Stack>
            </Flex>
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize="3xl"
                fontWeight="bold"
                mb="12px"
              >
                Modern Luxury Sofa
              </Text>
              <Stack
                direction="row"
                spacing="12px"
                color="orange.300"
                mb="30px"
              >
                <Icon as={BsStarFill} w="26px" h="26px" />
                <Icon as={BsStarFill} w="26px" h="26px" />
                <Icon as={BsStarFill} w="26px" h="26px" />
                <Icon as={BsStarFill} w="26px" h="26px" />
                <Icon as={BsStarHalf} w="26px" h="26px" />
              </Stack>
              <Text color="gray.400" fontWeight="normal" fontSize="sm">
                Price
              </Text>
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize="3xl"
                mb="12px"
              >
                $2,599.00
              </Text>
              <Badge
                colorScheme="green"
                w="95px"
                h="28px"
                mb="40px"
                borderRadius="15px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                IN STOCK
              </Badge>
              <Text color="gray.400" fonSize="sm" fontWeight="normal" mb="8px">
                Description
              </Text>
              <UnorderedList spacing="8px" mb="40px">
                <ListItem fontSize="md" color={textColor} fontWeight="normal">
                  The most beautiful curves of this swivel stool adds an elegant
                  touch to any environment
                </ListItem>
                <ListItem fontSize="md" color={textColor} fontWeight="normal">
                  Memory swivel seat returns to original seat position
                </ListItem>
                <ListItem fontSize="md" color={textColor} fontWeight="normal">
                  Comfortable integrated layered chair seat cushion design
                </ListItem>
                <ListItem fontSize="md" color={textColor} fontWeight="normal">
                  Fully assembled! No assembly required
                </ListItem>
              </UnorderedList>
              <Stack
                direction={{ sm: "column", lg: "row" }}
                spacing="24px"
                mb="40px"
              >
                <FormControl>
                  <FormLabel fontWeight="bold" fontSize="xs" color={textColor}>
                    Frame Material
                  </FormLabel>
                  <Select
                    placeholder="Wood"
                    fontSize="xs"
                    cursor="pointer"
                    color="gray.400"
                  >
                    <option>Aluminium</option>
                    <option>Carbon</option>
                    <option>Steel</option>
                    <option>Brasil</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight="bold" fontSize="xs" color={textColor}>
                    Color
                  </FormLabel>
                  <Select
                    placeholder="White"
                    fontSize="xs"
                    cursor="pointer"
                    color="gray.400"
                  >
                    <option>Blue</option>
                    <option>Gray</option>
                    <option>Pink</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Black</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight="bold" fontSize="xs" color={textColor}>
                    Quantity
                  </FormLabel>
                  <Select
                    placeholder="1"
                    fontSize="xs"
                    cursor="pointer"
                    color="gray.400"
                    maxW={{ lg: "75px" }}
                  >
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </Select>
                </FormControl>
              </Stack>
              <Button
                variant="no-hover"
                bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                w={{ sm: "240px", md: "100%", lg: "240px" }}
                h="50px"
                mx={{ sm: "auto", md: "0px" }}
                color="#fff"
                fontSize="xs"
                fontWeight="bold"
              >
                ADD TO CART
              </Button>
            </Flex>
          </Flex>
          <Box w="100%" overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Table variant="simple" w="100%">
              <Thead>
                <Tr>
                  <Th color="gray.400" fontSize="xs">
                    Name
                  </Th>
                  <Th color="gray.400" fontSize="xs">
                    Price
                  </Th>
                  <Th color="gray.400" fontSize="xs">
                    Review
                  </Th>
                  <Th color="gray.400" fontSize="xs">
                    Availability
                  </Th>
                  <Th color="gray.400" fontSize="xs">
                    id
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td minW="300px">
                    <Flex align="center">
                      <Box w="40px" h="40px" me="14px">
                        <Image
                          src={productPage2}
                          w="100%"
                          h="100%"
                          borderRadius="12px"
                        />
                      </Box>
                      <Text color={textColor} fontSize="sm" fontWeight="bold">
                        Christopher Knight Home
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="bold">
                      $89.53
                    </Text>
                  </Td>
                  <Td>
                    <Stack direction="row" color="gray.700" spacing="2px">
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarHalf} w="10px" h="10px" />
                    </Stack>
                  </Td>
                  <Td>
                    <Progress
                      size="xs"
                      colorScheme="teal"
                      value={70}
                      borderRadius="12px"
                    />
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Box w="40px" h="40px" me="14px">
                        <Image
                          src={productPage3}
                          w="100%"
                          h="100%"
                          borderRadius="12px"
                        />
                      </Box>
                      <Text color={textColor} fontSize="sm" fontWeight="bold">
                        Bar Height Swivel Barstool
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="bold">
                      $89.53
                    </Text>
                  </Td>
                  <Td>
                    <Stack direction="row" color="gray.700" spacing="2px">
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                    </Stack>
                  </Td>
                  <Td>
                    <Progress
                      size="xs"
                      colorScheme="teal"
                      value={90}
                      borderRadius="12px"
                    />
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Box w="40px" h="40px" me="14px">
                        <Image
                          src={productPage4}
                          w="100%"
                          h="100%"
                          borderRadius="12px"
                        />
                      </Box>
                      <Text color={textColor} fontSize="sm" fontWeight="bold">
                        Signature Design by Ashley
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="bold">
                      $89.53
                    </Text>
                  </Td>
                  <Td>
                    <Stack direction="row" color="gray.700" spacing="2px">
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                    </Stack>
                  </Td>
                  <Td>
                    <Progress
                      size="xs"
                      colorScheme="red"
                      value={40}
                      borderRadius="12px"
                    />
                  </Td>
                  <Td>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">
                      230019
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td border="none">
                    <Flex align="center">
                      <Box w="40px" h="40px" me="14px">
                        <Image
                          src={productPage5}
                          w="100%"
                          h="100%"
                          borderRadius="12px"
                        />
                      </Box>
                      <Text color={textColor} fontSize="sm" fontWeight="bold">
                        Modern Square
                      </Text>
                    </Flex>
                  </Td>
                  <Td border="none">
                    <Text color="gray.500" fontSize="sm" fontWeight="bold">
                      $89.53
                    </Text>
                  </Td>
                  <Td border="none">
                    <Stack direction="row" color="gray.700" spacing="2px">
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarFill} w="10px" h="10px" />
                      <Icon as={BsStarHalf} w="10px" h="10px" />
                    </Stack>
                  </Td>
                  <Td border="none">
                    <Progress
                      size="xs"
                      colorScheme="red"
                      value={15}
                      borderRadius="12px"
                    />
                  </Td>
                  <Td border="none">
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">
                      230019
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ProductPage;
