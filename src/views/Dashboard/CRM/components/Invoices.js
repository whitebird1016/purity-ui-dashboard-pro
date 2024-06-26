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

import { Button, Flex, Icon, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Invoices = ({ name, invoicesData }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconTeal = useColorModeValue("teal.300", "teal.300");

  return (
    <Card>
      <CardHeader>
        <Text fontSize="lg" text={textColor} fontWeight="bold">
          {name}
        </Text>
      </CardHeader>
      <CardBody w="100%" pt="28px">
        <Stack direction="column" spacing="24px" w="100%">
          {invoicesData.map((invoice) => {
            return (
              <Flex align="center" w="100%">
                <Flex align="center">
                  <IconBox
                    as="box"
                    h={"40px"}
                    w={"40px"}
                    bg={iconTeal}
                    me="18px"
                  >
                    {invoice.icon}
                  </IconBox>
                  <Flex direction="column">
                    <Text fontSize="sm" fontWeight="bold" color={textColor}>
                      {invoice.name}
                    </Text>
                    {invoice.description}
                  </Flex>
                </Flex>
                <Spacer />
                <Button variant="transparent-with-icon" px="0px">
                  <Icon
                    as={RiArrowDropRightLine}
                    color="gray.400"
                    w="30px"
                    h="30px"
                    cursor="pointer"
                    transition="all .25s ease"
                    _hover={{ transform: "translateX(25%)" }}
                  />
                </Button>
              </Flex>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Invoices;
