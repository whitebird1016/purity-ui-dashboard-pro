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
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const GeneralCard = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgSalaryCard = useColorModeValue("gray.50", "gray.600");

  return (
    <Card>
      <CardHeader mb="28px">
        <Flex>
          <Avatar
            src={avatar4}
            w="40px"
            h="40px"
            mr="15px"
            borderRadius="12px"
          />
          <Flex direction="column">
            <Text color={textColor} fontSize="md" fontWeight="bold">
              Esthera Jackson
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="normal">
              2h ago
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Flex direction="column" maxW="400px" mb="32px">
            <Text color={textColor} fontSize="lg" fontWeight="bold" mb="4px">
              I need a Ruby developer for my new website.
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="normal">
              The website was initially built in PHP, I need a professional ruby
              programmer to shift it.
            </Text>
          </Flex>
          <Flex
            justify="space-between"
            w="100%"
            bg={bgSalaryCard}
            borderRadius="12px"
            p="20px 25px"
          >
            <Text color="gray.400" fontSize="sm" fontWeight="normal">
              ${" "}
              <Text
                as="span"
                fontSize="2xl"
                color={textColor}
                fontWeight="bold"
              >
                3,000
              </Text>{" "}
              / month
            </Text>
            <Button
              variant="outline"
              fontSize="xs"
              w={{ sm: "75px", md: "125px", lg: "75px", xl: "125px" }}
              h="35px"
              colorScheme="black"
            >
              APPLY
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GeneralCard;
