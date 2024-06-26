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
import { Badge, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";

const FullBody = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card>
      <CardHeader mb="24px">
        <Flex justify="space-between" w="100%" align="center">
          <Text color={textColor} fontWeight="bold" fontSize="lg">
            Full Body
          </Text>
          <Badge
            colorScheme="red"
            w="85px"
            py="6px"
            borderRadius="12px"
            textAlign="center"
          >
            MODERATE
          </Badge>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text color="gray.400" fontWeight="normal" fontSize="sm">
          What matters is the people who are sparked by it. And the people who
          are liked.
        </Text>
      </CardBody>
    </Card>
  );
};

export default FullBody;
