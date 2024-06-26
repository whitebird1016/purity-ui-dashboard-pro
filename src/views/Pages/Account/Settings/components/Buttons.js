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
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { FaCube, FaUser } from "react-icons/fa";
import { IoIosRocket, IoMdNotifications } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";
import { Link } from "react-scroll";

const Buttons = () => {
  const bgHoverLinks = useColorModeValue("gray.100", "gray.600");

  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      w={{ sm: "100%", lg: "262px", xl: "21%", "2xl": "23.4%" }}
      mt={{ sm: "30px", lg: "0px" }}
      position={{ lg: "fixed" }}
      top={{ lg: "180px" }}
    >
      <CardBody>
        <Stack direction="column" spacing="8px" w="100%" color="gray.500">
          <Link to="profile" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={IoIosRocket}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Profile
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="info" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={IoDocumentText}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Basic Info
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="change-password" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={FaCube}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Change Password
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="2fa" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={BsToggleOn}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  2FA
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="accounts" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={FaUser}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Accounts
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="notifications" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={IoMdNotifications}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Notifications
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="sessions" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={MdPowerSettingsNew}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Sessions
                </Text>
              </Flex>
            </Button>
          </Link>
          <Link to="delete-account" spy={true} smooth={true} duration={500}>
            <Button
              variant="transparent-with-icon"
              borderRadius="15px"
              _hover={{ bg: bgHoverLinks }}
              w="100%"
            >
              <Flex align="center" justifySelf="flex-start" w="100%">
                <Icon
                  as={AiFillDelete}
                  me="12px"
                  w="18px"
                  h="18px"
                  color={textColor}
                />
                <Text color="gray.500" fontWeight="normal" fontSize="xs">
                  Delete Account
                </Text>
              </Flex>
            </Button>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Buttons;
