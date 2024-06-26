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
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import productImage1 from "assets/img/product-page-1.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";

const ProductImage = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card>
      <CardHeader mb="42px">
        <Text color={textColor} fontSize="lg" fontWeight="bold">
          Product Image
        </Text>
      </CardHeader>
      <CardBody>
        <Flex direction="column" w="100%">
          <Box
            maxW={{ sm: "280px", md: "670px", lg: "600px" }}
            maxH={{ sm: "185px", md: "450px", lg: "400px" }}
            mb="24px"
          >
            <Image src={productImage1} w="100%" h="100%" />
          </Box>
          <Flex>
            <Button
              variant="no-hover"
              bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
              w={{ sm: "75px", md: "100px" }}
              h="35px"
              me="12px"
            >
              <Text fontSize="xs" color="#fff" fontWeight="bold">
                EDIT
              </Text>
            </Button>
            <Button
              variant="no-hover"
              bg="gray.100"
              w={{ sm: "75px", md: "100px" }}
              h="35px"
            >
              <Text fontSize="xs" color="gray.700" fontWeight="bold">
                REMOVE
              </Text>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductImage;
