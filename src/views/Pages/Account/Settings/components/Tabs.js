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
import { Box, Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

const Tabs = () => {
  const [activeButtons, setActiveButtons] = useState({
    messages: true,
    social: false,
    notifications: false,
    backup: false,
  });
  const bgActiveButton = useColorModeValue("#fff", "gray.700");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Box w="100%">
      <Stack
        direction={{ sm: "column", lg: "row" }}
        spacing={{ sm: "8px", lg: "38px" }}
        w={{ sm: "100%", lg: null }}
      >
        <Button
          borderRadius="12px"
          boxShadow={
            activeButtons.messages
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none"
          }
          bg={activeButtons.messages ? bgActiveButton : "transparent"}
          transition="all .5s ease"
          w={{ sm: "100%", lg: "135px" }}
          h="35px"
          _hover="none"
          _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
          _active={{
            boxShadow: activeButtons.messages
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
          onClick={() =>
            setActiveButtons({
              messages: true,
              social: false,
              notifications: false,
              backup: false,
            })
          }
        >
          <Text color={textColor} fontSize="xs" fontWeight="bold" fontSize="xs">
            MESSAGES
          </Text>
        </Button>
        <Button
          borderRadius="12px"
          boxShadow={
            activeButtons.social ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : "none"
          }
          bg={activeButtons.social ? bgActiveButton : "transparent"}
          transition="all .5s ease"
          w={{ sm: "100%", lg: "135px" }}
          h="35px"
          _hover="none"
          _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
          _active={{
            boxShadow: activeButtons.social
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
          onClick={() =>
            setActiveButtons({
              messages: false,
              social: true,
              notifications: false,
              backup: false,
            })
          }
        >
          <Text color={textColor} fontSize="xs" fontWeight="bold" fontSize="xs">
            SOCIAL
          </Text>
        </Button>
        <Button
          borderRadius="12px"
          boxShadow={
            activeButtons.notifications
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none"
          }
          bg={activeButtons.notifications ? bgActiveButton : "transparent"}
          transition="all .5s ease"
          w={{ sm: "100%", lg: "135px" }}
          h="35px"
          _hover="none"
          _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
          _active={{
            boxShadow: activeButtons.notifications
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
          onClick={() =>
            setActiveButtons({
              messages: false,
              social: false,
              notifications: true,
              backup: false,
            })
          }
        >
          <Text color={textColor} fontSize="xs" fontWeight="bold" fontSize="xs">
            NOTIFICATIONS
          </Text>
        </Button>
        <Button
          borderRadius="12px"
          boxShadow={
            activeButtons.backup ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : "none"
          }
          bg={activeButtons.backup ? bgActiveButton : "transparent"}
          transition="all .5s ease"
          w={{ sm: "100%", lg: "135px" }}
          h="35px"
          _hover="none"
          _focus={{ boxShadow: "0px 2px 5.5px rgba(0, 0, 0, 0.06)" }}
          _active={{
            boxShadow: activeButtons.backup
              ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
          onClick={() =>
            setActiveButtons({
              messages: false,
              social: false,
              notifications: false,
              backup: true,
            })
          }
        >
          <Text color={textColor} fontSize="xs" fontWeight="bold" fontSize="xs">
            BACKUP
          </Text>
        </Button>
      </Stack>
    </Box>
  );
};

export default Tabs;
