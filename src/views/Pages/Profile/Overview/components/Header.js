// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useReducer, useState} from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";


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

const Header = ({
  backgroundHeader,
  backgroundProfile,
  avatarImage,
  name,
  email,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");

  const [state, dispatch] = useReducer(reducer, {
    overview: true,
    teams: false,
    projects: false,
  });
  return (
    <Box
      mb={{ sm: "205px", md: "75px", xl: "70px" }}
      borderRadius="15px"
      px="0px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      align="center"
    >
      <Box
        bgImage={backgroundHeader}
        w="100%"
        h="300px"
        borderRadius="25px"
        bgPosition="50%"
        bgRepeat="no-repeat"
        position="relative"
        display="flex"
        justifyContent="center"
      >
        <Flex
          direction={{ sm: "column", md: "row" }}
          mx="1.5rem"
          maxH="330px"
          w={{ sm: "90%", xl: "95%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          position="absolute"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={borderProfileColor}
          bg={backgroundProfile}
          p="24px"
          borderRadius="20px"
          transform={{
            sm: "translateY(45%)",
            md: "translateY(110%)",
            lg: "translateY(160%)",
          }}
        >
          <Flex
            align="center"
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Avatar
              me={{ md: "22px" }}
              src={avatarImage}
              w="80px"
              h="80px"
              borderRadius="15px"
            />
            <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={textColor}
                fontWeight="bold"
                ms={{ sm: "8px", md: "0px" }}
              >
                {name}
              </Text>
              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={emailColor}
                fontWeight="semibold"
              >
                {email}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            w={{ sm: "100%", md: "50%", lg: "auto" }}
          >
            <Button
              p="0px"
              bg="transparent"
              _hover={{ bg: "none" }}
              variant="transparent-with-icon"
            >
              <Flex
                align="center"
                w={{ sm: "100%", lg: "135px" }}
                bg={state.overview ? "hsla(0,0%,100%,.7)" : null}
                boxShadow={
                  state.overview ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                }
                borderColor={state.overview ? "black" : null}
                transition="all .5s ease"
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                cursor="pointer"
                onClick={() =>
                  dispatch({ type: "SWITCH_ACTIVE", payload: "overview" })
                }
              >
                <Icon as={FaCube} me="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  OVERVIEW
                </Text>
              </Flex>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              _hover={{ bg: "none" }}
              variant="transparent-with-icon"
            >
              <Flex
                align="center"
                w={{ sm: "100%", lg: "135px" }}
                bg={state.teams ? "hsla(0,0%,100%,.7)" : null}
                boxShadow={
                  state.teams ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                }
                borderColor={state.teams ? "black" : null}
                transition="all .5s ease"
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                mx={{ lg: "1rem" }}
                cursor="pointer"
                onClick={() =>
                  dispatch({ type: "SWITCH_ACTIVE", payload: "teams" })
                }
              >
                <Icon as={IoDocumentsSharp} me="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  TEAMS
                </Text>
              </Flex>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              _hover={{ bg: "none" }}
              variant="transparent-with-icon"
            >
              <Flex
                align="center"
                w={{ sm: "100%", lg: "135px" }}
                bg={state.projects ? "hsla(0,0%,100%,.7)" : null}
                boxShadow={
                  state.projects ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                }
                borderColor={state.projects ? "black" : null}
                transition="all .5s ease"
                borderRadius="15px"
                justifyContent="center"
                py="10px"
                cursor="pointer"
                onClick={() =>
                  dispatch({ type: "SWITCH_ACTIVE", payload: "projects" })
                }
              >
                <Icon as={FaPenFancy} me="6px" />
                <Text fontSize="xs" color={textColor} fontWeight="bold">
                  PROJECTS
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
