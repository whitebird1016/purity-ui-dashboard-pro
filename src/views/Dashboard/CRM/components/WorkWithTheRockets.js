// Chakra imports
import {
    Box,
    Button,
    Flex,
    Icon,
    Portal,
    Spacer,
    Text,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "components/Card/Card.js";
  import CardBody from "components/Card/CardBody.js";
  import React from "react";
  // react icons
  import { BsArrowRight } from "react-icons/bs";
  
  const WorkWithTheRockets = ({ title, description, backgroundImage }) => {
    const overlayRef = React.useRef();
    return (
        <Card w={{ sm: "100%" }} minH={{ lg: "300px" }}>
        <CardBody
          backgroundImage={backgroundImage}
          bgPosition="center"
          bgRepeat="no-repeat"
          w="100%"
          h="100%"
          minH={{ sm: "200px", lg: "100%" }}
          bgSize="cover"
          position="relative"
          borderRadius="15px"
        >
          <Box
            bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
            w="100%"
            position="absolute"
            h="100%"
            borderRadius="inherit"
            ref={overlayRef}
          ></Box>
          <Portal containerRef={overlayRef}>
            <Flex
              flexDirection="column"
              color="white"
              p="24px 20px 4px 20px"
              lineHeight="1.6"
              h={{ md: "190px", lg: "240px" }}
            >
              <Text fontSize="lg" fontWeight="bold" pb="6px">
                {title}
              </Text>
              <Text fontSize="sm" fontWeight="normal" w={{ lg: "92%" }}>
                {description}
              </Text>
              <Spacer />
              <Flex
                align="center"
                mt={{ sm: "20px", lg: "40px", xl: "80px" }}
              >
                <Button
                  ps="0px"
                  pb={{ xl: "22px" }}
                  variant="no-hover"
                  bg="transparent"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    _hover={{ me: "4px" }}
                    transition="all .5s ease"
                  >
                    Read more
                  </Text>
                  <Icon
                    as={BsArrowRight}
                    w="20px"
                    h="20px"
                    fontSize="xl"
                    transition="all .5s ease"
                    mx="4px"
                    cursor="pointer"
                    _hover={{ transform: "translateX(20%)" }}
                    pt="4px"
                  />
                </Button>
              </Flex>
            </Flex>
          </Portal>
        </CardBody>
      </Card>
    );
  };
  
  export default WorkWithTheRockets;