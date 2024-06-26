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
  Input,
  Stack,
  Switch,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import {
  AtlassianLogo,
  InvisionLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Element } from "react-scroll";

const Accounts = () => {
  const bgVerificationCard = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      w={{ sm: "100%", lg: "70%" }}
      alignSelf="flex-end"
      justifySelf="flex-end"
    >
      <Element to="accounts" name="accounts">
        <CardHeader mb="40px">
          <Flex direction="column">
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight="semibold"
              mb="4px"
            >
              Accounts
            </Text>
            <Text color="gray.400" fontWeight="normal" fontSize="sm">
              Here you can setup and manage your integration settings
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Stack direction="column" spacing="22px" w="100%">
            <Flex direction="column">
              <Flex justify="space-between" mb="16px">
                <Flex align="center">
                  <Icon as={SlackLogo} w="34px" h="34px" me="14px" />
                  <Flex direction="column">
                    <Text fontSize="md" color={textColor} fontWeight="bold">
                      Slack
                    </Text>
                    <Flex align="center">
                      <Text
                        color="gray.400"
                        fontWeight="normal"
                        fontSize="xs"
                        me="6px"
                      >
                        Show Less
                      </Text>
                      <Icon as={IoIosArrowUp} color="gray.400" />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex align="center">
                  <Text
                    color="gray.500"
                    fontWeight="normal"
                    me="17px"
                    fontSize="xs"
                  >
                    Enabled
                  </Text>
                  <Switch colorScheme="teal" defaultIsChecked />
                </Flex>
              </Flex>
              <Stack direction="column" w="100%" spacing="18px" ps="50px">
                <Text color="gray.400" fontWeight="normal" fontSize="sm">
                  You haven't added your Slack yet or you aren't authorized.
                  Please add our Slack Bot to your account by clicking on here.
                  When you've added the bot, send your verification code that
                  you have received.
                </Text>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  justify="space-between"
                  bg={bgVerificationCard}
                  borderRadius="12px"
                  w="100%"
                  align="center"
                  p="10px 12px"
                >
                  <Text
                    color="gray.500"
                    fontWeight="bold"
                    fontSize="sm"
                    mb={{ sm: "8px", lg: null }}
                  >
                    Verification Code
                  </Text>
                  <Tooltip hasArrow label="Copy!" bg="teal.300" placement="top">
                    <Input
                      borderRadius="15px"
                      value="1172913"
                      bg="#fff"
                      maxW="200px"
                      borderRadius="12px"
                      color="gray.400"
                    />
                  </Tooltip>
                </Flex>
                <Flex
                  direction={{ sm: "column", md: "row" }}
                  align="flex-start"
                  justify="space-between"
                  bg={bgVerificationCard}
                  borderRadius="12px"
                  w="100%"
                  align="center"
                  p="10px 12px"
                >
                  <Text color="gray.500" fontWeight="bold" fontSize="sm">
                    Connected Account
                  </Text>
                  <Flex
                    align="center"
                    direction={{ sm: "column", md: "row" }}
                    justify={{ sm: "center", lg: null }}
                  >
                    <Text
                      color="gray.500"
                      fontSize="sm"
                      me="18px"
                      my={{ sm: "6px", lg: null }}
                    >
                      hello@microsoft-ui.com
                    </Text>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      w="100px"
                      h="35px"
                      fontSize="xs"
                    >
                      DELETE
                    </Button>
                  </Flex>
                </Flex>
              </Stack>
            </Flex>
            <HSeparator />
            <Flex justify="space-between">
              <Flex align="center">
                <Icon as={SpotifyLogo} w="34px" h="34px" me="14px" />
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Spotify
                  </Text>
                  <Text color="gray.400" fontWeight="normal" fontSize="xs">
                    Music
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Text
                  color="gray.500"
                  fontWeight="normal"
                  me="17px"
                  fontSize="xs"
                >
                  Enabled
                </Text>
                <Switch colorScheme="teal" defaultIsChecked />
              </Flex>
            </Flex>
            <HSeparator />
            <Flex justify="space-between">
              <Flex align="center">
                <Icon as={AtlassianLogo} w="34px" h="34px" me="14px" />
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Atlassian
                  </Text>
                  <Text color="gray.400" fontWeight="normal" fontSize="xs">
                    Payment Vendor
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Text
                  color="gray.500"
                  fontWeight="normal"
                  me="17px"
                  fontSize="xs"
                >
                  Enabled
                </Text>
                <Switch colorScheme="teal" defaultIsChecked />
              </Flex>
            </Flex>
            <HSeparator />
            <Flex justify="space-between">
              <Flex align="center">
                <Icon as={InvisionLogo} w="34px" h="34px" me="14px" />
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Invision
                  </Text>
                  <Text color="gray.400" fontWeight="normal" fontSize="xs">
                    Design Better
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Switch colorScheme="teal" />
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Element>
    </Card>
  );
};

export default Accounts;
