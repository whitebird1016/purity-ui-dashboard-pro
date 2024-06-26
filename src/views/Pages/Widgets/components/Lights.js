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
import { Flex, Icon, Switch, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

const Lights = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card>
      <CardHeader mb="22px">
        <Flex justify="space-between" align="center" w="100%">
          <Text fontSize="xs" color="gray.400" fontWeight="bold">
            {toggleSwitch ? "ON" : "OFF"}
          </Text>
          <Switch
            colorScheme="teal"
            onChange={() => setToggleSwitch(!toggleSwitch)}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column">
          <Icon
            as={toggleSwitch ? FaLightbulb : FaRegLightbulb}
            w="52px"
            h="52px"
            color="gray.400"
            mb="16px"
          />
          <Text fontSize="md" color={textColor} fontWeight="bold">
            Lights
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Lights;
