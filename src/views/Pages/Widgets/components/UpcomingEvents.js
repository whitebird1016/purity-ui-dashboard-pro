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
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import IconBox from "components/Icons/IconBox";
import { ClockIcon, WalletIcon } from "components/Icons/Icons";
import React, { useState } from "react";

const UpcomingEvents = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const iconTeal = useColorModeValue("teal.300", "teal.300");
  return (
    <Card>
      <CardHeader mb="16px">
        <Flex direction="column">
          <Text color={textColor} fontSize="lg" fontWeight="bold" mb="4px">
            Upcoming events
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="bold">
            Joined
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column">
          <Flex align="center" mb="22px">
            <IconBox as="box" h={"45px"} w={"45px"} bg="gray.100" me="16px">
              <Icon as={WalletIcon} h={"24px"} w={"24px"} color={iconTeal} />
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
            <IconBox as="box" h={"45px"} w={"45px"} bg="gray.100" me="16px">
              <Icon as={ClockIcon} h={"24px"} w={"24px"} color={iconTeal} />
            </IconBox>
            <Flex direction="column">
              <Text color={textColor} fontSize="sm" fontWeight="bold">
                Meeting with Marry
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="normal">
                24 March 2020, at 10:00 PM
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default UpcomingEvents;
