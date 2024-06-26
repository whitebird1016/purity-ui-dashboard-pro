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
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React, { useState } from "react";

const Pricing = () => {
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
    <Card>
      <CardHeader mb="32px">
        <Text fontSize="lg" color={textColor} fontWeight="bold">
          Pricing
        </Text>
      </CardHeader>
      <CardBody>
        <Stack direction="column" spacing="20px" w="100%">
          <Stack direction="row" spacing="24px">
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Price
              </FormLabel>
              <Input placeholder="eg. $99.99" fontSize="xs" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                Currency
              </FormLabel>
              <Select fontSize="xs" placeholder="USD" color="gray.400">
                <option>EUR</option>
                <option>CNY</option>
                <option>RON</option>
                <option>GBP</option>
                <option>INR</option>
                <option>CZH</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                SKU
              </FormLabel>
              <Input placeholder="71283476591" fontSize="xs" />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="xs" mb="10px">
              Tags
            </FormLabel>
            <Flex
              direction="row"
              p="12px"
              wrap="wrap"
              border="1px solid lightgray"
              borderRadius="8px"
              _focus={{ borderColor: "teal.300" }}
              minH="40px"
              cursor="text"
            >
              {skills.map((skill, index) => {
                return (
                  <Tag
                    fontSize="xs"
                    h="25px"
                    mb="6px"
                    me="6px"
                    key={skill.id}
                    borderRadius="12px"
                    variant="solid"
                    bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                  >
                    <TagLabel w="100%">{skill.name}</TagLabel>
                    <TagCloseButton
                      justifySelf="flex-end"
                      onClick={() =>
                        setSkills([
                          ...skills.filter(
                            (element) => element.id !== skill.id
                          ),
                        ])
                      }
                    />
                  </Tag>
                );
              })}
              <Input
                border="none"
                _focus="none"
                p="0px"
                onKeyDown={(e) => keyPress(e)}
                fontSize="xs"
              />
            </Flex>
          </FormControl>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Pricing;
