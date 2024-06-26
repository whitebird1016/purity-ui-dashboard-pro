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
  FormControl,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Element } from "react-scroll";

const ChangePassword = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  return (
    <Card
      w={{ sm: "100%", lg: "70%" }}
      alignSelf="flex-end"
      justifySelf="flex-end"
    >
      <Element id="change-password" name="change-password">
        <CardHeader mb="40px">
          <Text color={textColor} fontSize="lg" fontWeight="semibold">
            Change Password
          </Text>
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing="20px" w="100%">
            <FormControl>
              <FormLabel fontWeight="semibold" fontSize="xs" mb="10px">
                Current Password
              </FormLabel>
              <Input
                borderRadius="15px"
                placeholder="Current Password"
                fontSize="xs"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="semibold" fontSize="xs" mb="10px">
                New Password
              </FormLabel>
              <Input
                borderRadius="15px"
                placeholder="New Password"
                fontSize="xs"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="semibold" fontSize="xs" mb="10px">
                Confirm New Password
              </FormLabel>
              <Input
                borderRadius="15px"
                placeholder="Confirm New Password"
                fontSize="xs"
              />
            </FormControl>
            <Flex direction="column">
              <Text
                color={textColor}
                fontWeight="bold"
                fontSize="lg"
                mb="4px"
                mt="40px"
              >
                Password Requirements
              </Text>
              <Text color="gray.400" fontWeight="normal" fontSize="sm">
                Please follow this guide for a strong password.
              </Text>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              justify="space-between"
              w="100%"
            >
              <Stack
                direction="column"
                spacing="6px"
                mb={{ sm: "12px", lg: "0px" }}
              >
                <Flex align="center">
                  <Icon
                    as={BsCircleFill}
                    w="6px"
                    h="6px"
                    color="gray.500"
                    me="6px"
                  />
                  <Text color="gray.500" fontWeight="normal" fontSize="xs">
                    One special characters
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    as={BsCircleFill}
                    w="6px"
                    h="6px"
                    color="gray.500"
                    me="6px"
                  />
                  <Text color="gray.500" fontWeight="normal" fontSize="xs">
                    Min 6 characters
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    as={BsCircleFill}
                    w="6px"
                    h="6px"
                    color="gray.500"
                    me="6px"
                  />
                  <Text color="gray.500" fontWeight="normal" fontSize="xs">
                    One number (2 are recommended)
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon
                    as={BsCircleFill}
                    w="6px"
                    h="6px"
                    color="gray.500"
                    me="6px"
                  />
                  <Text color="gray.500" fontWeight="normal" fontSize="xs">
                    Change it often
                  </Text>
                </Flex>
              </Stack>
              <Button
                variant="no-hover"
                bg={bgButton}
                w="150px"
                h="35px"
                alignSelf="flex-end"
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  UPDATE PASSWORD
                </Text>
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Element>
    </Card>
  );
};

export default ChangePassword;
