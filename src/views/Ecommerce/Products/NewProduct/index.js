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
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
// Custom components
import Editor from "components/Editor/Editor";
import React, { useReducer, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCircleFill } from "react-icons/bs";
import Header from "views/Pages/Profile/Overview/components/Header";

const reducer = (state, action) => {
  if (action.type === "SWITCH_ACTIVE") {
    if (action.payload === "overview") {
      const newState = {
        overview: true,
        teams: false,
        projects: false,
      };
      return newState;
    } else if (action.payload === "teams") {
      const newState = {
        overview: false,
        teams: true,
        projects: false,
      };
      return newState;
    } else if (action.payload === "projects") {
      const newState = {
        overview: false,
        teams: false,
        projects: true,
      };
      return newState;
    }
  }
  return state;
};

function NewProduct() {
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

  const [activeBullets, setActiveBullets] = useState({
    productInfo: true,
    media: false,
    socials: false,
    pricing: false,
  });

  const productInfoTab = useRef();
  const mediaTab = useRef();
  const socialsTab = useRef();
  const pricingTab = useRef();

  const { getRootProps, getInputProps } = useDropzone();

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

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgPrevButton = useColorModeValue("gray.100", "gray.100");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction="column">
      <Header
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
      />
      <Tabs variant="unstyled" mt="24px" alignSelf="center">
        <TabList display="flex" align="center">
          <Tab
            ref={productInfoTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: false,
                socials: false,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.media ? textColor : "gray.200",
                left: { sm: "12px", md: "52px" },
                top: {
                  sm: activeBullets.productInfo ? "6px" : "4px",
                  md: null,
                },
                position: "absolute",
                bottom: activeBullets.productInfo ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.productInfo ? textColor : "gray.300"}
                w={activeBullets.productInfo ? "16px" : "12px"}
                h={activeBullets.productInfo ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.productInfo ? { textColor } : "gray.300"}
                fontWeight={activeBullets.productInfo ? "bold" : "normal"}
                display={{ sm: "none", md: "block" }}
              >
                1. Product Info
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={mediaTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: false,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.socials ? textColor : "gray.200",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.media ? "6px" : "4px", md: null },
                position: "absolute",
                bottom: activeBullets.media ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.media ? textColor : "gray.300"}
                w={activeBullets.media ? "16px" : "12px"}
                h={activeBullets.media ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.media ? { textColor } : "gray.300"}
                fontWeight={activeBullets.media ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                2. Media
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={socialsTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: "80px", md: "200px" },
                height: "3px",
                bg: activeBullets.pricing ? textColor : "gray.200",
                left: { sm: "12px", md: "32px" },
                top: { sm: activeBullets.socials ? "6px" : "4px", md: null },
                position: "absolute",
                bottom: activeBullets.socials ? "40px" : "38px",
                zIndex: -1,
                transition: "all .3s ease",
              }}
            >
              <Icon
                as={BsCircleFill}
                color={activeBullets.socials ? textColor : "gray.300"}
                w={activeBullets.socials ? "16px" : "12px"}
                h={activeBullets.socials ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.socials ? { textColor } : "gray.300"}
                fontWeight={activeBullets.socials ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                3. Socials
              </Text>
            </Flex>
          </Tab>
          <Tab
            ref={pricingTab}
            _focus="none"
            w={{ sm: "80px", md: "200px" }}
            onClick={() =>
              setActiveBullets({
                productInfo: true,
                media: true,
                socials: true,
                pricing: true,
              })
            }
          >
            <Flex direction="column" justify="center" align="center">
              <Icon
                as={BsCircleFill}
                color={activeBullets.pricing ? textColor : "gray.300"}
                w={activeBullets.pricing ? "16px" : "12px"}
                h={activeBullets.pricing ? "16px" : "12px"}
                mb="8px"
              />
              <Text
                color={activeBullets.pricing ? { textColor } : "gray.300"}
                fontWeight={activeBullets.pricing ? "bold" : "normal"}
                transition="all .3s ease"
                _hover={{ color: textColor }}
                display={{ sm: "none", md: "block" }}
              >
                4. Pricing
              </Text>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels mt="24px" maxW={{ md: "90%", lg: "100%" }} mx="auto">
          <TabPanel>
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
                      <Input
                        borderRadius="15px"
                        placeholder="eg. Modern Luxury Sofa"
                        fontSize="xs"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                        Weight
                      </FormLabel>
                      <Input
                        borderRadius="15px"
                        placeholder="eg. 42"
                        fontSize="xs"
                      />
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
                        <Select
                          fontSize="xs"
                          placeholder="Furniture"
                          color="gray.400"
                          borderRadius="15px"
                        >
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
                        <Select
                          fontSize="xs"
                          placeholder="Green"
                          color="gray.400"
                          borderRadius="15px"
                        >
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
                      <Input
                        borderRadius="15px"
                        placeholder="eg. Summer"
                        fontSize="xs"
                      />
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
                      >
                        <NumberInputField fontSize="xs" borderRadius="15px" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Stack>
                  <Button
                    variant="no-hover"
                    bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                    alignSelf="flex-end"
                    mt="24px"
                    w="100px"
                    h="35px"
                    onClick={() => mediaTab.current.click()}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      NEXT
                    </Text>
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb="40px">
                <Text
                  color={textColor}
                  fontSize="xl"
                  fontWeight="bold"
                  mb="3px"
                >
                  Media
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction="column" w="100%">
                  <Text
                    color={textColor}
                    fontSize="sm"
                    fontWeight="bold"
                    mb="12px"
                  >
                    Product images
                  </Text>
                  <Flex
                    align="center"
                    justify="center"
                    border="1px dashed #E2E8F0"
                    borderRadius="15px"
                    w="100%"
                    minH="130px"
                    cursor="pointer"
                    {...getRootProps({ className: "dropzone" })}
                  >
                    <Input {...getInputProps()} />
                    <Button variant="no-hover">
                      <Text color="gray.400" fontWeight="normal">
                        Drop files here to upload
                      </Text>
                    </Button>
                  </Flex>
                  <Flex justify="space-between">
                    <Button
                      variant="no-hover"
                      bg={bgPrevButton}
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                      onClick={() => productInfoTab.current.click()}
                    >
                      <Text fontSize="xs" color="gray.700" fontWeight="bold">
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant="no-hover"
                      bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                      onClick={() => socialsTab.current.click()}
                    >
                      <Text fontSize="xs" color="#fff" fontWeight="bold">
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <CardHeader mb="32px">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Socials
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction="column" w="100%">
                  <Stack direction="column" spacing="20px" w="100%">
                    <FormControl>
                      <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                        Shopify Handle
                      </FormLabel>
                      <Input
                        borderRadius="15px"
                        placeholder="@Purity"
                        fontSize="xs"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                        Facebook Account
                      </FormLabel>
                      <Input
                        borderRadius="15px"
                        placeholder="https://"
                        fontSize="xs"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                        Instagram Account
                      </FormLabel>
                      <Input
                        borderRadius="15px"
                        placeholder="https://"
                        fontSize="xs"
                      />
                    </FormControl>
                  </Stack>
                  <Flex justify="space-between">
                    <Button
                      variant="no-hover"
                      bg={bgPrevButton}
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                      onClick={() => mediaTab.current.click()}
                    >
                      <Text fontSize="xs" color="gray.700" fontWeight="bold">
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant="no-hover"
                      bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                      onClick={() => pricingTab.current.click()}
                    >
                      <Text fontSize="xs" color="#fff" fontWeight="bold">
                        NEXT
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
          <TabPanel maxW="800px">
            <Card>
              <CardHeader mb="32px">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Pricing
                </Text>
              </CardHeader>
              <CardBody>
                <Flex direction="column" w="100%">
                  <Stack direction="column" spacing="20px" w="100%">
                    <Stack direction="row" spacing="24px">
                      <FormControl>
                        <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                          Price
                        </FormLabel>
                        <Input
                          borderRadius="15px"
                          placeholder="eg. $99.99"
                          fontSize="xs"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel fontSize="xs" fontWeight="bold" mb="10px">
                          Currency
                        </FormLabel>
                        <Select
                          fontSize="xs"
                          placeholder="USD"
                          color="gray.400"
                          borderRadius="15px"
                        >
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
                        <Input
                          borderRadius="15px"
                          placeholder="71283476591"
                          fontSize="xs"
                        />
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
                        borderRadius="15px"
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
                              key={index}
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
                          borderRadius="15px"
                          border="none"
                          _focus="none"
                          p="0px"
                          onKeyDown={(e) => keyPress(e)}
                          fontSize="xs"
                        />
                      </Flex>
                    </FormControl>
                  </Stack>
                  <Flex justify="space-between">
                    <Button
                      variant="no-hover"
                      bg={bgPrevButton}
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                      onClick={() => socialsTab.current.click()}
                    >
                      <Text fontSize="xs" color="gray.700" fontWeight="bold">
                        PREV
                      </Text>
                    </Button>
                    <Button
                      variant="no-hover"
                      bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
                      alignSelf="flex-end"
                      mt="24px"
                      w="100px"
                      h="35px"
                    >
                      <Text fontSize="xs" color="#fff" fontWeight="bold">
                        SEND
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default NewProduct;
