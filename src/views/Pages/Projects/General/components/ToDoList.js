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
  Checkbox,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { HSeparator } from "components/Separator/Separator";
import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

const ToDoList = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p={{ sm: "16px", md: "22px" }} maxW={{ sm: "330px", md: "100%" }}>
      <CardHeader>
        <Flex justify="space-between" w="100%">
          <Text color={textColor} fontSize="lg" fontWeight="bold">
            To do List
          </Text>
          <Text color="gray.400" fontSize="md" fontWeight="normal">
            23 - 30 March 2020
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex
          direction="column"
          w="100%"
          overflowX={{ sm: "scroll", md: "hidden" }}
        >
          <HSeparator my="14px" />
          <Flex>
            <Flex
              bgColor="teal.300"
              borderRadius="12px"
              minWidth="3px"
              h="100%"
            />
            <Flex direction="column" p="12px 22px" w="100%" w="100%">
              <Flex justify="space-between" mb="18px">
                <Flex align="center">
                  <Checkbox
                    me="16px"
                    colorScheme="teal"
                    size="lg"
                    defaultIsChecked
                  />
                  <Text color={textColor} fontSize="md" fontWeight="bold">
                    Check status
                  </Text>
                </Flex>
                <Icon
                  as={IoEllipsisHorizontalSharp}
                  color="gray.400"
                  w="20px"
                  h="20px"
                  cursor="pointer"
                />
              </Flex>
              <Stack
                direction="row"
                spacing={{
                  sm: "20px",
                  md: "100px",
                  lg: "80px",
                  xl: "180px",
                }}
                ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}
              >
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Date
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    22 July 2021
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Project
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    2414_VR4sf3#
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Company
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    Creative Tim
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <HSeparator my="14px" />
          <Flex>
            <Flex
              bgColor="orange.300"
              borderRadius="12px"
              minWidth="3px"
              h="100%"
            />
            <Flex direction="column" p="12px 22px" w="100%">
              <Flex justify="space-between" mb="18px">
                <Flex align="center">
                  <Checkbox me="16px" colorScheme="teal" size="lg" />
                  <Text color={textColor} fontSize="md" fontWeight="bold">
                    Management discussion
                  </Text>
                </Flex>
                <Icon
                  as={IoEllipsisHorizontalSharp}
                  color="gray.400"
                  w="20px"
                  h="20px"
                  cursor="pointer"
                />
              </Flex>
              <Stack
                direction="row"
                spacing={{
                  sm: "20px",
                  md: "100px",
                  lg: "80px",
                  xl: "180px",
                }}
                ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}
              >
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Date
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    22 July 2021
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Project
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    4411_8sIsdd23
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Company
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    Apple
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <HSeparator my="14px" />
          <Flex>
            <Flex
              bgColor="pink.300"
              borderRadius="12px"
              minWidth="3px"
              h="100%"
            />
            <Flex direction="column" p="12px 22px" w="100%">
              <Flex justify="space-between" mb="18px">
                <Flex align="center">
                  <Checkbox me="16px" colorScheme="teal" size="lg" />
                  <Text color={textColor} fontSize="md" fontWeight="bold">
                    New channel distribution
                  </Text>
                </Flex>
                <Icon
                  as={IoEllipsisHorizontalSharp}
                  color="gray.400"
                  w="20px"
                  h="20px"
                  cursor="pointer"
                />
              </Flex>
              <Stack
                direction="row"
                spacing={{
                  sm: "20px",
                  md: "100px",
                  lg: "80px",
                  xl: "180px",
                }}
                ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}
              >
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Date
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    22 July 2021
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Project
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    827d_kdl33D1s
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Company
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    Microsoft
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          <HSeparator my="14px" />
          <Flex>
            <Flex
              bgColor="purple.500"
              borderRadius="12px"
              minWidth="3px"
              h="100%"
            />{" "}
            <Flex direction="column" p="12px 22px" w="100%">
              <Flex justify="space-between" mb="18px">
                <Flex align="center">
                  <Checkbox
                    me="16px"
                    colorScheme="teal"
                    size="lg"
                    defaultIsChecked
                  />
                  <Text color={textColor} fontSize="md" fontWeight="bold">
                    IOS App development
                  </Text>
                </Flex>
                <Icon
                  as={IoEllipsisHorizontalSharp}
                  color="gray.400"
                  w="20px"
                  h="20px"
                  cursor="pointer"
                />
              </Flex>
              <Stack
                direction="row"
                spacing={{
                  sm: "20px",
                  md: "100px",
                  lg: "80px",
                  xl: "180px",
                }}
                ms={{ sm: "0px", md: "36px", lg: "0px", xl: "36px" }}
              >
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Date
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    22 July 2021
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Project
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    88s1_349DA2sa
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text color="gray.400" fontWeight="normal" fontSize="md">
                    Company
                  </Text>
                  <Text color="gray.500" fontWeight="bold" fontSize="md">
                    Facebook
                  </Text>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ToDoList;
