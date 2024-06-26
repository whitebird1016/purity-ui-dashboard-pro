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
  Button,
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
import { BsArrowRight } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { Element } from "react-scroll";

const Sessions = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      w={{ sm: "100%", lg: "70%" }}
      alignSelf="flex-end"
      justifySelf="flex-end"
    >
      <Element id="sessions" name="sessions">
        <CardHeader mb="40px">
          <Flex direction="column">
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight="semibold"
              mb="4px"
            >
              Sessions
            </Text>
            <Text color="gray.400" fontWeight="normal" fontSize="sm">
              This is a list of devices that have logged into your account.
              Remove those that you do not recognize.
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing="18px" w="100%">
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
            >
              <Flex align="center">
                <Icon
                  as={RiComputerLine}
                  me="30px"
                  w="28px"
                  h="28px"
                  color="gray.400"
                />
                <Flex direction="column" mb={{ sm: "8px", lg: null }}>
                  <Text color={textColor} fontWeight="normal" fontSize="sm">
                    Bucharest 68.133.163.201
                  </Text>
                  <Text color="gray.400" fontSize="xs" fontWeight="normal">
                    Your current session
                  </Text>
                </Flex>
              </Flex>
              <Stack
                direction="row"
                spacing="24px"
                align="center"
                alignSelf={{ sm: "flex-end", lg: null }}
                minW={{ lg: "280px" }}
              >
                <Badge colorScheme="green" borderRadius="12px" p="12px">
                  ACTIVE
                </Badge>
                <Text color="gray.400" fontSize="md" fontWeight="normal">
                  EU
                </Text>
                <Button variant="transparent-with-icon" color="teal.300">
                  <Flex align="center" color="teal.300" w="100%" fontSize="sm">
                    <Text
                      me="6px"
                      transition="all .3s ease"
                      _hover={{ me: "14px" }}
                      fontSize="sm"
                    >
                      See more
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      transition="all .3s ease"
                      _hover={{ transform: "translateX(50%)" }}
                    />
                  </Flex>
                </Button>
              </Stack>
            </Flex>
            <HSeparator />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
            >
              <Flex align="center">
                <Icon
                  as={RiComputerLine}
                  me="30px"
                  w="28px"
                  h="28px"
                  color="gray.400"
                />
                <Flex direction="column">
                  <Text color={textColor} fontWeight="normal" fontSize="sm">
                    Chrome on macOS
                  </Text>
                </Flex>
              </Flex>
              <Stack
                direction="row"
                spacing="24px"
                align="center"
                alignSelf={{ sm: "flex-end", lg: null }}
                minW={{ lg: "185px" }}
              >
                <Text color="gray.400" fontSize="md" fontWeight="normal">
                  US
                </Text>
                <Button variant="transparent-with-icon" color="teal.300">
                  <Flex align="center" color="teal.300" w="100%" fontSize="sm">
                    <Text
                      me="6px"
                      transition="all .3s ease"
                      _hover={{ me: "14px" }}
                      fontSize="sm"
                    >
                      See more
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      transition="all .3s ease"
                      _hover={{ transform: "translateX(50%)" }}
                    />
                  </Flex>
                </Button>
              </Stack>
            </Flex>
            <HSeparator />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              w="100%"
            >
              <Flex align="center">
                <Icon
                  as={GiSmartphone}
                  me="30px"
                  w="28px"
                  h="28px"
                  color="gray.400"
                />
                <Flex direction="column">
                  <Text color={textColor} fontWeight="normal" fontSize="sm">
                    Safari on iPhone
                  </Text>
                </Flex>
              </Flex>
              <Stack
                direction="row"
                spacing="24px"
                align="center"
                alignSelf={{ sm: "flex-end", lg: null }}
                justifySelf="flex-end"
                minW={{ lg: "185px" }}
              >
                <Text color="gray.400" fontSize="md" fontWeight="normal">
                  US
                </Text>
                <Button variant="transparent-with-icon" color="teal.300">
                  <Flex align="center" color="teal.300" w="100%" fontSize="sm">
                    <Text
                      me="6px"
                      transition="all .3s ease"
                      _hover={{ me: "14px" }}
                      fontSize="sm"
                    >
                      See more
                    </Text>
                    <Icon
                      as={BsArrowRight}
                      w="20px"
                      h="20px"
                      transition="all .3s ease"
                      _hover={{ transform: "translateX(50%)" }}
                    />
                  </Flex>
                </Button>
              </Stack>
            </Flex>
          </Stack>
        </CardBody>
      </Element>
    </Card>
  );
};

export default Sessions;
