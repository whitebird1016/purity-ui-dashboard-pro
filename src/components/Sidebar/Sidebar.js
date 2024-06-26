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

/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
// chakra imports
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { CreativeTimLogo } from "components/Icons/Icons";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
  renderTrackRTL,
  renderView,
  renderViewRTL,
} from "components/Scrollbar/Scrollbar";
import { HSeparator } from "components/Separator/Separator";
import { SidebarContext } from "contexts/SidebarContext";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaCircle } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SidebarHelp from "./SidebarHelp";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const { sidebarWidth, setSidebarWidth, toggleSidebar } = React.useContext(
    SidebarContext
  );
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { sidebarVariant } = props;
    // Chakra Color Mode
    let activeBg = useColorModeValue("teal.300", "teal.300");
    let activeAccordionBg = useColorModeValue("white", "gray.700");
    let inactiveBg = useColorModeValue("white", "gray.700");
    let inactiveColorIcon = useColorModeValue("teal.300", "teal.300");
    let activeColorIcon = useColorModeValue("white", "white");
    let activeColor = useColorModeValue("gray.700", "white");
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    let sidebarActiveShadow = "0px 7px 11px rgba(0, 0, 0, 0.04)";
    // Here are all the props that may change depending on sidebar's state.(Opaque or transparent)
    if (sidebarVariant === "opaque") {
      activeBg = useColorModeValue("teal.300", "teal.300");
      inactiveBg = useColorModeValue("gray.100", "gray.600");
      activeColor = useColorModeValue("gray.700", "white");
      inactiveColor = useColorModeValue("gray.400", "gray.400");
      sidebarActiveShadow = "none";
    }
    return routes.map((prop, index) => {
      if (prop.category) {
        return (
          <>
            <Text
              fontSize={sidebarWidth === 275 ? "md" : "xs"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              key={index}
            >
              {prop.name}
            </Text>
            {createLinks(prop.items)}
          </>
        );
      }
      if (prop.collapse) {
        return (
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                display="flex"
                align="center"
                justify="center"
                boxShadow={
                  activeRoute(prop.path) && prop.icon
                    ? sidebarActiveShadow
                    : null
                }
                _hover={{
                  boxShadow:
                    activeRoute(prop.path) && prop.icon
                      ? sidebarActiveShadow
                      : null,
                }}
                _focus={{
                  boxShadow: "none",
                }}
                borderRadius="15px"
                w={sidebarWidth === 275 ? "100%" : "77%"}
                px={prop.icon ? null : "0px"}
                py={prop.icon ? "12px" : null}
                bg={
                  activeRoute(prop.path) && prop.icon
                    ? activeAccordionBg
                    : "transparent"
                }
              >
                {activeRoute(prop.path) ? (
                  <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    transition={variantChange}
                    mx={{
                      xl: "auto",
                    }}
                    px="0px"
                    borderRadius="15px"
                    w="100%"
                    _hover="none"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                      border: "none",
                    }}
                    _focus={{
                      transform: "none",
                      borderColor: "transparent",
                      border: "none",
                    }}
                  >
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={activeBg}
                          color={activeColorIcon}
                          h="30px"
                          w="30px"
                          me="12px"
                          transition={variantChange}
                        >
                          {prop.icon}
                        </IconBox>
                        <Text
                          color={activeColor}
                          my="auto"
                          fontSize="sm"
                          display={sidebarWidth === 275 ? "block" : "none"}
                        >
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack
                        spacing={sidebarWidth === 275 ? "22px" : "0px"}
                        ps={sidebarWidth === 275 ? "10px" : "0px"}
                        ms={sidebarWidth === 275 ? "0px" : "8px"}
                      >
                        <Icon
                          as={FaCircle}
                          w="10px"
                          color="teal.300"
                          display={sidebarWidth === 275 ? "block" : "none"}
                        />
                        <Text color={activeColor} my="auto" fontSize="sm">
                          {sidebarWidth === 275 ? prop.name : prop.name[0]}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                ) : (
                  <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mx={{
                      xl: "auto",
                    }}
                    px="0px"
                    borderRadius="15px"
                    w="100%"
                    _hover="none"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      borderColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={inactiveBg}
                          color={inactiveColorIcon}
                          h="30px"
                          w="30px"
                          me="12px"
                          transition={variantChange}
                          boxShadow={sidebarActiveShadow}
                          _hover={{ boxShadow: sidebarActiveShadow }}
                        >
                          {prop.icon}
                        </IconBox>
                        <Text
                          color={inactiveColor}
                          my="auto"
                          fontSize="sm"
                          display={sidebarWidth === 275 ? "block" : "none"}
                        >
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack
                        spacing={sidebarWidth === 275 ? "26px" : "0px"}
                        ps={sidebarWidth === 275 ? "10px" : "0px"}
                        ms={sidebarWidth === 275 ? "0px" : "8px"}
                      >
                        <Icon
                          as={FaCircle}
                          w="6px"
                          color="teal.300"
                          display={sidebarWidth === 275 ? "block" : "none"}
                        />
                        <Text
                          color={inactiveColor}
                          my="auto"
                          fontSize="md"
                          fontWeight="normal"
                        >
                          {sidebarWidth === 275 ? prop.name : prop.name[0]}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                )}
                <AccordionIcon
                  color="gray.400"
                  display={
                    prop.icon
                      ? sidebarWidth === 275
                        ? "block"
                        : "none"
                      : "block"
                  }
                  transform={
                    prop.icon
                      ? null
                      : sidebarWidth === 275
                      ? null
                      : "translateX(-70%)"
                  }
                />
              </AccordionButton>
              <AccordionPanel
                pe={prop.icon ? null : "0px"}
                pb="8px"
                ps={prop.icon ? null : sidebarWidth === 275 ? null : "8px"}
              >
                <List>
                  {
                    prop.icon
                      ? createLinks(prop.items) // for bullet accordion links
                      : createAccordionLinks(prop.items) // for non-bullet accordion links
                  }
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink to={prop.layout + prop.path}>
            {prop.icon ? (
              <Box>
                <HStack spacing="14px" py="15px" px="15px">
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="30px"
                    w="30px"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={activeRoute(prop.name) ? "bold" : "normal"}
                    fontSize="sm"
                  >
                    {prop.name}
                  </Text>
                </HStack>
              </Box>
            ) : (
              <ListItem>
                <HStack
                  spacing={
                    sidebarWidth === 275
                      ? activeRoute(prop.path.toLowerCase())
                        ? "22px"
                        : "26px"
                      : "8px"
                  }
                  py="5px"
                  px={sidebarWidth === 275 ? "10px" : "0px"}
                >
                  <Icon
                    as={FaCircle}
                    w={activeRoute(prop.path.toLowerCase()) ? "10px" : "6px"}
                    color="teal.300"
                    display={sidebarWidth === 275 ? "block" : "none"}
                  />
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(prop.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {sidebarWidth === 275 ? prop.name : prop.name[0]}
                  </Text>
                </HStack>
              </ListItem>
            )}
          </NavLink>
        );
      }
    });
  };

  const createAccordionLinks = (routes) => {
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    let activeColor = useColorModeValue("gray.700", "white");
    return routes.map((prop, index) => {
      return (
        <NavLink to={prop.layout + prop.path}>
          <ListItem
            pt="5px"
            ms={sidebarWidth === 275 ? "26px" : "0px"}
            key={index}
          >
            <Text
              mb="4px"
              color={
                activeRoute(prop.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontWeight={
                activeRoute(prop.path.toLowerCase()) ? "bold" : "normal"
              }
              fontSize="sm"
            >
              {sidebarWidth === 275 ? prop.name : prop.name[0]}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  const { logoText, routes, sidebarVariant } = props;
  let isWindows = navigator.platform.startsWith("Win");
  let links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";
  if (sidebarVariant === "opaque") {
    sidebarBg = useColorModeValue("white", "gray.700");
    sidebarRadius = "16px";
    sidebarMargins = "16px 0px 16px 16px";
  }
  let brand = (
    <Box pt={"25px"} mb="12px">
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo
          w={sidebarWidth === 275 ? "32px" : "40px"}
          h={sidebarWidth === 275 ? "32px" : "40px"}
          me="10px"
        />
        <Text
          fontSize="xs"
          mt="3px"
          display={sidebarWidth === 275 ? "block" : "none"}
        >
          {logoText}
        </Text>
      </Link>
      <HSeparator />
    </Box>
  );

  let sidebarContent = (
    <Box>
      <Box mb="20px">{brand}</Box>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
      <SidebarHelp sidebarWidth={sidebarWidth}/>
    </Box>
  );

  // SIDEBAR
  return (
    <Box
      ref={mainPanel}
      onMouseEnter={
        toggleSidebar
          ? () => setSidebarWidth(sidebarWidth === 120 ? 275 : 120)
          : null
      }
      onMouseLeave={
        toggleSidebar
          ? () => setSidebarWidth(sidebarWidth === 275 ? 120 : 275)
          : null
      }
    >
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w={`${sidebarWidth}px`}
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          borderRadius={sidebarRadius}
        >
          {isWindows ? (
            <Scrollbars
              autoHide
              renderTrackVertical={
                document.documentElement.dir === "rtl"
                  ? renderTrackRTL
                  : renderTrack
              }
              renderThumbVertical={useColorModeValue(
                renderThumbLight,
                renderThumbDark
              )}
              renderView={
                document.documentElement.dir === "rtl"
                  ? renderViewRTL
                  : renderView
              }
            >
              {sidebarContent}
            </Scrollbars>
          ) : (
            <Box id="sidebarScrollRemove" overflowY="scroll" height="100vh">
              {sidebarContent}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    const { sidebarVariant } = props;
    // Chakra Color Mode
    let activeBg = useColorModeValue("teal.300", "teal.300");
    let activeAccordionBg = useColorModeValue("white", "gray.700");
    let inactiveBg = useColorModeValue("white", "gray.700");
    let inactiveColorIcon = useColorModeValue("teal.300", "teal.300");
    let activeColorIcon = useColorModeValue("white", "white");
    let activeColor = useColorModeValue("gray.700", "white");
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    // Here are all the props that may change depending on sidebar's state.(Opaque or transparent)
    if (sidebarVariant === "opaque") {
      inactiveBg = useColorModeValue("gray.100", "gray.600");
      activeColor = useColorModeValue("gray.700", "white");
      inactiveColor = useColorModeValue("gray.400", "gray.400");
    }
    return routes.map((prop, index) => {
      if (prop.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              key={index}
            >
              {prop.name}
            </Text>
            {createLinks(prop.items)}
          </>
        );
      }
      if (prop.collapse) {
        return (
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                display="flex"
                align="center"
                justify="center"
                key={index}
                borderRadius="15px"
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
                px={prop.icon ? null : "0px"}
                py={prop.icon ? "12px" : null}
                bg={
                  activeRoute(prop.path) && prop.icon
                    ? activeAccordionBg
                    : "transparent"
                }
              >
                {activeRoute(prop.path) ? (
                  <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    transition={variantChange}
                    mx={{
                      xl: "auto",
                    }}
                    px="0px"
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                  >
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={activeBg}
                          color={activeColorIcon}
                          h="30px"
                          w="30px"
                          me="12px"
                          transition={variantChange}
                        >
                          {prop.icon}
                        </IconBox>
                        <Text
                          color={activeColor}
                          my="auto"
                          fontSize="sm"
                          display={"block"}
                        >
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack spacing={"22px"} ps="10px" ms="0px">
                        <Icon as={FaCircle} w="10px" color="teal.300" />
                        <Text color={activeColor} my="auto" fontSize="sm">
                          {prop.name}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                ) : (
                  <Button
                    boxSize="initial"
                    justifyContent="flex-start"
                    alignItems="center"
                    bg="transparent"
                    mx={{
                      xl: "auto",
                    }}
                    px="0px"
                    borderRadius="15px"
                    _hover="none"
                    w="100%"
                    _active={{
                      bg: "inherit",
                      transform: "none",
                      borderColor: "transparent",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                  >
                    {prop.icon ? (
                      <Flex>
                        <IconBox
                          bg={inactiveBg}
                          color={inactiveColorIcon}
                          h="30px"
                          w="30px"
                          me="12px"
                          transition={variantChange}
                        >
                          {prop.icon}
                        </IconBox>
                        <Text color={inactiveColor} my="auto" fontSize="sm">
                          {prop.name}
                        </Text>
                      </Flex>
                    ) : (
                      <HStack spacing={"26px"} ps={"10px"} ms={"0px"}>
                        <Icon as={FaCircle} w="6px" color="teal.300" />
                        <Text
                          color={inactiveColor}
                          my="auto"
                          fontSize="md"
                          fontWeight="normal"
                        >
                          {prop.name}
                        </Text>
                      </HStack>
                    )}
                  </Button>
                )}
                <AccordionIcon color="gray.400" />
              </AccordionButton>
              <AccordionPanel pe={prop.icon ? null : "0px"} pb="8px">
                <List>
                  {
                    prop.icon
                      ? createLinks(prop.items) // for bullet accordion links
                      : createAccordionLinks(prop.items) // for non-bullet accordion links
                  }
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NavLink to={prop.layout + prop.path}>
            {prop.icon ? (
              <Box>
                <HStack spacing="14px" py="15px" px="15px">
                  <IconBox
                    bg="teal.300"
                    color="white"
                    h="30px"
                    w="30px"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={activeRoute(prop.name) ? "bold" : "normal"}
                    fontSize="sm"
                  >
                    {prop.name}
                  </Text>
                </HStack>
              </Box>
            ) : (
              <ListItem>
                <HStack spacing="22px" py="5px" px="10px">
                  <Icon
                    as={FaCircle}
                    w={activeRoute(prop.path.toLowerCase()) ? "10px" : "6px"}
                    color="teal.300"
                  />
                  <Text
                    color={
                      activeRoute(prop.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(prop.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {prop.name}
                  </Text>
                </HStack>
              </ListItem>
            )}
          </NavLink>
        );
      }
    });
  };

  const createAccordionLinks = (routes) => {
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    let activeColor = useColorModeValue("gray.700", "white");
    return routes.map((prop, index) => {
      return (
        <NavLink to={prop.layout + prop.path}>
          <ListItem pt="5px" ms="26px" key={index}>
            <Text
              color={
                activeRoute(prop.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontWeight={
                activeRoute(prop.path.toLowerCase()) ? "bold" : "normal"
              }
              fontSize="sm"
            >
              {prop.name}
            </Text>
          </ListItem>
        </NavLink>
      );
    });
  };
  const { logoText, routes } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let hamburgerColor = useColorModeValue("gray.500", "gray.200");
  if (props.secondary === true) {
    hamburgerColor = "white";
  }
  var brand = (
    <Box pt={"35px"} mb="8px">
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="xs" mt="3px">
          {logoText}
        </Text>
      </Link>
      <HSeparator />
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Box ref={mainPanel} display={props.display}>
      <Box display={{ sm: "block", xl: "none" }}>
        <>
          <HamburgerIcon
            color={hamburgerColor}
            w="18px"
            h="18px"
            me="16px"
            ref={btnRef}
            colorScheme="teal"
            cursor="pointer"
            onClick={onOpen}
          />
          <Drawer
            placement={
              document.documentElement.dir === "rtl" ? "right" : "left"
            }
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              w="250px"
              maxW="250px"
              ms={{
                sm: "16px",
              }}
              my={{
                sm: "16px",
              }}
              borderRadius="16px"
            >
              <DrawerCloseButton
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
              />
              <DrawerBody maxW="250px" px="1rem">
                <Box maxW="100%" h="100vh">
                  <Box mb="20px">{brand}</Box>
                  <Stack direction="column" mb="40px">
                    <Box>{links}</Box>
                  </Stack>
                  <SidebarHelp />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Box>
  );
}

export default Sidebar;
