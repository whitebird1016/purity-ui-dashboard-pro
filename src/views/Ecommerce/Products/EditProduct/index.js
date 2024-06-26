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
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import productImage1 from "assets/img/product-page-1.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Custom components
import Editor from "components/Editor/Editor";
import React, { useState } from "react";
import Pricing from "./components/Pricing";
import ProductImage from "./components/ProductImage";
import ProductInformation from "./components/ProductInformation";
import Socials from "./components/Socials";

function EditProduct() {
  const [skills, setSkills] = useState([
    {
      name: "chakra-ui",
      id: 1,
    },
    {
      name: "react",
      id: 2,
    },
    {
      name: "javascript",
      id: 3,
    },
  ]);

  const textColor = useColorModeValue("gray.700", "white");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      setSkills([
        ...skills,
        {
          name: e.target.value,
          id: skills.length === 0 ? 1 : skills[skills.length - 1].id + 1,
        },
      ]);
      e.target.value = "";
    }
  };

  return (
    <Flex direction="column" pt={{ sm: "125px", lg: "75px" }}>
      <Flex
        direction={{ sm: "column", lg: "row" }}
        justify="space-between"
        align={{ lg: "center" }}
        w="100%"
        mb={{ sm: "24px", lg: "55px" }}
      >
        <Flex direction="column">
          <Text
            color={textColor}
            fontSize={{ sm: "xl", md: "2xl" }}
            fontWeight="bold"
            mb="10px"
          >
            Make the changes below
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="normal"
            mb={{ sm: "16px", lg: "0px" }}
          >
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Text>
        </Flex>
        <Button
          variant="no-hover"
          bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          w={{ sm: "75px", lg: "100px" }}
          h="35px"
          me="12px"
          alignSelf={{ sm: "flex-start", lg: "auto" }}
        >
          <Text fontSize="xs" color="#fff" fontWeight="bold">
            SAVE
          </Text>
        </Button>
      </Flex>
      <Grid templateColumns={{ sm: "1fr", lg: "1fr 1.7fr" }} gap="24px">
        <Stack direction="column" spacing="24px">
          <ProductImage />
          <Socials />
        </Stack>
        <Stack direction="column" spacing="24px">
          <ProductInformation />
          <Pricing />
          <Card>
            <CardHeader>
              <Text color={textColor} fontSize="lg" fontWeight="bold" mb="22px">
                Product Images
              </Text>
            </CardHeader>
            <CardBody>
              <Flex
                align="center"
                justify="center"
                border="1px dashed #E2E8F0"
                borderRadius="15px"
                w="100%"
                minH="130px"
                cursor="pointer"
              >
                <Button variant="no-hover">
                  <Text color="gray.400" fontWeight="normal">
                    Drop files here to upload
                  </Text>
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default EditProduct;
