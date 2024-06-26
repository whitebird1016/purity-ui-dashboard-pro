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
import { Element } from "react-scroll";

const TwoFactorAuth = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      w={{ sm: "100%", lg: "70%" }}
      alignSelf="flex-end"
      justifySelf="flex-end"
    >
      <Element id="2fa" name="2fa">
        <CardHeader mb="32px">
          <Flex justify="space-between" w="100%">
            <Text fontSize="lg" fontWeight="bold" color={textColor}>
              Two-Factor Authentication
            </Text>
            <Badge
              colorScheme="green"
              borderRadius="12px"
              p="12px"
              alignSelf={{ sm: "flex-start", lg: null }}
            >
              ENABLED
            </Badge>
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing="22px" w="100%">
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              align="center"
            >
              <Text
                color="gray.400"
                fontWeight="bold"
                fontSize="sm"
                alignSelf={{ sm: "center", lg: null }}
                mb={{ sm: "12px", lg: null }}
              >
                Security keys
              </Text>
              <Flex align="center">
                <Text
                  color="gray.500"
                  fontWeight="normal"
                  fontSize="sm"
                  me="28px"
                >
                  No Security keys
                </Text>
                <Button
                  variant="outline"
                  colorScheme="dark"
                  w="90px"
                  h="35px"
                  fontSize={{ sm: "xs", lg: "sm" }}
                >
                  ADD
                </Button>
              </Flex>
            </Flex>
            <HSeparator />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              align="center"
            >
              <Text
                color="gray.400"
                fontWeight="bold"
                fontSize="sm"
                alignSelf={{ sm: "center", lg: null }}
                mb={{ sm: "12px", lg: null }}
              >
                SMS Number
              </Text>
              <Flex align="center">
                <Text
                  color="gray.500"
                  fontWeight="normal"
                  fontSize="sm"
                  me="28px"
                >
                  +40 941 264 232
                </Text>
                <Button
                  variant="outline"
                  colorScheme="dark"
                  w="90px"
                  h="35px"
                  fontSize={{ sm: "xs", lg: "sm" }}
                >
                  EDIT
                </Button>
              </Flex>
            </Flex>
            <HSeparator />
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
              align="center"
            >
              <Text
                color="gray.400"
                fontWeight="bold"
                fontSize="sm"
                alignSelf={{ sm: "center", lg: null }}
                mb={{ sm: "12px", lg: null }}
              >
                Authenticator App
              </Text>
              <Flex align="center">
                <Text
                  color="gray.500"
                  fontWeight="normal"
                  fontSize="sm"
                  me="28px"
                >
                  Not Configured
                </Text>
                <Button
                  variant="outline"
                  colorScheme="dark"
                  w="90px"
                  h="35px"
                  fontSize={{ sm: "xs", lg: "sm" }}
                >
                  SET UP
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Element>
    </Card>
  );
};

export default TwoFactorAuth;
