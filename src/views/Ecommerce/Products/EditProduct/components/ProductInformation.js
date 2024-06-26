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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Custom components
import Editor from "components/Editor/Editor";
import React, { useState } from "react";

const ProductInformation = () => {
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

  return (
    <Card>
      <CardHeader mb="22px">
        <Text color={textColor} fontSize="lg" fontWeight="bold">
          Product Information
        </Text>
      </CardHeader>
      <CardBody>
        <Stack direction="column" spacing="20px" w="100%">
          <Stack direction={{ sm: "column", md: "row" }} spacing="30px">
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Product Name
              </FormLabel>
              <Input placeholder="eg. Modern Luxury Sofa" fontSize="xs" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Weight
              </FormLabel>
              <Input placeholder="eg. 42" fontSize="xs" />
            </FormControl>
          </Stack>
          <Stack direction={{ sm: "column", lg: "row" }} spacing="30px">
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Description
              </FormLabel>
              <Editor />
            </FormControl>
            <Stack direction="column" spacing="20px" w="100%">
              <FormControl>
                <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                  Category
                </FormLabel>
                <Select fontSize="xs" placeholder="Furniture" color="gray.400">
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Real Estate</option>
                  <option>Others</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                  Color
                </FormLabel>
                <Select fontSize="xs" placeholder="Green" color="gray.400">
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Pink</option>
                  <option>Orange</option>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          <Stack direction={{ sm: "column", md: "row" }} spacing="30px">
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Collection
              </FormLabel>
              <Input placeholder="eg. Summer" fontSize="xs" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Quantity
              </FormLabel>
              <NumberInput
                defaultValue={1}
                min={1}
                max={20}
                color="gray.400"
                fontSize="xs"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductInformation;
