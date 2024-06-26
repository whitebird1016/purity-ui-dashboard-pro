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
  Button,
  Flex,
  Icon,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { DocumentIcon, RocketIcon, SettingsIcon } from "components/Icons/Icons";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";

const Categories = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const textColor = useColorModeValue("gray.700", "white");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Card>
      <CardHeader>
        <Text fontSize="lg" text={textColor} fontWeight="bold">
          Categories
        </Text>
      </CardHeader>
      <CardBody w="100%" pt="28px">
        <Stack direction="column" spacing="24px" w="100%">
          <Flex align="center" w="100%">
            <Flex align="center">
              <IconBox as="box" h={"40px"} w={"40px"} bg={bgButton} me="18px">
                <RocketIcon h={"20px"} w={"20px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={textColor}>
                  Devices
                </Text>
                <Text color="gray.400" fontSize="xs">
                  250 in stock,{" "}
                  <Text as="span" fontWeight="bold">
                    346+ sold
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <Button variant="transparent-with-icon" px="0px">
              <Icon
                as={RiArrowDropRightLine}
                color="gray.400"
                w="30px"
                h="30px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ transform: "translateX(25%)" }}
              />
            </Button>
          </Flex>
          <Flex align="center" w="100%">
            <Flex align="center">
              <IconBox as="box" h={"40px"} w={"40px"} bg={bgButton} me="18px">
                <SettingsIcon h={"20px"} w={"20px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={textColor}>
                  Tickets
                </Text>
                <Text color="gray.400" fontSize="xs">
                  123 closed,{" "}
                  <Text as="span" fontWeight="bold">
                    15 open
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <Button variant="transparent-with-icon" px="0px">
              <Icon
                as={RiArrowDropRightLine}
                color="gray.400"
                w="30px"
                h="30px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ transform: "translateX(25%)" }}
              />
            </Button>
          </Flex>
          <Flex align="center" w="100%">
            <Flex align="center">
              <IconBox as="box" h={"40px"} w={"40px"} bg={bgButton} me="18px">
                <DocumentIcon h={"20px"} w={"20px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={textColor}>
                  Error logs
                </Text>
                <Text color="gray.400" fontSize="xs">
                  1 is active,{" "}
                  <Text as="span" fontWeight="bold">
                    40 closed
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <Button variant="transparent-with-icon" px="0px">
              <Icon
                as={RiArrowDropRightLine}
                color="gray.400"
                w="30px"
                h="30px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ transform: "translateX(25%)" }}
              />
            </Button>
          </Flex>
          <Flex align="center" w="100%">
            <Flex align="center">
              <IconBox as="box" h={"40px"} w={"40px"} bg={bgButton} me="18px">
                <Icon as={FaUser} h={"20px"} w={"20px"} color={iconBoxInside} />
              </IconBox>
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="bold" color={textColor}>
                  Happy Users
                </Text>
                <Text color="gray.400" fontSize="xs">
                  <Text as="span" fontWeight="bold">
                    +430
                  </Text>
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <Button variant="transparent-with-icon" px="0px">
              <Icon
                as={RiArrowDropRightLine}
                color="gray.400"
                w="30px"
                h="30px"
                cursor="pointer"
                transition="all .25s ease"
                _hover={{ transform: "translateX(25%)" }}
              />
            </Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Categories;
