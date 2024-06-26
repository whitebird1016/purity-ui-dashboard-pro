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
import { Badge, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import basic from "assets/img/basic-auth.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React from "react";

const Earnings = () => {
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  return (
    <Card bgImage={basic} bgPosition="50%">
      <CardBody p="24px 52px">
        <Flex direction="column" align="center" justify="center" w="100%">
          <Text color="#fff" fontSize="2xl" fontWeight="normal">
            Earnings
          </Text>
          <Text color="#fff" fontSize="5xl" fontWeight="bold" mb="12px">
            $15,800
          </Text>
          <Badge
            bg={bgButton}
            mb="26px"
            color="#fff"
            w="150px"
            borderRadius="8px"
            display="flex"
            justify="center"
            align="center"
          >
            <Text
              textAlign="center"
              py="6px"
              fontSize="11px"
              w="100%"
              h="100%"
              alignSelf="center"
            >
              +15% SINCE LAST WEEK
            </Text>
          </Badge>
          <Button
            variant="no-hover"
            py="16px"
            bg="linear-gradient(112.83deg, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0.12) 110.84%)"
            w="155px"
            h="25px"
            color="#fff"
            fontSize="xs"
            borderRadius="12px"
            border="1.5px solid #fff"
          >
            VIEW MORE
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Earnings;
