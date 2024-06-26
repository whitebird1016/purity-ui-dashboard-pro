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

import {
    Box,
    Button,
    Flex, Image, Text,
    useColorModeValue
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const MartinaBirthday = ({title, image}) => {
    const bgButton = useColorModeValue(
      "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      "gray.800"
    );
  return (
    <Card maxH={{ md: "130px", lg: "100%" }}>
                <CardBody>
                  <Flex>
                    <Box
                      w={{ sm: "65px", lg: "100px", xl: "170px" }}
                      h={{ sm: "65px", lg: "100px", xl: "170px" }}
                      me="36px"
                    >
                      <Image src={image} w="100%" h="100%" />
                    </Box>
                  </Flex>
                  <Flex direction="column" justify="center" align="flex-start">
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color="gray.500"
                      fontSize={{ sm: "xs", lg: "md" }}
                      mb={{ sm: "10px", lg: "22px" }}
                    >
                      {title}
                    </Text>
                    <Button
                      bg={bgButton}
                      color="white"
                      fontSize="10px"
                      h={{ sm: "32px" }}
                      variant="no-hover"
                      p={{ sm: "0px 32px", lg: "6px 22px" }}
                    >
                      SEND MESSAGE
                    </Button>
                  </Flex>
                </CardBody>
              </Card>
  )
}

export default MartinaBirthday