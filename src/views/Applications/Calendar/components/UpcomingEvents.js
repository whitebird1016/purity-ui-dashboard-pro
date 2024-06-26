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
import { Flex, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { ClockIcon, DocumentIcon, WalletIcon } from "components/Icons/Icons";
import React from "react";
import { FaPalette, FaShip } from "react-icons/fa";

const UpcomingEvents = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");

  return (
    <Card>
      <CardHeader>
        <Text color={textColor} fontSize="lg" fontWeight="bold" mb="28px">
          Upcoming events
        </Text>
      </CardHeader>
      <CardBody>
        <Stack direction="column" spacing="20px">
          <Flex align="center">
            <IconBox as="box" h={"50px"} w={"50px"} bg="gray.100" me="16px">
              <Icon as={WalletIcon} h={"22px"} w={"22px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Cyber Week
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                27 March 2020, at 12:30 PM
              </Text>
            </Flex>
          </Flex>
          <Flex align="center">
            <IconBox as="box" h={"50px"} w={"50px"} bg="gray.100" me="16px">
              <Icon as={ClockIcon} h={"22px"} w={"22px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Meeting with Marry
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                22 March 2020, at 10:00 PM
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" mb="22px">
            <IconBox as="box" h={"50px"} w={"50px"} bg="gray.100" me="16px">
              <Icon as={DocumentIcon} h={"22px"} w={"22px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Book Deposit Hall
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                25 March 2021, at 9:30 AM
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" mb="22px">
            <IconBox as="box" h={"50px"} w={"50px"} bg="gray.100" me="16px">
              <Icon as={FaShip} h={"22px"} w={"22px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Shipment Deal UK
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                25 March 2021, at 2:00 PM
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" mb="22px">
            <IconBox as="box" h={"50px"} w={"50px"} bg="gray.100" me="16px">
              <Icon as={FaPalette} h={"22px"} w={"22px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Verify Dashboard Color Palette
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                26 March 2021, at 9:00 AM
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UpcomingEvents;
