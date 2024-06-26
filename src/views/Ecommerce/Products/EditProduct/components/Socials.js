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
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";

const Socials = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card>
      <CardHeader mb="32px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Socials
        </Text>
      </CardHeader>
      <CardBody>
        <Stack direction="column" spacing="20px" w="100%">
          <FormControl>
            <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
              Shopify Handle
            </FormLabel>
            <Input placeholder="@Purity" fontSize="xs" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
              Facebook Account
            </FormLabel>
            <Input placeholder="https://" fontSize="xs" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
              Instagram Account
            </FormLabel>
            <Input placeholder="https://" fontSize="xs" />
          </FormControl>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Socials;
