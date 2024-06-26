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
  Avatar,
  Flex,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import React, { useState } from "react";
import { Element } from "react-scroll";

const Header = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  const [toggle, setToggle] = useState(false);
  return (
    <Card
      w={{ sm: "100%", lg: "70%" }}
      alignSelf={{ lg: "flex-end" }}
      justifySelf={{ lg: "flex-end" }}
    >
      <Element id="profile" name="profile">
        <CardBody>
          <Flex
            direction={{ sm: "column", md: "row" }}
            justify="space-between"
            align="center"
            w="100%"
          >
            <Flex align="center">
              <Avatar
                src={avatar4}
                w="80px"
                h="80px"
                me="22px"
                borderRadius="15px"
              />
              <Flex direction="column">
                <Text color={textColor} fontWeight="bold" fontSize="lg">
                  Esthera Jackson
                </Text>
                <Text color="gray.400" fontWeight="normal" fontSize="sm">
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              align="center"
              alignSelf={{ sm: "flex-start", lg: null }}
              mt={{ sm: "16px", lg: null }}
              ms={{ sm: "6px", lg: null }}
            >
              <Text
                color={textColor}
                fontWeight="normal"
                me="14px"
                fontSize="sm"
              >
                Switch to {toggle ? "invisible" : "visible"}
              </Text>
              <Switch colorScheme="teal" onChange={() => setToggle(!toggle)} />
            </Flex>
          </Flex>
        </CardBody>
      </Element>
    </Card>
  );
};

export default Header;
