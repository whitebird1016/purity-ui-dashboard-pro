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
  Box,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React, { useState } from "react";
import { RiMastercardFill } from "react-icons/ri";

const PaymentCard = () => {
  return (
    <Card
      backgroundImage={BackgroundCard1}
      backgroundRepeat="no-repeat"
      background="cover"
      bgPosition="10%"
      p="16px"
      h={{ sm: "220px", xl: "100%" }}
      gridColumn={{ md: "1 / 3", lg: "auto" }}
    >
      <CardBody h="100%" w="100%">
        <Flex
          direction="column"
          color="white"
          h="100%"
          p="0px 10px 20px 10px"
          w="100%"
        >
          <Flex justify="space-between" align="center">
            <Text fontSize="md" fontWeight="bold">
              Purity UI
            </Text>
            <Icon as={RiMastercardFill} w="48px" h="auto" color="gray.400" />
          </Flex>
          <Spacer />
          <Flex direction="column">
            <Box>
              <Text fontSize="xl" letterSpacing="2px" fontWeight="bold">
                7812 2139 0823 XXXX
              </Text>
            </Box>
            <Flex mt="14px">
              <Flex direction="column" me="34px">
                <Text fontSize="xs">VALID THRU</Text>
                <Text fontSize="xs" fontWeight="bold">
                  05/24
                </Text>
              </Flex>
              <Flex direction="column">
                <Text fontSize="xs">CVV</Text>
                <Text fontSize="xs" fontWeight="bold">
                  09X
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default PaymentCard;
