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
import IconBox from "components/Icons/IconBox";
import React, { useState } from "react";
import { FaShare } from "react-icons/fa";

const City = () => {
  const textColor = useColorModeValue("gray.700", "white");

  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Card>
      <CardBody>
        <Flex direction="column">
          <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal} mb="24px">
            <Icon as={FaShare} h={"24px"} w={"24px"} color={iconBoxInside} />
          </IconBox>
          <Flex direction="column">
            <Text color={textColor} fontSize="2xl" fontWeight="bold">
              754
              <Text as="span" color="gray.400" fontSize="sm" ms="2px">
                m
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              New York City
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default City;
